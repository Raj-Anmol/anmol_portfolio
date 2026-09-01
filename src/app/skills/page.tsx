import type { Metadata } from "next";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Anmol Raj - MERN stack, AI/ML, TypeScript, Python, FastAPI, Cloud technologies.",
};

export default function SkillsPage() {
  return <Skills />;
}