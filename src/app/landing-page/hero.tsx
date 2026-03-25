// src/components/Hero.tsx
'use client';
import Image from 'next/image';
//import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  //const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full mx-auto h-200 rounded-b-[20px] overflow-hidden flex flex-col shadow-[0px_6px_30px_rgba(0,0,0,0.4)]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Background community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#121926] to-[#0A3C8E] drop-shadow-[0_0_20px_rgba(10,60,142,0.6)] opacity-90"></div>
        <div className="absolute pointer-events-none -bottom-48 -right-48 w-[701px] h-[657px] rounded-full bg-gradient-to-b from-[#296A90] to-[#CCE0FF] blur-[300px]"></div>
        <div className="absolute pointer-events-none w-[701px] h-[657px] bg-[#3FB4A0] opacity-100 blur-[275px] rounded-full -bottom-90 -right-10"></div>
      </div>

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
          className="text-[36px] md:text-[56px] text-white font-medium drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] tracking-wide leading-tight"
        >
          Nurture and Connect{' '}
          <span className="hidden md:inline">Future </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          className="text-[36px] md:text-[56px] font-medium mt-2 inline-block bg-clip-text bg-linear-to-r from-[#70BBDD] to-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] text-transparent tracking-wide"
        >
          <span className="inline md:hidden">Future </span> Business Leaders
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
          style={{ opacity: 1 }}
          className="mt-6 max-w-xl text-normal md:text-lg font-normal tracking-wide text-gray-100 leading-relaxed mx-auto"
        >
          Connecting ambitious students with world-class business leaders to
          shape the future of Indonesia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' as const }}
        >
          <a href="#community">
            <motion.button
              initial="initial"
              whileHover="hover"
              variants={{
                initial: {
                  boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.6)',
                },
                hover: {
                  boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.8)',
                },
              }}
              transition={{ duration: 0.4 }}
              className="relative cursor-pointer mt-10 bg-white overflow-hidden py-2 px-8 rounded-xl text-base z-0"
            >
              <motion.div
                variants={{
                  initial: { scaleX: 0 },
                  hover: { scaleX: 1.1 },
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' as const }}
                style={{ originX: 0, willChange: 'transform' }}
                className="absolute inset-0 bg-linear-to-br from-[#121926] to-[#0A3C8E] -z-10"
              />

              <motion.span
                variants={{
                  initial: { color: '#000000' },
                  hover: { color: '#ffffff' },
                }}
                className="relative z-10 font-medium"
              >
                Join our community
              </motion.span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}