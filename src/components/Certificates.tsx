import { cn } from "@/lib/utils";
import { certificates } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock, Building2, ExternalLink, CheckCircle, FileText } from "lucide-react";

export function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 id="certificates-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verified internship certificates from Edunet Foundation in collaboration with AICTE and IBM SkillsBuild.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <article
              key={index}
              className="animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      <Award className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{cert.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Building2 className="h-4 w-4" />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{cert.period}</span>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Skills Acquired
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(
                        cert.name.includes("Artificial Intelligence")
                          ? [
                              "AI Models & Cloud Workflows",
                              "System Deployment",
                              "Full-Stack AI Integration",
                              "IBM Cloud Infrastructure",
                              "API Endpoint Development",
                              "Real-time Data Processing",
                            ]
                          : [
                              "Agentic AI Workflows",
                              "IBM Cloud & IBM BOB",
                              "RESTful Microservices",
                              "Automated Request Routing",
                              "Input Validation & Error Logging",
                              "Cloud Deployment Pipelines",
                            ]
                      ).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    className="w-full gap-2"
                    asChild
                  >
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Verify Certificate
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="mt-12 p-8 bg-card rounded-2xl border border-border text-center">
          <div className="flex items-center justify-center gap-3 text-primary mb-4">
            <Award className="h-8 w-8" />
            <span className="text-2xl font-bold">2</span>
            <Award className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Verified Internship Certificates</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Both certificates are officially verified and accessible via Google Drive links provided by Edunet Foundation × AICTE × IBM SkillsBuild.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              AICTE Approved
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              IBM SkillsBuild
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Edunet Foundation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}