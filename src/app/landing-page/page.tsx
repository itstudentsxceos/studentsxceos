import Hero from './hero';
import About from './about';
import Community from './community';
import CTA from './cta';
import FAQ from './faq';
import Footer from '@/components/Footer';
import Partners from './partners';
import WhatYouGain from './what-you-gain';
import Navbar from './navbar';

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhatYouGain />
      <Community />
      <Partners />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}