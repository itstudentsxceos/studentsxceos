'use client';
import { motion } from 'framer-motion';

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, i) => array.slice(i * size, i * size + size)
  );
}

export default function Universities() {
  const universities = [
    { name: 'Universitas Gadjah Mada', logo: '/universities/logo-ugm.png' },
    { name: 'Universitas Pembangunan Nasional', logo: '/universities/logo-upn.png' },
    { name: 'Telkom University', logo: '/universities/logo-telU.png' },
    { name: 'Universitas Indonesia', logo: '/universities/logo-ui.png' },
    { name: 'Institut Teknologi Nasional', logo: '/universities/logo-itenas.png' },
    { name: 'Institut Teknologi Bandung', logo: '/universities/logo-itb.png' },
    { name: 'Universitas Padjadjaran', logo: '/universities/logo-unpad.png' },
    { name: 'Universitas Pendidikan Indonesia', logo: '/universities/logo-upi.jpg' },
    { name: 'Universitas Kristen Maranatha', logo: '/universities/logo-ukm.png' },
    { name: 'Universitas Pasundan', logo: '/universities/logo-universitas-pasundan.png' },
    { name: 'Universitas Widyatama', logo: '/universities/logo-universitas-widyatama.png' },
    { name: 'UIN Sunan Gunung Djati Bandung', logo: '/universities/logo-uin-sunan-gunung-djati-bandung.png' },
    { name: 'Universitas Brawijaya', logo: '/universities/logo-ub.png' },
    { name: 'Universitas Airlangga', logo: '/universities/logo-unair.png' },
    { name: 'Institut Teknologi Sepuluh Nopember', logo: '/universities/logo-its.jpg' },
    { name: 'Universitas Malang', logo: '/universities/logo-um.jpg' },
    { name: 'Universitas Ciputra Surabaya', logo: '/universities/logo-uc.png' },
    { name: 'Petra Christian University', logo: '/universities/logo-pcu.png' },
    { name: 'Universitas Muhammadiyah Malang', logo: '/universities/logo-umm.png' },
    { name: 'Binus University Malang', logo: '/universities/logo-binus.png' },
    { name: 'Universitas Surabaya', logo: '/universities/logo-ubaya.png' },
    { name: 'Universitas Indonesia', logo: '/universities/logo-ui.png' },
    { name: 'Universitas Gunadarma', logo: '/universities/logo-universitas-gunadarma.png' },
    { name: 'Institut Pertanian Bogor', logo: '/universities/logo-ipb.png' },
    { name: 'Universitas Katolik Atma Jaya', logo: '/universities/logo-uaj.png' },
    { name: 'Universitas Islam Negeri Syarif Hidayatullah Jakarta', logo: '/universities/logo-uinshj.png' },
    { name: 'Universitas Trisakti', logo: '/universities/logo-trisakti.png' },
    { name: 'Universitas Pembangunan Nasional Veteran Jakarta', logo: '/universities/logo-upn.png' },
    { name: 'Asia e University', logo: '/universities/logo-aeu.png' },
    { name: 'Universitas Negeri Jakarta', logo: '/universities/logo-unj.png' },
    { name: 'Universitas Singaperbangsa Karawang', logo: '/universities/logo-unsika.png' },
    { name: 'Institut Kesenian Jakarta', logo: '/universities/logo-ikj.png' },
    { name: 'Universitas Bina Nusantara', logo: '/universities/logo-binus.png' },
    { name: 'Universitas Prasetiya Mulya', logo: '/universities/logo-prasetiya-mulya.png' },
    { name: 'Universitas Esa Unggul', logo: '/universities/logo-esa-unggul.png' },
    { name: 'Sampoerna University', logo: '/universities/logo-sampoerna.png' },
    { name: 'Universitas Tarumanagara', logo: '/universities/logo-untar.png' },
    { name: 'President University', logo: '/universities/logo-president-university.png' },
    { name: 'Universitas Pancasila', logo: '/universities/logo-universitas-pancasila.png' },
    { name: 'Universitas Mercu Buana', logo: '/universities/logo-mercu-buana.png' },
    { name: 'London School of Public Relations', logo: '/universities/logo-lspr.png' },
    { name: 'Djuanda University', logo: '/universities/logo-djuanda.png' },
    { name: 'Politeknik Negeri Jakarta', logo: '/universities/logo-pnj.jpg' },
    { name: 'Universitas Terbuka', logo: '/universities/logo-ut.jpg' },
    { name: 'Politeknik APP Jakarta', logo: '/universities/logo-app.png' },
    { name: 'Sekolah Tinggi Filsafat Theologi Jakarta', logo: '/universities/logo-stft.jpg' }
  ];
  
  const uniRows = chunkArray(universities, 10);

  return (
    <section className="w-full py-16 flex flex-col items-center overflow-hidden">
      
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-4"
      >
        <h2 className="text-2xl md:text-[32px] font-medium mb-2 tracking-wide">
          University Reached
        </h2>
        <p className="text-sm md:text-base font-light text-center tracking-wider max-w-2xl mx-auto">
          Each chapter develops its own initiatives and programs, under the
          shared values of SXC.
        </p>
      </motion.div>

      {/* MARQUEE SECTION */}
      <div className="w-full relative flex flex-col gap-4 mt-4">
        
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

       {uniRows.map((row, rowIndex) => {
          const totalKarakter = row.reduce((sum, uni) => sum + uni.name.length, 0);

          const dynamicDuration = totalKarakter * 0.25;

          return (
            <div
              key={`row-${rowIndex}`}
              style={{ animationDuration: `${dynamicDuration}s` }}
              className={`flex w-max flex-nowrap will-change-transform gap-4 px-4 hover:[animation-play-state:paused] ${
                rowIndex % 2 === 0 ? 'animate-marquee-logos' : 'animate-marquee-logos-reverse'
              }`}
            >
              {[...row, ...row].map((uni, uniIndex) => (
                <div
                  key={`uni-${rowIndex}-${uniIndex}`}
                  className="flex shrink-0 items-center justify-center gap-2.5 bg-white border border-gray-200 shadow-sm px-5 py-3 rounded-full hover:border-[#0A3C8E] transition-all cursor-default"
                >
                  <img
                    src={uni.logo}
                    alt={`${uni.name} logo`}
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-sm font-bold text-slate-800">
                    {uni.name}
                  </span>
                </div>
              ))}
            </div>
          );
        })}

      </div>
    </section>
  );
}