import { cn } from "@/lib/utils";
import { experience } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin, Award, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="experience-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional internships and hands-on experience with AI, cloud technologies, and full-stack development.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" aria-hidden="true" />
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <article
                key={index}
                className="relative pl-16 animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-0 top-2">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground z-10">
                    {index === 0 ? (
                      <Award className="h-6 w-6" />
                    ) : (
                      <Building2 className="h-6 w-6" />
                    )}
                  </div>
                  <div className="absolute left-1/2 top-12 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true" />
                </div>

                <div className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <span className="flex-shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2"
                  >
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify Certificate
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </article>
            ))}

            <div className="absolute left-0 bottom-0 h-12 w-12 -translate-x-1/2 translate-y-1/2 rounded-full bg-background border-2 border-border flex items-center justify-center">
              <Award className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}