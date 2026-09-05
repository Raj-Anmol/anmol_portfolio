"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Code, Layout, Server, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    key: "languages",
    label: "Languages",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    key: "frontend",
    label: "Frontend",
    icon: Layout,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
  {
    key: "backend",
    label: "Backend",
    icon: Server,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20",
  },
  {
    key: "databases",
    label: "Databases",
    icon: Database,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
  },
  {
    key: "cloudTools",
    label: "Cloud & Tools",
    icon: Cloud,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
  },
] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const categoryVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProficiencyDots({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Proficiency: ${level} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.span
          key={i}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 300 }}
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            i <= level ? color.replace("text-", "bg-") : "bg-muted"
          )}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Proficient in MERN stack, AI integration, and cloud technologies.
          </p>
        </header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          {skillCategories.map((category) => {
            const data = skills[category.key as keyof typeof skills];
            return (
              <motion.div
                key={category.key}
                variants={categoryVariants}
                className="border border-border bg-card/80 backdrop-blur-sm rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className={cn("p-2.5 rounded-lg", category.bgColor, category.borderColor)}>
                      <category.icon className={cn("h-5 w-5", category.color)} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{category.label}</h3>
                  </div>
                  <ProficiencyDots level={data.level} color={category.color} />
                </div>

                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={cn(
                        "text-xs px-2.5 py-1 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default",
                        "border-border"
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
