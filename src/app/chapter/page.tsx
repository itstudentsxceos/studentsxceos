import Hero from './hero';
import About from './about';
import Highlights from './highlights';
import Programs from './programs';
import Universities from './universities';
import Contact from './contact';
import Footer from '@/components/Footer';

export default function ChapterDetail() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Highlights />
      <Programs />
      <Universities />
      <Contact />
      <Footer />
    </main>
  );
}