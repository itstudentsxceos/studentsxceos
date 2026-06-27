import Hero from './hero';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GetToKnow from './Get-to-know';
import Lead from './Lead-the-future';
import Partner from './Partner';

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <GetToKnow />
      <Lead />
      <Partner />
      <Footer />
    </main>
  );
}