"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Mail, Eye, ChevronDown, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { TwitterOfficialIcon } from "@/components/icons/TwitterOfficialIcon";
import { profile, stats, socialLinks } from "@/lib/constants";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const buttonContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const buttonItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const statsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.55,
    },
  },
};

const statCardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const socialIcons = [
  { label: "GitHub", href: socialLinks.github, Icon: GithubIcon },
  { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedinIcon },
  { label: "Twitter", href: socialLinks.twitter, Icon: TwitterOfficialIcon },
  { label: "Email", href: socialLinks.email, Icon: Mail },
  { label: "Resume", href: profile.resumeUrl, Icon: Eye },
];

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/70 via-background to-background dark:bg-black/95 dark:from-purple-900/30 dark:via-black dark:to-black overflow-hidden transition-colors duration-300"
      aria-labelledby="hero-heading"
    >
      {/* Ambient Purple Gradient Orbs (Non-intrusive, pointer-events-none, z-0) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Orb 1: Center Ambient Glow */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full bg-purple-500/20 dark:bg-purple-600/20 blur-[110px] animate-pulse-glow" />

        {/* Orb 2: Upper Right Floating */}
        <div className="absolute -top-12 -right-12 sm:top-10 sm:right-1/4 w-72 h-72 sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-br from-violet-400/25 to-indigo-400/20 dark:from-indigo-600/20 dark:to-purple-700/15 blur-[95px] animate-float-slow" />

        {/* Orb 3: Bottom Left Floating */}
        <div className="absolute bottom-6 -left-12 sm:bottom-12 sm:left-1/4 w-64 h-64 sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-purple-400/25 to-pink-400/15 dark:from-purple-900/25 dark:to-indigo-900/15 blur-[90px] animate-float" />
      </div>

      {/* Subtle masked grid pattern for premium depth like reference */}
      <div
        className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 dark:opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center relative z-10">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full"
        >
          {/* Profile Photo with Entrance Scale and Gentle Ambient Float */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-5"
          >
            <motion.div
              animate={reducedMotion ? undefined : { y: [-3, 3, -3] }}
              transition={
                reducedMotion
                  ? undefined
                  : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
              }
              className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 will-change-transform"
            >
              <Image
                src={profile.profileImage}
                alt="Anmol Raj - Full Stack Developer"
                fill
                className="rounded-full object-cover ring-2 ring-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                priority
                sizes="(max-width: 640px) 128px, (max-width: 768px) 176px, 208px"
                quality={85}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </motion.div>
          </motion.div>

          {/* Availability Badge (Subtle Fade-in) */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:bg-green-500/10 dark:border-green-500/30 dark:text-green-400 text-xs sm:text-sm font-medium mb-4 sm:mb-5 transition-transform hover:scale-[1.02]"
            aria-live="polite"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-green-400" />
            </span>
            Available for Internships & Junior Roles
          </motion.div>

          {/* Main Heading with Smooth Fade-up & Subtle Shimmer Accent */}
          <motion.h1
            id="hero-heading"
            variants={headingVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-foreground mb-3 sm:mb-4 text-center leading-[1.15]"
          >
            <span className="inline-block whitespace-nowrap mr-1.5 sm:mr-2.5">
              Hi, I&apos;m
            </span>{" "}
            <span className="inline-block whitespace-nowrap bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent animate-shimmer-text">
              Anmol Raj
            </span>
          </motion.h1>

          {/* Description (Fade-up with slight delay) */}
          <motion.p
            variants={descriptionVariants}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed px-2 text-balance"
          >
            Full Stack Developer specializing in React, Next.js & Node.js, building scalable web applications with AI integration.
          </motion.p>

          {/* Action Buttons (Staggered Fade-up) */}
          <motion.div
            variants={buttonContainerVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <motion.div variants={buttonItemVariants} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="h-11 px-6 rounded-xl font-medium w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-purple-500/20 active:scale-[0.98] transition-all hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Link href="#projects" className="inline-flex items-center justify-center gap-2">
                  <FolderGit2 className="h-4 w-4" />
                  <span>View Projects</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={buttonItemVariants} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 px-6 rounded-xl font-medium w-full sm:w-auto gap-2 border border-slate-300/90 bg-white hover:bg-slate-100 text-slate-800 hover:text-slate-900 active:scale-[0.98] transition-all dark:border-border/80 dark:bg-transparent dark:text-white dark:hover:border-purple-500/50 dark:hover:bg-purple-500/10"
              >
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    fetch("/api/resume-download", { method: "POST" }).catch(() => {});
                  }}
                  className="inline-flex items-center justify-center gap-2"
                  aria-label="View Resume PDF in new tab"
                >
                  <Eye className="h-4 w-4" />
                  <span>Resume</span>
                </a>
              </Button>
            </motion.div>

            <motion.div variants={buttonItemVariants} className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 px-6 rounded-xl font-medium w-full sm:w-auto gap-2 border border-slate-300/90 bg-white hover:bg-slate-100 text-slate-800 hover:text-slate-900 active:scale-[0.98] transition-all dark:border-border/80 dark:bg-transparent dark:text-white dark:hover:border-purple-500/50 dark:hover:bg-purple-500/10"
              >
                <Link href="/contact" className="inline-flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Contact Me</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Statistics & Bottom Controls */}
      <div className="w-full max-w-3xl mx-auto mt-8 sm:mt-12 relative z-10">
        {/* Responsive Statistics Grid with Sequential Entrance */}
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-lg mx-auto w-full px-1 sm:px-0"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statCardVariants}
              whileHover={reducedMotion ? undefined : { y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs dark:bg-white/[0.03] dark:border-white/5 backdrop-blur-sm min-w-0 transition-all duration-300 hover:shadow-sm hover:border-primary/40 dark:hover:border-purple-500/30"
            >
              <div className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-foreground tabular-nums dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-600 dark:text-muted-foreground uppercase tracking-wider font-semibold mt-1 truncate max-w-full">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Icons with Smooth Scale Feedback */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6"
        >
          {socialIcons.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200/90 shadow-xs text-slate-600 hover:text-slate-900 hover:border-primary/50 hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-muted-foreground dark:hover:text-foreground dark:hover:border-purple-500/50 dark:hover:bg-white/10 dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-90 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          onClick={() => {
            const nextSection = document.getElementById("about");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
          className="flex flex-col items-center gap-1 mx-auto text-muted-foreground hover:text-foreground transition-colors duration-300 focus:outline-none focus-visible:text-foreground active:scale-95"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-scroll-indicator" />
        </motion.button>
      </div>
    </section>
  );
}
