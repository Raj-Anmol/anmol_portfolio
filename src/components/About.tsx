import { cn } from "@/lib/utils";
import { profile, education } from "@/lib/constants";
import { MapPin, GraduationCap, Calendar } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer Science undergraduate passionate about building scalable web applications and integrating AI solutions.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                {profile.summary}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Personal Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Current Location</p>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Native Place</p>
                    <p className="text-muted-foreground">{profile.origin}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Education</p>
                    <p className="text-muted-foreground">{education[0].degree}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">What I Do</h3>
              <ul className="space-y-3">
                {[
                  "Build full-stack web applications with MERN stack",
                  "Integrate AI/ML models into production web apps",
                  "Design RESTful APIs and real-time systems",
                  "Optimize database performance and frontend state",
                  "Deploy and manage applications on cloud platforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-primary" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-3">
                  <p className="text-lg font-medium text-foreground">{edu.degree}</p>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Full Stack Development",
                  "AI/ML Integration",
                  "RESTful API Design",
                  "Real-time Applications",
                  "Database Optimization",
                  "Cloud Deployment",
                  "Authentication & Security",
                  "Responsive UI/UX",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 text-sm bg-muted rounded-lg text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}