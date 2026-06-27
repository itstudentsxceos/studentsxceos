'use client';
import Image from 'next/image';
//import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  //const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full mx-auto h-[40%] py-10 rounded-b-[20px] overflow-hidden flex flex-col shadow-[0px_6px_30px_rgba(0,0,0,0.4)]">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 bg-[#0A3C8E]">
        <div className="absolute bottom-0 w-full h-[50%] md:top-0 md:right-0 md:h-full md:w-1/2">
          <Image
            src="/indonesian-map.jpg"
            alt="Background community"
            fill
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A3C8E]/40 via-[#0A3C8E]/80 to-[#0A3C8E] md:bg-linear-to-r md:from-[#0A3C8E] md:via-[#0A3C8E]/80 md:to-[#0A3C8E]/60"></div>
        </div>
        
      </div>

      {/* CONTENT LAYER */}
      <div className="flex-1 flex flex-col items-center justify-center text-center pb-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          className="text-[26px] md:text-4xl text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] tracking-wide leading-tight mt-20"
        >
          Where Our {' '}
          <span className="hidden md:inline">Community Thrives</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          className="text-[26px] md:text-4xl font-medium mt-2 inline-block bg-clip-text bg-[#FCFCFD] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] text-transparent tracking-wide"
        >
         <span className="inline md:hidden">Community Thrives</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          style={{ opacity: 1 }}
          className="px-5 mt-1 md:mt-3 max-w-[560px] text-[16px] md:text-lg font-light tracking-wide text-gray-100 leading-relaxed mx-auto"
        >
          Connecting ambitious students with world-class business leaders to shape the future of Indonesia.
        </motion.p>

      </div>
    </div>
  );
}