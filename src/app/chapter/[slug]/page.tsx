import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '../hero';
import Highlights from '../highlights'; 
import Universities from '../universities';
import ActivityHighlights from '../activity-highlights'; 
import Footer from '@/components/Footer';

const chapterData = {
  yogyakarta: {
    heroTitle: 'Yogyakarta',
    heroSubtitle: 'Nurturing Future Leaders Across Yogyakarta',
    heroBg: "/candi.png",
    coverageAreas: ['Bantul', 'Sleman', 'Gunung Kidul', 'Kulon Progo'], 
    highlights: [
      { label: "Established", value: "2011" },
      { label: "Members", value: "TBA" },
    ],
    universities: [
      { name: 'Universitas Gadjah Mada', logo: '/universities/logo-ugm.png' },
      { name: 'Universitas Pembangunan Nasional "Veteran" Yogyakarta', logo: '/universities/logo-upn.png' },
      { name: 'Universitas Islam Indonesia', logo: '/universities/logo-uii.png' },
      { name: 'Universitas Muhammadiyah Yogyakarta', logo: '/universities/logo-umy.png' },
      { name: 'Universitas Atma Jaya Yogyakarta', logo: '/universities/logo-atma-jaya.png' },
      { name: 'Universitas Sanata Dharma', logo: '/universities/logo-sanatadharma.png' },
      { name: 'Universitas Negeri Yogyakarta', logo: '/universities/logo-uny.png' },
      { name: 'Universitas Islam Negeri Sunan Kalijaga', logo: '/universities/logo-uiksk.png' },
    ],
       activityImages: [
      '/yogyakarta/yogyakarta1.jpg',
      '/yogyakarta/yogyakarta2.jpg',
      '/yogyakarta/yogyakarta3.jpg',
      '/yogyakarta/yogyakarta4.jpg',
      '/yogyakarta/yogyakarta5.jpg',
      '/yogyakarta/yogyakarta6.jpg',
      '/yogyakarta/yogyakarta7.jpg',
      '/yogyakarta/yogyakarta8.jpg',
      '/yogyakarta/yogyakarta9.jpg',
      '/yogyakarta/yogyakarta10.jpg',
      '/yogyakarta/yogyakarta11.jpg',
      '/yogyakarta/yogyakarta12.jpg',
    ],
  },

  'east-java': {
    heroTitle: 'East Java',
    heroSubtitle: 'Nurturing Future Leaders Across East Java',
    heroBg: "/places/east-java.png",
    coverageAreas: ['Surabaya', 'Malang', 'Kediri', 'Madiun', 'Jember'],
    highlights: [
      { label: "Established", value: "2017" },
      { label: "Members", value: "70+" },
    ],
    universities: [
      { name: 'Universitas Brawijaya', logo: '/universities/logo-ub.png' },
      { name: 'Universitas Airlangga', logo: '/universities/logo-unair.png' },
      { name: 'Institut Teknologi Sepuluh Nopember', logo: '/universities/logo-its.jpg' },
      { name: 'Universitas Malang', logo: '/universities/logo-um.jpg' },
      { name: 'Universitas Ciputra Surabaya', logo: '/universities/logo-uc.png' },
      { name: 'Petra Christian University', logo: '/universities/logo-pcu.png' },
      { name: 'Universitas Muhammadiyah Malang', logo: '/universities/logo-umm.png' },
      { name: 'Binus University Malang', logo: '/universities/logo-binus.png' },
      { name: 'Universitas Surabaya', logo: '/universities/logo-ubaya.png' },
    ],
    activityImages: [
      '/east-java/east-java1.jpg',
      '/east-java/east-java2.jpg',
      '/east-java/east-java3.jpg',
      '/east-java/east-java4.jpg',
      '/east-java/east-java5.jpg',
      '/east-java/east-java6.jpg',
      '/east-java/east-java7.jpg',
      '/east-java/east-java8.jpg',
      '/east-java/east-java9.jpg',
      '/east-java/east-java10.jpg',
      '/east-java/east-java11.jpg',
    ],
  },

  bandung: {
    heroTitle: 'Bandung',
    heroSubtitle: 'Nurturing Future Leaders Across Bandung',
    heroBg: "/places/bandung.png",
    coverageAreas: ['Bandung', 'Jatinangor','Cimahi'],
    highlights: [
      { label: "Established", value: "2015" },
      { label: "Members", value: "40+" },
    ],
    universities: [
      { name: 'Institut Teknologi Bandung', logo: '/universities/logo-itb.png' },
      { name: 'Universitas Padjadjaran', logo: '/universities/logo-unpad.png' },
      { name: 'Telkom University', logo: '/universities/logo-telU.png' },
      { name: 'Institut Teknologi Nasional', logo: '/universities/logo-itenas.png' },
      { name: 'Universitas Pendidikan Indonesia', logo: '/universities/logo-upi.jpg' },
      { name: 'Universitas Kristen Maranatha', logo: '/universities/logo-ukm.png' },
      { name: 'Universitas Pasundan', logo: '/universities/logo-universitas-pasundan.png' },
      { name: 'Universitas Widyatama', logo: '/universities/logo-universitas-widyatama.png' },
      { name: 'UIN Sunan Gunung Djati Bandung', logo: '/universities/logo-uin-sunan-gunung-djati-bandung.png' },
    ],
    activityImages: [
      '/bandung/bandung3.jpg',
      '/bandung/bandung2.jpg',
      '/bandung/bandung3.jpg',
      '/bandung/bandung4.jpg',
      '/bandung/bandung5.jpg',
      '/bandung/bandung6.jpg',
      '/bandung/bandung1.jpg',

    ],
  },

  jakarta: {
    heroTitle: 'Jakarta',
    heroSubtitle: 'Nurturing Future Leaders Across Jakarta',
    heroBg: "/places/jakarta.png",
    coverageAreas: ['Jakarta', 'Bogor', 'Depok', 'Tangerang', 'Bekasi'], 
    highlights: [
      { label: "Established", value: "2010" },
      { label: "Members", value: "70+" },
    ],
    universities: [
      { name: 'Universitas Indonesia', logo: '/universities/logo-ui.png' },
      { name: 'Universitas Gunadarma', logo: '/universities/logo-universitas-gunadarma.png' },
      { name: 'Institut Pertanian Bogor', logo: '/universities/logo-ipb.png' },
      { name: 'Universitas Katolik Atma Jaya', logo: '/universities/logo-uaj.png' },
      { name: 'UIN Syarif Hidayatullah Jakarta', logo: '/universities/logo-uinshj.png' },
      { name: 'Universitas Trisakti', logo: '/universities/logo-trisakti.png' },
      { name: 'UPN Veteran Jakarta', logo: '/universities/logo-upn.png' },
      { name: 'Universitas Negeri Jakarta', logo: '/universities/logo-unj.png' },
      { name: 'Universitas Bina Nusantara', logo: '/universities/logo-binus.png' },
      { name: 'Universitas Prasetiya Mulya', logo: '/universities/logo-prasetiya-mulya.png' },
      { name: 'Universitas Esa Unggul', logo: '/universities/logo-esa-unggul.png' },
      { name: 'Sampoerna University', logo: '/universities/logo-sampoerna.png' },
      { name: 'Universitas Tarumanagara', logo: '/universities/logo-untar.png' },
      { name: 'President University', logo: '/universities/logo-president-university.png' },
      { name: 'Universitas Pancasila', logo: '/universities/logo-universitas-pancasila.png' },
      { name: 'Universitas Mercu Buana', logo: '/universities/logo-mercu-buana.png' },
      { name: 'LSPR', logo: '/universities/logo-lspr.png' },
    ],
        activityImages: [
      '/jakarta/jakarta1.jpg',
      '/jakarta/jakarta2.jpg',
      '/jakarta/jakarta3.jpg',
      '/jakarta/jakarta4.jpg',
      '/jakarta/jakarta6.jpg',
      '/jakarta/jakarta7.jpg',
      '/jakarta/jakarta8.jpg',
      '/jakarta/jakarta9.jpg',
      '/jakarta/jakarta10.jpg',
      '/jakarta/jakarta11.jpg',
      '/jakarta/jakarta12.jpg',
    ],
  },
  
  semarang: {
    heroTitle: 'Semarang',
    heroSubtitle: 'Nurturing Future Leaders Across Semarang',
    heroBg: "/places/kota-semarang.png",
    coverageAreas: [],
    highlights: [
      { label: "Established", value: "2015" },
      { label: "Members", value: "50+" },
    ],
    universities: [
      { name: 'Universitas Diponegoro', logo: '/universities/undip.png' },
      { name: 'Universitas Negeri Semarang', logo: '/universities/unnes.jpg' },
      { name: 'Politeknik Negeri Semarang', logo: '/universities/polines.png' },
      { name: 'Universitas Dian Nuswantoro', logo: '/universities/udinus.jpg' },
      { name: 'Universitas Katolik Soegijapranata', logo: '/universities/unika.jpg' },
      { name: 'Universitas Islam Sultan Agung', logo: '/universities/unissula.png' },
      { name: 'Binus University', logo: '/universities/logo-binus.png' },
    ], 
    activityImages: [],
  },
};

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = chapterData[slug as keyof typeof chapterData];

  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Chapter not found</h1>
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
           <Navbar />
      <Hero title={data.heroTitle} subtitle={data.heroSubtitle} bgImage={data.heroBg} />
      
      <Highlights 
        stats={data.highlights}
        coverageAreas={data.coverageAreas} 
      />
      
      <Universities data={data.universities} />
      <ActivityHighlights 
        chapterName={data.heroTitle} 
        images={data.activityImages} 
      />
      
      <Footer />
    </main>
  );
}