'use client';
import { motion } from 'framer-motion';

interface University {
  name: string;
  logo: string;
}

interface UniversitiesProps {
  data: University[];
}

export default function Universities({ data }: UniversitiesProps) {
  if (!data || data.length === 0) return null;

  return (
    <section className="w-full py-16 flex flex-col items-center overflow-hidden bg-white">
      
      {/* HEADER*/}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-4"
      >
        <h2 className="text-2xl md:text-3xl font-medium mb-3 tracking-wide text-black">
          University Reached
        </h2>
        <p className="text-sm md:text-base font-light text-center text-black tracking-wide max-w-2xl mx-auto">
          Our alumnus from this chapters are usually from:
        </p>
      </motion.div>

      {/* PILLS SECTION */}
      <div className="flex flex-wrap justify-center gap-2.5 md:gap-4 max-w-7xl mx-auto px-2 md:px-4 w-full">
        {data.map((uni, index) => (
          <div
            key={index}
            className="w-fit flex items-center justify-center gap-2 bg-white border border-gray-200 shadow-sm px-3 md:px-5 py-2 md:py-2.5 rounded-full hover:border-[#0A3C8E] transition-all cursor-default"
          >
            <img
              src={uni.logo}
              alt={`${uni.name} logo`}
              className="w-4 h-4 md:w-6 md:h-6 object-contain shrink-0"
            />
            <span className="text-[11px] md:text-[14px] lg:text-[15px] font-medium text-slate-700 text-center leading-none">
              {uni.name}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[16px] font-normal text-black">and many more...</p>

    </section>
  );
}