"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Wrench,
  GraduationCap,
  Award,
  Mail,
  FileText,
  Search,
  ArrowRight,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { profile } from "@/lib/constants";

const navItems = [
  { label: "Home", href: "/", icon: Home, keywords: "hero landing" },
  { label: "About", href: "/about", icon: User, keywords: "bio introduction" },
  { label: "Experience", href: "/experience", icon: Briefcase, keywords: "internship work job" },
  { label: "Projects", href: "/projects", icon: FolderKanban, keywords: "portfolio case study" },
  { label: "Skills", href: "/skills", icon: Wrench, keywords: "tech stack tools" },
  { label: "Education", href: "/education", icon: GraduationCap, keywords: "degree university" },
  { label: "Certificates", href: "/certificates", icon: Award, keywords: "verified credential" },
  { label: "Contact", href: "/contact", icon: Mail, keywords: "reach out message" },
];

const socialItems = [
  { label: "View Resume (PDF)", href: profile.resumeUrl, icon: FileText, external: true },
  { label: "GitHub Profile", href: profile.github, icon: GithubIcon, external: true },
  { label: "LinkedIn Profile", href: profile.linkedin, icon: LinkedinIcon, external: true },
  { label: "Send Email", href: `mailto:${profile.email}`, icon: Mail, external: true },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback(
    (command: () => void) => {
      setOpen(false);
      command();
    },
    []
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 md:hidden h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Open command palette"
      >
        <Search className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Command className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Command.Input
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                  />
                  <kbd className="hidden sm:inline-flex h-5 px-1.5 items-center text-[10px] font-mono text-muted-foreground border border-border rounded">
                    ESC
                  </kbd>
                </div>
                <Command.List className="max-h-[60vh] overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                    No results found.
                  </Command.Empty>

                  <Command.Group heading="Navigation" className="text-xs text-muted-foreground px-2 py-1.5">
                    {navItems.map((item) => (
                      <Command.Item
                        key={item.href}
                        value={`${item.label} ${item.keywords}`}
                        onSelect={() => runCommand(() => router.push(item.href))}
                        className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm cursor-pointer aria-selected:bg-muted"
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        <span>{item.label}</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground ml-auto" />
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Separator className="h-px bg-border my-1" />

                  <Command.Group heading="External Links" className="text-xs text-muted-foreground px-2 py-1.5">
                    {socialItems.map((item) => (
                      <Command.Item
                        key={item.label}
                        value={item.label}
                        onSelect={() =>
                          runCommand(() => {
                            if (item.href.startsWith("mailto:")) {
                              window.location.href = item.href;
                            } else {
                              window.open(item.href, "_blank", "noopener,noreferrer");
                            }
                          })
                        }
                        className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm cursor-pointer aria-selected:bg-muted"
                      >
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                        <span>{item.label}</span>
                        <ArrowRight className="h-3 w-3 text-muted-foreground ml-auto" />
                      </Command.Item>
                    ))}
                  </Command.Group>
                </Command.List>

                <div className="flex items-center justify-between px-3 py-2 border-t border-border text-[10px] text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 border border-border rounded font-mono">↑↓</kbd>
                    <span>navigate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <kbd className="px-1.5 py-0.5 border border-border rounded font-mono">↵</kbd>
                    <span>select</span>
                  </div>
                </div>
              </Command>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
