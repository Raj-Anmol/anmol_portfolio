import type { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured projects by Anmol Raj - AI Student Travel Planner and Krishi Seva Center (AI-powered farmer platform).",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Projects />
    </div>
  );
}
