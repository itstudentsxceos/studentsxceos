'use client';

import { Heart } from "react-feather";
import { motion } from "framer-motion";

const values = [
    {
        title: "Impact-Driven Programs",
        description: "Every program is designed to create measurable impact on student development and career outcomes, ensuring real-world readiness and success.",
        icon: <Heart/>
    },
    {
        title: "National Reach",
        description: "Your support extends across top 30+ universities and 5 major cities in Indonesia, creating a nationwide network of future leaders.",
        icon: <Heart/>
    },
    {
        title: "Leaders Made Here",
        description: "2,500+ alumni successfully placed in leadership positions across top companies, demonstrating the effectiveness of our leadership development approach.",
        icon: <Heart/>
    },
]

export default function Why() {
  return (
    <>
    <section className="relative overflow-hidden w-full px-6 md:px-16 py-5 md:py-5 text-center mb-20 md:mb-10">
      <div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
            <div className="w-3/4 h-2/4 bg-blue-400/10 blur-2xl rounded-full"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-medium mb-2"
        >
          Why Support StudentsxCEOs?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-sm md:text-lg max-w-5xl mx-auto font-normal mb-10 tracking-wider"
        >
          Invest in developing Indonesia&apos;s future leaders, directly shaping the future of national business and innovation.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 max-w-5xl mx-auto">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="border border-[var(--color-neutral-200)] rounded-xl p-6 shadow-sm bg-[var(--color-white)]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 flex items-center justify-center text-[var(--color-white)] rounded-md bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)]">
                  {value.icon}
                </div>
                <h2 className="text-md md:text-lg font-medium">
                  {value.title}
                </h2>
              </div>

              <div className="border-t border-[var(--color-neutral-200)] mb-3"></div>

              <p className="text-sm font-light max-w-md tracking-wider text-left">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}