"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { experience } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, MapPin, Clock } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
            <span className="relative animate-pulse">
              <span className="absolute inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500" />
            </span>
            Work Experience
          </div>

          <h2
            id="experience-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent"
          >
            Experience
          </h2>

          <p className="text-purple-300 text-base sm:text-lg md:text-lg leading-relaxed">
            Internships in AI, cloud, and full-stack development.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px"}}
            variants={containerVariants}
            className="space-y-8"
          >
            {experience.map((exp, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative pl-10 sm:pl-16 group"
              >
                <div className="absolute left-0 top-1">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500">
                    <span className="text-white font-bold text-xs">
                      {exp.role.charAt(0).toUpperCase() + exp.role.slice(1).substring(0, 3)}
                    </span>
                  </div>
                  <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
                </div>

                <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-purple-500/20 backdrop-blur-xl rounded-2xl p-6 hover:border-purple-500/60 hover:shadow-[0_4px_25px_rgba(168,85,247,0.25)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-purple-300 font-medium text-sm sm:text-base mt-1">
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
                      <li key={bulletIndex} className="flex items-start leading-relaxed">
                        <span className="flex-shrink-0 h-2 w-2 rounded-full bg-emerald-500/60" />
                        <span className="flex-1">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Button
                      asChild
                      size="sm"
                      className="w-full rounded-full border border-purple-500/20 hover:border-purple-500/60 hover:shadow-[0_4px_25px_rgba(168,85,247,0.25)] transition-colors py-2 text-sm font-medium text-purple-400">
                      <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                        Verify Certificate
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
