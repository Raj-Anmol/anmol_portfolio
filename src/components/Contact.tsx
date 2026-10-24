"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, ExternalLink, Send, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`,
    icon: Mail,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    description: "Best way to reach me",
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    href: "https://maps.app.goo.gl/mZndMdJXAeTUZnmM8",
    icon: MapPin,
    color: "text-amber-600 dark:text-orange-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    description: "Jaipur, Rajasthan",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
    icon: LinkedinIcon,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    description: "Professional network",
    external: true,
  },
  {
    label: "GitHub",
    value: "View my code",
    href: profile.github,
    icon: GithubIcon,
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    description: "Projects & contributions",
    external: true,
  },
  {
    label: "Resume",
    value: "View PDF",
    href: profile.resumeUrl,
    icon: FileText,
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    description: "View my full CV (PDF)",
    external: true,
  },
];

export function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Available for software development internships, entry-level jobs, and junior developer opportunities. Feel free to reach out!
          </p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={reducedMotion ? undefined : { y: -3 }}
              transition={{ delay: index * 0.05, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card
                className={cn(
                  "border-border transition-all duration-300 hover:border-purple-500/40 hover:shadow-md group h-full",
                  item.external ? "cursor-pointer" : ""
                )}
              >
                <CardContent className="p-3.5 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={cn("p-2.5 sm:p-3.5 rounded-xl flex-shrink-0", item.bgColor, item.borderColor)}>
                      <item.icon className={cn("h-5 w-5 sm:h-6 sm:w-6", item.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-foreground">{item.label}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-muted-foreground mt-0.5 sm:mt-1">{item.description}</p>
                      <div className="mt-2 sm:mt-3">
                        {item.external ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1 h-auto px-2.5 py-1 sm:px-3 sm:py-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-muted-foreground dark:hover:text-foreground dark:hover:bg-muted/50"
                            asChild
                          >
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => {
                                if (item.label === "Resume") {
                                  fetch("/api/resume-download", { method: "POST" }).catch(() => {});
                                }
                              }}
                              className="flex items-center gap-1 text-xs sm:text-sm"
                            >
                              <span className="truncate">{item.value}</span>
                              <ExternalLink className="h-3 w-3 flex-shrink-0" />
                            </a>
                          </Button>
                        ) : (
                          <a
                            href={item.href}
                            className="text-primary hover:underline text-xs sm:text-sm font-medium flex items-center gap-1"
                          >
                            <span className="truncate">{item.value}</span>
                            <Send className="h-3 w-3 flex-shrink-0" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
