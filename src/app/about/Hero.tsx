'use client';
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="relative w-full h-[40%] px-6 md:px-16 py-20 md:py-15 text-center rounded-b-2xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      {/* Hero Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

      <motion.div
        className="relative w-full h-full overflow-hidden"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: easeOut }}
      >
        <Image
          src="/about-pic0.png"
          alt="Hero"
          fill
          priority
          className="object-cover object-center !h-full !w-full"
        />
      </motion.div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full md:h-full bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)] opacity-97"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.97 }}
        transition={{ duration: 1.2, ease: easeOut }}
      />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">

        <motion.h1
          className="text-2xl md:text-4xl font-medium mt-15 md:mt-20 glow-text tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
        >
          Transforming Indonesia&apos;s Brigthest Minds
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg md:max-w-2xl md:text-center mx-auto font-light mt-4 tracking-widest"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.7 }}
        >
          Connecting ambitious students with world-class business leaders to shape the future of Indonesia.
        </motion.p>
      </div>

    </motion.section>
  );
}