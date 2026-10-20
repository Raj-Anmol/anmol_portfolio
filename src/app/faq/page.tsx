import type { Metadata } from "next";
import { FAQ } from "@/components/About";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Anmol Raj - availability, contact, resume, and tech stack.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-muted-foreground">
            Everything you need to know about my background, skills, and availability.
          </p>
        </header>
        <FAQ />
      </div>
    </main>
  );
}
