"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { experience } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Award, Building2 } from "lucide-react";

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
          <h2 id="experience-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Internships in AI, cloud, and full-stack development.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            {experience.map((exp, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="relative pl-10 sm:pl-16"
              >
                <div className="absolute left-0 top-1">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                    {index === 0 ? (
                      <Award className="h-5 w-5" />
                    ) : (
                      <Building2 className="h-5 w-5" />
                    )}
                  </div>
                  <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
                </div>

                <div className="bg-card rounded-xl border border-border backdrop-blur-sm p-5 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
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

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-sm">
                        <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2"
                  >
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Certificate
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.article>
            ))}

            <div className="absolute left-4 sm:left-8 bottom-0 h-10 w-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-background border-2 border-border flex items-center justify-center">
              <Award className="h-4 w-4 text-muted-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
