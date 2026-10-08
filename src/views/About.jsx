'use client';

import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { Marquee } from '../components/Marquee';
import { milestones } from '../data/content';

const principles = [
  {
    number: '01',
    title: 'Business first, design second',
    description: 'Every page has a job — rank, explain, convert. We design backwards from enquiries, checkouts and signups, not from dribbble shots.',
  },
  {
    number: '02',
    title: 'Built to rank & load fast',
    description: 'Semantic HTML, meta + sitemap, 90+ PageSpeed targets and local SEO wiring. If Google can’t find it, it doesn’t ship.',
  },
  {
    number: '03',
    title: 'Owned by you, supported by us',
    description: 'Fixed quotes, and you own the code and domain from day one. Optional care plans keep you fast and ranking — staying is never a lock-in.',
  },
];

export function About() {
  return (
    <>
      <section className="relative flex min-h-[78svh] flex-col justify-end overflow-hidden bg-black px-5 pb-14 pt-36 text-cream lg:px-10 lg:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/hero-poster.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20" aria-hidden="true" />
        <div className="relative z-10">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.14em] text-cream/70">(01) — About dev.creates</p>
          </Reveal>
          <Reveal delay={0.07}>
            <h1 className="mt-8 font-display uppercase leading-[0.85] tracking-[-0.04em]">
              <span className="block text-[clamp(2.75rem,8vw,7rem)]">A web agency</span>
              <span className="block text-[clamp(2.75rem,8vw,7rem)] text-coral">for businesses.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-[480px] text-[15px] leading-[1.6] text-cream/75">
              dev.creates designs & builds business websites, e-commerce & booking systems, and SaaS products —
              fixed quotes, SEO-ready from day one, launched in weeks.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <p className="text-[13px] uppercase tracking-[0.14em] text-ash">Why we exist</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-9">
            <h2 className="max-w-[980px] font-display text-[clamp(2rem,4.8vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-ink">
              Most business websites don't sell. Ours are built to.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2 md:gap-16">
              <p className="text-[15px] leading-[1.65] text-slate/[0.72]">
                A business site has three jobs: show up on Google, explain the offer in 10 seconds, and make enquiring
                effortless. Stores add a fourth — checkout without friction. SaaS adds auth, dashboards and billing that
                just work.
              </p>
              <p className="text-[15px] leading-[1.65] text-slate/[0.72]">
                That's all we do at dev.creates: Next.js websites, stores & SaaS with copy polish, WhatsApp/call
                enquiry flows, payments where needed, and analytics so you know what's working.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate px-5 py-24 text-cream lg:px-10 lg:py-32">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.14em] text-cream/50">How we work</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-6 font-display uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(2.25rem,5vw,4.5rem)]">
            Fixed scope.<br /><span className="text-coral">Fixed price. Launch date.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 border-t border-cream/20 pt-8 md:grid-cols-3 lg:mt-20">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <article className="border-t border-cream/20 pt-5 md:border-t-0 md:pt-0">
                <span className="font-display text-[14px] text-coral">({item.number})</span>
                <h3 className="mt-5 font-display text-[26px] tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 max-w-[360px] text-[15px] leading-[1.55] text-cream/60">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee />

      <section className="bg-cream px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="text-[13px] uppercase tracking-[0.14em] text-ash">The road here</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.02] tracking-[-0.04em] text-ink">
              Milestones, not promises.
            </h2>
          </Reveal>
          <div className="lg:col-span-8">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06}>
                <article className="grid gap-2 border-t border-line py-7 sm:grid-cols-12 sm:gap-6">
                  <span className="font-display text-[22px] text-coral sm:col-span-2">{m.year}</span>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-[20px] tracking-[-0.02em] text-ink">{m.title}</h3>
                    <p className="mt-2 max-w-[560px] text-[14px] leading-[1.6] text-ash">{m.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.14em] text-ash">The next step</p>
            <h2 className="mt-6 max-w-[720px] font-display text-[clamp(2rem,4.5vw,4.25rem)] leading-[1.02] tracking-[-0.04em] text-ink">
              Get a fixed quote for your site or SaaS idea.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/contact/" variant="dark">Let's talk</Button>
          </Reveal>
        </div>
        <a href="/work/" className="mt-14 flex items-center justify-between border-t border-line py-5 font-display text-[16px] text-ink hover:text-coral">
          See our live work <ArrowUpRight size={18} />
        </a>
      </section>
    </>
  );
}
