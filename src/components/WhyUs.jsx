'use client';

import { Gauge, Search, KeyRound, ReceiptText } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const points = [
  {
    Icon: Search,
    title: 'Built to be found',
    desc: 'Semantic pages, meta titles, sitemap and Google Business + maps wiring — so nearby customers actually find you.',
  },
  {
    Icon: Gauge,
    title: 'Fast on cheap phones',
    desc: 'Custom Next.js builds targeting 90+ PageSpeed. No bloated page builders slowing down your enquiries.',
  },
  {
    Icon: KeyRound,
    title: 'You own everything',
    desc: 'Domain, code and content in your name from day one. Stay for care because it helps, never because you must.',
  },
  {
    Icon: ReceiptText,
    title: 'Fixed quote, no surprises',
    desc: 'Scope, price and launch date agreed before we start. No hourly meters running in the background.',
  },
];

const stats = [
  ['30+', 'projects shipped'],
  ['8', 'live builds to explore'],
  ['2–8 wks', 'typical launch time'],
  ['100%', 'ownership to you'],
];

export function WhyUs() {
  return (
    <section id="why" className="border-t border-line bg-cream px-5 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <Reveal className="lg:col-span-8">
          <p className="text-[13px] uppercase tracking-[0.14em] text-ash">Why dev.creates</p>
          <h2 className="mt-4 max-w-[720px] font-display text-[clamp(2.2rem,4.8vw,4rem)] leading-[1.0] tracking-[-0.04em] text-ink">
            An agency that thinks like a business owner.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-4">
          <p className="text-[14px] leading-[1.55] text-ash lg:ml-auto lg:max-w-[280px] lg:text-right">
            Pretty is table stakes. We optimise for the three things that pay you back — ranking, speed and enquiries.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {points.map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 0.07}>
            <article className="h-full border-t-2 border-ink pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-cream">
                <Icon size={18} />
              </span>
              <h3 className="mt-5 font-display text-[20px] tracking-[-0.02em] text-ink">{title}</h3>
              <p className="mt-2.5 text-[14px] leading-[1.6] text-ash">{desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <dl className="grid grid-cols-2 gap-6 rounded-2xl bg-ink p-7 text-cream lg:grid-cols-4 lg:p-9">
          {stats.map(([v, l]) => (
            <div key={l}>
              <dd className="font-display text-[30px] tracking-[-0.02em] lg:text-[36px]">{v}</dd>
              <dt className="mt-1 text-[12px] uppercase tracking-[0.12em] text-cream/60">{l}</dt>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
