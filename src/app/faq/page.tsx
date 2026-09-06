import type { Metadata } from "next";
import { FAQ } from "@/components/About";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Anmol Raj - availability, contact, resume, and tech stack.",
};

export default function FaqPage() {
  return <FAQ />;
}