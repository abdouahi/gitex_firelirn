import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

/* ─── Constants ─────────────────────────────────────────── */
const SITE_URL = "https://firelirn.com";
const SITE_NAME = "FireLirn";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

/* ─── Metadata ───────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Title ──────────────────────────────────────────────
  // Primary keyword: "moroccan edtech startup" + brand + unique niche
  title: {
    default:
      "FireLirn — Moroccan EdTech Startup | Early Learning Difficulty Detection for Schools",
    template: "%s | FireLirn — Moroccan EdTech",
  },

  // ── Description ────────────────────────────────────────
  // 155 chars max — keyword-rich, action-oriented, includes location signals
  description:
    "FireLirn is a Moroccan EdTech startup that detects learning difficulties early so schools can guide students faster. AI-powered, privacy-first, built in Morocco for Africa. GITEX Africa 2026 · Marrakech.",

  // ── Keywords ───────────────────────────────────────────
  // English + French + transliterated Arabic for maximum multilingual reach
  keywords: [
    // Brand
    "FireLirn",
    "firelirn.com",
    "FireLirn EdTech",
    // Core product
    "early learning difficulty detection",
    "learning difficulty detection software",
    "AI learning disability detection",
    "dyslexia screening tool schools",
    "early intervention education technology",
    "student academic support platform",
    "learning assessment AI",
    "educational data analytics",
    // Moroccan EdTech — English
    "moroccan edtech startup",
    "Morocco EdTech",
    "EdTech startup Morocco",
    "EdTech Africa startup",
    "African EdTech company",
    "Marrakech tech startup",
    "Casablanca EdTech",
    "startup maroc tech",
    "Morocco AI startup",
    "North Africa EdTech",
    // GITEX
    "GITEX Africa 2026",
    "GITEX Africa Marrakech",
    "GITEX Africa startup",
    "GITEX Morocco",
    // B2B institutional
    "educational technology for schools",
    "school management software Morocco",
    "inclusive education technology",
    "institutional student support",
    "EdTech B2B Africa",
    "school analytics platform",
    // French keywords (Moroccan market)
    "EdTech Maroc",
    "startup EdTech Maroc",
    "détection difficultés apprentissage",
    "technologie éducative Maroc",
    "intelligence artificielle éducation",
    "soutien scolaire technologie",
    "détection précoce difficultés scolaires",
    // Arabic transliteration
    "edtech المغرب",
    "startup تعليمي المغرب",
  ],

  // ── Authors & Publisher ────────────────────────────────
  authors: [
    {
      name: "Abdessamad Ouahidi",
      url: "https://www.linkedin.com/in/abdessamad-ouahidi/",
    },
    {
      name: "Ayoub Sbai",
      url: "https://www.linkedin.com/in/aysb09/",
    },
  ],
  creator: "FireLirn",
  publisher: "FireLirn",

  // ── Robots ────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Canonical ─────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "fr-MA": SITE_URL,
      "ar-MA": SITE_URL,
    },
  },

  // ── Google Search Console Verification ────────────────
  // 👉 Replace 'YOUR_GOOGLE_VERIFICATION_CODE' with the HTML tag content
  // from: https://search.google.com/search-console → Add Property → HTML Tag
  verification: {
    google: "HVMVs3rBze__MNHA-3d1fp8-xIhVnrQQo1dr3Oqft9Q",
  },

  // ── Open Graph ────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_MA", "ar_MA"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "FireLirn — Moroccan EdTech Startup | Early Learning Difficulty Detection",
    description:
      "FireLirn is a Moroccan EdTech startup that uses AI to detect learning difficulties early. Help your institution guide students faster, before problems become visible in grades. GITEX Africa 2026.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "FireLirn — Moroccan EdTech Startup | Early Learning Difficulty Detection | GITEX Africa 2026",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@firelirn",
    creator: "@firelirn",
    title:
      "FireLirn — Moroccan EdTech Startup | Early Learning Difficulty Detection",
    description:
      "FireLirn is a Moroccan EdTech startup that uses AI to detect learning difficulties early. GITEX Africa 2026 · Marrakech.",
    images: [OG_IMAGE],
  },

  // ── Icons & PWA ───────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",

  // ── Category ──────────────────────────────────────────
  category: "education technology",
};

/* ─── JSON-LD Structured Data ────────────────────────────── */
// Multiple schemas = Google understands more dimensions of FireLirn
const jsonLd = [
  // 1. Organization — "Who are you?"
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "FireLirn",
    alternateName: [
      "FireLirn EdTech",
      "FireLirn Morocco",
      "FireLirn Maroc",
      "فايرلرن",
    ],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: OG_IMAGE,
      width: 1200,
      height: 630,
      caption: "FireLirn — Moroccan EdTech Startup",
    },
    image: OG_IMAGE,
    description:
      "FireLirn is a Moroccan EdTech startup that helps educational institutions detect emerging learning difficulties earlier using AI-driven behavioral and academic pattern analysis. Built in Morocco for Africa.",
    email: "contact@firelirn.com",
    telephone: "+212777375495",
    address: {
      "@type": "PostalAddress",
      addressCountry: "MA",
      addressLocality: "Marrakech",
      addressRegion: "Marrakech-Safi",
    },
    areaServed: [
      { "@type": "Country", name: "Morocco" },
      { "@type": "Continent", name: "Africa" },
    ],
    foundingDate: "2025",
    founders: [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder-abdessamad`,
        name: "Abdessamad Ouahidi",
        jobTitle: "Founder & CEO",
        url: "https://www.linkedin.com/in/abdessamad-ouahidi/",
        sameAs: ["https://www.linkedin.com/in/abdessamad-ouahidi/"],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder-ayoub`,
        name: "Ayoub Sbai",
        jobTitle: "Co-Founder & CTO",
        url: "https://www.linkedin.com/in/aysb09/",
        sameAs: ["https://www.linkedin.com/in/aysb09/"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/firelirn/",
    ],
    knowsAbout: [
      "Early Learning Difficulty Detection",
      "Educational Technology",
      "Student Academic Support",
      "AI in Education",
      "EdTech Morocco",
      "Inclusive Education",
      "Learning Analytics",
      "Special Educational Needs",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 3,
      maxValue: 10,
    },
  },

  // 2. WebSite — activates Google Sitelinks Search Box if eligible
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "FireLirn",
    alternateName: "FireLirn — Moroccan EdTech Startup",
    url: SITE_URL,
    description:
      "FireLirn — Moroccan EdTech Startup. Early Learning Difficulty Detection for Educational Institutions across Morocco and Africa.",
    inLanguage: ["en", "fr", "ar"],
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },

  // 3. SoftwareApplication — "What is the product?"
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#product`,
    name: "FireLirn",
    alternateName: "FireLirn Learning Difficulty Detection Platform",
    applicationCategory: "EducationalApplication",
    applicationSubCategory: "Learning Analytics",
    operatingSystem: "Web, iOS, Android",
    url: SITE_URL,
    description:
      "FireLirn is an AI-powered early learning difficulty detection platform for schools and educational institutions. It identifies behavioral and academic patterns that indicate emerging learning challenges — before they appear in formal results.",
    screenshot: OG_IMAGE,
    featureList: [
      "Early learning difficulty detection",
      "AI-powered behavioral pattern analysis",
      "Academic performance tracking",
      "Institutional dashboard & reporting",
      "Privacy-first data governance",
      "GDPR-conscious design",
    ],
    author: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      description: "Contact FireLirn for institutional pricing and demo",
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "administrator",
      audienceType: "School administrators, teachers, educational institutions",
    },
    inLanguage: ["en", "fr", "ar"],
    countriesSupported: "MA",
    releaseNotes: "Early learning difficulty detection for Moroccan schools",
  },

  // 4. Event — GITEX Africa 2026 presence (boosts local/event SEO)
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${SITE_URL}/#gitex-event`,
    name: "FireLirn at GITEX Africa 2026",
    description:
      "Visit FireLirn at GITEX Africa 2026 in Marrakech — Stand 23C-13, Hall 23. Discover how our AI-powered platform helps educational institutions detect learning difficulties earlier.",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    startDate: "2026-04-14",
    endDate: "2026-04-16",
    location: {
      "@type": "Place",
      name: "Marrakech International Exhibition Centre",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marrakech",
        addressCountry: "MA",
      },
    },
    organizer: { "@id": `${SITE_URL}/#organization` },
    performer: { "@id": `${SITE_URL}/#organization` },
    image: OG_IMAGE,
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      name: "Meet FireLirn at GITEX Africa 2026",
      description: "Visit our stand — Hall 23, Stand 23C-13",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
    },
  },

  // 5. FAQPage — triggers rich FAQ results in Google SERP
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is FireLirn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FireLirn is a Moroccan EdTech startup that helps educational institutions detect emerging learning difficulties earlier using AI-powered behavioral and academic pattern analysis. It is designed for schools in Morocco and across Africa.",
        },
      },
      {
        "@type": "Question",
        name: "How does FireLirn detect learning difficulties?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FireLirn combines institutional and product-layer learning signals from existing tools to identify behavioral and academic patterns that may indicate emerging learning difficulty — before they become visible in formal results.",
        },
      },
      {
        "@type": "Question",
        name: "Is FireLirn available in Morocco?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FireLirn is a Moroccan EdTech startup headquartered in Marrakech, Morocco. Our platform is being developed specifically for educational institutions in Morocco and the wider African market.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I meet FireLirn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can meet the FireLirn team at GITEX Africa 2026 in Marrakech, Morocco — Hall 23, Stand 23C-13. You can also reach us at contact@firelirn.com.",
        },
      },
      {
        "@type": "Question",
        name: "What makes FireLirn different from other EdTech solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FireLirn focuses specifically on early detection — not pedagogy redesign. It adds a visibility layer on top of existing institutional tools, so schools can act earlier without changing their existing processes.",
        },
      },
    ],
  },

  // 6. BreadcrumbList — helps Google understand site structure
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "FireLirn — Moroccan EdTech Startup",
        item: SITE_URL,
      },
    ],
  },
];

/* ─── Root Layout ────────────────────────────────────────── */
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
        {/* Geo targeting signals — helps Google associate site with Morocco */}
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Marrakech, Morocco" />
        <meta name="geo.position" content="31.6295;-7.9811" />
        <meta name="ICBM" content="31.6295, -7.9811" />
        {/* Language signals */}
        <meta httpEquiv="content-language" content="en, fr, ar" />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD — all schemas in one script tag */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
