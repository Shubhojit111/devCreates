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
          <p className="text-[14px] text-cream/55">(04) — Get in touch</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-10 font-display uppercase leading-[0.8] tracking-[-0.04em]">
            <span className="block text-[clamp(3.25rem,8vw,7.75rem)]">Let's make</span>
            <span className="block text-[clamp(3.25rem,8vw,7.75rem)] text-coral">It happen.</span>
          </h1>
        </Reveal>
        <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal delay={0.12}>
            <p className="max-w-[330px] text-[14px] leading-[1.5] text-cream/65">
              Tell us what you're imagining. Choose a time below and start with a conversation.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <Button href="#book" variant="white">Book a call</Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-3">
            <p className="text-[14px] text-ash">How it begins</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-9">
            <h2 className="max-w-[900px] font-display text-[clamp(2.25rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.04em] text-ink">
              The best first step is a good conversation.
            </h2>
            <p className="mt-7 max-w-[520px] text-[15px] leading-[1.55] text-slate/[0.68]">
              Pick the service, find a time and share a little context. We'll take it from there once real booking and contact details are connected.
            </p>
          </Reveal>
        </div>
      </section>

      <BookInFourTaps />
      <Faq />
    </>
  );
}
