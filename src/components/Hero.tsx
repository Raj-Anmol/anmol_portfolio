"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, GitBranch, Link, Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/lib/constants";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left animate-in" style={{ animationDelay: "100ms" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to opportunities
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance"
            >
              Hi, I&apos;m <span className="text-primary">Anmol Raj</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {profile.title}
            </p>

            <p className="text-base text-muted-foreground/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {profile.summary}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="gap-2"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="gap-2"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Link className="h-5 w-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="h-5 w-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          <div className="relative animate-in" style={{ animationDelay: "200ms" }}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-full blur-3xl" />
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src={profile.profileImage}
                  alt="Anmol Raj - Full Stack Developer"
                  fill
                  className="rounded-full object-cover border-4 border-border shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-xl">
                  <ArrowRight className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10 text-center">
              <div className="p-4 bg-card rounded-xl border border-border">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{profile.location}</p>
                <p className="text-xs text-muted-foreground">Current Location</p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border">
                <MapPin className="h-6 w-6 text-secondary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{profile.origin}</p>
                <p className="text-xs text-muted-foreground">Native Place</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-6 w-6 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}