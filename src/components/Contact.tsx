"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, ExternalLink, Send, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

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
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    description: "Jaipur, Rajasthan",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
    icon: LinkedinIcon,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    description: "Professional network",
    external: true,
  },
  {
    label: "GitHub",
    value: "View my code",
    href: profile.github,
    icon: GithubIcon,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    description: "Projects & contributions",
    external: true,
  },
  {
    label: "Resume",
    value: "View PDF",
    href: profile.resumeUrl,
    icon: FileText,
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "border-emerald-400/20",
    description: "View my full CV (PDF)",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Open to full-time opportunities. Feel free to reach out!
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <Card
                className={cn(
                  "border-border hover:border-primary/50 transition-colors group h-full",
                  item.external ? "cursor-pointer" : ""
                )}
              >
                <CardContent className="p-3.5 sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={cn("p-2.5 sm:p-3.5 rounded-xl flex-shrink-0", item.bgColor, item.borderColor)}>
                      <item.icon className={cn("h-5 w-5 sm:h-6 sm:w-6", item.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground">{item.label}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">{item.description}</p>
                      <div className="mt-2 sm:mt-3">
                        {item.external ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1 h-auto px-2.5 py-1 sm:px-3 sm:py-1.5 text-muted-foreground hover:text-foreground"
                            asChild
                          >
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
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
