import Hero from './hero';
import About from './about';
import Community from './community';
import CTA from './cta';
import Footer from '@/components/Footer';
import WhatYouGain from './what-you-gain';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Community />
      <WhatYouGain />
      <CTA />
      <Footer />
    </main>
  );
}