"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { profile, socialLinks } from "@/lib/constants";
import { GraduationCap, Sparkles, Check, ArrowUpDown, Globe } from "lucide-react";
import { GithubIcon as GithubIconComponent } from "@/components/icons/GithubIcon";
import { LinkedinIcon as LinkedinIconComponent } from "@/components/icons/LinkedinIcon";


export function FAQ() {
  const faqs = [
    {
      question: "Who is Anmol Raj?",
      answer:
        "Anmol Raj is a Full-Stack Developer | AI Integration from Jaipur, Rajasthan, India. He is a Computer Science undergraduate at Jagannath University, passionate about MERN stack development and integrating AI into production web applications. He has completed 3 internships and built multiple full-stack & AI projects."
    },
    {
      question: "What projects has Anmol Raj built?",
      answer:
        "Anmol has built featured applications including AI Student Travel Planner (budget-first travel planning with rule-based expense allocation), Krishi Seva Center (AI-powered farmer platform with disease detection and live weather), and various other Streamlit, React, and Node.js applications deployed on Vercel and Render."
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
        "You can reach Anmol Raj at araj97855@gmail.com. He is also active on LinkedIn (linkedin.com/in/raj-anmol), GitHub (github.com/Raj-Anmol). He is open for freelance projects and full-time positions."
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
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">

        {/* Ambient Orb Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl opacity-20 blur-[80%] bg-gradient-to-br from-purple-300 dark:from-purple-900 to-transparent" />
            <div className="absolute -inset-4 rounded-2xl opacity-15 blur-[60%] bg-gradient-to-br from-purple-400/30 dark:from-purple-500/30 to-transparent" />
          </div>
        </div>

        {/* Bento Grid Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 pt-4 sm:pt-6 items-stretch">

          {/* Card 1: Professional Summary & What I Do */}
          <motion.div
            className={cn(
              "group bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 shadow-xs hover:shadow-md flex flex-col justify-between",
              "dark:bg-[#0c0c12]/80 dark:border-purple-500/20 dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
              "group-hover:scale-[1.01]",
              "transition-all duration-300"
            )}
          >
            <div>
              {/* Neon Pill Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium"
                >
                  About Me
                </span>
              </div>

              {/* Gradient Title */}
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 dark:from-cyan-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent mb-3 sm:mb-4"
              >
                Engineering Scalable Systems & AI
              </h2>

              {/* Professional Summary */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-purple-300 leading-relaxed text-pretty mb-5">
                {profile.summary}
              </p>
            </div>

            {/* What I Do Checklist */}
            <div className="space-y-2.5">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-foreground tracking-tight flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary dark:text-purple-400" /> What I Do
              </h3>
              <ul className="space-y-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl transition-all hover:bg-emerald-500/15"
                  >
                    <div className="flex-shrink-0 h-4 w-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span
                      className="flex-1 text-xs sm:text-sm text-emerald-950 dark:text-emerald-300 font-medium"
                    >
                      {[1, 2, 3, 4][i] === 1
                        ? "Build full-stack web applications with MERN stack"
                        : [1, 2, 3, 4][i] === 2
                        ? "Integrate AI/ML models into production web apps"
                        : [1, 2, 3, 4][i] === 3
                        ? "Design RESTful APIs and real-time systems"
                        : "Deploy and manage applications on cloud platforms"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Core Competencies */}
          <motion.div
            className={cn(
              "group bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 shadow-xs hover:shadow-md flex flex-col justify-between",
              "dark:bg-[#0c0c12]/80 dark:border-emerald-500/20 dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
              "group-hover:scale-[1.01]",
              "transition-all duration-300"
            )}
          >
            <div>
              {/* Skills Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-foreground tracking-tight flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary dark:text-purple-400" />
                  Core Competencies
                </h3>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span key={1} className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20">
                    Full Stack
                  </span>
                  <span key={2} className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-500/20">
                    AI/ML
                  </span>
                  <span key={3} className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                    Cloud
                  </span>
                </div>
              </div>

              {/* Skill Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {[
                  { name: "Full Stack & APIs", desc: "Next.js, React, TypeScript, REST" },
                  { name: "AI/ML & Real-time", desc: "Streamlit, FastAPI, WebSockets" },
                  { name: "Cloud & DB", desc: "MongoDB, PostgreSQL, Vercel" },
                  { name: "Testing & QA", desc: "Jest, Vitest, Postman, QA" },
                  { name: "DevOps & CI/CD", desc: "Git, GitHub Actions, CI/CD" },
                  { name: "Security & Auth", desc: "OAuth2, JWT, Role-based Access" },
                  { name: "Design & UI", desc: "Tailwind CSS, shadcn/ui" },
                  { name: "Version Control", desc: "Git, GitHub, Branching" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-xl px-3 py-2 sm:py-2.5 bg-slate-100/90 border border-slate-200/90 text-slate-800 hover:bg-slate-200/70 dark:bg-white/[0.04] dark:border-white/10 dark:text-purple-200/90 dark:hover:border-purple-500/40 dark:hover:bg-purple-500/10 transition-all duration-300 flex flex-col justify-center"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-[11px] text-slate-600 dark:text-purple-300/70 mt-0.5 truncate">
                      {skill.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Education */}
          <motion.div
            className={cn(
              "group bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 shadow-xs hover:shadow-md flex flex-col justify-between",
              "dark:bg-[#0c0c12]/80 dark:border-blue-500/20 dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
              "group-hover:scale-[1.01]",
              "transition-all duration-300"
            )}
          >
            {/* Glowing University Badge */}
            <div className="flex items-center gap-2 mb-3">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-indigo-500/20 bg-indigo-500/10"
              >
                <GraduationCap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300">Education</span>
              </div>
            </div>

            {/* Degree & Institution */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Bachelor of Technology (B.Tech) in Computer Science
                </h4>
                <p className="text-xs text-slate-600 dark:text-purple-400/70 uppercase tracking-wider mt-0.5">
                  2023 - 2027 (Expected)
                </p>
              </div>

              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex-shrink-0">
                <p className="text-sm font-bold text-indigo-700 dark:text-blue-300">
                  Jagannath University
                </p>
                <p className="text-[11px] text-indigo-700/80 dark:text-blue-400/60 uppercase tracking-wider">
                  Jaipur, Rajasthan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Social Connect */}
          <motion.div
            className={cn(
              "group bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 shadow-xs hover:shadow-md flex flex-col justify-between",
              "dark:bg-[#0c0c12]/80 dark:border-purple-500/20 dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
              "group-hover:scale-[1.01]",
              "transition-all duration-300"
            )}
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-purple-500/20 bg-purple-500/10">
                <Globe className="h-4 w-4 text-primary dark:text-purple-400" />
                <span className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">
                  Social Connect
                </span>
              </div>
              <span className="text-xs text-slate-500 dark:text-muted-foreground hidden sm:inline">
                Open to collaboration
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[socialLinks.linkedin, socialLinks.github].map(
                (link, i) => {
                  const Icon = [LinkedinIconComponent, GithubIconComponent][i];
                  const names = ["LinkedIn", "GitHub"];
                  return (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300",
                        "border border-slate-300 bg-white text-slate-800 hover:border-primary hover:text-primary hover:bg-primary/5",
                        "dark:border-2 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300",
                        "dark:hover:border-purple-400 dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
                        "active:scale-95"
                      )}
                    >
                      <Icon
                        className="h-4.5 w-4.5 text-slate-700 group-hover:text-primary dark:text-purple-300 dark:group-hover:text-purple-200 transition-colors"
                      />
                      <span className="text-xs sm:text-sm font-semibold">{names[i]}</span>
                    </a>
                  );
                }
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="w-6 h-6 rounded-full border-2 border-primary/40 bg-primary/10 dark:border-purple-500/50 dark:bg-purple-500/10 flex items-center justify-center mx-auto">
            <ArrowUpDown className="h-3 w-3 text-primary dark:text-purple-400" />
          </div>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground dark:text-purple-300/60">
            Scroll to explore more
          </p>
        </div>
      </div>
    </section>
  );
}
