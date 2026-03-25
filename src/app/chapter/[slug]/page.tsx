import React from 'react';
import Hero from '../hero';
import About from '../about';
import Programs from '../programs';
import Highlights from '../highlights';
import Universities from '../universities';
import Contact from '../contact';
import Footer from '@/components/Footer';

const chapterData = {
  yogyakarta: {
    heroTitle: 'Yogyakarta',
    heroSubtitle: 'Nurturing Future Leaders Across Yogyakarta',
    heroBg: "/candi.png",
    aboutDescription: (
      <>
        SxC Yogyakarta connects ambitious students with industry leaders through
        curated discussions and strategic initiatives. By uniting diverse
        academic backgrounds, we create meaningful opportunities for future
        business leaders.
      </>
    ),
    highlights: [
      { label: "Established", value: "2011" },
      { label: "Members", value: "TBA" },
      { label: "Programs", value: "TBA" },
      { label: "Universities", value: "TBA" },
    ],
    programs: [
      {
        title: 'Coming soon',
        description: 'To be announced',
        image: '/candi.png',
      },
      {
        title: 'Coming soon',
        description: 'To be announced',
        image: '/candi.png',
      },
      {
        title: 'Coming soon',
        description: 'To be announced',
        image: '/candi.png',
      },
      {
        title: 'Coming soon',
        description: 'To be announced',
        image: '/candi.png',
      },
    ],
    contactEmail: "yogyakarta@studentsxceos.org",
  },



  'east-java': {
    heroTitle: 'East Java',
    heroSubtitle: 'Nurturing Future Leaders Across East Java',
    heroBg: "/places/east-java.png",
    aboutDescription: (
      <>
        SxC East Java connects ambitious students with industry leaders through
        curated discussions, executive sessions, and strategic initiatives.
        Operating across key academic hubs in{' '}
        <strong className="font-medium">
          Surabaya, Malang, Kediri, Madiun, and Jember
        </strong>
        . By uniting diverse academic backgrounds, SxC East Java creates
        meaningful opportunities for collaboration, leadership development, and
        networking among future business leaders.
      </>
    ),
    highlights: [
      { label: "Established", value: "2017" },
      { label: "Members", value: "70+" },
      { label: "Programs", value: "5" },
      { label: "Universities", value: "9" },
    ],
    programs: [
      {
        title: 'Meet The Expert',
        description: 'Exclusive expert insights',
        image: '/programs/program-mte.jpg',
      },
      {
        title: 'Pro Connect',
        description: 'Regional networking hub',
        image: '/programs/program-ejpc.JPG',
      },
      {
        title: 'SxC Academy',
        description: 'Intensive leadership training',
        image: '/programs/program-academy.JPG',
      },
      {
        title: 'IGDF',
        description: 'National strategic discussions',
        image: '/programs/program-igdf.jpg',
      },
      {
        title: 'Global Summit',
        description: 'Global networking event',
        image: '/programs/program-summit.jpg',
      },
    ],
    contactEmail: "eastjava@studentsxceos.org",
  },



  bandung: {
    heroTitle: 'Bandung',
    heroSubtitle: 'Nurturing Future Leaders Across Bandung',
    heroBg: "/places/bandung.png",
    aboutDescription: (
      <>
       SxC Bandung connects ambitious students with industry leaders through
        curated discussions, executive sessions, and strategic initiatives.
        By uniting diverse academic backgrounds, SxC Bandung creates
        meaningful opportunities for collaboration, leadership development, and
        networking among future business leaders.
      </>
    ),
    highlights: [
      { label: "Established", value: "2015" },
      { label: "Members", value: "40+" },
      { label: "Programs", value: "6" },
      { label: "Universities", value: "10" },
    ],
    programs: [
      { 
        title: "Project Management", 
        description: "Mastering execution skills", 
        image: '/programs/program-academy.JPG',
      },
      { 
        title: "Behind the Scenes", 
        description: "Exclusive company insights", 
        image: "/programs/behind-the-scene.jpeg" 
      },
      { 
        title: "Meet the CEOs", 
        description: "Direct executive mentoring", 
        image: '/programs/program-mte.jpg',
      },
      { 
        title: "SxCare", 
        description: "Social impact initiatives", 
        image: '/programs/program-summit.jpg',
      },
      { 
        title: "SxConnect", 
        description: "Extensive networking sessions", 
        image: '/programs/program-ejpc.JPG',
      },
      { 
        title: "SxC Grand Summit", 
        description: "Annual leadership conference", 
        image: '/programs/program-igdf.jpg',
      }
    ],
    contactEmail: "bandung@studentsxceos.org",
  },



  jakarta: {
    heroTitle: 'Jakarta',
    heroSubtitle: 'Nurturing Future Leaders Across Jakarta',
    heroBg: "/places/jakarta.png",
    aboutDescription: (
      <>
        SxC Jakarta connects ambitious students with industry leaders through
        curated discussions, executive sessions, and strategic initiatives.
        Operating across key academic hubs in{' '}
        <strong className="font-medium">
          Jakarta, Bogor, Depok, Tanggerang, and Bekasi
        </strong>
        . By uniting diverse academic backgrounds, SxC Jakarta creates
        meaningful opportunities for collaboration, leadership development, and
        networking among future business leaders.
      </>
    ),
    highlights: [
      { label: "Established", value: "2010" },
      { label: "Members", value: "70+" },
      { label: "Programs", value: "8" },
      { label: "Universities", value: "25" },
    ],
    programs: [
      { 
        title: "School of Ideas", 
        description: "Innovative concept development", 
        image:'/programs/program-summit.jpg',
      },
      { 
        title: "SxCareer", 
        description: "Professional career preparation", 
        image: '/programs/program1.jpg',
      },
      { 
        title: "SxConference", 
        description: "High-level industry panels", 
        image: '/programs/program2.jpg',
      },
      { 
        title: "SxCollab", 
        description: "Strategic partnership projects", 
        image: '/programs/program3.jpg',
      },
      { 
        title: "SxNetwork", 
        description: "Exclusive executive networking", 
        image: "/programs/behind-the-scene.jpeg" 
      },
      { 
        title: "SxCelerate", 
        description: "Fast-track leadership growth", 
        image: '/programs/program4.jpg', 
      },
      { 
        title: "Meet the Series", 
        description: "Direct industry insights", 
        image: '/programs/program-mte.jpg',
      },
      { 
        title: "SxC International Summit", 
        description: "Global leadership convergence", 
        image: '/programs/program5.png',
      }
    ],
    contactEmail: "jakarta@studentsxceos.org",
  },
   semarang: {
    heroTitle: 'Semarang',
    heroSubtitle: 'Nurturing Future Leaders Across Semarang',
    heroBg: "/places/kota-semarang.png",
    aboutDescription: (
      <>
        SxC Semarang connects ambitious students with industry leaders through
        curated discussions and strategic initiatives. By uniting diverse
        academic backgrounds, we create meaningful opportunities for future
        business leaders.
      </>
    ),
    highlights: [
      { label: "Established", value: "2015" },
      { label: "Members", value: "50+" },
      { label: "Programs", value: "TBA" },
      { label: "Universities", value: "TBA" },
    ],
    programs: [
      {
        title: 'Coming soon',
        description: 'To be announced',
        image: '/candi.png',
      },
      {
        title: 'Coming soon',
        description: 'To be announced',
        image: '/candi.png',
      },
      {
        title: 'Coming soon',
        description: 'To be announced',
        image: '/candi.png',
      },
      {
        title: 'Coming soon',
        description: 'To be announced',
        image: '/candi.png',
      },
    ],
    contactEmail: "semarang@studentsxceos.org",
  },
};

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = chapterData[slug as keyof typeof chapterData];

  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      <Hero title={data.heroTitle} subtitle={data.heroSubtitle} bgImage={data.heroBg}/>
      <About description={data.aboutDescription} />
      <Highlights stats={data.highlights} />
      <Programs data={data.programs} />
      <Universities />
      <Contact email={data.contactEmail} />
      <Footer />
    </main>
  );
}
