"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";

const CONSENT_KEY = "firelirn_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) {
        // Small delay so it doesn't flash on load
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // localStorage blocked (private mode, etc.)
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
      // Set a cookie for server-side reading if needed
      document.cookie = `${CONSENT_KEY}=accepted; max-age=31536000; path=/; SameSite=Lax`;
    } catch {
      // ignore
    }
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "declined");
      document.cookie = `${CONSENT_KEY}=declined; max-age=31536000; path=/; SameSite=Lax`;
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 z-[9999] md:left-auto md:right-6 md:bottom-6 md:max-w-md"
        >
          <div className="rounded-2xl border border-neutral-200/80 bg-white/95 p-5 shadow-2xl shadow-neutral-900/10 backdrop-blur-xl">
            {/* Close button */}
            <button
              onClick={handleDecline}
              aria-label="Close cookie banner"
              className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3 pr-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <Cookie className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  We use cookies
                </p>
                <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                  We use essential cookies and Google Fonts to ensure the best
                  experience. No tracking or third-party analytics.{" "}
                  <a
                    href="mailto:firelirn@gmail.com?subject=Privacy%20Inquiry"
                    className="underline underline-offset-2 hover:text-neutral-900 transition-colors"
                  >
                    Questions? Contact us.
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button
                id="cookie-accept"
                onClick={handleAccept}
                className="flex-1 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
              >
                Accept all
              </button>
              <button
                id="cookie-decline"
                onClick={handleDecline}
                className="flex-1 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-xs font-semibold text-neutral-700 transition-all hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-offset-2"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
