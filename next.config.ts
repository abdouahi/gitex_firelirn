import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress assets
  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Scripts: allow self + inline (Next.js needs it) + unsafe-eval (framer-motion dev)
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              // Styles: allow self + inline + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Fonts: allow self + Google Fonts CDN
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self + data URIs + blob
              "img-src 'self' blob: data:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              // Allow popups for LinkedIn links (target=_blank)
              "frame-ancestors 'none'",
              // Connect: self only
              "connect-src 'self'",
              // Enhance security
              "upgrade-insecure-requests",
              "block-all-mixed-content"
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
