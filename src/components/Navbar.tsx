"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Eye, Search } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { profile } from "@/lib/constants";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : mobileMenuOpen
            ? "bg-black border-b border-border"
            : "bg-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            aria-label="Anmol Raj - Home"
          >
            Anmol
          </Link>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-xs font-medium transition-colors rounded-md",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
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
            <ThemeToggle />
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true });
                document.dispatchEvent(event);
              }}
              className="hidden md:inline-flex items-center gap-2 h-8 px-3 text-xs text-muted-foreground border border-border rounded-md hover:border-primary/50 hover:text-foreground transition-colors"
              aria-label="Open command palette"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Quick search</span>
              <kbd className="ml-1 px-1.5 py-0.5 text-[10px] font-mono border border-border rounded">⌘K</kbd>
            </button>
            <div className="flex items-center gap-2">
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

          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-9 w-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute right-0 top-0 w-fit min-w-[140px] bg-black border border-border rounded-lg shadow-2xl p-2 z-50 animate-in">
            <div className="flex flex-col items-end gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium transition-colors rounded-md w-full text-right",
                      active
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-end gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-primary/50 text-primary hover:bg-primary/10 w-full"
                aria-label="View Resume PDF in new tab"
              >
                <Eye className="h-4 w-4" />
                View Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}