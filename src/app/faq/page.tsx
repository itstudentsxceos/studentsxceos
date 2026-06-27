import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import Vision from "./Vision";
import Fellowship from "./Fellowship";
import Partnerships from "./Partnerships";
import CategoryFilter from "./CategoryFilter";
import Footer from "@/components/Footer";
import CTA from "./cta";

export default function FAQ() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CategoryFilter />
      <Vision />
      <Fellowship />
      <Partnerships />
      <CTA />
      <Footer />
    </main>
  );
}