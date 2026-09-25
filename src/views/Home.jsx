'use client';

import { useState } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Marquee } from '../components/Marquee';
import { Work } from '../components/Work';
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
      <Services onSelect={handleServiceSelect} />
      <Marquee />
      <Work />
      <BookInFourTaps prefillService={prefill} />
      <Faq />
    </>
  );
}
