'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[47vh] md:h-[55vh] px-6 md:px-16 py-20 md:py-15 text-center overflow-hidden">
      {/* Hero BG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.97 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-[var(--primary-700)] to-[var(--color-green)]"
      >
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-medium mt-20 md:mt-40 glow-text tracking-wide"
        >
          Support Our Mission
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-sm md:text-lg md:max-w-2xl md:text-center mx-auto font-light mt-4 tracking-wider"
        >
          Partner with us to empower Indonesia&apos;s next generation of business leaders and create lasting impact across the nation.
        </motion.p>
      </div>
    </section>
  );
}