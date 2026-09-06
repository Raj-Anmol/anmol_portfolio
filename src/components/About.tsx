"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { profile, education, socialLinks } from "@/lib/constants";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Who is Gautam Kumar?",
      answer:
        "Gautam Kumar is a Full-Stack Developer from Sitamarhi, Bihar, currently based in Jaipur. He has solo-shipped SaaS applications with AI integration, combining React, Node.js, TypeScript, Python, and LLM-powered features. He completed a Microsoft Elevate × AICTE internship and has experience with real-time systems and microservice architecture."
    },
    {
      question: "What projects has Gautam Kumar built?",
      answer:
        "Gautam has built four production-grade SaaS platforms: InterviewMinds (AI mock interview platform with ML proctoring and CRDT collaborative coding), SwadKart (multi-vendor food delivery with AI chatbot and biometric auth), Satark-AI (deepfake detection and speaker verification platform), and TexFolio (AI-powered LaTeX resume builder SaaS with LangGraph multi-agent coach and real PDF rendering)."
    },
    {
      question: "What is Gautam Kumar's tech stack?",
      answer:
        "Gautam's tech stack includes TypeScript, JavaScript, Python, HTML, CSS, SQL, React 18/19, Next.js, Vite, Redux Toolkit, Zustand, Tailwind CSS, Shadcn UI, Framer Motion, Socket.IO, PWA (Workbox), Node.js, Express, Hono, FastAPI, MongoDB, PostgreSQL, Redis, BullMQ, Docker, Turborepo, GitHub Actions, Vercel, Render, Cloudflare Workers, Clerk Auth, Firebase Auth, WebAuthn, Groq SDK (Llama 3.3-70b), Hugging Face, LangChain, LangGraph, TensorFlow.js, face-api.js, PyTorch, Wav2Vec2, ECAPA-TDNN, RSA-4096, AES-256-GCM, and more."
    },
    {
      question: "Where does Gautam Kumar study?",
      answer:
        "Gautam Kumar is a University student at Jagannath University, Jaipur, Rajasthan, India. He has also completed a Microsoft Elevate Internship (AICTE)."
    },
    {
      question: "How to contact Gautam Kumar?",
      answer:
        "You can reach Gautam Kumar at gautamkumar43421@gmail.com. He is also active on LinkedIn (linkedin.com/in/gautamkr62), GitHub (github.com/theunstopabble), and Twitter/X (x.com/_unstopabble). He is open to opportunities and collaborations."
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground mb-3">Frequently Asked Questions</h3>
      {faqs.map((faq, index) => (
        <details key={index} className="bg-card rounded-xl border border-border p-4">
          <summary className="cursor-pointer text-primary hover:text-primary/90 transition-colors flex items-center gap-2">
            <span className="text-sm">{faq.question}</span>
          </summary>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-4">
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
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Computer Science undergraduate passionate about scalable web apps and AI integration.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
<div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {profile.summary}
            </p>
          </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">Personal Details</h3>
              <div className="p-3 bg-card rounded-xl border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Location</p>
                      <p className="text-sm text-foreground">{profile.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Native</p>
                      <p className="text-sm text-foreground">{profile.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Education</p>
                      <p className="text-sm text-foreground">B.Tech CSE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<div>
            <h3 className="text-lg font-semibold text-foreground mb-3">What I Do</h3>
            <ul className="space-y-2">
              {[
                "Build full-stack web applications with MERN stack",
                "Integrate AI/ML models into production web apps",
                "Design RESTful APIs and real-time systems",
                "Deploy and manage applications on cloud platforms",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <p className="text-base font-medium text-foreground">{edu.degree}</p>
                  <p className="text-primary font-medium text-sm">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
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
              <h3 className="text-lg font-semibold text-foreground mb-4">Core Competencies</h3>
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
                    className="px-3 py-1.5 text-xs bg-muted rounded-lg text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
<p className="text-xs text-muted-foreground">
                Connect on:
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
              </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}