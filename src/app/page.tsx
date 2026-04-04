"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, Phone, ExternalLink, ShieldCheck, MapPin, ChevronDown } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function FireLirnOnePage() {
  const company = {
    name: "FireLirn",
    tagline: "Early Learning Difficulty Detection for Educational Institutions",
    stand: "Hall 23 · Stand 23C-13",
    email: "firelirn@gmail.com",
    phoneDisplay: "+212 698 588 262",
    phoneRaw: "+212698588262",
    linkedin: "https://www.linkedin.com/company/firelirn/",
    address: "GITEX Africa 2026, Marrakech",
  };

  const gains = [
    "Earlier visibility into emerging learning difficulty",
    "More accurate student guidance and follow-up",
    "Less time and effort lost in late intervention",
    "Stronger institutional decision-making",
  ];

  const howItWorks = [
    {
      title: "Collect",
      text: "FireLirn combines relevant institutional and product-layer learning signals.",
    },
    {
      title: "Analyze",
      text: "Our system identifies patterns that may indicate emerging learning difficulty.",
    },
    {
      title: "Surface",
      text: "Institutions receive clear visibility on which students may need earlier attention.",
    },
  ];

  const team = [
    {
      name: "Abdessamad Ouahidi",
      role: "Founder & CEO",
      text: "Product vision, business strategy, execution",
      linkedin: "https://www.linkedin.com/in/abdessamad-ouahidi/",
      img: "/abdessamad.jpg"
    },
    {
      name: "Ayoub Sbai",
      role: "Co-Founder & CTO",
      text: "Technical architecture, system design, model thinking",
      linkedin: "https://www.linkedin.com/in/ayoub-sbai/",
      img: "/ayoub.jpg"
    },
    {
      name: "Ismail Sabor",
      role: "Pedagogical Lead",
      text: "Learning logic, academic framing, student support perspective",
      linkedin: "https://www.linkedin.com/in/ismail-sabor-1925b6318/",
      img: "/ismail.jpg"
    },
  ];

  const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans">
      {/* HEADER SECTION */}
      <section className="relative overflow-hidden border-b border-neutral-200/60 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.06),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="z-10"
            >
              <div className="inline-flex items-center space-x-2 rounded-full border border-neutral-200/80 bg-neutral-50/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span>GITEX Africa 2026 · {company.stand}</span>
              </div>
              <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-7xl">
                {company.name}
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-light leading-snug text-neutral-600">
                {company.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                We help educational institutions detect learning difficulty earlier so student guidance becomes more timely, accurate, and effective.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${company.email}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-200"
                >
                  Contact FireLirn
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200/80 bg-white/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-50 hover:border-neutral-300 focus:ring-4 focus:ring-neutral-100"
                >
                  <LinkedinIcon className="h-4 w-4 text-blue-600" />
                  Visit Page
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-100 to-emerald-50 opacity-50 blur-2xl"></div>
              <div className="relative rounded-3xl border border-neutral-200/60 bg-white/80 p-8 shadow-xl shadow-neutral-100/50 backdrop-blur-xl">
                <div className="rounded-2xl bg-neutral-900 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <MapPin className="w-32 h-32" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">Meet us at</p>
                    <p className="mt-3 text-3xl font-extrabold tracking-tight">GITEX Africa 2026</p>
                    <p className="mt-3 text-lg font-medium text-neutral-300">{company.stand}</p>
                  </div>
                </div>
                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 text-neutral-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Email</p>
                      <a href={`mailto:${company.email}`} className="text-neutral-500 hover:text-neutral-900 transition-colors">
                        {company.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 text-neutral-600 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-100">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">Phone</p>
                      <a href={`tel:${company.phoneRaw}`} className="text-neutral-500 hover:text-neutral-900 transition-colors">
                        {company.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
          >
             <span className="text-xs font-medium uppercase tracking-widest">Discover More</span>
             <ChevronDown className="h-4 w-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10">
        <motion.div 
          className="grid gap-8 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn} className="group rounded-3xl border border-neutral-200/60 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">The problem</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">Most institutions detect student difficulty too late.</h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              In many cases, the problem only becomes visible after weak results, repeated underperformance, or an obvious decline in academic consistency. By that point, intervention is slower, harder, and less effective.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="group rounded-3xl border border-neutral-200/60 bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">What FireLirn does</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">Earlier academic visibility, not educational redesign.</h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              FireLirn does not try to replace pedagogy. Its role is practical: help institutions detect emerging learning difficulty before it becomes clearly visible in formal results.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-neutral-50/50 py-24 border-y border-neutral-200/60">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <motion.div 
            variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} 
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">How it works</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900">A simple visibility layer <br />for educational institutions</h2>
          </motion.div>
          <motion.div 
             variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="mt-16 grid gap-6 md:grid-cols-3"
          >
            {howItWorks.map((item, i) => (
              <motion.div key={item.title} variants={fadeIn} className="relative rounded-3xl border border-neutral-200/60 bg-white p-8 overflow-hidden hover:border-neutral-300 transition-colors shadow-sm cursor-default group">
                <div className="absolute right-0 top-0 text-[120px] font-black text-neutral-50/80 -z-0 leading-none select-none -translate-y-4 translate-x-4 transition-transform group-hover:scale-110">
                  {i + 1}
                </div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-lg font-bold text-white shadow-xl shadow-neutral-900/20">
                    {item.title[0]}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-4 text-neutral-600 leading-relaxed text-lg">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GAINS SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10">
        <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">Institutional value</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900">What institutions gain from FireLirn</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Transform the way your institution supports students. Move from late reaction algorithms directly into proactive, earlier academic guidance.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {gains.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
              >
                <div className="mb-4 text-emerald-500 bg-emerald-50 w-8 h-8 rounded-full flex items-center justify-center">
                   <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="font-semibold text-neutral-800 leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DATA GOVERNANCE & EVENT SECTION */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="rounded-3xl border border-neutral-200/60 bg-[#F8F9FA] p-10 lg:p-12">
              <ShieldCheck className="h-8 w-8 text-neutral-400 mb-6" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">Data governance</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900">Built with responsibility in mind</h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Limited and purposeful data collection",
                  "Clear institutional control",
                  "Privacy-conscious system design",
                  "Secure data handling and retention discipline"
                ].map((li, i) => (
                  <li key={i} className="flex flex-start gap-3 items-center text-neutral-700 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-neutral-600 leading-relaxed border-t border-neutral-200 pt-8">
                The goal is not surveillance. The goal is better institutional visibility for better student guidance.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="relative rounded-3xl border border-neutral-800 bg-neutral-900 p-10 lg:p-12 text-white overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                   <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">GITEX Africa</p>
                   <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white mb-4">Meet FireLirn in Marrakech</h2>
                   <p className="text-lg leading-relaxed text-neutral-300">
                     Visit us to discover how FireLirn helps institutions detect learning difficulty earlier and guide students more effectively.
                   </p>
                </div>
                <div className="mt-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Location Status</p>
                    <p className="mt-2 text-2xl font-extrabold text-white">{company.stand}</p>
                  </div>
                  <div className="w-12 h-12 bg-white text-neutral-900 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-10">
        <motion.div variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">Team</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900">The people behind FireLirn</h2>
        </motion.div>
        
        <motion.div 
           variants={staggerContainer}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeIn} className="group flex flex-col rounded-3xl border border-neutral-200/60 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-neutral-300 relative overflow-hidden">
              <div className="mb-6 h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center text-xl font-bold text-neutral-900 shrink-0 shadow-inner overflow-hidden border border-neutral-200">
                 <Image src={member.img} alt={member.name} width={64} height={64} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">{member.name}</h3>
              <p className="mt-2 font-semibold text-blue-600">{member.role}</p>
              <p className="mt-4 leading-relaxed text-neutral-600 flex-grow">{member.text}</p>
              
              {member.linkedin !== "#" && (
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-blue-600 transition-colors"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FOOTER CTA & BIO */}
      <footer className="border-t border-neutral-200/60 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center">
                   <span className="text-white font-extrabold text-sm">F</span>
                </div>
                <span className="text-xl font-bold text-neutral-900">{company.name}</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Let&apos;s connect</h2>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
                FireLirn helps educational institutions detect learning difficulty earlier, so student guidance becomes more accurate, timely, and effective.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end xl:flex-row xl:items-center">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-neutral-800"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
              <a
                href={`tel:${company.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-200/80 bg-white px-6 py-4 text-sm font-semibold text-neutral-900 transition-all hover:bg-neutral-50 hover:border-neutral-300"
              >
                <Phone className="h-4 w-4" />
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-neutral-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
               <a href={company.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
               <a href={`mailto:${company.email}`} className="hover:text-neutral-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
