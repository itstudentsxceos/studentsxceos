'use client';

import LogoMarquee from "@/components/LogoMarquee";
import { logos } from "@/data/Medpart";
import { motion } from "framer-motion";

function chunkArray<T>(array: T[], size: number): T[][] {
  return Array.from(
    { length: Math.ceil(array.length / size) },
    (_, i) => array.slice(i * size, i * size + size)
  );
}

export default function Medpart() {
  const logoRows = chunkArray(logos, 24);

  return (
    <section className="w-full px-6 md:px-16 md:py-20 text-center mb-15 md:mb-10">
      
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.18
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
          Our Media Partners
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-sm md:text-lg tracking-wider"
        >
          Amplifying our voice and reach through strategic alliances with leading media platforms.
        </motion.p>
      </motion.div>

      {logoRows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: i * 0.12,
            ease: "easeOut"
          }}
        >
          <LogoMarquee
            logos={row}
            direction={i % 2 === 0 ? "left" : "right"}
            speed={48 - i * 6}
          />
        </motion.div>
      ))}
    </section>
  );
}