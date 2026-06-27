import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Desc from "./Desc";
import Vision from "./Vision";
import Method from "./Method";
import Values from "./Values";
import GrowthSection from "./Growth";
import Footer from "@/components/Footer";
import CTA from "./cta";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Desc />
      <Vision />
      <Method />
      <Values />
      <GrowthSection />
      <CTA />
      <Footer />
    </main>
  );
}