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
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 id="skills-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Proficient in MERN stack, AI integration, and cloud technologies.
          </p>
        </header>

        <div className="space-y-8">
          {skillCategories.map((category, catIndex) => {
            const categorySkills = skills[category.key as keyof typeof skills];
            return (
              <div key={category.key} className="animate-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("p-2.5 rounded-lg", category.bgColor, category.borderColor)}>
                    <category.icon className={cn("h-5 w-5", category.color)} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{category.label}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={cn(
                        "text-xs px-2.5 py-1 hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-200",
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
      </div>
    </section>
  );
}