"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { projects } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

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
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px 0px" }}
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

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full"
            >
              <div className="h-full rounded-2xl border border-border bg-card/90 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-purple-500/60 dark:hover:border-purple-400/60 hover:shadow-[0_20px_40px_-12px_rgba(124,58,237,0.25)] dark:hover:shadow-[0_20px_40px_-12px_rgba(168,85,247,0.32)] will-change-transform flex flex-col justify-between overflow-hidden">
                <SpotlightCard className="h-full flex flex-col justify-between" spotlightColor="rgba(168, 85, 247, 0.18)">
                  <div>
                    {/* Top gradient accent line */}
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.name} - Project screenshot`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={75}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

                      {/* Top Action Buttons with hover scale and purple aura */}
                      <div className="absolute top-3 right-3 flex gap-2 z-10">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-lg bg-background/80 backdrop-blur-md border border-border/60 hover:border-purple-500/50 hover:bg-white dark:hover:bg-purple-950/80 hover:text-purple-600 dark:hover:text-purple-300 hover:shadow-md hover:shadow-purple-500/20 hover:scale-110 active:scale-95 transition-all duration-200"
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
                          className="h-8 w-8 rounded-lg bg-background/80 backdrop-blur-md border border-border/60 hover:border-purple-500/50 hover:bg-white dark:hover:bg-purple-950/80 hover:text-purple-600 dark:hover:text-purple-300 hover:shadow-md hover:shadow-purple-500/20 hover:scale-110 active:scale-95 transition-all duration-200"
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
                    </CardContent>
                  </div>

                  <div className="p-4 pt-0">
                    <Button
                      asChild
                      size="sm"
                      className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.98] transition-all shadow-sm hover:shadow-purple-500/20"
                    >
                      <Link href={project.caseStudyUrl || "/#projects"}>
                        <span>View Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </SpotlightCard>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
