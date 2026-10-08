'use client';

import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { PricingTeaser } from '../components/PricingTeaser';
import { BookInFourTaps } from '../components/BookInFourTaps';
import { Faq } from '../components/Faq';
import { pricing } from '../data/content';

export function PricingPage() {
  return (
    <>
      <section className="flex min-h-[60svh] flex-col justify-end bg-black px-5 pb-14 pt-36 text-cream lg:px-10 lg:pb-20">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.14em] text-cream/60">(05) — Pricing</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-8 font-display uppercase leading-[0.85] tracking-[-0.04em]">
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)]">Simple,</span>
            <span className="block text-[clamp(2.6rem,7vw,6.5rem)] text-coral">fixed pricing.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-[480px] text-[15px] leading-[1.6] text-cream/70">
            Starting points, not surprise bills. Your exact fixed scope and quote land after one free discovery call —
            agreed before anything starts.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-6 flex flex-wrap gap-2">
            {pricing.map((t) => (
              <span key={t.name} className="rounded-full border border-cream/20 px-3.5 py-1.5 text-[13px] text-cream/80">
                {t.name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8">
            <Button href="#book" variant="white">Get my fixed quote</Button>
          </div>
        </Reveal>
      </section>

      <PricingTeaser bare />

      <BookInFourTaps />
      <Faq />
    </>
  );
}
