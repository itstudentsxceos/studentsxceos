import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Partners from "./Partners";
import Why from "./Why";
import Ways from "./Ways";
import Medpart from "./Medpart";
import Footer from "@/components/Footer";
import Speakers from "./Speakers";
import CTA from "./cta";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Why />
      <Medpart />
      <Speakers />
      <Ways />
      <CTA />
      <Footer />
    </main>
  );
}