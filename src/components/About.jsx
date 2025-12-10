import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Top nav */}
      <header className="about-nav">
        <div className="about-nav-inner">
          <Link to="/" className="about-logo">
            AI Resume Generator
          </Link>
          <nav className="about-links">
            <Link to="/" className="about-link">
              Resume Builder
            </Link>
            <Link to="/about" className="about-link active">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero section */}
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>Build smarter resumes with real AI</h1>
          <p>
            This website helps developers and tech professionals generate clear,
            tailored resume summaries and bullet points in seconds using
            AI, so they can focus on applying instead of formatting.[web:22][web:26]
          </p>
          <Link to="/" className="about-cta">
            Start Building Your Resume
          </Link>
        </div>
        <div className="about-hero-card">
          <h2>What this site does</h2>
          <ul>
            <li>Turns your experience and target role into a polished summary.</li>
            <li>Suggests impact‑focused bullet points for each job you add.[web:26]</li>
            <li>Optimizes wording and structure for ATS‑friendly screening.[web:27][web:39]</li>
            <li>Keeps everything in your browser with no sign‑up required.</li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="about-section">
        <h2>How the AI resume builder works</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>1. Add your details</h3>
            <p>
              Enter your role, skills, and work history, then optionally paste a
              job description you want to target.[web:30]
            </p>
          </div>
          <div className="about-card">
            <h3>2. Let AI draft content</h3>
            <p>
              The AI analyzes your input, highlights relevant achievements, and
              proposes concise, recruiter‑ready text for your resume.[web:30][web:31]
            </p>
          </div>
          <div className="about-card">
            <h3>3. Edit and export</h3>
            <p>
              You stay in control: review, tweak the wording, then copy or
              download your final resume to apply instantly.[web:24][web:38]
            </p>
          </div>
        </div>
      </section>

      {/* Why it’s different */}
      <section className="about-section">
        <h2>Why use this website</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Developer‑focused</h3>
            <p>
              The prompts, examples, and layout are tuned for software and tech
              roles, so your projects and impact stand out quickly.[web:26][web:34]
            </p>
          </div>
          <div className="about-card">
            <h3>Fast and distraction‑free</h3>
            <p>
              No account, no long forms, and no paywall—just a clean interface
              that gets you from blank page to strong resume in minutes.[web:23][web:35]
            </p>
          </div>
          <div className="about-card">
            <h3>Private by design</h3>
            <p>
              Your resume is generated and stored locally in your browser; there
              is no central database of your personal information.[web:37][web:41]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
