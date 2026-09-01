import type { Metadata } from "next";
import { Education } from "@/components/Education";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Education background of Anmol Raj - B.Tech in Computer Science from Jagannath University, Jaipur.",
};

export default function EducationPage() {
  return <Education />;
}