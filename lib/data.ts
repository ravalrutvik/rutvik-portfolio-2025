export type ProjectStat = {
  label: string;
  value: string;
  hint?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  timeframe?: string;
  image?: string;
  technologies: string[];
  stats?: ProjectStat[];
  url?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "Fusion Data Secure",
    title: "FDS - Fusion Data Secure",
    role: "Jr Frontend Engineer",
    description:
      "Fusion Data Secure (FDS) is a comprehensive SaaS cybersecurity platform designed to provide enterprise-grade protection for businesses, with specialized focus on real estate industry needs. The application offers a complete suite of security solutions including VPN services, web tracking protection, session security, cache protection, DNS security, Windows registry protection, and advanced threat detection with real-time monitoring",
    timeframe: "1-2024 — 7-2024",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "CSS",
      "React Router Dom",
      "Redux",
      "React Query",
      "npm",
    ],
    image: "/projects/fds-1.webp",
    url: "https://www.fusiondatasecure.com/",
  },
  {
    slug: "MovieZu",
    title: "MovieZu",
    description:
      "Moviezu is a modern movie-streaming and content-sharing platform built to empower independent filmmakers and cinema enthusiasts. The platform allows creators to upload, showcase, and promote their films while offering users an engaging and seamless movie-browsing experience.",
    role: "Jr React Developer",
    timeframe: "2024 — 2025",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "tailwind",
      "React Router Dom",
      "Redux",
      "React Query",
      "npm"
    ],
    image: "/projects/moviezu.png",
    url: "https://www.moviezu.com/"
  },
  {
    slug: "MovieZu Admin",
    title: "MovieZu Admin",
    description:
      "Moviezu Admin is a powerful administrative dashboard built to manage the entire Moviezu movie-streaming platform. The panel allows administrators to upload and manage movies, handle user accounts, review creator submissions, monitor platform activity, and control all content displayed on Moviezu. I contributed as a Jr React Developer, implementing UI components, optimizing workflow screens, integrating API-based data management, and ensuring a smooth and intuitive admin experience.",
    role: "Jr React Developer",
    timeframe: "2024 — 2025",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "tailwind",
      "React Router Dom",
      "Redux",
      "React Query",
      "npm",
      "shadcn ui"
    ],
    image: "/projects/moviezuAdmin.png",
    url: "https://admin.moviezu.com/login"
  },
  {
    slug: "Fatsu",
    title: "Fatsu",
    description:
      "Fatsu is a vibrant e-commerce platform centered around the purple viral character fatSu. The site offers a mix of content and commerce — visitors can browse entertaining videos and stories featuring fatSu, while also shopping for branded merchandise like apparel, collectibles, and accessories. I worked on this platform to build the front-end experience, enabling smooth product browsing, interactive video embeds, and a responsive UI that blends storytelling and shopping seamlessly.",
    role: "Jr React Developer",
    timeframe: "2024 — 2025",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "CSS",
      "Redux",
      "React Query",
      "npm"
    ],
    image: "/projects/fatsu.png",  // replace with actual
    url: "https://www.fatsu.com/"
  },
  {
    slug: "PalmPens",
    title: "PalmPens",
    description:
      "PalmPens is a dual-purpose platform combining e-commerce and creator commerce. It enables users to buy a wide range of products, while also allowing creators to sell their own goods and merchandise. The platform supports storefronts for individual creators, giving them a place to monetize their audience. My role involved developing core UI components, product listing flows, and managing state for both buyer-facing and seller-facing features.",
    role: "Jr React Developer",
    timeframe: "2024 — 2025",
    technologies: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "React Router Dom",
      "Redux",
      "React Query",
      "npm"
    ],
    image: "/projects/palmpens.png",  // replace with actual
    url: "https://www.palmpens.com/"
  },
  {
    slug: "Feudr Admin",
    title: "Feudr Admin",
    description:
      "Feudr Admin is an administrative dashboard for the Feudr app — a live video-streaming social platform. Through this admin panel, moderators and administrators can manage live streams, review user-generated video content, oversee user accounts, and moderate community interactions. My contribution as a React Developer included building interactive moderation tools, live-data dashboards, access control systems, and integrating real-time APIs for video stream management.",
    role: "Jr React Developer",
    timeframe: "2024 — 2025",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Router Dom",
      "Redux",
      "React Query",
      "npm"
    ],
    image: "/projects/feudrAdmin.png",  // replace with actual
    url: "https://admin.feudr.com/login"
  }
];

