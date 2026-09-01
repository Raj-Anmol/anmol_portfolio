import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Anmol Raj - Computer Science undergraduate at Jagannath University, Jaipur, specializing in MERN stack and AI integration.",
};

export default function AboutPage() {
  return <About />;
}