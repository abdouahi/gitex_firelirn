"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Shield,
  Zap,
  Eye,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import CookieBanner from "@/components/CookieBanner";

/* ─── Icons ─────────────────────────────────────────────────────────── */
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FlameIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M12 2C12 2 7 8 7 13a5 5 0 0 0 10 0c0-3.5-2-6-2-6s-1 2.5-2 3c0 0 0-4-3-8z"
      fill="url(#flame-grad)"
    />
    <defs>
      <linearGradient id="flame-grad" x1="12" y1="2" x2="12" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────────────── */
const company = {
  name: "FireLirn",
  tagline: "Early Learning Difficulty Detection for Educational Institutions",
  stand: "Hall 23 · Stand 23C-13",
  email: "contact@firelirn.com",
  phoneDisplay: "+212 777 375495",
  phoneRaw: "+212777375495",
  linkedin: "https://www.linkedin.com/company/firelirn/",
  address: "GITEX Africa 2026, Marrakech",
};

const gains = [
  { text: "Earlier visibility into emerging learning difficulty", icon: Eye },
  { text: "More accurate student guidance and follow-up", icon: CheckCircle2 },
  { text: "Less time and effort lost in late intervention", icon: Zap },
  { text: "Stronger institutional decision-making", icon: Shield },
];

const howItWorks = [
  {
    title: "Collect",
    text: "FireLirn combines relevant institutional and product-layer learning signals from existing tools.",
    icon: "📡",
  },
  {
    title: "Analyze",
    text: "Our system identifies behavioral and academic patterns that may indicate emerging learning difficulty.",
    icon: "🔬",
  },
  {
    title: "Surface",
    text: "Institutions receive clear, actionable visibility on which students may need earlier attention.",
    icon: "💡",
  },
];

const team = [
  {
    name: "Abdessamad Ouahidi",
    role: "Founder & CEO",
    text: "Product vision, business strategy, and execution. Driving the mission to make learning difficulty visible earlier.",
    linkedin: "https://www.linkedin.com/in/abdessamad-ouahidi/",
    img: "/abdessamad.jpg",
    initials: "AO",
  },
  {
    name: "Ayoub Sbai",
    role: "Co-Founder & CTO",
    text: "Technical architecture, system design, and model thinking. Building the engine that powers FireLirn.",
    linkedin: "https://www.linkedin.com/in/aysb09/",
    img: "/ayoub.jpg",
    initials: "AS",
  },
  {
    name: "Ismail Sabor",
    role: "Pedagogical Lead",
    text: "Learning logic, academic framing, and student support perspective. Ensuring educational integrity at every step.",
    linkedin: "https://www.linkedin.com/in/ismail-sabor-1925b6318/",
    img: "/ismail.jpg",
    initials: "IS",
  },
];

/* ─── Animation Variants ─────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Navbar ─────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : "bg-transparent"
        }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg px-1"
          aria-label="FireLirn home"
        >
          <span className="text-base font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-600">
            FireLirn
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`mailto:${company.email}`}
            className="rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neutral-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
          >
            Contact us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden h-9 w-9 items-center justify-center rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden border-t border-neutral-100 bg-white/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${company.email}`}
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-xl bg-neutral-900 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Contact us
          </a>
        </motion.div>
      )}
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden border-b border-neutral-200/60 bg-white flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />
      {/* Gradient blobs */}
      <motion.div style={{ y }} className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-orange-100/60 via-red-50/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-50/40 to-transparent blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl w-full px-6 py-32 sm:px-8 lg:px-10 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 shadow-sm backdrop-blur-sm w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
                </span>
                GITEX Africa 2026 &middot; {company.stand}
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              className="mt-8 text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl leading-[1.05]"
            >
              Detect Learning{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-orange-500 via-red-500 to-rose-500 bg-clip-text text-transparent">
                  Difficulty
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-30" />
              </span>
              <br />
              Earlier.
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-xl leading-relaxed text-neutral-600 font-light"
            >
              FireLirn helps educational institutions detect emerging learning
              challenges before they become visible in formal results — making
              student guidance more timely, accurate, and effective.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              <a
                id="hero-cta-email"
                href={`mailto:${company.email}`}
                className="group inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-neutral-900/20 transition-all hover:bg-neutral-700 hover:shadow-xl hover:shadow-neutral-900/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                id="hero-cta-linkedin"
                href={company.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-7 py-4 text-sm font-semibold text-neutral-900 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2"
              >
                <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
                Follow on LinkedIn
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeUp}
              className="mt-10 pt-8 border-t border-neutral-100 flex items-center gap-6 flex-wrap"
            >
              {[
                { label: "Privacy-first", icon: "🔒" },
                { label: "Morocco-built", icon: "🇲🇦" },
                { label: "GITEX Africa 2026", icon: "🏆" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-neutral-500">
                  <span aria-hidden="true">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: contact card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-2 rounded-[2rem] opacity-40 blur-2xl"
                style={{
                  background:
                    "radial-gradient(ellipse at 60% 40%, rgba(251,146,60,0.25), rgba(239,68,68,0.1), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative rounded-3xl border border-neutral-200/70 bg-white/90 p-7 shadow-2xl shadow-neutral-200/60 backdrop-blur-xl overflow-hidden">
                {/* Header card */}
                <div className="rounded-2xl bg-neutral-900 p-6 text-white relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
                      Meet us
                    </p>
                    <p className="mt-3 text-2xl font-black tracking-tight leading-tight">
                      GITEX Africa 2026
                    </p>
                    <p className="mt-2 text-sm font-medium text-neutral-300">
                      {company.stand} &middot; Marrakech, Morocco
                    </p>
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 border border-white/10">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                      </span>
                      Live event
                    </div>
                  </div>
                </div>

                {/* Contact details */}
                <div className="mt-5 space-y-3">
                  <a
                    href={`mailto:${company.email}`}
                    className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-3.5 transition-all hover:border-neutral-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-neutral-200 text-neutral-600 shadow-sm group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Email</p>
                      <p className="text-sm font-semibold text-neutral-800">{company.email}</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-neutral-300 group-hover:text-neutral-500 group-hover:translate-x-0.5 transition-all" />
                  </a>

                  <a
                    href={`tel:${company.phoneRaw}`}
                    className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-3.5 transition-all hover:border-neutral-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-neutral-200 text-neutral-600 shadow-sm group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">Phone</p>
                      <p className="text-sm font-semibold text-neutral-800">{company.phoneDisplay}</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-neutral-300 group-hover:text-neutral-500 group-hover:translate-x-0.5 transition-all" />
                  </a>

                  <a
                    href={company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/50 p-3.5 transition-all hover:border-neutral-200 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-neutral-200 shadow-sm group-hover:border-[#0A66C2]/30 transition-colors">
                      <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">LinkedIn</p>
                      <p className="text-sm font-semibold text-neutral-800">FireLirn Company</p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-neutral-300 group-hover:text-neutral-500 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
          aria-hidden="true"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Problem & Solution ─────────────────────────────────────────────── */
function ProblemSolution() {
  return (
    <section
      id="problem"
      className="mx-auto max-w-6xl px-6 py-28 sm:px-8 lg:px-10"
      aria-labelledby="problem-heading"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {/* Problem card */}
        <motion.div
          variants={fadeUp}
          className="group relative overflow-hidden rounded-3xl border border-red-100 bg-gradient-to-br from-red-50/80 to-orange-50/40 p-10 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="absolute top-0 right-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-red-100 opacity-50 blur-2xl" aria-hidden="true" />
          <div className="relative">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-red-100 text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-400">The problem</p>
            <h2 id="problem-heading" className="mt-4 text-2xl font-black tracking-tight text-neutral-900 leading-snug">
              Most institutions detect student difficulty too late.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              The problem only becomes visible after weak results, repeated underperformance, or an obvious decline. By that point, intervention is slower, harder, and far less effective. Students lose time they will never get back.
            </p>
          </div>
        </motion.div>

        {/* Solution card */}
        <motion.div
          variants={fadeUp}
          className="group relative overflow-hidden rounded-3xl border border-neutral-200/60 bg-white p-10 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="absolute top-0 right-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-blue-50 opacity-60 blur-2xl" aria-hidden="true" />
          <div className="relative">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 text-white">
              <Zap className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">What FireLirn does</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-neutral-900 leading-snug">
              Earlier academic visibility, not educational redesign.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              FireLirn does not replace pedagogy. Its role is practical: help institutions detect emerging learning difficulty <strong className="text-neutral-900 font-semibold">before</strong> it becomes clearly visible in formal results — so guidance can be more proactive.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────────────────── */
function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-y border-neutral-200/60 bg-[#FAFAFA] py-28"
      aria-labelledby="hiw-heading"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mx-auto max-w-2xl"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">How it works</p>
          <h2 id="hiw-heading" className="mt-4 text-4xl font-black tracking-tight text-neutral-900">
            A simple visibility layer<br className="hidden sm:block" /> for educational institutions
          </h2>
          <p className="mt-5 text-lg text-neutral-500 leading-relaxed">
            Three steps. No disruption to existing processes.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {howItWorks.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative flex flex-col rounded-3xl border border-neutral-200/70 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-neutral-300 overflow-hidden cursor-default"
            >
              {/* Step number watermark */}
              <div
                className="absolute right-4 top-4 text-8xl font-black text-neutral-50/80 select-none leading-none transition-transform group-hover:scale-110"
                aria-hidden="true"
              >
                {i + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 text-3xl" aria-hidden="true">{item.icon}</div>

              {/* Step badge */}
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-sm font-black text-white shadow-lg shadow-neutral-900/20">
                {i + 1}
              </div>

              <h3 className="text-xl font-black text-neutral-900">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-600 flex-grow">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Gains ──────────────────────────────────────────────────────────── */
function Gains() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28 sm:px-8 lg:px-10" aria-labelledby="gains-heading">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Institutional value</p>
          <h2 id="gains-heading" className="mt-4 text-4xl font-black tracking-tight text-neutral-900 leading-tight">
            What institutions gain from FireLirn
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Move from late reaction to proactive, earlier academic guidance. No new systems required — just better visibility.
          </p>
          <a
            href={`mailto:${company.email}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition-colors"
          >
            Talk to us about your institution
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {gains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="group rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-100 bg-neutral-50 text-neutral-700 transition-colors group-hover:border-neutral-200 group-hover:bg-neutral-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-neutral-800 leading-snug">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Data Governance + Event ────────────────────────────────────────── */
function TrustAndEvent() {
  return (
    <section className="py-12" aria-label="Data governance and GITEX event">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Data governance */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-neutral-200/60 bg-[#F8F9FA] p-10 lg:p-12"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-neutral-200 text-neutral-700 shadow-sm">
              <Shield className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">Data governance</p>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-neutral-900">Built with responsibility in mind</h2>
            <ul className="mt-7 space-y-3" aria-label="Data principles">
              {[
                "Limited and purposeful data collection",
                "Clear institutional control over data",
                "Privacy-conscious system design",
                "Secure data handling and retention discipline",
              ].map((li, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" aria-hidden="true" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-neutral-600 border-t border-neutral-200 pt-7 italic">
              &ldquo;The goal is not surveillance. The goal is better institutional visibility for better student guidance.&rdquo;
            </p>
          </motion.div>

          {/* GITEX event */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-3xl border border-neutral-800 bg-neutral-900 p-10 lg:p-12 text-white overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 right-0 h-64 w-64 translate-x-16 translate-y-16 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #fb923c, transparent)" }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Live at</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white leading-tight">
                  Meet FireLirn<br />in Marrakech
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-300">
                  Visit our stand to discover how FireLirn helps institutions detect learning difficulty earlier and guide students more effectively. Our team is ready to demonstrate.
                </p>
              </div>
              <div className="mt-10 rounded-2xl bg-white/8 border border-white/10 p-5 flex items-center justify-between gap-4 backdrop-blur-sm">
                <div>
                  <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider">Our stand</p>
                  <p className="mt-1.5 text-xl font-black text-white">{company.stand}</p>
                  <p className="mt-1 text-sm text-neutral-400">GITEX Africa 2026, Marrakech</p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/15">
                  <MapPin className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Team ───────────────────────────────────────────────────────────── */
function Team() {
  return (
    <section
      id="team"
      className="mx-auto max-w-6xl px-6 py-28 sm:px-8 lg:px-10"
      aria-labelledby="team-heading"
    >
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">Team</p>
        <h2 id="team-heading" className="mt-4 text-4xl font-black tracking-tight text-neutral-900">
          The people behind FireLirn
        </h2>
        <p className="mt-5 text-lg text-neutral-500 leading-relaxed">
          A team combining product vision, technical depth, and educational expertise.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-16 grid gap-6 md:grid-cols-3"
      >
        {team.map((member) => (
          <motion.article
            key={member.name}
            variants={fadeUp}
            className="group flex flex-col rounded-3xl border border-neutral-200/60 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 hover:border-neutral-300 relative overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute top-0 right-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-orange-50 opacity-0 blur-2xl transition-opacity group-hover:opacity-70" aria-hidden="true" />

            {/* Avatar */}
            <div className="relative mb-6 h-20 w-20 rounded-2xl overflow-hidden border-2 border-neutral-100 shadow-md">
              <Image
                src={member.img}
                alt={`${member.name} — ${member.role}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
            <p className="mt-1 text-sm font-semibold text-orange-600">{member.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 flex-grow">{member.text}</p>

            <div className="mt-7 pt-5 border-t border-neutral-100">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-[#0A66C2] transition-colors group/link"
                aria-label={`${member.name} LinkedIn profile`}
              >
                <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
                LinkedIn
                <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0" />
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200/60 bg-white" role="contentinfo">
      {/* CTA strip */}
      <div className="bg-neutral-900 py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white">
                Let&apos;s connect
              </h2>
              <p className="mt-3 max-w-xl text-base text-neutral-400 leading-relaxed">
                FireLirn helps educational institutions detect learning difficulty earlier so student guidance becomes more accurate, timely, and effective.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row shrink-0">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email us
              </a>
              <a
                href={`tel:${company.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-900"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-sm font-bold text-neutral-900">FireLirn</span>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 text-sm text-neutral-500" role="list">
              <li>
                <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-neutral-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href={`tel:${company.phoneRaw}`} className="hover:text-neutral-900 transition-colors">
                  {company.phoneDisplay}
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-xs text-neutral-400">
            &copy; {year} FireLirn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function FireLirnPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Gains />
        <TrustAndEvent />
        <Team />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
