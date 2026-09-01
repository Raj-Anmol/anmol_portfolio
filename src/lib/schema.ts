import { profile, projects, certificates, siteConfig } from "./constants";

export function generatePersonSchema() {
  const certificateUrls = certificates.map((cert) => cert.verifyUrl);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.profileImage}`,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: siteConfig.university.name,
      url: siteConfig.university.url,
      "@id": siteConfig.university.url,
    },
    sameAs: [profile.linkedin, profile.github],
    hasCredential: certificateUrls,
    resumeUrl: `${siteConfig.url}${profile.resumeUrl}`,
    knowsAbout: [
      "Full Stack Development",
      "MERN Stack",
      "AI Integration",
      "React",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "RESTful APIs",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Person",
      name: profile.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
      name: profile.name,
    },
  }));
}

export function generateAllSchemas() {
  return [
    generatePersonSchema(),
    generateWebsiteSchema(),
    ...generateProjectSchemas(),
    ...generateCertificateSchemas(),
  ];
}