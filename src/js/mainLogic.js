import html2pdf from "html2pdf.js";

// ---------- CORE FUNCTIONS (UNCHANGED LOGIC) ----------

function loadData() {
  const saved = localStorage.getItem("resumeData");
  if (!saved) return;
  const data = JSON.parse(saved);

  // Personal
  if (data["list-item-1"]?.personal) {
    document.querySelector('#list-item-1 input[placeholder*="First"]').value =
      data["list-item-1"].personal.firstName || "";
    document.querySelector('#list-item-1 input[placeholder*="Last"]').value =
      data["list-item-1"].personal.lastName || "";
    document.querySelector('#list-item-1 input[type="email"]').value =
      data["list-item-1"].personal.email || "";
    document.querySelector('#list-item-1 input[type="tel"]').value =
      data["list-item-1"].personal.phone || "";
    document.querySelector(
      '#list-item-1 input[placeholder*="1234 Main St"]'
    ).value = data["list-item-1"].personal.address || "";
    document.querySelector(
      '#list-item-1 input[placeholder*="Ahmedabad"]'
    ).value = data["list-item-1"].personal.city || "";
  }

  // Education
  if (data["list-item-2"]?.education) {
    const select = document.querySelector("#list-item-2 select");
    if (select) select.value = data["list-item-2"].education.level || "";
    document.querySelector(
      '#list-item-2 [placeholder*="Computer Science"]'
    ).value = data["list-item-2"].education.degree || "";
    document.querySelector(
      '#list-item-2 [placeholder*="GLS University"]'
    ).value = data["list-item-2"].education.university || "";
    document.querySelector('#list-item-2 [placeholder*="2025"]').value =
      data["list-item-2"].education.year || "";
    document.querySelector('#list-item-2 [placeholder*="8.2"]').value =
      data["list-item-2"].education.cgpa || "";
  }

  // Skills
  if (data["list-item-3"]?.skills) {
    document.querySelector("#list-item-3 textarea").value =
      data["list-item-3"].skills.technical || "";
    const softTextarea = document.querySelector(
      "#list-item-3 textarea:nth-of-type(2)"
    );
    if (softTextarea)
      softTextarea.value = data["list-item-3"].skills.soft || "";
  }

  // Experience
  if (data["list-item-4"]?.experience) {
    document.querySelector(
      '#list-item-4 input[placeholder*="Developer"]'
    ).value = data["list-item-4"].experience.title || "";
    document.querySelector(
      '#list-item-4 input[placeholder*="Company"]'
    ).value = data["list-item-4"].experience.company || "";
    document.querySelector("#list-item-4 textarea").value =
      data["list-item-4"].experience.desc || "";
  }

  // Projects
  if (data["list-item-5"]?.projects) {
    document.querySelector(
      '#list-item-5 input[placeholder*="Produce Hub"]'
    ).value = data["list-item-5"].projects.title || "";
    document.querySelector('#list-item-5 input[placeholder*="React"]').value =
      data["list-item-5"].projects.tech || "";
    document.querySelector("#list-item-5 textarea").value =
      data["list-item-5"].projects.desc || "";
  }

  // AI Summary
  if (data["list-item-6"]?.summary) {
    const aiSummary = document.getElementById("aiSummary");
    if (aiSummary) aiSummary.value = data["list-item-6"].summary;
  }
}

function saveData() {
  const resumeData = {};

  // Personal
  resumeData["list-item-1"] = {
    personal: {
      firstName:
        document.querySelector('#list-item-1 input[placeholder*="First"]')
          ?.value || "",
      lastName:
        document.querySelector('#list-item-1 input[placeholder*="Last"]')
          ?.value || "",
      email:
        document.querySelector('#list-item-1 input[type="email"]')?.value ||
        "",
      phone:
        document.querySelector('#list-item-1 input[type="tel"]')?.value || "",
      address:
        document.querySelector(
          '#list-item-1 input[placeholder*="1234 Main St"]'
        )?.value || "",
      city:
        document.querySelector(
          '#list-item-1 input[placeholder*="Ahmedabad"]'
        )?.value || "",
    },
  };

  // Education
  resumeData["list-item-2"] = {
    education: {
      level: document.querySelector("#list-item-2 select")?.value || "",
      degree:
        document.querySelector(
          '#list-item-2 [placeholder*="Computer Science"]'
        )?.value || "",
      university:
        document.querySelector(
          '#list-item-2 [placeholder*="GLS University"]'
        )?.value || "",
      year:
        document.querySelector('#list-item-2 [placeholder*="2025"]')?.value ||
        "",
      cgpa:
        document.querySelector('#list-item-2 [placeholder*="8.2"]')?.value ||
        "",
    },
  };

  // Skills
  resumeData["list-item-3"] = {
    skills: {
      technical:
        document.querySelector("#list-item-3 textarea")?.value || "",
      soft:
        document.querySelector(
          "#list-item-3 textarea:nth-of-type(2)"
        )?.value || "",
    },
  };

  // Experience
  resumeData["list-item-4"] = {
    experience: {
      title:
        document.querySelector(
          '#list-item-4 input[placeholder*="Developer"]'
        )?.value || "",
      company:
        document.querySelector(
          '#list-item-4 input[placeholder*="Company"]'
        )?.value || "",
      desc: document.querySelector("#list-item-4 textarea")?.value || "",
    },
  };

  // Projects
  resumeData["list-item-5"] = {
    projects: {
      title:
        document.querySelector(
          '#list-item-5 input[placeholder*="Produce Hub"]'
        )?.value || "",
      tech:
        document.querySelector(
          '#list-item-5 input[placeholder*="React"]'
        )?.value || "",
      desc: document.querySelector("#list-item-5 textarea")?.value || "",
    },
  };

  localStorage.setItem("resumeData", JSON.stringify(resumeData));
  console.log("✅ SAVED:", resumeData);
}

function generateResumeHTML(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .resume-container { width: 100%; max-width: 8.5in; background: white; }
        .header { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 25px; text-align: center; }
        .header h1 { font-size: 32px; margin-bottom: 8px; }
        .header .contact { font-size: 13px; opacity: 0.95; }
        .section { margin: 20px 0; padding: 0 25px; }
        .section-title { background: #f8f9ff; padding: 10px 15px; font-size: 15px; font-weight: bold; border-left: 5px solid #6366f1; margin-bottom: 15px; }
        .entry { margin-bottom: 15px; }
        .entry-title { font-weight: bold; font-size: 14px; color: #2d3748; }
        .entry-subtitle { font-style: italic; color: #718096; font-size: 13px; }
        .entry-desc { font-size: 13px; margin-top: 5px; line-height: 1.5; color: #4a5568; }
        .skills-list { display: flex; flex-wrap: wrap; gap: 10px; font-size: 13px; }
        .skill-tag { background: #e6e6ff; color: #6366f1; padding: 6px 12px; border-radius: 20px; font-weight: 600; font-size: 12px; }
        .summary { background: linear-gradient(135deg, #f0f9ff 0%, #f0fdf4 100%); padding: 15px; border-radius: 8px; font-size: 13px; line-height: 1.6; border-left: 4px solid #10b981; }
      </style>
    </head>
    <body>
      <div class="resume-container">
        <div class="header">
          <h1>${escapeHtml(data.name)}</h1>
          <div class="contact">
            ${data.email ? `📧 ${escapeHtml(data.email)}` : ""} 
            ${data.phone ? `| 📱 ${escapeHtml(data.phone)}` : ""} 
            ${data.city ? `| 📍 ${escapeHtml(data.city)}` : ""}
          </div>
        </div>

        ${
          data.aiSummary
            ? `
        <div class="section">
          <div class="section-title">👨‍💼 PROFESSIONAL SUMMARY</div>
          <div class="summary">${escapeHtml(data.aiSummary)}</div>
        </div>`
            : ""
        }

        ${
          data.skills
            ? `
        <div class="section">
          <div class="section-title">💻 TECHNICAL SKILLS</div>
          <div class="skills-list">
            ${data.skills
              .split(",")
              .filter((s) => s.trim())
              .map(
                (skill) =>
                  `<span class="skill-tag">${escapeHtml(
                    skill.trim()
                  )}</span>`
              )
              .join("")}
          </div>
        </div>`
            : ""
        }

        ${
          data.education
            ? `
        <div class="section">
          <div class="section-title">🎓 EDUCATION</div>
          <div class="entry">
            <div class="entry-title">${escapeHtml(data.education)}</div>
          </div>
        </div>`
            : ""
        }

        ${
          data.jobTitle || data.company || data.experience
            ? `
        <div class="section">
          <div class="section-title">💼 PROFESSIONAL EXPERIENCE</div>
          <div class="entry">
            ${
              data.jobTitle
                ? `<div class="entry-title">${escapeHtml(
                    data.jobTitle
                  )}</div>`
                : ""
            }
            ${
              data.company
                ? `<div class="entry-subtitle">${escapeHtml(
                    data.company
                  )}</div>`
                : ""
            }
            ${
              data.experience
                ? `<div class="entry-desc">${escapeHtml(
                    data.experience
                  )}</div>`
                : ""
            }
          </div>
        </div>`
            : ""
        }

        ${
          data.projectTitle
            ? `
        <div class="section">
          <div class="section-title">🚀 KEY PROJECTS</div>
          <div class="entry">
            <div class="entry-title">${escapeHtml(data.projectTitle)}</div>
            ${
              data.projectTech
                ? `<div class="entry-subtitle">Tech: ${escapeHtml(
                    data.projectTech
                  )}</div>`
                : ""
            }
            ${
              data.projectDesc
                ? `<div class="entry-desc">${escapeHtml(
                    data.projectDesc
                  )}</div>`
                : ""
            }
          </div>
        </div>`
            : ""
        }

        <div style="text-align: center; margin-top: 30px; padding: 15px; border-top: 2px solid #e2e8f0; font-size: 12px; color: #a0aec0;">
          Generated by AI Resume Generator | ${new Date().toLocaleDateString()}
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ---------- REACT ENTRY POINTS ----------

// Call this from useEffect in the page that has the big form (Index or About)
export function setupAboutPageLogic() {
  // 1) auto-save on input
  const handleInput = (e) => {
    if (e.target.closest(".div3")) saveData();
  };
  document.addEventListener("input", handleInput);

  // 2) load data and sidebar behavior
  loadData();
  const content = document.querySelector(".div3");
  document.querySelectorAll("#list-example a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelectorAll("#list-example .list-group-item")
        .forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection && content) {
        const offsetTop = targetSection.offsetTop - 40;
        content.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });

  // 3) AI button

// 3) AI button
const aiBtn = document.querySelector(".btn-success");
if (aiBtn) {
  aiBtn.addEventListener("click", async function () {
    const btn = this;
    const originalText = btn.innerHTML;
    btn.innerHTML = "⏳ Talking to AI...";
    btn.disabled = true;

    try {
      const allData = JSON.parse(localStorage.getItem("resumeData") || "{}");

      if (
        !allData["list-item-1"]?.personal?.firstName &&
        !allData["list-item-3"]?.skills?.technical
      ) {
        throw new Error("Please fill Personal Details and Skills first!");
      }

      const name =
        allData["list-item-1"]?.personal?.firstName || "this candidate";
      const job =
        allData["list-item-4"]?.experience?.title || "developer";
      const skills =
        allData["list-item-3"]?.skills?.technical ||
        "web development and modern JavaScript frameworks";
      const uni =
        allData["list-item-2"]?.education?.university || "a leading university";
      const degree =
        allData["list-item-2"]?.education?.degree || "Computer Science";
      const project =
        allData["list-item-5"]?.projects?.title || "real-world web projects";
      const tech =
        allData["list-item-5"]?.projects?.tech || "React, Node.js";

      const prompt = `
Write a concise, ATS-friendly professional resume summary (3–4 sentences) for a junior ${job}.
Candidate name: ${name}
Education: ${degree} from ${uni}
Key technical skills: ${skills}
Key project: ${project} built with ${tech}
Focus on measurable impact, clarity, and keywords for software developer roles.
      `;

      // ----- Call Node + OpenRouter backend -----
      // const res = await fetch("http://localhost:4000/api/summary", {
      const res = await fetch("https://ai-resume-backend.onrender.com/api/summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "AI server error");
      }

      const summary = json.summary || "AI did not return a summary.";

      const aiSummary = document.getElementById("aiSummary");
      if (aiSummary) aiSummary.value = summary;

      const resumeData = JSON.parse(localStorage.getItem("resumeData") || "{}");
      resumeData["list-item-6"] = { summary };
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
    } catch (error) {
      console.error("AI Error:", error);
      const aiSummary = document.getElementById("aiSummary");
      if (aiSummary)
        aiSummary.value =
          error.message || "Something went wrong. Please try again.";
    }

    btn.innerHTML = originalText;
    btn.disabled = false;
  });
}



  
  // 4) PDF button
  const pdfBtn = document.getElementById("downloadPdfBtn");
  if (pdfBtn) {
    pdfBtn.addEventListener("click", async function () {
      const btn = this;
      const originalText = btn.innerHTML;
      btn.innerHTML = "⏳ Generating PDF...";
      btn.disabled = true;

      try {
        const resumeData = JSON.parse(
          localStorage.getItem("resumeData") || "{}"
        );

        if (!resumeData["list-item-1"]?.personal?.firstName) {
          alert("❌ Please fill Personal Details first!");
          throw new Error("Missing name");
        }

        const name = `${resumeData["list-item-1"]?.personal?.firstName || ""} ${
          resumeData["list-item-1"]?.personal?.lastName || ""
        }`
          .trim()
          .toString() || "Your Name";
        const email = resumeData["list-item-1"]?.personal?.email || "";
        const phone = resumeData["list-item-1"]?.personal?.phone || "";
        const city = resumeData["list-item-1"]?.personal?.city || "";
        const aiSummary = resumeData["list-item-6"]?.summary || "";
        const education = `${resumeData["list-item-2"]?.education?.degree || ""}, ${
          resumeData["list-item-2"]?.education?.university || ""
        }`;
        const skills = resumeData["list-item-3"]?.skills?.technical || "";
        const jobTitle = resumeData["list-item-4"]?.experience?.title || "";
        const company = resumeData["list-item-4"]?.experience?.company || "";
        const experience = resumeData["list-item-4"]?.experience?.desc || "";
        const projectTitle = resumeData["list-item-5"]?.projects?.title || "";
        const projectTech = resumeData["list-item-5"]?.projects?.tech || "";
        const projectDesc = resumeData["list-item-5"]?.projects?.desc || "";

        const resumeHTML = generateResumeHTML({
          name,
          email,
          phone,
          city,
          aiSummary,
          education,
          skills,
          jobTitle,
          company,
          experience,
          projectTitle,
          projectTech,
          projectDesc,
        });

        const element = document.createElement("div");
        element.innerHTML = resumeHTML;
        element.style.padding = "20px";
        element.style.backgroundColor = "white";

        const opt = {
          margin: 10,
          filename: `${name.replace(/\s+/g, "_")}_Resume.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
        };

        await html2pdf().set(opt).from(element).save();

        btn.innerHTML = "✅ PDF Downloaded!";
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 3000);
      } catch (error) {
        console.error("PDF Error:", error);
        btn.innerHTML = "❌ Failed";
        alert("Fill Personal Details + Generate AI Summary first!");
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 2000);
      }
    });
  }

  // optional cleanup handler
  return () => {
    document.removeEventListener("input", handleInput);
  };
}

// If you want to use same logic on Index page:
export function setupIndexPageLogic() {
  return setupAboutPageLogic();
}
