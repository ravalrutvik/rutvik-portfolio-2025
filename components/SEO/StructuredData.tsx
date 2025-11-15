export function StructuredData() {
  const siteUrl = "https://ravalrutvik.dev";
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Raval Rutvik",
    alternateName: "Rutvik Raval",
    url: siteUrl,
    jobTitle: "Frontend Developer",
    description: "Frontend developer specializing in React.js, Next.js, and modern web development",
    knowsAbout: [
      "Frontend Development",
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "UI/UX",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
    sameAs: [
      "https://www.linkedin.com",
      "https://github.com",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressCountry: "IN",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Raval Rutvik - Frontend Development Services",
    description: "Professional frontend development services specializing in React.js, Next.js, and modern web applications",
    provider: {
      "@type": "Person",
      name: "Raval Rutvik",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Frontend Development",
      "React.js Development",
      "Next.js Development",
      "Web Application Development",
      "UI/UX Frontend Engineering",
      "Responsive Web Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Raval Rutvik Portfolio",
    url: siteUrl,
    description: "Professional portfolio of Raval Rutvik, a Frontend Developer specializing in React.js and Next.js",
    author: {
      "@type": "Person",
      name: "Raval Rutvik",
    },
    keywords: [
      "Frontend Developer",
      "React.js Developer",
      "Next.js Developer",
      "JavaScript Developer",
      "Web Developer",
      "UI/UX Frontend Engineer",
      "Frontend Web Development",
      "Modern Web Developer",
      "Tailwind CSS Developer",
      "Responsive Web Developer",
      "React Frontend Engineer",
      "Next.js Full-Stack Developer",
      "Web Application Developer",
      "Professional Frontend Portfolio",
    ],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Raval Rutvik - Frontend Development",
    url: siteUrl,
    logo: `${siteUrl}/profile-placeholder.jpeg`,
    description: "Professional frontend development services specializing in React.js, Next.js, and modern web applications",
    founder: {
      "@type": "Person",
      name: "Raval Rutvik",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com",
      "https://github.com",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

