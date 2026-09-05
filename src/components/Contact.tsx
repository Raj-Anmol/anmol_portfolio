"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/constants";
import { contactSchema, type ContactFormValues } from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, ExternalLink, Send, FileText, Loader2, CheckCircle2, User, MessageSquare } from "lucide-react";
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
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      reset();
      toast.success("Message sent! I'll get back to you soon.");
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      toast.error("Could not send message. Please email me directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <Toaster position="top-center" richColors theme="dark" />
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Open to full-time opportunities. Feel free to reach out!
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-border bg-card/80 backdrop-blur-sm">
            <CardContent className="p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Send a message</h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-green-500 mb-3" />
                  <h4 className="text-base font-semibold text-foreground mb-1">Message sent!</h4>
                  <p className="text-sm text-muted-foreground">Thanks for reaching out. I'll reply soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                        {...register("name")}
                        className={cn(
                          "w-full pl-10 pr-3 py-2.5 text-sm bg-background border rounded-lg outline-none transition-colors",
                          "focus:border-primary focus:ring-2 focus:ring-primary/20",
                          errors.name ? "border-red-500" : "border-border"
                        )}
                        style={{ fontSize: "16px" }}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="sr-only">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="your.email@example.com"
                        autoComplete="email"
                        {...register("email")}
                        className={cn(
                          "w-full pl-10 pr-3 py-2.5 text-sm bg-background border rounded-lg outline-none transition-colors",
                          "focus:border-primary focus:ring-2 focus:ring-primary/20",
                          errors.email ? "border-red-500" : "border-border"
                        )}
                        style={{ fontSize: "16px" }}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="sr-only">Message</label>
                    <textarea
                      id="contact-message"
                      placeholder="Tell me about your project, opportunity, or just say hi..."
                      rows={5}
                      {...register("message")}
                      className={cn(
                        "w-full px-3 py-2.5 text-sm bg-background border rounded-lg outline-none transition-colors resize-none",
                        "focus:border-primary focus:ring-2 focus:ring-primary/20",
                        errors.message ? "border-red-500" : "border-border"
                      )}
                      style={{ fontSize: "16px" }}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full gap-2" size="lg">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground">
                    Your message is validated and sent securely. Or email me directly at {profile.email}
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
