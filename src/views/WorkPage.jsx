'use client';

import { Work } from '../components/Work';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

export function WorkPage() {
  return (
    <>
      <section className="flex min-h-[60svh] flex-col justify-end bg-slate px-5 pb-10 pt-36 text-cream lg:px-10 lg:pb-16">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.14em] text-cream/60">(03) — Selected work</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-8 font-display uppercase leading-[0.85] tracking-[-0.04em]">
            <span className="block text-[clamp(2.75rem,7vw,6.5rem)]">Work that</span>
            <span className="block text-[clamp(2.75rem,7vw,6.5rem)] text-coral">speaks for itself.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-[540px] text-[15px] leading-[1.6] text-cream/70">
            Real websites, online stores and SaaS products from our portfolio — each with the story, the stack and
            the outcome it was built for. Open the live ones, or ask for a walkthrough on a call.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Business websites', 'E-commerce & bookings', 'SaaS products'].map((t) => (
              <span key={t} className="rounded-full border border-cream/20 px-3.5 py-1.5 text-[13px] text-cream/80">{t}</span>
            ))}
          </div>
        </Reveal>
      </section>
      <Work />
      <section className="bg-cream px-5 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-10 border-t border-line pt-8 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.14em] text-ash">Your business could be next</p>
            <h2 className="mt-6 max-w-[760px] font-display text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.02] tracking-[-0.04em] text-ink">
              Tell us what you sell. We'll map exactly how to build it.
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-[1.6] text-ash">
              One 30-min call → fixed scope, fixed price, launch date in writing. No pitch decks, no pressure.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Button href="/pricing/" variant="dark">See pricing</Button>
              <Button href="/contact/#book" variant="dark">Start a project</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
