import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://firelirn.com";
const SITE_NAME = "FireLirn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "FireLirn — Early Learning Difficulty Detection for Schools",
    template: "%s | FireLirn",
  },
  description:
    "FireLirn helps educational institutions detect learning difficulties earlier so student guidance becomes more timely, accurate, and effective. Meet us at GITEX Africa 2026, Marrakech.",

  keywords: [
    "FireLirn",
    "firelirn.com",
    "learning difficulty detection",
    "educational technology",
    "EdTech startup",
    "early intervention schools",
    "student academic support",
    "GITEX Africa 2026",
    "Morocco EdTech",
  ],

  authors: [
    { name: "Abdessamad Ouahidi", url: "https://www.linkedin.com/in/abdessamad-ouahidi/" },
  ],
  creator: "FireLirn",
  publisher: "FireLirn",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "FireLirn — Early Learning Difficulty Detection",
    description:
      "We help educational institutions detect learning difficulty earlier so student guidance becomes more timely, accurate, and effective.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "FireLirn — Early Learning Difficulty Detection",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FireLirn — Early Learning Difficulty Detection",
    description:
      "We help educational institutions detect learning difficulty earlier so student guidance becomes more timely, accurate, and effective.",
    images: [`${SITE_URL}/og-image.png`],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",

  category: "technology",
};

// JSON-LD structured data — two schemas help Google understand the brand
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "FireLirn",
    alternateName: "FireLirn EdTech",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
    },
    description:
      "FireLirn helps educational institutions detect learning difficulties earlier so student guidance becomes more timely, accurate, and effective.",
    email: "contact@firelirn.com",
    telephone: "+212698588262",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
      addressLocality: "Marrakech",
    },
    foundingDate: "2026",
    founders: [
      {
        "@type": "Person",
        name: "Abdessamad Ouahidi",
        jobTitle: "Founder & CEO",
        url: "https://www.linkedin.com/in/abdessamad-ouahidi/",
      },
      {
        "@type": "Person",
        name: "Ayoub Sbai",
        jobTitle: "Co-Founder & CTO",
        url: "https://www.linkedin.com/in/ayoub-sbai/",
      },
    ],
    sameAs: ["https://www.linkedin.com/company/firelirn/"],
    knowsAbout: [
      "Learning Difficulty Detection",
      "Educational Technology",
      "Student Academic Support",
      "EdTech Morocco",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "FireLirn",
    url: SITE_URL,
    description:
      "FireLirn — Early Learning Difficulty Detection for Educational Institutions. A Moroccan EdTech startup.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="theme-color" content="#171717" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
