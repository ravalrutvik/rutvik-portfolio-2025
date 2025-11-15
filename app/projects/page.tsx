import type { Metadata } from "next";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { ProjectHero } from "@/components/projects/ProjectHero";

const projectKeywords = [
  "Rutvik",
  "Raval Rutvik",
  "React.js projects",
  "Next.js case studies",
  "frontend portfolio",
  "Surat developer projects",
  "freelance developer work",
  "TypeScript applications",
  "product engineering",
  "modern web development",
];

export const metadata: Metadata = {
  title: "Projects Built by Rutvik Raval | React & Next.js Case Studies",
  description:
    "Explore Rutvik Raval's detailed case studies covering logistics, SaaS, and e-commerce products—highlighting stack decisions, responsibilities, and measurable outcomes.",
  keywords: projectKeywords,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Rutvik Raval | React.js & Next.js Project Portfolio",
    description:
      "Dive into production-grade projects delivered by Rutvik Raval, showcasing frontend expertise across logistics, SaaS, and e-commerce domains.",
    url: "https://ravalrutvik.dev/projects",
    siteName: "Raval Rutvik Portfolio",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://ravalrutvik.dev/profile-placeholder.jpeg",
        width: 1200,
        height: 630,
        alt: "Raval Rutvik - Professional Frontend Developer Projects",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Raval Rutvik - Frontend Developer",
    description:
      "Browse select React.js and Next.js builds delivered by freelance frontend developer Rutvik Raval.",
    images: ["https://ravalrutvik.dev/profile-placeholder.jpeg"],
  },
  category: "Technology",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-12">
      <ProjectHero />
      <ProjectShowcase />
    </div>
  );
}

