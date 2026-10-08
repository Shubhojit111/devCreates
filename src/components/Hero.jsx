"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { Button } from "./ui/Button";

const EASE = [0.22, 1, 0.36, 1];

function MaskLine({ children, delay, className = "" }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const pills = [
  "Business Websites",
  "Portfolio Sites",
  "SaaS Products",
  "E-commerce",
  "SEO & Care",
];
const stats = [
  ["30+", "projects shipped"],
  ["2–3 wks", "avg. site launch"],
  ["90+", "PageSpeed target"],
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-black"
    >
      {/* Full-bleed background video — dimmed so copy owns the frame */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src="/hero.mp4"
        poster="/hero-poster.png"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        tabIndex={-1}
      />
      {/* Readability overlays: left-dark for text, bottom fade for CTAs */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40"
        aria-hidden
      />

      <div className="relative z-10 px-5 pb-10 pt-32 lg:px-10 lg:pb-14">
        {/* Eyebrow: instant context for SEO + humans */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease: EASE }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            dev.creates — Websites & SaaS agency
          </span>
          <span className="hidden items-center gap-1 text-[13px] text-cream/70 sm:inline-flex">
            <Star size={13} className="fill-amber-300 text-amber-300" /> Trusted
            for business builds across India
          </span>
        </motion.div>

        {/* SEO H1: keywords up front, brand kept but not alone */}
        <h1 className="mt-6 font-display uppercase leading-[0.85] tracking-[-0.04em]">
          <MaskLine delay={0.12}>
            <span className="block text-[clamp(2.6rem,6.5vw,6rem)] text-cream">
              Websites & SaaS
            </span>
          </MaskLine>
          <MaskLine delay={0.24}>
            <span className="block text-[clamp(2.6rem,6.5vw,6rem)] text-coral">
              that win customers<span className="text-cream">.</span>
            </span>
          </MaskLine>
        </h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
            className="lg:col-span-5"
          >
            <p className="max-w-[420px] text-[15px] leading-[1.6] text-cream/80 lg:text-[16px]">
              <strong className="font-semibold text-cream">
                dev.creates designs & builds fast, SEO-ready websites and
                scalable SaaS products
              </strong>{" "}
              for businesses — strategy, Next.js build, launch & growth, all in
              one place.
            </p>
            {/* Service pills: scannable in 3 seconds */}
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Our services">
              {pills.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-cream/20 bg-black/40 px-3.5 py-1.5 text-[13px] text-cream/80 backdrop-blur-sm"
                >
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              {/* Proof strip */}
              <dl className="flex gap-8">
                {stats.map(([v, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-display text-[22px] text-cream lg:text-[26px]">
                      {v}
                    </dd>
                    <dd className="mt-1 text-[12px] uppercase tracking-[0.1em] text-cream/60">
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="rounded-full flex gap-3 items-center border border-cream/30 px-6 py-3 font-display text-[15px] text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                >
                  See our work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
            <p className="mt-5 text-[13px] text-cream/60">
              Scroll — services, live projects, honest pricing, and booking
              below.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
