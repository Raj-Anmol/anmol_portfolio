"use client";

import { motion } from "motion/react";
import { experience } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

export function Experience() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-700 dark:text-purple-400 text-sm font-medium mb-6">
            <span className="relative animate-pulse">
              <span className="absolute inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
            </span>
            Work Experience
          </div>

          <h2
            id="experience-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-700 via-indigo-600 to-pink-600 dark:from-blue-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent mb-4"
          >
            Experience
          </h2>

          <p className="text-muted-foreground dark:text-purple-300 text-base sm:text-lg md:text-lg leading-relaxed">
            Internships in AI, cloud, and full-stack development.
          </p>
        </motion.header>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.article
                key={index}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 sm:pl-16 group"
              >
                <div className="absolute left-0 top-1">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 shadow-md shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">
                      {exp.role.charAt(0).toUpperCase() + exp.role.slice(1).substring(0, 3)}
                    </span>
                  </div>
                  <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
                </div>

                <div className="bg-card border border-border shadow-xs dark:bg-gradient-to-b dark:from-white/[0.07] dark:to-white/[0.02] dark:border-purple-500/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 dark:hover:border-purple-500/60 hover:shadow-[0_12px_30px_-6px_rgba(124,58,237,0.2)] dark:hover:shadow-[0_12px_30px_-6px_rgba(168,85,247,0.28)] hover:-translate-y-1.5 will-change-transform transition-all duration-300 ease-out">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {"type" in exp && exp.type && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <p className="text-purple-700 dark:text-purple-300 font-semibold text-sm sm:text-base mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground flex-wrap">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-4">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 leading-relaxed text-sm text-slate-700 dark:text-foreground/85">
                        <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2" />
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full rounded-full border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 hover:text-slate-900 hover:border-purple-500/50 hover:shadow-sm dark:border-purple-500/20 dark:bg-transparent dark:text-purple-300 dark:hover:border-purple-500/60 dark:hover:shadow-[0_4px_25px_rgba(168,85,247,0.25)] hover:scale-[1.01] active:scale-[0.98] transition-all py-2 text-sm font-medium">
                      <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                        Verify Certificate
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
