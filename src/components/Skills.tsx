"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Code, Layout, Server, Database, Cloud, ExternalLink, Sparkles, Layers } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const skillCategories = [
  {
    key: "frontend",
    label: "Frontend",
    icon: Layout,
    badge: "Interactive UI",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    key: "backend",
    label: "Backend",
    icon: Server,
    badge: "APIs & Services",
    color: "text-emerald-700 dark:text-green-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    key: "databases",
    label: "Databases",
    icon: Database,
    badge: "Data Models",
    color: "text-amber-700 dark:text-orange-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    key: "cloudTools",
    label: "Cloud & Tools",
    icon: Cloud,
    badge: "DevOps & Cloud",
    color: "text-purple-700 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    key: "languages",
    label: "Languages",
    icon: Code,
    badge: "Core Foundation",
    color: "text-purple-700 dark:text-primary",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
] as const;

// Skills directly demonstrated in verified live projects or open-source repositories
const projectSkillLinks: Record<string, { title: string; href: string }> = {
  "React.js": { title: "Krishi Seva Center", href: "/projects/krishi-seva-center" },
  "FastAPI": { title: "Krishi Seva Center", href: "/projects/krishi-seva-center" },
  "Python": { title: "AI Travel Planner & Krishi Seva", href: "/projects/krishi-seva-center" },
  "Streamlit": { title: "AI Student Travel Planner", href: "/projects/ai-student-travel-planner" },
  "Tailwind CSS": { title: "Portfolio & Krishi Seva", href: "/projects/krishi-seva-center" },
  "Vercel": { title: "Krishi Seva Center", href: "/projects/krishi-seva-center" },
  "Render": { title: "Krishi Seva Center", href: "/projects/krishi-seva-center" },
  "RESTful APIs": { title: "Krishi Seva & IBM Internships", href: "/projects/krishi-seva-center" },
  "Git": { title: "Open Source Projects", href: "https://github.com/Raj-Anmol" },
  "GitHub": { title: "GitHub Repositories", href: "https://github.com/Raj-Anmol" },
};

const totalSkillsCount = Object.values(skills).reduce(
  (acc, cat) => acc + cat.items.length,
  0
);

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const reducedMotion = useReducedMotion();

  const filterTabs = [
    { key: "all", label: "All Technologies", count: totalSkillsCount },
    ...skillCategories.map((c) => ({
      key: c.key,
      label: c.label,
      count: skills[c.key as keyof typeof skills].items.length,
    })),
  ];

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.key === selectedCategory);

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Technical Arsenal</span>
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance"
          >
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Categorized technical stack backed by hands-on projects, virtual internships, and cloud deployments.
          </p>
        </motion.header>

        {/* Interactive Category Filter Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-8 max-w-3xl mx-auto"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(tab.key)}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 border active:scale-95",
                  isSelected
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-purple-500/25"
                    : "bg-white/80 dark:bg-card/80 text-muted-foreground border-border hover:text-foreground hover:border-purple-500/40 hover:bg-slate-50 dark:hover:bg-white/5"
                )}
              >
                <span>{tab.label}</span>
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded-full font-semibold",
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-white/10 text-muted-foreground"
                  )}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {displayedCategories.map((category, index) => {
                const data = skills[category.key as keyof typeof skills];
                return (
                  <motion.div
                    key={category.key}
                    initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "100px 0px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border border-border bg-card/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:border-purple-500/50 hover:shadow-[0_12px_30px_-6px_rgba(124,58,237,0.18)] dark:hover:border-purple-400/50 dark:hover:shadow-[0_12px_30px_-6px_rgba(168,85,247,0.25)] hover:-translate-y-1.5 will-change-transform transition-all duration-300 ease-out"
                  >
                    <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "p-2.5 rounded-xl transition-transform duration-200 group-hover:scale-105",
                            category.bgColor,
                            category.borderColor,
                            "border"
                          )}
                        >
                          <category.icon className={cn("h-5 w-5", category.color)} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-foreground">
                              {category.label}
                            </h3>
                            <span className="text-xs text-muted-foreground font-normal">
                              ({data.items.length})
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {category.key === "frontend" && "UI components, responsive layouts & state management"}
                            {category.key === "backend" && "RESTful microservices, auth & real-time communication"}
                            {category.key === "databases" && "Schema design, aggregation & persistent document storage"}
                            {category.key === "cloudTools" && "Deployment pipelines, version control & testing workflows"}
                            {category.key === "languages" && "Programming foundations, data structures & typing"}
                          </p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                        <Layers className="h-3 w-3" />
                        <span>{category.badge}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {data.items.map((skill, skillIndex) => {
                        const linkedProject = projectSkillLinks[skill];

                        if (linkedProject) {
                          const isExternal = linkedProject.href.startsWith("http");
                          const Element = isExternal ? "a" : Link;
                          return (
                            <Element
                              key={skillIndex}
                              href={linkedProject.href}
                              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              title={`Used in ${linkedProject.title} — click to view`}
                              className="group inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg text-slate-800 dark:text-foreground bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 hover:border-purple-500/60 hover:bg-purple-500/10 hover:text-purple-700 dark:hover:text-purple-300 hover:-translate-y-0.5 hover:shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400" />
                              <span className="font-medium">{skill}</span>
                              <ExternalLink className="h-2.5 w-2.5 text-muted-foreground group-hover:text-primary transition-colors opacity-70 group-hover:opacity-100" />
                            </Element>
                          );
                        }

                        return (
                          <Badge
                            key={skillIndex}
                            variant="outline"
                            className="text-xs px-3 py-1.5 rounded-lg text-slate-800 dark:text-foreground bg-white dark:bg-white/[0.04] border-slate-200 dark:border-white/10 hover:bg-purple-500/10 hover:border-purple-500/50 hover:text-purple-700 dark:hover:text-purple-300 hover:-translate-y-0.5 hover:shadow-xs active:scale-95 transition-all duration-200 cursor-default font-medium"
                          >
                            {skill}
                          </Badge>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
