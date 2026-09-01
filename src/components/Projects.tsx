"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { projects, profile } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Real-world apps showcasing full-stack and AI integration skills.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} - Project screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
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
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background"
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
                    className="w-full gap-2 mt-1"
                  >
                    <Link href={project.caseStudyUrl || "/#projects"}>
                      View Case Study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            asChild
            className="gap-2"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              View All on GitHub
              <GithubIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}