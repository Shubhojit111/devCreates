'use client';

import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

const steps = [
  {
    num: '01',
    title: 'Free discovery call',
    time: '30 minutes',
    desc: 'You show us your business and goals. We map the pages, features and launch date — then send a fixed scope and quote. No pressure, no jargon.',
  },
  {
    num: '02',
    title: 'Design you can react to',
    time: '5–7 days',
    desc: 'Homepage look, key sections and the words that sell — shaped around your offer, photos and reviews. Two revision rounds included.',
  },
  {
    num: '03',
    title: 'Build, tested on phones',
    time: '1–4 weeks',
    desc: 'Custom Next.js build: enquiry flows, payments or auth where needed, SEO tags, sitemap and speed tuning. You preview on a live staging link.',
  },
  {
    num: '04',
    title: 'Launch & get found',
    time: 'Day one + beyond',
    desc: 'Domain, hosting, Google Business, maps and analytics wired up. Optional care plan keeps you fast, updated and ranking.',
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-line bg-cream px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <p className="text-[13px] uppercase tracking-[0.14em] text-ash">How it works</p>
          <h2 className="mt-4 font-display uppercase leading-[0.85] tracking-[-0.04em] text-ink">
            <span className="block text-[clamp(2.4rem,5vw,4rem)]">First call</span>
            <span className="block text-[clamp(2.4rem,5vw,4rem)] text-coral">to launch.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-4">
          <p className="text-[14px] leading-[1.55] text-ash lg:ml-auto lg:max-w-[280px] lg:text-right">
            A simple, visible process — you always know what's happening, what comes next, and when you launch.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 xl:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.07}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7">
              <div className="flex items-center justify-between">
                <span className="font-display text-[14px] text-coral">({s.num})</span>
                <span className="rounded-full border border-line px-3 py-1 text-[12px] text-ash">{s.time}</span>
              </div>
              <h3 className="mt-5 font-display text-[22px] leading-[1.1] tracking-[-0.02em] text-ink">{s.title}</h3>
              <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-ash">{s.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <Button href="#book" variant="dark">Start with step 01 — it's free</Button>
      </Reveal>
    </section>
  );
}
