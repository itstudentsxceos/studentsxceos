'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  bgImage: string; 
}

export default function Hero({ title, subtitle, bgImage }: HeroProps) {
  const router = useRouter();

  return (
    <section className="relative w-full h-[60vh] md:h-[55vh] flex flex-col items-center justify-center overflow-hidden">
      <Image
        src={bgImage}
        alt={`${title} Background`}
        fill
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#0A1325]/90 to-[#0A3C8E]/95 z-10"></div>

      <motion.button 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onClick={() => router.push('/community')} 
        className="absolute top-8 left-4 md:left-8 md:top-25 z-20 flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm md:text-base font-medium cursor-pointer"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back
      </motion.button>

      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-20 text-center px-4 mt-8"
      >
        <h1 className="text-[22px] sm:text-[30px] md:text-4xl font-medium text-white mb-2 tracking-wide glow-text leading-snug md:leading-normal max-w-[340px] md:max-w-[640px] mx-auto">
          Nurture and Connect Future Business Leaders in and Around {title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 md:mt-8 -mb-10">
          
          {/* Instagram 1 */}
          <a href="#" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm md:text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="font-light tracking-wide">@studentxceosjakarta</span>
          </a>

          {/* Instagram 2 (Global Summit) */}
          <a href="#" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm md:text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="font-light tracking-wide">@sxcglobalsummit</span>
          </a>

          {/* LinkedIn */}
          <a href="#" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm md:text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="font-light tracking-wide">@studentxceosjakarta</span>
          </a>

          {/* TikTok */}
          <a href="#" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors text-sm md:text-base">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
            <span className="font-light tracking-wide">@studentxceosjakarta</span>
          </a>

        </div>

      </motion.div>
    </section>
  );
}