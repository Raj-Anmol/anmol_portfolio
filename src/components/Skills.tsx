"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/constants";

const frontendSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
  "Context API",
  "Bootstrap",
  "Streamlit",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "FastAPI",
  "RESTful APIs",
  "JWT Authentication",
  "WebSockets (Socket.io)",
];

const aiSkills = [
  "Python",
  "PyTorch",
  "AI/ML",
  "TensorFlow",
  "OpenAI API",
];

const devopsSkills = [
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub",
  "Postman",
  "Vercel",
  "Render",
  "NPM",
  "VS Code",
];

const skillCategoryMap: Record<string, string[]> = {
  frontend: frontendSkills,
  backend: backendSkills,
  ai: aiSkills,
  devops: devopsSkills,
};

function getSkillTheme(category: string) {
  if (category === "frontend") {
    return {
      bg: "bg-sky-500/10",
      text: "text-sky-300",
      border: "border-sky-500/20",
      hoverBorder: "border-sky-400",
      shadow: "shadow-[0_0_12px_rgba(56,189,248,0.35)]",
    };
  }
  if (category === "backend") {
    return {
      bg: "bg-emerald-500/10",
      text: "text-emerald-300",
      border: "border-emerald-500/20",
      hoverBorder: "border-emerald-400",
      shadow: "shadow-[0_0_12px_rgba(52,211,153,0.35)]",
    };
  }
  if (category === "ai") {
    return {
      bg: "bg-purple-500/10",
      text: "text-purple-300",
      border: "border-purple-500/20",
      hoverBorder: "border-purple-400",
      shadow: "shadow-[0_0_12px_rgba(168,85,247,0.35)]",
    };
  }
  return {
    bg: "bg-amber-500/10",
    text: "text-amber-300",
    border: "border-amber-500/20",
    hoverBorder: "border-amber-400",
    shadow: "shadow-[0_0_12px_rgba(251,191,36,0.35)]",
  };
}

function skillInCategory(skill: string, category: string): boolean {
  return skillCategoryMap[category].includes(skill);
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header with Gradient Title */}
        <header className="text-center mb-12">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6">
            Technical Arsenal
          </div>

          {/* Gradient Title */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent mb-2"
          >
            Technical Skills
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-purple-300/70 max-w-xl mx-auto leading-relaxed">
            Full-stack development, AI/ML integration, and cloud infrastructure mastery
          </p>
        </header>

        {/* Skills Grid with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="space-y-8"
        >
          {["frontend", "backend", "ai", "devops"].map((category) => {
            const skillList = skillCategoryMap[category];
            const theme = getSkillTheme(category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-white/[0.03] border-b-white/[0.08] bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {/* Category icon placeholder */}
                    <span className="h-5 w-5 rounded-md bg-purple-300/20 text-purple-300 flex items-center justify-center text-xs font-medium">
                      {category[0].toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-purple-300 transition-colors">
                    {category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => {
                    const theme = getSkillTheme(category);
                    const inCategory = skillInCategory(skill, category);

                    return (
                      <motion.span
                        key={skill}
                        className="rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-300 inline-flex items-center gap-1.5"
                        style={{
                          backgroundColor: theme.bg,
                          color: theme.text,
                          borderColor: theme.border,
                        }}
                        whileHover={{
                          borderColor: theme.hoverBorder,
                          boxShadow: theme.shadow,
                          transform: "translateY(-2) scale(1.05)",
                        }}
                      >
                        {inCategory ? skill : ""}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Progress Bars Section */}
        <div className="mt-12 grid grid-cols-2 gap-6 pt-8 border-t border-white/[0.05]">
          {["languages", "frontend", "backend", "databases", "cloudTools"].map(
            (key) => {
              const data = skills[key as keyof typeof skills];

              return (
                <div key={key} className="space-y-2">
                  <p className="text-sm text-purple-300/60">
                    {key === "languages"
                      ? "Languages Mastery"
                      : key === "frontend"
                      ? "Frontend Development"
                      : key === "backend"
                      ? "Backend Development"
                      : key === "databases"
                      ? "Database Management"
                      : "Cloud & Tools"
                  }</p>
                  <div className="h-2 bg-white/[0.1] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-purple-500/60 transition-all duration-200"
                      style={{ width: `${(data.level / 5) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-purple-300/60">{data.level}/5 Proficiency</p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}