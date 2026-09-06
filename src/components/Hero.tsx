"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { TwitterOfficialIcon } from "@/components/icons/TwitterOfficialIcon";
import { profile, stats, socialLinks } from "@/lib/constants";

const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const socialIcons = [
  { label: "GitHub", href: socialLinks.github, Icon: GithubIcon },
  { label: "LinkedIn", href: socialLinks.linkedin, Icon: LinkedinIcon },
  { label: "Twitter", href: socialLinks.twitter, Icon: TwitterOfficialIcon },
  { label: "Email", href: socialLinks.email, Icon: Mail },
];

export function Hero() {
  const nameWords = ["Hi,", "I'm", "Anmol", "Raj"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-8 sm:pb-12 bg-black/95 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-black to-black"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-5"
          >
            <Image
              src={profile.profileImage}
              alt="Anmol Raj - Full Stack Developer"
              fill
              className="rounded-full object-cover ring-2 ring-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.35)]"
              priority
              sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 224px"
              quality={85}
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs sm:text-sm font-medium mb-5"
            aria-live="polite"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Available for Opportunities
          </motion.div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 text-balance bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent flex flex-wrap justify-center gap-x-3"
          >
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground/80 mb-7 max-w-2xl leading-relaxed"
          >
            Full Stack Developer specializing in the MERN stack,
            <br className="hidden sm:block" />
            <span> building production web applications with AI integration.</span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button asChild size="lg" className="gap-2 w-full sm:w-auto">
              <Link href="/projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                <span>Contact Me</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full max-w-4xl mx-auto mt-10 sm:mt-12"
      >
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center p-2"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] tabular-nums">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
          {socialIcons.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-purple-500/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          ))}
        </div>

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
          className="flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-foreground/90 transition-colors duration-300 focus:outline-none focus-visible:text-foreground"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
