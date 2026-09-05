"use client";

import Link from "next/link";
import { profile, siteConfig, socialLinks } from "@/lib/constants";
import { Mail, Heart, FileText, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

const quickLinksLeft = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

const quickLinksRight = [
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/50 mt-8" role="contentinfo">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-foreground">Anmol Raj</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 text-xs font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              Open to Work
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Quick Links</h4>
            <nav aria-label="Footer navigation - left column">
              <ul className="space-y-2">
                {quickLinksLeft.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider invisible md:visible">&nbsp;</h4>
            <nav aria-label="Footer navigation - right column">
              <ul className="space-y-2">
                {quickLinksRight.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 mb-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group"
                aria-label="Send email to Anmol Raj"
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate">{profile.email}</span>
              </a>
              <a
                href="https://maps.app.goo.gl/mZndMdJXAeTUZnmM8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                aria-label="View Jaipur location on Google Maps"
              >
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                <span>Jaipur, Rajasthan</span>
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                aria-label="View resume PDF"
              >
                <FileText className="h-3.5 w-3.5 flex-shrink-0" />
                <span>View Resume (PDF)</span>
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Heart className="h-3 w-3 text-red-500" />
              Made with care
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}