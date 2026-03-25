'use client';

import { Award, Heart, Trello } from "react-feather";
import { motion, easeOut } from "framer-motion";

const values = [
    {
        title: "Friendship",
        description: "We treat all fellows and alumni as family, supporting each other anytime, anywhere.",
        icon: <Heart/>
    },
    {
        title: "Leadership",
        description: "We lead with purpose, starting from ourselves to make a tangible impact on the nation.",
        icon: <Award/>
    },
    {
        title: "Partnership",
        description: "We grow through collaboration, building strong partnerships to reach our shared vision.",
        icon: <Trello/>
    },
]

export default function Values() {
  return (
    <>
    <motion.section
      className="w-full px-5 md:px-16 py-5 text-center mb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
    >
      <div>

      <motion.h1
        className="text-xl md:text-3xl font-medium mb-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true }}
      >
        Our Core Values
      </motion.h1>

      <motion.p
        className="text-sm md:text-lg max-w-5xl mx-auto font-normal mb-10 tracking-wide"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Each chapter develops its own initiatives and programs, under the shared values of SXC.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 max-w-5xl mx-auto px-4"
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
      >
        {values.map((value, i) => (
        <motion.div
          key={i}
          className="border border-[var(--color-neutral-300)] rounded-xl p-6 shadow-sm"
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.6, ease: easeOut }
            }
          }}
          whileHover={{ y: -8, scale: 1.03 }}
        >
            <div className="flex items-center gap-3 mb-2">
            
            <motion.div
              className="w-8 h-8 flex items-center justify-center text-[var(--color-white)] rounded-md bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)]"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
                {value.icon}
            </motion.div>

            <h2 className="text-md md:text-lg font-medium">
                {value.title}
            </h2>
            </div>

            <div className="border-t border-[var(--color-neutral-200)] mb-3"></div>

            <motion.p
              className="text-sm font-light max-w-md text-left tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
              viewport={{ once: true }}
            >
            {value.description}
            </motion.p>
        </motion.div>
        ))}
      </motion.div>

      </div>
    </motion.section>
    </>
  );
}