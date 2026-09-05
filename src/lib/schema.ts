import { profile, projects, certificates, siteConfig, socialLinks } from "./constants";

export function generatePersonSchema() {
  const certificateUrls = certificates.map((cert) => cert.verifyUrl);
  const sameAs = [
    profile.linkedin,
    profile.github,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}#person`,
    name: profile.name,
    alternateName: ["Anmol Raj", "Anmol"],
    jobTitle: profile.title,
    description: profile.summary,
    url: siteConfig.url,
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${profile.profileImage}`,
      width: 512,
      height: 512,
    },
    email: `mailto:${profile.email}`,
    telephone: profile.phone || undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    homeLocation: {
      "@type": "Place",
      name: profile.origin,
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Open to Opportunities",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.university.name,
      url: siteConfig.university.url,
      "@id": siteConfig.university.url,
    },
    sameAs,
    hasCredential: certificateUrls.map((url) => ({
      "@type": "EducationalOccupationalCredential",
      url,
    })),
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack",
      "AI Integration",
      "Machine Learning",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "RESTful APIs",
      "WebSockets",
      "Cloud Deployment",
    ],
    knowsLanguage: ["en", "hi"],
    nationality: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "professional inquiries",
      email: profile.email,
      url: siteConfig.url,
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: profile.name,
    },
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: profile.name,
    },
  };
}

export function generateProjectSchemas() {
  return projects.map((project) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    url: project.liveUrl,
    codeRepository: project.githubUrl,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    image: project.ogImage ? `${siteConfig.url}${project.ogImage}` : undefined,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: profile.name,
      url: siteConfig.url,
    },
    keywords: project.tech.join(", "),
  }));
}

export function generateCertificateSchemas() {
  return certificates.map((cert) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: cert.name,
    description: `${cert.name} from ${cert.issuer}`,
    credentialCategory: "Internship",
    recognizedBy: {
      "@type": "Organization",
      name: cert.issuer,
    },
    dateCreated: "2026-06-21",
    validFrom: "2026-06-21",
    credentialIdentifier: cert.verifyUrl,
    subject: {
      "@type": "Person",
      "@id": `${siteConfig.url}#person`,
      name: profile.name,
      url: siteConfig.url,
    },
  }));
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateAllSchemas() {
  return [
    generatePersonSchema(),
    generateWebsiteSchema(),
    ...generateProjectSchemas(),
    ...generateCertificateSchemas(),
  ];
}
