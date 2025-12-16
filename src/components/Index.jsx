// Index.jsx

import React from "react";
import "../styles/index.css";
import"../js/mainLogic.js";
import { Link } from "react-router-dom";
import { setupIndexPageLogic } from "../js/mainLogic.js";

export function Index() {
  return (
    <>
      {/* Custom CSS */}
      <link rel="stylesheet" href="/index.css" />

      <div className="parent">
        {/* Navbar */}
        <div className="div1">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold" to="/ai-resume-generator">
                AI Resume Generator
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/ai-resume-generator/about"
                      className="list-group-item list-group-item-action"

                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <h2 className="nav-link disabled">USE AI Summary</h2>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Sidebar */}
        <div className="div2">
          <div id="list-example" className="list-group">
            <a className="list-group-item list-group-item-action" href="#list-item-1">
              Personal Details
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-2">
              Education Details
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-3">
              Skills
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-4">
              Experience
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-5">
              Projects
            </a>
            <a className="list-group-item list-group-item-action" href="#list-item-6">
              AI Summary
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="div3">
          <div className="container py-4">
            {/* Personal Details */}
            <section id="list-item-1" className="mb-5">
              <h4 className="mb-3">Personal Details</h4>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" placeholder="+91-XXXXXXXXXX" />
                </div>
                <div className="col-md-8">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" placeholder="1234 Main St" />
                </div>
                <div className="col-md-4">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" placeholder="Ahmedabad" />
                </div>
              </div>
            </section>

            {/* Education */}
            <section id="list-item-2" className="mb-5">
              <h4 className="mb-3">Education Details</h4>

              <div className="row g-3 mb-3">
                <div className="col-md-4">
                  <label className="form-label">Level</label>
                  <select className="form-select">
                    <option disabled>
                      Select education level
                    </option>
                    <option value="graduation">Graduation</option>
                    <option value="post-graduation">Post-Graduation</option>
                  </select>
                </div>

                <div className="col-md-8">
                  <label className="form-label">Degree/Course</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="B.Sc Computer Science"
                  />
                </div>
              </div>

              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">University</label>
                  <input type="text" className="form-control" placeholder="GLS University" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">Passing Year</label>
                  <input type="text" className="form-control" placeholder="2025" />
                </div>

                <div className="col-md-3">
                  <label className="form-label">CGPA</label>
                  <input type="text" className="form-control" placeholder="8.2" />
                </div>
              </div>
            </section>

            {/* Skills */}
            <section id="list-item-3" className="mb-5">
              <h4 className="mb-3">Skills</h4>

              <div className="mb-3">
                <label className="form-label">Technical Skills</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="HTML, CSS, JavaScript, React, Node.js..."
                ></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Soft Skills</label>
                <textarea
                  className="form-control"
                  rows="2"
                  placeholder="Communication, Teamwork..."
                ></textarea>
              </div>
            </section>

            {/* Experience */}
            <section id="list-item-4" className="mb-5">
              <h4 className="mb-3">Experience</h4>

              <div className="border rounded p-3 mb-3">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Job Title</label>
                    <input type="text" className="form-control" placeholder="Junior Developer" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control" placeholder="Company Name" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Start Date</label>
                    <input type="month" className="form-control" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">End Date</label>
                    <input type="month" className="form-control" />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" placeholder="Ahmedabad" />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Responsibilities</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Describe your role..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section id="list-item-5" className="mb-5">
              <h4 className="mb-3">Projects</h4>

              <div className="border rounded p-3 mb-3">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Project Title</label>
                    <input type="text" className="form-control" placeholder="The Produce Hub" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Tech Stack</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Project description..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Live Link</label>
                    <input type="url" className="form-control" placeholder="https://github.com/..." />
                  </div>
                </div>
              </div>
            </section>

            {/* AI Summary */}
            <section id="list-item-6" className="mb-5">
              <h4 className="mb-3">AI Summary</h4>

              <div className="mb-3">
                <label className="form-label">Generated Summary</label>
                <textarea
                  className="form-control"
                  id="aiSummary"
                  rows="4"
                  placeholder="AI summary will appear here..."
                ></textarea>
              </div>
          
              <button onClick={setupIndexPageLogic} className="btn btn-success btn-lg">
                Generate AI Summary
              </button>

              <button type="button" className="btn btn-success btn-lg px-5 ms-3" id="downloadPdfBtn">
                Download Resume (PDF)
              </button>
            </section>
          </div>
        </div>
      </div>

    </>
  );
}
