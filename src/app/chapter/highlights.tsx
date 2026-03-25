'use client';
import { motion } from 'framer-motion';

export interface StatItem {
  label: string;
  value: string;
}

interface HighlightsProps {
  stats: StatItem[];
}

export default function Highlights({ stats }: HighlightsProps) {

  return (
    <section className="w-full px-6 pb-16 md:pb-24 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-[32px] font-medium tracking-wide text-slate-900 mb-8"
        >
          Chapter Highlights
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">

          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="shadow-md shadow-black/10 bg-linear-to-b from-[#E6F2F9] to-[#FDFDFD] border border-[#E3E8EF]/200 rounded-2xl p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-sm md:text-[20px] mb-1 font-light">
                {stat.label}
              </span>
              <span className="text-2xl md:text-[38px] font-semibold bg-linear-to-b from-[#0A1325] to-[#0A3C8E] bg-clip-text text-transparent">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}