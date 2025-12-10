import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const OR_API_KEY = process.env.OR_API_KEY;
const OR_MODEL = "gpt-4o-mini";

app.post("/api/summary", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OR_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "AI Resume Generator"
        },
        body: JSON.stringify({
          model: OR_MODEL,
          messages: [
            {
              role: "system",
              content:
                "You are an assistant that writes concise, ATS-friendly resume summaries for junior software developers."
            },
            { role: "user", content: prompt }
          ],
          max_tokens: 220,
          temperature: 0.7
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res
        .status(500)
        .json({ error: data.error?.message || "OpenRouter error" });
    }

    const summary =
      data.choices?.[0]?.message?.content?.trim() ||
      "AI did not return a summary.";

    res.json({ summary });
  } catch (err) {
    console.error("OpenRouter error:", err);
    res.status(500).json({ error: "AI request failed" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`AI proxy running on port ${PORT}`);
});
