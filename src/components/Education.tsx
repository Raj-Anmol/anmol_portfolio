"use client";

import { motion, type Variants } from "motion/react";
import { education } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award, Building2 } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Education() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="education-heading"
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
            Education
          </div>
          <h2 id="education-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
            Education
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Academic background and continuous learning.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.article
              key={index}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card rounded-2xl border border-border p-5 hover:border-purple-500/50 hover:shadow-[0_12px_30px_-6px_rgba(124,58,237,0.2)] dark:hover:border-purple-400/50 dark:hover:shadow-[0_12px_30px_-6px_rgba(168,85,247,0.28)] hover:-translate-y-1.5 will-change-transform transition-all duration-300 ease-out"
            >
              <div className="absolute -top-3 left-6">
                <div className="p-2 bg-primary rounded-full text-primary-foreground shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>

              <div className="pt-3 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium text-sm mt-0.5">{edu.institution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <div className="p-1.5 bg-background rounded-md text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Location</p>
                      <p className="text-xs text-foreground">{edu.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <div className="p-1.5 bg-background rounded-md text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Duration</p>
                      <p className="text-xs text-foreground">{edu.period}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Data Structures & Algorithms",
                      "Object Oriented Programming",
                      "Database Management Systems",
                      "Computer Networks",
                      "Operating Systems",
                      "Software Engineering",
                      "Web Technologies",
                      "Machine Learning Basics",
                    ].map((course, courseIndex) => (
                      <Badge key={courseIndex} variant="outline" className="text-xs transition-colors hover:border-primary/40 hover:text-primary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    Activities & Achievements
                  </h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {[
                      "Active participant in coding competitions",
                      "Member of Technical Society",
                      "AI/ML certification courses",
                    ].map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-secondary" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Continuously learning through certifications, online courses, and hands-on projects.
          </p>
        </div>
      </div>
    </section>
  );
}
