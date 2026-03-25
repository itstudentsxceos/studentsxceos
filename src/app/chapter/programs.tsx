'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export interface ProgramItem {
  title: string;
  description: string;
  image: string;
}

interface ProgramsProps {
  data: ProgramItem[];
}

export default function Programs({ data }: ProgramsProps) {
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.children[0] as HTMLElement;
      const secondCard = container.children[1] as HTMLElement;

      if (firstCard && secondCard) {
        const scrollAmount = secondCard.offsetLeft - firstCard.offsetLeft;
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="w-full px-4 md:px-6 py-16 flex flex-col items-center overflow-hidden bg-[#F8FAFC]">

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-medium tracking-wide bg-linear-to-b from-[#0A1325] to-[#0A3C8E] bg-clip-text text-transparent mb-2">
          Programs
        </h2>
        <p className="text-sm md:text-base font-light tracking-wider max-w-2xl text-center">
          Each chapter develops its own initiatives and programs, under the shared values of SXC.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="w-full max-w-[90%] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 px-0 md:px-4"
      >

        <button onClick={() => slide('left')} className="hidden md:flex shrink-0 w-10 h-10 bg-[#3BA1E5] text-white rounded-full items-center justify-center hover:bg-[#0A3C8E] transition-colors shadow-lg z-10 cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="overflow-hidden w-full px-4 md:px-0">
          <div ref={scrollContainerRef} className="flex flex-col md:flex-row md:flex-nowrap gap-4 md:gap-6 md:overflow-x-auto md:snap-x md:snap-mandatory scroll-smooth pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            
            {data.map((program, index) => (
              <div 
                key={index} 
                className={`relative shrink-0 w-full md:w-[calc(25%-18px)] aspect-video md:aspect-4/3 rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 md:snap-start ${!showAllPrograms && index >= 3 ? 'hidden md:block' : 'block'}`}
              >
                <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 p-5 z-20">
                  <h4 className="text-white font-bold text-lg md:text-xl leading-tight mb-1">{program.title}</h4>
                  <p className="text-gray-300 text-xs md:text-sm">{program.description}</p>
                </div>
              </div>
            ))}

          </div>

          {!showAllPrograms && data.length > 3 && (
            <button onClick={() => setShowAllPrograms(true)} className="md:hidden mt-2 mb-4 w-full bg-[#0A1325] text-white font-semibold py-3.5 rounded-xl hover:bg-[#0A3C8E] transition-colors shadow-md">
              See More
            </button>
          )}
        </div>

        <button onClick={() => slide('right')} className="hidden md:flex shrink-0 w-10 h-10 bg-[#3BA1E5] text-white rounded-full items-center justify-center hover:bg-[#0A3C8E] transition-colors shadow-lg z-10 cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="hidden md:flex justify-center gap-2 mt-4"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#D9D9D9]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#EEF2F6]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#EEF2F6]"></div>
      </motion.div>
    </section>
  );
}