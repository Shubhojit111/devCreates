'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';

const EASE = [0.22, 1, 0.36, 1];

function MaskLine({ children, delay, className = '' }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={`block ${className}`}
        initial={{ y: '112%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-black">
      {/* Full-bleed background video (the reference hero) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        poster="/hero-poster.png"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/30" aria-hidden />

      <div className="relative z-10 px-5 pb-10 pt-32 lg:px-10 lg:pb-14">
        <h1 className="font-display uppercase leading-[0.8] tracking-[-0.04em]">
          <MaskLine delay={0.1}>
            <span className="block text-[clamp(3rem,5.6vw,5.5rem)] text-cream">Dev</span>
          </MaskLine>
          <MaskLine delay={0.22}>
            <span className="block text-[clamp(3rem,5.6vw,5.5rem)] text-coral">
              Creates<span className="text-cream">.</span>
            </span>
          </MaskLine>
        </h1>

        <div className="mt-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
            className="max-w-[240px] text-[14px] leading-normal text-cream/70"
          >
            Every brand touchpoint, owned with intent — so consistency, trust and positioning hold across every
            channel.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
          >
            <Button href="#book" variant="white">
              Book a call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
