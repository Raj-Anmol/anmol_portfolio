import type { Metadata } from "next";
import { Experience } from "@/components/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional internship experience at Edunet Foundation (AICTE × IBM SkillsBuild) - AI Intern and Emerging Technologies Intern.",
};

export default function ExperiencePage() {
  return <Experience />;
}