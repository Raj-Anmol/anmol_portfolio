import type { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Anmol Raj - Full Stack Developer open to opportunities. Email, LinkedIn, GitHub, Resume.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Contact />
    </div>
  );
}
