import { cn } from "@/lib/utils";
import { education } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award, Building2 } from "lucide-react";

export function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="education-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and continuous learning journey.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <article
              key={index}
              className="relative bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-colors animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -top-4 left-8">
                <div className="p-3 bg-primary rounded-full text-primary-foreground shadow-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
              </div>

              <div className="pt-4 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium mt-1">{edu.institution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <div className="p-2 bg-background rounded-lg text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Location</p>
                      <p className="text-sm text-foreground">{edu.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <div className="p-2 bg-background rounded-lg text-muted-foreground">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Duration</p>
                      <p className="text-sm text-foreground">{edu.period}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Object Oriented Programming",
                      "Database Management Systems",
                      "Computer Networks",
                      "Operating Systems",
                      "Software Engineering",
                      "Web Technologies",
                      "Machine Learning Basics",
                    ].map((course, courseIndex) => (
                      <Badge key={courseIndex} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    Activities & Achievements
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Active participant in coding competitions",
                      "Member of Technical Society",
                      "Completed multiple full-stack projects",
                      "AI/ML certification courses",
                    ].map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Continuously learning through certifications, online courses, and hands-on projects.
          </p>
        </div>
      </div>
    </section>
  );
}