'use client';
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="relative w-full min-h-[75vh] md:h-[calc(100vh+100px)] px-6 md:px-16 py-20 md:py-28 text-center rounded-b-2xl overflow-hidden"
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
          src="/heroabout-bg.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover object-top !h-full !w-full"
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
        
        <motion.p
          className="text-sm md:text-base font-light mt-20 md:mt-8 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
        >
          About us
        </motion.p>

        <motion.h1
          className="text-2xl md:text-3xl font-medium mt-4 glow-text tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.5 }}
        >
          Transforming Indonesia&apos;s Brigthest Minds
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg md:max-w-xl md:text-center mx-auto font-light mt-4 tracking-widest"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.7 }}
        >
          Connecting ambitious students with world-class business leaders to shape the future of Indonesia.
        </motion.p>
      </div>

      {/* Hero Photo */}
      <div className="flex justify-center bg-[var(--color-white)] w-full mt-10 items-center">
          
          <motion.div
            className="relative p-[2px] rounded-[22px] bg-white/30 backdrop-blur-md w-full md:w-[80%] md:h-[415px] aspect-[4/3] shadow-2xl border border-white/50"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
            >
            <Image
              src="/heroabout-pic.jpg"
              alt="Hero"
              fill
              className="object-cover md:p-5 p-4 justify-center mx-auto object-[center_65%]"
            />   
            </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}