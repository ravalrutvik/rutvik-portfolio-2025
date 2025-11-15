import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { StudySection } from "@/components/sections/StudySection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { ContactSection } from "@/components/sections/ContactSection";

const keywords = [
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
  "Rutvik",
  "Raval Rutvik",
  "Rutvik Raval",
  "frontend developer",
  "frontend engineer",
  "React.js developer",
  "Next.js developer",
  "TypeScript developer",
  "JavaScript developer",
  "freelance developer",
  "freelancer",
  "remote frontend developer",
  "Surat developer",
  "India React developer",
  "modern web apps",
];

export const metadata: Metadata = {
  title: "Frontend Developer in Surat | React.js & Next.js Developer | Raval Rutvik",
  description:
    "Professional Frontend Developer and React.js Developer based in Surat, India. Specializing in Next.js Development, JavaScript Development, and Modern Web Development. Expert UI/UX Frontend Engineer creating responsive, high-performance web applications with Tailwind CSS. Full-stack Next.js Developer delivering professional frontend portfolio solutions.",
  keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Frontend Developer in Surat | React.js & Next.js Developer | Raval Rutvik",
    description:
      "Professional Frontend Developer and React.js Developer based in Surat, India. Specializing in Next.js Development, JavaScript Development, and Modern Web Development. Expert UI/UX Frontend Engineer creating responsive web applications.",
    url: "https://ravalrutvik.dev",
    siteName: "Raval Rutvik Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ravalrutvik.dev/profile-placeholder.jpeg",
        width: 1200,
        height: 630,
        alt: "Raval Rutvik - Professional Frontend Developer | React.js & Next.js Expert",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raval Rutvik | Professional Frontend Developer | React.js & Next.js Expert",
    description:
      "Professional Frontend Developer specializing in React.js, Next.js, JavaScript, and modern web development. Expert UI/UX Frontend Engineer creating responsive web applications with Tailwind CSS.",
    images: ["https://ravalrutvik.dev/profile-placeholder.jpeg"],
  },
  category: "Technology",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-14 sm:gap-20">
      <HeroSection />
      <StudySection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsPreviewSection />
      <ContactSection />
    </div>
  );
}
