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
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="certificates-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h2 id="certificates-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Verified certificates from Edunet Foundation × AICTE × IBM SkillsBuild.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <article
              key={index}
              className="animate-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>

                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Building2 className="h-4 w-4" />
                    <span>{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{cert.period}</span>
                  </div>

                  <div className="pt-3 border-t border-border space-y-2">
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

        <div className="mt-10 p-5 bg-card rounded-2xl border border-border text-center">
          <div className="flex items-center justify-center gap-3 text-primary mb-3">
            <Award className="h-6 w-6" />
            <span className="text-xl font-bold">2</span>
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">Verified Internship Certificates</h3>
          <p className="text-muted-foreground mb-4 max-w-md mx-auto text-sm">
            Both certificates are officially verified and accessible via Google Drive links provided by Edunet Foundation × AICTE × IBM SkillsBuild.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
              AICTE Approved
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
              IBM SkillsBuild
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="h-3.5 w-3.5 text-green-500" />
              Edunet Foundation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}