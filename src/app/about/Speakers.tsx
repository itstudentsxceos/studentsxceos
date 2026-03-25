'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { speakers } from "@/data/Speakers";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const listener = () => setIsMobile(media.matches);

    listener();
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobile;
}

export default function Speakers() {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();
  const visibleSpeakers = expanded ? speakers : speakers.slice(0, isMobile ? 4 : 12);

  return (
    <section className="w-full px-5 md:px-16 py-5 mb-5 md:py-10 text-center">

      {/* TITLE */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-3xl font-medium mb-3"
      >
        Meet Our Speakers
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-sm md:text-lg max-w-5xl mx-auto font-normal mb-10 tracking-wide"
      >
        Leaders from top companies who&apos;ve shared their insights with SxC
      </motion.p>

      <div className="flex justify-center">
        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-6xl mx-auto w-full justify-items-center">

          <AnimatePresence>
            {visibleSpeakers.map((speaker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                layout
                whileHover={{ scale: 1.05 }}
                className="border border-[var(--color-neutral-200)] rounded-xl p-4 text-center shadow-sm w-full max-w-[250px] md:max-w-none flex flex-col"
              >

                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-blue-400/20 blur-2xl rounded-full translate-y-2"></div>
                  </div>

                  <Image
                    src={speaker.image}
                    alt={speaker.title}
                    className={`z-10 ${speaker.imageClass || "object-cover"}`}
                    fill
                  />
                </div>

                <div className="border border-[var(--color-neutral-200)] rounded-xl px-5 py-2 text-center shadow-xs mt-auto flex flex-col flex-1 justify-center">
                  <h2 className="text-sm md:text-base font-medium tracking-wide">
                    {speaker.title}
                  </h2>
                  <p className="text-xs md:text-sm font-normal tracking-wider md:tracking-wide">
                    {speaker.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

        </motion.div>
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setExpanded(!expanded)}
        className="px-4 py-2 mt-10 text-sm font-medium text-white rounded-md bg-[var(--color-black)] cursor-pointer"
      >
        {expanded ? "See Less" : "See More"}
      </motion.button>
    </section>
  );
}