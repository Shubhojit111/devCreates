'use client';

import { useState } from 'react';
import { Hero } from '../components/Hero';
import { Marquee } from '../components/Marquee';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Work } from '../components/Work';
import { WhyUs } from '../components/WhyUs';
import { PricingTeaser } from '../components/PricingTeaser';
import { BookInFourTaps } from '../components/BookInFourTaps';
import { Faq } from '../components/Faq';

export function Home() {
  const [prefill, setPrefill] = useState(null);

  const handleServiceSelect = (id) => {
    setPrefill(id);
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <Marquee />
      <Services onSelect={handleServiceSelect} />
      <Process />
      <Work limit={4} />
      <WhyUs />
      <PricingTeaser />
      <BookInFourTaps prefillService={prefill} />
      <Faq />
    </>
  );
}
