import type { Metadata } from "next";
import { Certificates } from "@/components/Certificates";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Verified internship certificates from Edunet Foundation × AICTE × IBM SkillsBuild.",
};

export default function CertificatesPage() {
  return <Certificates />;
}