export function SocialMetaTags() {
  const siteUrl = "https://ravalrutvik.dev";
  const title = "Raval Rutvik | Professional Frontend Developer | React.js & Next.js Expert";
  const description =
    "Professional Frontend Developer and React.js Developer specializing in Next.js, JavaScript, and modern web development. Expert UI/UX Frontend Engineer creating responsive web applications with Tailwind CSS.";
  const imageUrl = `${siteUrl}/og-image.svg`;

  return (
    <>
      {/* Primary Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/svg+xml" />
      <meta property="og:image:alt" content="Raval Rutvik - Professional Frontend Developer" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Raval Rutvik Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Raval Rutvik - Professional Frontend Developer" />

      {/* Additional Meta Tags for WhatsApp, LinkedIn, etc. */}
      <meta name="description" content={description} />
      <meta name="author" content="Raval Rutvik" />
      
      {/* WhatsApp specific - uses Open Graph but ensure image is accessible */}
      <meta property="og:image:secure_url" content={imageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:url" content={imageUrl} />
      
      {/* Additional tags for better sharing */}
      <link rel="canonical" href={siteUrl} />
    </>
  );
}

