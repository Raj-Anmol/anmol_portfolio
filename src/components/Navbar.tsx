"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Eye, Search, X, Menu } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { profile } from "@/lib/constants";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body & html scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close menu when viewport resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 dark:bg-background/95 backdrop-blur-md border-b border-slate-200 dark:border-border shadow-sm"
            : "bg-white/80 dark:bg-background/80 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-slate-900 dark:text-foreground hover:text-primary transition-colors flex items-center"
              aria-label="Anmol Raj - Home"
            >
              Anmol<span className="text-primary">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1.5">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative px-2.5 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-md",
                      active
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
              <div className="h-4 w-px bg-border mx-1" />
              <ThemeToggle />
              <button
                onClick={() => {
                  const event = new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true });
                  document.dispatchEvent(event);
                }}
                className="hidden lg:inline-flex items-center gap-1.5 h-8 px-2.5 text-xs text-muted-foreground border border-border rounded-md hover:border-primary/50 hover:text-foreground transition-colors"
                aria-label="Open command palette"
              >
                <Search className="h-3 w-3" />
                <span>Search</span>
                <kbd className="ml-0.5 px-1 py-0.2 text-[9px] font-mono border border-border rounded">⌘K</kbd>
              </button>
              <div className="flex items-center gap-1 ml-1">
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
              </div>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="h-10 w-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-foreground bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors active:scale-95"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer (Rendered outside header to prevent backdrop-filter containing block issues) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden bg-white dark:bg-[#08080c] flex flex-col justify-between overflow-y-auto overflow-x-hidden animate-in fade-in duration-200 h-[100dvh]"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="flex flex-col flex-1 min-h-0">
            {/* Mobile Drawer Sticky Header Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between h-16 px-4 sm:px-6 bg-white/95 dark:bg-[#08080c]/95 backdrop-blur-md border-b border-slate-200 dark:border-border/80 flex-shrink-0">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold tracking-tight text-slate-900 dark:text-foreground hover:text-primary transition-colors flex items-center"
                aria-label="Anmol Raj - Home"
              >
                Anmol<span className="text-primary">.</span>
              </Link>

              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="h-10 w-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-foreground bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors active:scale-95"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Navigation Links Scrollable Area */}
            <div className="flex-1 px-4 py-4 sm:px-6 overflow-y-auto">
              <div className="max-w-md mx-auto">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-purple-300/70 px-3 py-1.5 mb-2">
                  Navigation
                </div>
                <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation links">
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-3 text-base font-medium transition-all rounded-xl",
                          active
                            ? "bg-purple-50 text-purple-700 font-semibold border border-purple-200/80 dark:bg-primary/15 dark:text-primary dark:border-primary/30"
                            : "text-slate-800 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 dark:text-foreground/90 dark:hover:text-foreground dark:hover:bg-white/5 dark:active:bg-white/10"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        <span>{item.label}</span>
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-purple-600 dark:bg-primary animate-pulse" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-border/80 bg-slate-50 dark:bg-[#0c0c14] flex-shrink-0">
            <div className="max-w-md mx-auto space-y-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  fetch("/api/resume-download", { method: "POST" }).catch(() => {});
                  setMobileMenuOpen(false);
                }}
                className="w-full h-11 inline-flex items-center justify-center gap-2 px-4 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-purple-500/20 active:scale-[0.98] transition-all"
                aria-label="View Resume PDF in new tab"
              >
                <Eye className="h-4 w-4" />
                <span>View Resume (PDF)</span>
              </a>

              <div className="flex items-center justify-center gap-4 pt-1">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/50 dark:bg-white/5 dark:border-white/10 dark:text-muted-foreground dark:hover:text-foreground dark:hover:border-purple-500/50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/50 dark:bg-white/5 dark:border-white/10 dark:text-muted-foreground dark:hover:text-foreground dark:hover:border-purple-500/50 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
