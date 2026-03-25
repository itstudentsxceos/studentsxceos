'use client';

import { CheckCircle } from "react-feather";
import { motion, easeOut } from "framer-motion";

export default function Vision() {
    const missions = "flex text-left font-medium gap-4 bg-[var(--color-neutral-200)] p-4 rounded-xl border-2 border-[var(--color-neutral-400)] shadow-[inset_0px_0px_10px_rgba(11,73,174,0.8)]";
    const icon = "flex items-center justify-center my-auto w-7 h-7 p-1 ml-2 mr-1 rounded-md bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-600)] text-white shadow-[0px_0px_8px_rgba(11,73,174,1)]";
    const missionList = [
    "Attracting candidates who share the same vision and driving motivation.",
    "Building capabilities to become globally competitive business leaders.",
    "Creating a unified, fraternal culture of high-performing individuals and winning teams.",
    "Delivering impact through a repeatable model that creates sustainable economic value."
    ];

  return (
    <motion.section
      className="w-full md:px-16 md:py-0 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
    >
        <motion.div
          className="relative md:p-[2px] md:rounded-[22px] bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)] backdrop-blur-md w-full"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOut }}
          viewport={{ once: true }}
        >
            
            <motion.div
              className="relative justify-center h-full p-5 py-15 md:p-15 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              viewport={{ once: true }}
            >
            <h1 className="text-xl md:text-3xl font-medium mb-5 text-[var(--color-white)]">Our Vision</h1>
            <p className="text-sm md:text-lg md:max-w-5xl mx-auto font-light text-[var(--color-white)] tracking-wider">
                To nurture and connect future business leaders by serving as the home of balanced and connected leaders 
                who drive the nation toward becoming a globally advanced and developed country.
            </p>
            </motion.div>

            <motion.div
              className="relative justify-center h-full pb-15 max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
              viewport={{ once: true }}
            >
            <h1 className="text-xl md:text-3xl font-medium mb-4 text-[var(--color-white)]">Our Mission</h1>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 md:gap-x-4 p-5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
            {missionList.map((text, i) => (
                <motion.div
                  key={i}
                  className={missions}
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.5, ease: easeOut }
                    }
                  }}
                  whileHover={{ scale: 1.03 }}
                >
                <div className={icon}>
                  <CheckCircle />
                </div>
                <p className="text-sm md:text-md font-normal my-auto text-gray-800 tracking-wide">{text}</p>
                </motion.div>
            ))}
            </motion.div>

            </motion.div>
        </motion.div>
    </motion.section>
  );
}