"use client";

import { profile, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { GitBranch, Link, Mail, Heart, Code } from "lucide-react";

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-background/50"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-foreground">AR</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Link className="h-5 w-5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GitBranch className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "About", href: "#about" },
                  { label: "Experience", href: "#experience" },
                  { label: "Projects", href: "#projects" },
                  { label: "Skills", href: "#skills" },
                  { label: "Education", href: "#education" },
                  { label: "Certificates", href: "#certificates" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Code className="h-4 w-4" />
                Built with Next.js
              </span>
              <span className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-red-500" />
                by Anmol Raj
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}