'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: 'easeOut' as const },
  };

  return (
    <section
      id="about"
      className="mx-auto max-w-full px-2 md:px-20 py-24 text-black overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeInUp} className="pr-4 text-center md:text-left">
          <p className="text-[18px] font-mediumtext-gray-800 mb-4 tracking-tight lowercase">
            about us
          </p>
          <h3 className="text-[26px] md:text-[30px] font-medium mb-6 text-black tracking-wide">
            Bridging Students to Real-World Leadership
          </h3>
          <p className="text-gray-600 leading-relaxed font-normal text-[18px]">
            StudentsxCEOs (SxC) is a strategic leadership platform for
            university students that connects them directly with industry
            leaders through curated talks, leadership forums, mentoring
            sessions, strategic discussions, and high-impact networking events.
            We create real-world learning experiences.
          </p>
        </motion.div>

        <div className="md:mt-10 flex flex-col items-center md:items-end w-full overflow-hidden">
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className="w-full overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-24 md:w-100 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-full animate-marquee-stats">
              <div className="flex gap-4 md:gap-16 min-w-full shrink-0 justify-around px- md:px-8" >
                {[
                  { label: 'Years', value: '15+' },
                  { label: 'Programs', value: '20+' },
                  { label: 'Partners', value: '100+' },
                  { label: 'University', value: '30+' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 md:gap-16 shrink-0 min-w-full justify-around px-2 md:px-8">
                {[
                  { label: 'Years', value: '15+' },
                  { label: 'Programs', value: '20+' },
                  { label: 'Partners', value: '100+' },
                  { label: 'University', value: '30+' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-2xl md:text-4xl font-bold bg-linear-to-b from-[#121926] to-[#0A3C8E] bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <span className="text-gray-500 text-[14px] md:text-2xl mt-2 font-light">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Link href="/about">
          <motion.button
            initial="initial"
            whileHover="hover"
            variants={{
              initial: {
                boxShadow: '0 0 10px rgba(10, 60, 142, 0.2)',
              },
              hover: {
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
              },
            }}
            transition={{ duration: 0.4 }}
            className="relative cursor-pointer mt-6 mb-6 bg-linear-to-br from-[#121926] to-[#0A3C8E] overflow-hidden py-2 px-8 rounded-xl text-base z-0 border border-black"
          >
            <motion.div
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1.1 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ originX: 0, willChange: 'transform' }}
              className="absolute inset-0 bg-white -z-10"
            />

            <motion.span
              variants={{
                initial: { color: '#ffffff' },
                hover: { color: '#000000' },
              }}
              className="relative z-10 font-medium flex flex-row"
            >
              Learn more
              <motion.svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                variants={{
                  initial: { stroke: '#ffffff' },
                  hover: { stroke: '#000000' },
                }}
                transition={{ duration: 0.4 }}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </motion.svg>
            </motion.span>
          </motion.button>
          </Link>
        </motion.div>
          
        </div>
      </div>
    </section>
  );
}
