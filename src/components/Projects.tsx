"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Projects() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-medium mb-4">
            Featured Work
          </div>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Real-world apps showcasing full-stack and AI integration skills.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover={reducedMotion ? undefined : { y: -5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group rounded-2xl transition-all duration-300 hover:shadow-[0_12px_36px_-6px_rgba(124,58,237,0.22)] dark:hover:shadow-[0_12px_36px_-6px_rgba(168,85,247,0.28)]"
            >
              <SpotlightCard className="h-full rounded-2xl" spotlightColor="rgba(168, 85, 247, 0.2)">
                <Card className="h-full border border-border bg-card/80 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/60 dark:group-hover:border-purple-400/60 rounded-2xl overflow-hidden flex flex-col justify-between">
                
                {/* Top gradient accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity" />

                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} - Project screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background active:scale-95 transition-transform"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live demo`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background active:scale-95 transition-transform"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} source code`}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-2 pt-3 px-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                    {"status" in project && project.status && (
                      <Badge variant="outline" className="text-xs text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10 gap-1 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {project.status as string}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base font-bold group-hover:text-primary transition-colors leading-tight">
                    {project.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-4 pt-0 space-y-3">
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs gap-1"
                      >
                        <Code className="h-3 w-3" />
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    asChild
                    size="sm"
                    className="w-full gap-2 mt-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.98] transition-all shadow-sm hover:shadow-purple-500/20"
                  >
                    <Link href={project.caseStudyUrl || "/#projects"}>
                      View Case Study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
                </Card>
              </SpotlightCard>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
