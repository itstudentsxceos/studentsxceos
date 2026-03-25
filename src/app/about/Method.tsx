'use client';
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const methodology = [
    {
        title: "Learn",
        description: "The most successful people are lifelong learners, constantly evolving by mastering new skills to stay ahead in a changing world.",
        image: "/method1.png"
    },
    {
        title: "Share",
        description: "Sharing deepens knowledge and reinforces learning, unlocking opportunities that drive greater personal and collective growth.",
        image: "/method2.png"
    },
    {
        title: "Impact",
        description: "Only those who create lasting impact become memorable drivers of personal growth and meaningful transformation.",
        image: "/method3.png"
    },
]

export default function Method() {
  return (
    <motion.section
      className="w-full px-6 md:px-16 py-20 md:py-27 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
    >
      
      <motion.h1
        className="text-xl md:text-3xl font-medium mb-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
        viewport={{ once: true }}
      >
        Our Methodology
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
        className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 max-w-4xl mx-auto px-4"
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
        {methodology.map((method, i) => (
          <motion.div
            key={i}
            className="border border-[var(--color-neutral-200)] rounded-xl p-3 text-center shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.95 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: easeOut }
              }
            }}
            whileHover={{ scale: 1.04 }}
          >
            
            <motion.div
              className="relative w-full h-45 mb-3 overflow-hidden rounded-lg bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
            <Image 
              src={method.image} 
              alt={method.title} 
              className="object-contain scale-150 opacity-70"
              fill
            />
            </motion.div>
            </motion.div>

            <motion.h2
              className="text-md md:text-lg bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-400)] text-transparent bg-clip-text font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {method.title}
            </motion.h2>

            <motion.p
              className="text-sm md:text-base font-normal max-w-md tracking-wide px-4 mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {method.description}
            </motion.p>

          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}