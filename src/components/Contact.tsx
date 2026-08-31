import { cn } from "@/lib/utils";
import { profile } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Link, GitBranch, ExternalLink, Send } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    description: "Best way to reach me",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\D/g, "")}`,
    icon: Phone,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20",
    description: "Available for calls",
  },
  {
    label: "Location",
    value: profile.location,
    href: "#",
    icon: MapPin,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
    description: "Jaipur, Rajasthan",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
    icon: Link,
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
    icon: GitBranch,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
    description: "Projects & contributions",
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently open to full-time opportunities and freelance projects. Feel free to reach out!
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contactItems.map((item, index) => (
            <Card
              key={item.label}
              className={cn(
                "border-border hover:border-primary/50 transition-colors group",
                item.external ? "cursor-pointer" : ""
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={cn("p-4 rounded-xl flex-shrink-0", item.bgColor, item.borderColor)}>
                    <item.icon className={cn("h-6 w-6", item.color)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    <div className="mt-3">
                      {item.external ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-1 h-auto px-3 py-1.5 text-muted-foreground hover:text-foreground"
                          asChild
                        >
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm"
                          >
                            {item.value}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      ) : (
                        <a
                          href={item.href}
                          className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
                        >
                          {item.value}
                          <Send className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
              </Card>
          ))}
        </div>

        <div className="text-center p-8 bg-card rounded-2xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-4">Availability</h3>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to Opportunities
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              Full-time & Contract
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              Remote / Hybrid / On-site
            </span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm actively looking for Full Stack Developer roles with AI integration focus. Let's build something amazing together!
          </p>
          <Button
            size="lg"
            asChild
            className="gap-2"
          >
            <a href={`mailto:${profile.email}?subject=Job Opportunity - Full Stack Developer`}>
              <Send className="h-4 w-4" />
              Send me an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}