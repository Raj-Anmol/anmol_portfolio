"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { profile, education, socialLinks } from "@/lib/constants";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Who is Anmol Raj?",
      answer:
        "Anmol Raj is a Full-Stack Developer | AI Integration from Jaipur, Rajasthan, India. He is a Computer Science undergraduate at Jagannath University, passionate about MERN stack development and integrating AI into production web applications. He has completed 3 internships and built 8+ projects."
    },
    {
      question: "What projects has Anmol Raj built?",
      answer:
        "Anmol has built 8+ projects including AI Student Travel Planner (budget-first travel planning with rule-based expense allocation), Krishi Seva Center (AI-powered farmer platform with disease detection and live weather), and various other Streamlit, React, and Node.js applications deployed on Vercel and Render."
    },
    {
      question: "What is Anmol Raj's tech stack?",
      answer:
        "Anmol specializes in the MERN stack (MongoDB, Express, React, Node.js) with additional expertise in TypeScript, Python, AI/ML integration, RESTful APIs, JWT Authentication, WebSockets (Socket.io), MongoDB, Mongoose ORM, PostgreSQL, Cloudinary, IBM Cloud, Vercel, Render, Postman, and VS Code."
    },
    {
      question: "Where does Anmol Raj study?",
      answer:
        "Anmol Raj is currently pursuing Bachelor of Technology (B.Tech) in Computer Science at Jagannath University, Jaipur, Rajasthan. He is expected to graduate in July 2027."
    },
    {
      question: "How to contact Anmol Raj?",
      answer:
        "You can reach Anmol Raj at araj97855@gmail.com. He is also active on LinkedIn (linkedin.com/in/raj-anmol), GitHub (github.com/Raj-Anmol), and Instagram (instagram.com/raj_anmol_573). He is open for freelance projects and full-time positions."
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 max-w-full">
      <h3 className="text-lg font-semibold text-foreground mb-3 sm:text-base">Frequently Asked Questions</h3>
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group bg-card rounded-xl border border-border p-4 sm:p-6 transition-all open:bg-card/80 open:border-primary/30"
        >
          <summary className="cursor-pointer text-primary hover:text-primary/90 transition-all flex items-center justify-between gap-2 sm:text-base marker:hidden list-none open:text-muted-foreground open:hover:text-muted-foreground">
            <span className="text-sm font-medium">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </summary>
          <p className="text-foreground text-sm sm:text-base mt-3 sm:mt-4 opacity-0 -translate-y-1 transition-all duration-200 group-open:opacity-100 group-open:translate-y-0">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Computer Science undergraduate passionate about scalable web apps and AI integration.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
<div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 tracking-tight">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-pretty">
              {profile.summary}
            </p>
          </div>

            <div className="space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">Personal Details</h3>
              <div className="p-3 bg-card rounded-xl border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="text-sm sm:text-base text-foreground">{profile.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">Native</p>
                      <p className="text-sm sm:text-base text-foreground">{profile.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">Education</p>
                      <p className="text-sm sm:text-base text-foreground">B.Tech CSE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 tracking-tight">What I Do</h3>
            <ul className="space-y-2">
              {[
                "Build full-stack web applications with MERN stack",
                "Integrate AI/ML models into production web apps",
                "Design RESTful APIs and real-time systems",
                "Deploy and manage applications on cloud platforms",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  <span className="flex-shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 flex items-center gap-2 tracking-tight">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-base sm:text-lg font-medium text-foreground">{edu.degree}</p>
                  <p className="text-primary font-medium text-sm sm:text-base">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 tracking-tight">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Full Stack Development",
                  "AI/ML Integration",
                  "RESTful API Design",
                  "Real-time Applications",
                  "Database Optimization",
                  "Cloud Deployment",
                  "Authentication & Security",
                  "Responsive UI/UX",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-muted rounded-lg text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span>Connect on:</span>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                LinkedIn
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Twitter
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Instagram
              </a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                GitHub
              </a>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}