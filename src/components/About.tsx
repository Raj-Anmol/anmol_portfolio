"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { profile, education, socialLinks, skills } from "@/lib/constants";
import { MapPin, GraduationCap, Calendar, Sparkles, Check, ArrowUpDown, Globe } from "lucide-react";
import { GithubIcon as GithubIconComponent } from "@/components/icons/GithubIcon";
import { LinkedinIcon as LinkedinIconComponent } from "@/components/icons/LinkedinIcon";
import { InstagramIcon as InstagramIconComponent } from "@/components/icons/InstagramIcon";

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
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">

        {/* Ambient Orb Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl opacity-20 blur-[80%] bg-gradient-to-br from-purple-900 to-transparent" />
            <div className="absolute -inset-4 rounded-2xl opacity-15 blur-[60%] bg-gradient-to-br from-purple-500/30 to-transparent" />
          </div>
        </div>

        {/* Bento Grid Container */}
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-6">

          {/* Card 1: Professional Summary & What I Do (spans full width on mobile, left on desktop) */}
          <motion.div
            className={cn(
              "group border-purple-500/20 bg-[#0c0c12]/80 border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
              "group-hover:scale-102",
              "transition-all duration-300"
            )}
          >
            {/* Neon Pill Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm font-medium"
              >
                About Me
              </span>
            </div>

            {/* Gradient Title */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent mb-6"
            >
              Engineering Scalable Systems & AI
            </h2>

            {/* Professional Summary */}
            <p className="text-sm sm:text-base text-purple-300 leading-relaxed text-pretty mb-8">
              {profile.summary}
            </p>

            {/* What I Do Checklist */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 tracking-tight">
                <Sparkles className="h-4 w-4 text-purple-400" /> What I Do
              </h3>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((_, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 px-3 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg transition-all hover:bg-emerald-500/15 hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                  >
                    <div className="flex-shrink-0 h-4 w-4 rounded-full bg-emerald-400/30 flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-emerald-400" />
                    </div>
                    <span
                      className="flex-1 text-sm sm:text-base text-emerald-300 font-medium"
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

          {/* Card 2: Education (Top Right) */}
          <motion.div
            className={cn(
              "group border-blue-500/20 bg-[#0c0c12]/80 border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
              "group-hover:scale-102",
              "transition-all duration-300"
            )}
          >
            {/* Glowing University Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-indigo-500/20 bg-indigo-500/10"
              >
                <GraduationCap className="h-4.5 w-4.5 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Education</span>
              </div>
            </div>

            {/* Degree & Institution */}
            <div className="space-y-4">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  Bachelor of Technology (B.Tech) in Computer Science
                </p>
                <p className="text-xs text-purple-400/60 uppercase tracking-wider mb-2">
                  2023 - 2027 (Expected)
                </p>
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <p className="text-lg font-bold text-blue-300">
                  Jagannath University
                </p>
                <p className="text-xs text-blue-400/60 uppercase tracking-wider">
                  Jaipur, Rajasthan
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Core Competencies (Bottom Right) */}
          <motion.div
            className={cn(
              "group border-emerald-500/20 bg-[#0c0c12]/80 border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
              "group-hover:scale-102",
              "transition-all duration-300"
            )}
          >
            {/* Skills Header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-0 tracking-tight">
                Core Competencies
              </h3>
              <div className="flex gap-2">
                <span key={1} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  Full Stack
                </span>
                <span key={2} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  AI/ML
                </span>
                <span key={3} className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Cloud
                </span>
              </div>
            </div>

            {/* Skill Badges - Dynamic Pill Chips */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => {
                const skillsData = [
                  {
                    name: "Full Stack & APIs",
                    theme: "cyan",
                    accent: "cyan-400",
                    desc: "Next.js, React, TypeScript, RESTful APIs",
                  },
                  {
                    name: "AI/ML & Real-time",
                    theme: "purple",
                    accent: "purple-400",
                    desc: "TensorFlow, PyTorch, OpenAI API, WebSockets",
                  },
                  {
                    name: "Cloud & DB",
                    theme: "emerald",
                    accent: "emerald-400",
                    desc: "AWS, Vercel, Cloudinary, MongoDB, PostgreSQL",
                  },
                  {
                    name: "Testing & QA",
                    theme: "pink",
                    accent: "pink-400",
                    desc: "Jest, Vitam, Playwright, Cypress",
                  },
                  {
                    name: "DevOps & CI/CD",
                    theme: "amber",
                    accent: "amber-400",
                    desc: "Docker, Kubernetes, GitHub Actions",
                  },
                  {
                    name: "Security & Auth",
                    theme: "rose",
                    accent: "rose-400",
                    desc: "OAuth2, JWT, Role-based Access",
                  },
                  {
                    name: "Design & UI",
                    theme: "sky",
                    accent: "sky-400",
                    desc: "Figma, Tailwind CSS, Responsiveness",
                  },
                  {
                    name: "Version Control",
                    theme: "lime",
                    accent: "lime-400",
                    desc: "Git, GitHub, GitLab, Branch Management",
                  },
                ];

                const skill = skillsData[i];

                return (
                  <span
                    key={i}
                    className="rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300"
                  >
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Social Connect Bar */}
          <motion.div
            className={cn(
              "group border-purple-500/20 bg-[#0c0c12]/80 border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
              "group-hover:scale-102",
              "transition-all duration-300"
            )}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 tracking-tight">
              <Globe className="h-4 w-4 text-purple-400 mb-2" /> Social Connect
            </h3>
            <div className="flex gap-3">
{[socialLinks.linkedin, socialLinks.github, socialLinks.instagram].map(
                  (link, i) => {
                    const Icon = [LinkedinIconComponent, GithubIconComponent, InstagramIconComponent][i];
                    const names = ["LinkedIn", "GitHub", "Instagram"];
                  return (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl transition-all duration-300",
                        "border-2 border-purple-500/20 bg-purple-500/10",
                        "hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
                        "group-hover:scale-110",
                        "group-hover:text-purple-200"
                      )}
                    >
                      <Icon
                        className="h-5 w-5 text-purple-300 group-hover:text-purple-200 transition-colors"
                      />
                      <span className="text-xs sm:text-sm font-medium">{names[i]}</span>
                    </a>
                  );
                }
              )}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="w-6 h-6 rounded-full border-2 border-purple-500/50 bg-purple-500/10 flex items-center justify-center">
            <ArrowUpDown className="h-3 w-3 text-purple-400" />
          </div>
          <p className="mt-2 text-xs sm:text-sm text-purple-300/60">
            Scroll to explore more
          </p>
        </div>
      </div>
    </section>
  );
}