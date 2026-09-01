"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { projects, profile } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, ExternalLink, Code, Server, Database, Zap } from "lucide-react";

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Server,
  Database,
  Zap,
};

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development and AI integration skills.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.name} - Project screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-background/80 backdrop-blur-sm hover:bg-background"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-background/80 backdrop-blur-sm hover:bg-background"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} source code`}
                      >
                        <GitBranch className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>

                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs gap-1"
                      >
                        <Code className="h-3 w-3" />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects coming soon...
          </p>
          <Button
            variant="outline"
            asChild
            className="gap-2"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              View All on GitHub
              <GitBranch className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}