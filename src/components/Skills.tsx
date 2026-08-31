import { cn } from "@/lib/utils";
import { skills } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Code, Layout, Server, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    key: "languages",
    label: "Languages",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
  },
  {
    key: "frontend",
    label: "Frontend",
    icon: Layout,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
  {
    key: "backend",
    label: "Backend",
    icon: Server,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20",
  },
  {
    key: "databases",
    label: "Databases",
    icon: Database,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
  },
  {
    key: "cloudTools",
    label: "Cloud & Tools",
    icon: Cloud,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/20",
  },
] as const;

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies with a focus on the MERN stack and AI integration.
          </p>
        </header>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills[category.key as keyof typeof skills];
            return (
              <div key={category.key} className="animate-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={cn("p-3 rounded-xl", category.bgColor, category.borderColor)}>
                    <category.icon className={cn("h-6 w-6", category.color)} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.label}</h3>
                  <span className="text-sm text-muted-foreground font-medium px-3 py-1 bg-muted rounded-full">
                    {categorySkills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={cn(
                        "text-base px-4 py-2 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-200",
                        "border-border"
                      )}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            Proficiency Overview
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "JavaScript/TypeScript", level: 90, color: "primary" },
              { name: "React & Ecosystem", level: 85, color: "blue" },
              { name: "Node.js/Express", level: 80, color: "green" },
              { name: "Databases", level: 75, color: "orange" },
              { name: "Cloud & DevOps", level: 70, color: "purple" },
            ].map((item, index) => (
              <div key={item.name} className="animate-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-1000 ease-out",
                      `bg-${item.color}-500`
                    )}
                    style={{ width: `${item.level}%` }}
                    role="progressbar"
                    aria-valuenow={item.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${item.name} proficiency`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}