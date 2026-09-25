'use client';

import { Work } from '../components/Work';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

export function WorkPage() {
  return (
    <>
      <section className="flex min-h-[60svh] flex-col justify-end bg-slate px-5 pb-10 pt-36 text-cream lg:px-10 lg:pb-16">
        <Reveal>
          <p className="text-[14px] text-cream/55">(03) — Our projects</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-9 font-display uppercase leading-[0.8] tracking-[-0.04em]">
            <span className="block text-[clamp(3.25rem,8vw,7.75rem)]">Selected</span>
            <span className="block text-[clamp(3.25rem,8vw,7.75rem)] text-coral">Work.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-9 max-w-[490px] text-[14px] leading-[1.5] text-cream/65">
            A look at how strategy, identity and digital craft can come together. These concept studies are placeholders until Dev Creates adds verified client work.
          </p>
        </Reveal>
      </section>
      <Work />
      <section className="bg-cream px-5 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-start justify-between gap-10 border-t border-line pt-8 lg:flex-row lg:items-end">
          <Reveal>
            <p className="text-[14px] text-ash">Your project could be next</p>
            <h2 className="mt-7 max-w-[760px] font-display text-[clamp(2.4rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.04em] text-ink">
              Let's create something worth remembering.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/contact/" variant="dark">Start a project</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
