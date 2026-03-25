'use client';
import { motion } from 'framer-motion';

interface AboutProps {
  description: React.ReactNode;
}

export default function About({ description }: AboutProps) {
  return (
    <section className="w-full px-6 py-16 md:py-24 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-16 md:mb-24">

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-2xl md:text-[32px] font-medium tracking-wide text-slate-900 mb-6"
        >
          A Growing Leadership Platform
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="leading-relaxed tracking-wide text-sm md:text-[18px]"
        >

          {description}
        </motion.p>

      </div>
    </section>
  );
}