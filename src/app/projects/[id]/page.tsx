import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Target,
  Wrench,
  TrendingUp,
  Home,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { projects } from "@/lib/constants";
import { getProjectDetail } from "@/data/projectDetails";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} - Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.name} - Case Study | Anmol Raj`,
      description: project.description,
      url: `https://anmolraj.vercel.app/projects/${project.id}`,
    },
  };
}

export default async function ProjectCaseStudy({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  const detail = getProjectDetail(id);

  if (!project || !detail) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="h-3 w-3" />
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
           <Link href="/projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground truncate max-w-[200px] sm:max-w-none">{project.name}</span>
        </nav>

        <Link
            href="/projects"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-6 group"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Back to all projects
        </Link>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              Case Study
            </Badge>
            <Badge variant="outline" className="text-xs">
              {project.tech[0]}
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            {project.name}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        </header>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border mb-8">
          <Image
            src={project.image}
            alt={`${project.name} - Project screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <Button asChild className="gap-2">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" />
              View Source
            </a>
          </Button>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Project Overview
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{detail.longDescription}</p>
        </section>

        {detail.metrics && (
          <section className="mb-10">
            <div className="grid grid-cols-3 gap-3">
              {detail.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-xl border border-border text-center"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="p-5 bg-card rounded-xl border border-border">
            <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-orange-400" />
              The Problem
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{detail.problem}</p>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border">
            <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              The Solution
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{detail.solution}</p>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Wrench className="h-5 w-5 text-primary" />
            Key Features
          </h2>
          <div className="space-y-3">
            {detail.features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="p-1.5 bg-primary/10 rounded-md text-primary flex-shrink-0 h-fit">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Badge variant="outline" className="px-2 py-0.5 text-xs">Stack</Badge>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Architecture
          </h2>
          <div className="p-5 bg-card rounded-xl border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">{detail.architecture}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-400" />
            Challenges & Solutions
          </h2>
          <div className="space-y-3">
            {detail.challenges.map((challenge, index) => (
              <div
                key={index}
                className="p-4 bg-card rounded-xl border border-border"
              >
                <h3 className="text-sm font-bold text-foreground mb-1.5">{challenge.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            Key Learnings
          </h2>
          <ul className="space-y-2">
            {detail.keyLearnings.map((learning, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 p-3 bg-card rounded-lg border border-border"
              >
                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-muted-foreground leading-relaxed">{learning}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-2xl border border-primary/20 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Interested in this project?
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
            Try the live demo, explore the source code, or get in touch to discuss similar work.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="gap-2">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Try Live Demo
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4" />
                View Source
              </a>
            </Button>
            <Button variant="ghost" asChild className="gap-2">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            Contact Me
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}