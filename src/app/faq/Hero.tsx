'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[40%] px-6 md:px-16 py-20 md:py-15 text-center overflow-hidden">
      {/* Hero BG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.97 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)]"
      >
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl md:text-4xl font-medium mt-15 md:mt-20 glow-text tracking-wide"
        >
          Frequently Asked Questions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-sm md:text-lg md:max-w-2xl md:text-center mx-auto font-light mt-4 tracking-wider"
        >
          Do you have a question about StudentsxCEOs? Please select the topic you are interested in to browse our frequently asked questions.
        </motion.p>
      </div>
    </section>
  );
}