"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Code, Layout, Server, Database, Cloud } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const skillCategories = [
  {
    key: "languages",
    label: "Languages",
    icon: Code,
    color: "text-purple-700 dark:text-primary",
    dotColor: "bg-purple-600 dark:bg-primary",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    key: "frontend",
    label: "Frontend",
    icon: Layout,
    color: "text-blue-600 dark:text-blue-400",
    dotColor: "bg-blue-600 dark:bg-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    key: "backend",
    label: "Backend",
    icon: Server,
    color: "text-emerald-700 dark:text-green-400",
    dotColor: "bg-emerald-600 dark:bg-green-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    key: "databases",
    label: "Databases",
    icon: Database,
    color: "text-amber-700 dark:text-orange-400",
    dotColor: "bg-amber-600 dark:bg-orange-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    key: "cloudTools",
    label: "Cloud & Tools",
    icon: Cloud,
    color: "text-purple-700 dark:text-purple-400",
    dotColor: "bg-purple-600 dark:bg-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function ProficiencyDots({ level, dotColor }: { level: number; dotColor: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Proficiency: ${level} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.04, type: "spring", stiffness: 320, damping: 24 }}
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            i <= level ? dotColor : "bg-slate-200 dark:bg-muted"
          )}
        />
      ))}
    </div>
  );
}

export function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium mb-4">
            Technical Arsenal
          </div>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Proficient in MERN stack, AI integration, and cloud technologies.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="space-y-8"
        >
          {skillCategories.map((category) => {
            const data = skills[category.key as keyof typeof skills];
            return (
              <motion.div
                key={category.key}
                variants={categoryVariants}
                whileHover={reducedMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="border border-border bg-card/80 backdrop-blur-sm rounded-xl p-5 hover:border-purple-500/50 hover:shadow-[0_8px_25px_rgba(168,85,247,0.15)] dark:hover:border-purple-400/50 dark:hover:shadow-[0_8px_25px_rgba(168,85,247,0.2)] transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2.5 rounded-lg transition-transform duration-200 group-hover:scale-105", category.bgColor, category.borderColor)}>
                      <category.icon className={cn("h-5 w-5", category.color)} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-foreground">{category.label}</h3>
                  </div>
                  <ProficiencyDots level={data.level} dotColor={category.dotColor} />
                </div>

                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={cn(
                        "text-xs px-2.5 py-1 text-slate-800 dark:text-foreground bg-white dark:bg-transparent border-slate-200/90 dark:border-border hover:bg-primary/10 hover:border-primary/50 hover:text-primary hover:-translate-y-0.5 hover:shadow-xs active:scale-95 transition-all duration-200 cursor-default"
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}