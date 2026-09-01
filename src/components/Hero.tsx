"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Eye, Briefcase } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { profile } from "@/lib/constants";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left animate-in w-full" style={{ animationDelay: "100ms" }}>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4" aria-live="polite">
              <Briefcase className="h-3.5 w-3.5 mr-1" />
              <span className="relative flex h-2 w-2 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Open to opportunities
            </div>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 text-balance"
            >
              Hi, I&apos;m <span className="text-primary">Anmol Raj</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
              {profile.title}
            </p>

            <p className="text-sm text-muted-foreground/80 mb-5 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {profile.summary}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 mb-5">
              <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="gap-2 w-full sm:w-auto"
              >
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Resume PDF in new tab"
                >
                  <Eye className="h-4 w-4" />
                  <span className="sm:inline">View Resume</span>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  <span className="sm:inline">Get in Touch</span>
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-muted-foreground">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative animate-in w-full flex flex-col items-center" style={{ animationDelay: "200ms" }}>
            <div className="relative w-full max-w-[180px] sm:max-w-xs md:max-w-[220px] lg:max-w-sm mx-auto">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 rounded-full blur-2xl sm:blur-3xl" />
              <div className="relative aspect-square max-w-[180px] sm:max-w-xs md:max-w-[220px] lg:max-w-sm mx-auto">
                <Image
                  src={profile.profileImage}
                  alt="Anmol Raj - Full Stack Developer"
                  fill
                  className="rounded-full object-cover border-2 sm:border-4 border-border shadow-lg sm:shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 256px, 320px"
                  quality={75}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5 w-full max-w-[280px] sm:max-w-md">
              <div className="p-2.5 sm:p-3 bg-card rounded-xl border border-border">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground truncate">{profile.location}</p>
                <p className="text-xs text-muted-foreground">Current Location</p>
              </div>
              <div className="p-2.5 sm:p-3 bg-card rounded-xl border border-border">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-secondary mx-auto mb-1" />
                <p className="text-xs font-medium text-foreground truncate">{profile.origin}</p>
                <p className="text-xs text-muted-foreground">Native Place</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg className="h-5 w-5 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}