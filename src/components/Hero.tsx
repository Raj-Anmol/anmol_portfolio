"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Mail, Eye, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { TwitterOfficialIcon } from "@/components/icons/TwitterOfficialIcon";
import { profile, stats, socialLinks } from "@/lib/constants";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const wordVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const socialIcons = [
  { label: "GitHub", href: socialLinks.github, Icon: GithubIcon },
  { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedinIcon },
  { label: "Twitter", href: socialLinks.twitter, Icon: TwitterOfficialIcon },
  { label: "Email", href: socialLinks.email, Icon: Mail },
  { label: "Resume", href: profile.resumeUrl, Icon: Eye },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16 bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/70 via-background to-background dark:bg-black/95 dark:from-purple-900/30 dark:via-black dark:to-black overflow-x-hidden transition-colors duration-300"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center w-full"
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 mb-4 sm:mb-5"
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

          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:bg-green-500/10 dark:border-green-500/30 dark:text-green-400 text-xs sm:text-sm font-medium mb-4 sm:mb-5"
            aria-live="polite"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-green-400" />
            </span>
            Available for Opportunities
          </motion.div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-foreground mb-3 sm:mb-4 text-center leading-[1.15]"
          >
            <span className="inline-block whitespace-nowrap">
              <motion.span custom={0} variants={wordVariants} initial="hidden" animate="visible" className="inline-block mr-1.5 sm:mr-2.5">
                Hi,
              </motion.span>
              <motion.span custom={1} variants={wordVariants} initial="hidden" animate="visible" className="inline-block mr-2 sm:mr-3">
                I&apos;m
              </motion.span>
            </span>{" "}
            <span className="inline-block whitespace-nowrap bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-800 dark:from-white dark:via-purple-200 dark:to-purple-400 bg-clip-text text-transparent">
              <motion.span custom={2} variants={wordVariants} initial="hidden" animate="visible" className="inline-block mr-1.5 sm:mr-2.5">
                Anmol
              </motion.span>
              <motion.span custom={3} variants={wordVariants} initial="hidden" animate="visible" className="inline-block">
                Raj
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed px-2 text-balance"
          >
            Full Stack Developer specializing in the MERN stack, building production web applications with AI integration.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            <Button
              asChild
              size="lg"
              className="h-11 px-7 rounded-xl font-medium w-full sm:w-auto gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-purple-500/20 active:scale-[0.98] transition-all"
            >
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
                aria-label="View Resume PDF in new tab"
              >
                <Eye className="h-4 w-4" />
                <span>View Resume</span>
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 px-7 rounded-xl font-medium w-full sm:w-auto gap-2 border border-slate-300/90 bg-white hover:bg-slate-100 text-slate-800 hover:text-slate-900 active:scale-[0.98] transition-all dark:border-border/80 dark:bg-transparent dark:text-white dark:hover:border-purple-500/50 dark:hover:bg-purple-500/10"
            >
              <Link href="/contact" className="inline-flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Statistics & Bottom Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full max-w-3xl mx-auto mt-8 sm:mt-12"
      >
        {/* Responsive Statistics Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 max-w-lg mx-auto w-full px-1 sm:px-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-xs dark:bg-white/[0.03] dark:border-white/5 backdrop-blur-sm min-w-0"
            >
              <div className="text-base sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-foreground tabular-nums dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs text-slate-600 dark:text-muted-foreground uppercase tracking-wider font-semibold mt-1 truncate max-w-full">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          {socialIcons.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200/90 shadow-xs text-slate-600 hover:text-slate-900 hover:border-primary/50 hover:bg-slate-50 dark:bg-white/5 dark:border-white/10 dark:text-muted-foreground dark:hover:text-foreground dark:hover:border-purple-500/50 dark:hover:bg-white/10 dark:hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-95 transition-all duration-300"
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={() => {
            const nextSection = document.getElementById("about");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
          className="flex flex-col items-center gap-1 mx-auto text-muted-foreground hover:text-foreground transition-colors duration-300 focus:outline-none focus-visible:text-foreground"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
