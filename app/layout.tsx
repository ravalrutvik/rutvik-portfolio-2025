import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/SEO/StructuredData";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ThemeProvider } from "@/lib/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://rutvik-raval.vercel.app/";
const title = "Raval Rutvik | Frontend Developer Portfolio | React.js & Next.js Expert";
const description =
  "Professional Frontend Developer specializing in React.js, Next.js, JavaScript, and modern web development. Expert in UI/UX Frontend Engineering, Responsive Web Development, and Tailwind CSS. Building high-performance web applications and professional frontend solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Raval Rutvik Portfolio",
  authors: [{ name: "Raval Rutvik", url: siteUrl }],
  creator: "Raval Rutvik",
  publisher: "Raval Rutvik",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Raval Rutvik Portfolio",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
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
    "Rutvik",
    "Raval Rutvik",
    "Rutvik Raval",
    "frontend developer",
    "React.js developer",
    "Next.js developer",
    "freelance developer",
    "Freelancer",
    "JavaScript engineer",
    "TypeScript developer",
    "Surat developer",
    "India frontend engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Raval Rutvik | Professional Frontend Developer | React.js & Next.js Expert",
    description:
      "Professional Frontend Developer and React.js Developer specializing in Next.js, JavaScript, and modern web development. Expert UI/UX Frontend Engineer creating responsive web applications with Tailwind CSS.",
    url: siteUrl,
    siteName: "Raval Rutvik Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/profile-placeholder.jpeg`,
        width: 1200,
        height: 630,
        alt: "Raval Rutvik - Professional Frontend Developer | React.js & Next.js Expert",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/profile-placeholder.jpeg`],
    creator: "@ravalrutvik",
    site: "@ravalrutvik",
  },
  icons: {
    icon: [
      {
        url: "/profile-placeholder.jpeg",
        type: "image/jpeg",
        sizes: "32x32",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--background)] text-[var(--text-primary)] antialiased`}
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider>
          <StructuredData />
          <ScrollProgress />
          <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.02),transparent_62%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_85%,rgba(0,0,0,0.01),transparent_55%)] dark:bg-[radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.03),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0.005)_45%,transparent_78%)] dark:bg-[linear-gradient(140deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.01)_45%,transparent_78%)]" />
            <div className="relative z-10 flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">
                <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
              <Footer />
            </div>
          </div>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
