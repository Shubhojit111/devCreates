'use client';

import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { BookInFourTaps } from '../components/BookInFourTaps';
import { Faq } from '../components/Faq';

export function Contact() {
  return (
    <>
      <section className="flex min-h-[70svh] flex-col justify-end bg-black px-5 pb-14 pt-36 text-cream lg:px-10 lg:pb-20">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.14em] text-cream/60">(04) — Get a fixed quote</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-8 font-display uppercase leading-[0.85] tracking-[-0.04em]">
            <span className="block text-[clamp(2.75rem,7vw,6.5rem)]">Tell us what</span>
            <span className="block text-[clamp(2.75rem,7vw,6.5rem)] text-coral">you sell.</span>
          </h1>
        </Reveal>
        <div className="mt-8 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal delay={0.12}>
            <p className="max-w-[420px] text-[15px] leading-[1.6] text-cream/70">
              Website, store, bookings or SaaS — pick a 30-min slot below. You'll leave with a fixed scope, a fixed
              quote and a launch date.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Button href="#book" variant="white">Book my free call</Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <p className="text-[13px] uppercase tracking-[0.14em] text-ash">What happens next</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-9">
            <h2 className="max-w-[900px] font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] tracking-[-0.04em] text-ink">
              One call. Fixed quote. No pressure.
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                ['1 — Pick', 'Service + a time that suits you.'],
                ['2 — Talk', 'We map scope, price & launch date live.'],
                ['3 — Launch', 'Design → build → rank in 2–8 weeks.'],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-line bg-paper p-5">
                  <p className="font-display text-[16px]">{t}</p>
                  <p className="mt-2 text-[14px] leading-[1.55] text-ash">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <BookInFourTaps />
      <Faq />
    </>
  );
}
