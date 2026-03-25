'use client';

import LogoMarquee from "@/components/LogoMarquee";
import { logos } from "@/data/Partners";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, i) => array.slice(i * size, i * size + size)
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export default function Partners() {
  const isMobile = useIsMobile();
  const logoRows = chunkArray(logos, isMobile ? 8 : 9);

  return (
    <section className="w-full px-6 md:px-16 py-15 md:py-20 text-center mb-3 md:mb-7">
      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        className="max-w-3xl mx-auto mb-10"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-medium mb-2"
        >
          We Trusted by Our Partners
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="text-sm md:text-lg tracking-wider"
        >
          Collaborating with industry leaders to drive innovation and create meaningful impact.
        </motion.p>
      </motion.div>

      {logoRows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: i * 0.15,
            ease: "easeOut"
          }}
        >
          <LogoMarquee
            logos={row}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={25 - i * 6}
          />
        </motion.div>
      ))}
    </section>
  );
}