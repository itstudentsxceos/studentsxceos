'use client';
import { easeOut, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Partner() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: 'easeOut' as const },
  };

  return (
    <section
      id="about"
      className="md:ml-0 mx-auto max-w-full px-8 md:px-10 py-15 text-black overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <h3 className="md:hidden order-1 text-2xl font-normal text-black tracking-wide text-left -mb-6">
          Partner with Us
        </h3>

        {/* Image column */}
        <div className="order-2 md:order-2 flex flex-col md:flex-row h-full gap-10 md:p-15">
          <motion.div
            className="w-full relative aspect-[5/4] md:aspect-[9/5] md:scale-120 -mb-4"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
          >
            <Image
              src="/landing-page-image2.png"
              alt="about"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={100}
              unoptimized
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        {/* Text column */}
        <motion.div
          {...fadeInUp}
          className="order-3 md:order-1 text-left"
        >
          <h3 className="hidden md:block text-2xl md:text-3xl font-medium mt-5 mb-3 text-black tracking-wide">
            Partner with Us
          </h3>

          <p className="text-gray-600 leading-relaxed font-normal text-md text-[16px] md:text-lg md:w-6/7">
            Partner with StudentsxCEOs to tap into a curated network of ambitious, high-caliber students from top universities across Indonesia.
            Through targeted programs and strategic engagements, we enable you to build early access to future leaders, amplify your brand presence, and create meaningful impact within the next generation of decision-makers.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Link href="/support">
              <motion.button
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { boxShadow: '0 0 10px rgba(10, 60, 142, 0.2)' },
                  hover: { boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' },
                }}
                transition={{ duration: 0.4 }}
                className="relative cursor-pointer mt-6 mb-6 w-full md:w-auto bg-linear-to-br from-[#121926] to-[#0A3C8E] overflow-hidden py-2 px-5 rounded-lg text-base z-0 border border-black"
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
                  className="relative z-10 font-medium flex justify-center md:justify-start items-center"
                >
                  Become a Partner
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}