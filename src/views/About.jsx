'use client';

import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { Marquee } from '../components/Marquee';

const principles = [
  {
    number: '01',
    title: 'Clarity first',
    description: 'Before the first visual, we find the idea worth making unmistakable. The strongest work has a reason to exist.',
  },
  {
    number: '02',
    title: 'Built to work',
    description: 'Identity, digital and content are one connected experience. Each part should do its job and make the next part stronger.',
  },
  {
    number: '03',
    title: 'Made to last',
    description: 'We make flexible systems that keep their character wherever a brand shows up — today and after the launch.',
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
            <p className="text-[14px] leading-[1.4] text-cream/70">(01) — About Dev Creates</p>
          </Reveal>
          <Reveal delay={0.07}>
            <h1 className="mt-10 font-display uppercase leading-[0.8] tracking-[-0.04em]">
              <span className="block text-[clamp(3.5rem,9vw,8.5rem)]">Design with</span>
              <span className="block text-[clamp(3.5rem,9vw,8.5rem)] text-coral">Purpose.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-10 max-w-[380px] text-[14px] leading-[1.5] text-cream/75">
              Dev Creates is a creative studio for brands that want to mean something, feel distinct and move forward with intent.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-5 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <p className="text-[14px] leading-[1.4] text-ash">Why we create</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-9">
            <h2 className="max-w-[980px] font-display text-[clamp(2.35rem,5.4vw,5.5rem)] leading-[1.02] tracking-[-0.045em] text-ink">
              Good design doesn’t just look different. It makes a difference.
            </h2>
            <div className="mt-10 grid gap-8 border-t border-line pt-8 md:grid-cols-2 md:gap-16">
              <p className="text-[15px] leading-[1.6] text-slate/[0.68]">
                The things people remember are built with care — clear thinking, a strong point of view and the courage to make every detail count.
              </p>
              <p className="text-[15px] leading-[1.6] text-slate/[0.68]">
                We bring those pieces together across identity, websites, apps and content, so the whole experience feels like it comes from one place.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate px-5 py-24 text-cream lg:px-10 lg:py-32">
        <Reveal>
          <p className="text-[14px] text-cream/50">The way we work</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-7 font-display uppercase leading-[0.8] tracking-[-0.04em] text-[clamp(2.5rem,5.5vw,5rem)]">
            Intent in<br /><span className="text-coral">Every detail.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 border-t border-cream/20 pt-8 md:grid-cols-3 lg:mt-20">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <article className="border-t border-cream/20 pt-5 md:border-t-0 md:pt-0">
                <span className="font-display text-[14px] text-coral">({item.number})</span>
                <h3 className="mt-5 font-display text-[28px] tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 max-w-[360px] text-[15px] leading-[1.5] text-cream/55">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee />

      <section className="bg-cream px-5 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-[14px] text-ash">The next chapter</p>
            <h2 className="mt-7 max-w-[720px] font-display text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.04em] text-ink">
              Have something ambitious in mind?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/contact/" variant="dark">Let's talk</Button>
          </Reveal>
        </div>
        <a href="/work/" className="mt-14 flex items-center justify-between border-t border-line py-5 font-display text-[16px] text-ink hover:text-coral">
          Explore the work <ArrowUpRight size={18} />
        </a>
      </section>
    </>
  );
}
