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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
            aria-label="Anmol Raj - Home"
          >
            Anmol<span className="text-primary">.</span>
          </Link>

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

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="h-10 w-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden">
            <div
              className="fixed inset-0 bg-background/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto overflow-x-hidden animate-in fade-in duration-200"
              aria-modal="true"
              role="dialog"
            >
              <div>
                {/* Mobile Header Bar */}
                <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-border/80">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
                    aria-label="Anmol Raj - Home"
                  >
                    Anmol<span className="text-primary">.</span>
                  </Link>

                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-10 w-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="px-4 py-4 flex flex-col gap-1 max-w-md mx-auto">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-3 py-1 mb-1">
                    Navigation
                  </div>
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-3 text-base font-medium transition-colors rounded-xl",
                          active
                            ? "text-primary bg-primary/10 font-semibold"
                            : "text-foreground/80 hover:text-foreground hover:bg-muted/50 active:bg-muted/70"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        <span>{item.label}</span>
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 sm:p-6 border-t border-border/80 bg-muted/20 max-w-md mx-auto w-full space-y-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full h-11 inline-flex items-center justify-center gap-2 px-4 text-sm font-semibold rounded-xl border border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 active:scale-[0.98] transition-all"
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
                    className="p-2.5 rounded-xl bg-muted/60 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-muted/60 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
