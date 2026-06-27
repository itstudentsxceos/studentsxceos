'use client';
import { motion } from 'framer-motion';

export interface StatItem {
  label: string;
  value: string;
}

interface HighlightsProps {
  stats: StatItem[];
  coverageAreas?: string[];
}

export default function Highlights({ stats, coverageAreas }: HighlightsProps) {
  return (
    <section className="w-full px-6 py-12 md:py-16 flex flex-col items-center bg-white">
      <div className="w-full max-w-6xl flex flex-col items-center">
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl md:text-3xl font-medium tracking-wide text-slate-900 mb-8 md:mb-10"
        >
          Chapter Highlights
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-4 w-[80%]">

          {/* Stats */}
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="w-[calc(50%-8px)] lg:w-55 h-24  md:h-35 bg-linear-to-b from-[#092F6E] to-[#1E517D] rounded-xl p-5 md:p-6 flex flex-col items-start justify-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <span className="text-[18px] md:text-[22px] mb-1.5 font-medium text-white/90 tracking-wide">
                {stat.label}
              </span>
              <span className="text-2xl md:text-[38px] font-normal text-white tracking-wide">
                {stat.value}
              </span>
            </motion.div>
          ))}

          {/* Area Reach */}
          {coverageAreas && coverageAreas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stats.length * 0.1, ease: "easeOut" }}

              className="w-full h-24 lg:w-55 md:h-35 bg-linear-to-b from-[#092F6E] to-[#1E517D] rounded-xl p-5 md:p-6 flex flex-col items-start justify-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <span className="text-[18px] md:text-[22px] mb-1.5 font-medium text-white/90 tracking-wide">
                Area reach
              </span>
              <span className="text-[13.5px] md:text-lg font-light text-white/95 leading-relaxed tracking-wide">
                {coverageAreas.join(', ')}
              </span>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}