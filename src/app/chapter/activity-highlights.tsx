'use client';
import { motion } from 'framer-motion';

interface ActivityHighlightsProps {
  chapterName: string;
  images: string[];
}


function splitArray<T>(array: T[], numColumns: number): T[][] {
  const result: T[][] = Array.from({ length: numColumns }, () => []);
  array.forEach((item, index) => {
    result[index % numColumns].push(item);
  });
  return result;
}

export default function ActivityHighlights({ chapterName, images }: ActivityHighlightsProps) {
  
  //EMPTY STATE
  if (!images || images.length === 0) {
    return (
      <section className="w-full py-32 flex flex-col items-center justify-center bg-white px-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Icon Sad Face*/}
          <svg 
            width="42" 
            height="42" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-slate-500 mb-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
          
          <p className="text-slate-600 text-[15px] md:text-base font-light tracking-wide max-w-md">
            Sorry, documentation for activity highlights is coming soon
          </p>
        </motion.div>
      </section>
    );
  }


  let safeImages = [...images];
  while (safeImages.length < 12) {
    safeImages = [...safeImages, ...images];
  }

  const desktopCols = splitArray(safeImages, 4);
  const mobileCols = splitArray(safeImages, 2);

  return (
    <section className="w-full py-16 flex flex-col items-center bg-white px-4 md:px-8">
      
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-medium mb-2 text-slate-900 tracking-wide">
          Activity Highlights
        </h2>
        <p className="text-sm md:text-base font-light text-slate-600 tracking-wide">
          Here are a glimpse of what we do at {chapterName}
        </p>
      </motion.div>

      {/* GALLERY CONTAINER */}
      <div className="relative w-full max-w-7xl mx-auto h-[450px] md:h-[600px] overflow-hidden rounded-xl mb-30">
        
        {/*DESKTOP VIEW*/}
        <div className="hidden md:flex w-full gap-4">
          {desktopCols.map((colImages, colIndex) => {
            let marginClass = 'mt-0'; 
            if (colIndex === 1) marginClass = '-mt-16'; 
            if (colIndex === 2) marginClass = '-mt-8';  
            if (colIndex === 3) marginClass = '-mt-24'; 

            return (
              <div key={`desktop-${colIndex}`} className={`flex-1 flex flex-col gap-4 ${marginClass}`}>
                {[...colImages, ...colImages].map((img, imgIndex) => (
                  <motion.div
                    key={`desktop-img-${colIndex}-${imgIndex}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                    className="relative group overflow-hidden shadow-sm flex-shrink-0"
                  >
                    <img
                      src={img}
                      alt={`Activity ${colIndex}-${imgIndex}`}
                      loading="lazy"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            );
          })}
        </div>

        {/* MOBILE VIEW*/}
        <div className="flex md:hidden w-full gap-3">
          {mobileCols.map((colImages, colIndex) => {
            const marginClass = colIndex === 1 ? '-mt-12' : 'mt-0'; 
            return (
              <div key={`mobile-${colIndex}`} className={`flex-1 flex flex-col gap-3 ${marginClass}`}>
                {[...colImages, ...colImages, ...colImages].map((img, imgIndex) => (
                  <motion.div
                    key={`mobile-img-${colIndex}-${imgIndex}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden flex-shrink-0 shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`Activity Mobile ${colIndex}-${imgIndex}`}
                      loading="lazy"
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}