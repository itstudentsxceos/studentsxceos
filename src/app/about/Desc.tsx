'use client';
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

export default function Desc() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
      className="w-full px-6 md:px-16 py-20 md:py-23 text-center"
    >

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut }}
      viewport={{ once: true }}
    >
        <h2 className="text-xl md:text-3xl font-medium mb-3">The Origin: Bridging The Gap</h2>
        <p className="text-sm md:text-lg max-w-5xl mx-auto font-light md:font-normal mb-10 md:mb-21 tracking-wider">
            Founded in October 2010 by students at the Institut Teknologi Bandung (ITB), StudentsxCEOs (SxC) began with a 
            fundamental question: “What comes after graduation?” Our founders realized that academic excellence alone wasn&apos;t 
            enough to navigate the complexities of the industry. They created SxC to bridge the gap between high-potential students
            and the leaders currently shaping the business landscape.
        </p>
    </motion.div>

    <motion.div
      className="md:hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
      viewport={{ once: true }}
    >
        <h2 className="text-xl md:text-3xl font-medium mb-3">Evolution into an Accelerator</h2>
        <p className="text-sm md:text-lg max-w-5xl mx-auto font-light md:font-normal mb-15 tracking-wider">
            Founded in October 2010 by students at the Institut Teknologi Bandung (ITB), StudentsxCEOs (SxC) began with a 
            fundamental question: “What comes after graduation?” Our founders realized that academic excellence alone wasn&apos;t 
            enough to navigate the complexities of the industry. They created SxC to bridge the gap between high-potential students
            and the leaders currently shaping the business landscape.
        </p>
    </motion.div>

    <motion.div
      className="hidden md:block relative p-[2px] rounded-[22px] bg-gradient-to-r from-[var(--primary-50)]/10 to-[var(--neutral-25)]/50 backdrop-blur-md w-full"
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: easeOut }}
      viewport={{ once: true }}
    >
        <div className="flex flex-col md:flex-row justify-content h-full gap-10 p-15">
            
            <motion.div
              className="w-full md:w-1/2 h-[300px] md:h-auto relative"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easeOut }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
            <Image
              src="/heroabout-bg.jpg"
              alt="Hero"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={100}
              unoptimized
              className="object-cover rounded-lg"
            />
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 text-left"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
              viewport={{ once: true }}
            >
                <h3 className="text-lg md:text-2xl font-medium mt-6 mb-3">Evolution into an Accelerator</h3>
                <p className="text-sm md:text-base font-normal max-w-5xl mx-auto font-light mb-8 tracking-wider">
                    Founded in October 2010 by students at the Institut Teknologi Bandung (ITB), StudentsxCEOs (SxC) began with a 
                    fundamental question: “What comes after graduation?” Our founders realized that academic excellence alone wasn&apos;t 
                    enough to navigate the complexities of the industry. They created SxC to bridge the gap between high-potential students 
                    and the leaders currently shaping the business landscape.
                </p>
                <h3 className="text-lg md:text-2xl font-medium mb-3">Redefining Leadership</h3>
                <p className="text-sm md:text-base font-normal max-w-5xl mx-auto font-light mb-7 tracking-wider">
                    What started as &quot;Meet the CEO&quot; sessions has evolved into Indonesia&apos;s premier strategic leadership accelerator 
                    and think-tank. We have expanded into a nationwide network that connects selected students from reputable universities with prominent industry 
                    players. Our platform is designed to boost professional networks and expand practical knowledge through the direct exchange of ideas and experiences.
                </p>
            </motion.div>
        </div>
    </motion.div>

    <div className="block md:hidden space-y-3 p-0">
    
    <motion.div
      className="w-full h-[200px] relative"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
      viewport={{ once: true }}
    >
        <Image
        src="/heroabout-bg.jpg"
        alt="Hero"
        fill
        className="object-cover rounded-xl"
        />
    </motion.div>

    <div className="grid grid-cols-2 gap-3">
        <motion.div
          className="h-[120px] relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          viewport={{ once: true }}
        >
        <Image
            src="/heroabout-bg.jpg"
            alt="Hero"
            fill
            className="object-cover rounded-xl"
        />
        </motion.div>

        <motion.div
          className="h-[120px] relative mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          viewport={{ once: true }}
        >
        <Image
            src="/heroabout-bg.jpg"
            alt="Hero"
            fill
            className="object-cover rounded-xl"
        />
        </motion.div>
    </div>

    <motion.div
      className="md:hidden relative p-[2px] rounded-xl bg-[var(--primary-50)]/10 backdrop-blur-md w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut }}
      viewport={{ once: true }}
    >
        <div className="grid justify-content h-full p-5">
            <div className="w-full text-center">
                <h3 className="text-xl font-medium mt-7 mb-3">Redefining Leadership</h3>
                <p className="text-sm font-light max-w-5xl mx-auto font-light mb-7 tracking-wider">
                    What started as &quot;Meet the CEO&quot; sessions has evolved into Indonesia&apos;s premier strategic leadership accelerator 
                    and think-tank. We have expanded into a nationwide network that connects selected students from reputable universities with prominent industry 
                    players. Our platform is designed to boost professional networks and expand practical knowledge through the direct exchange of ideas and experiences.
                </p>
            </div>
            <div className="w-full text-center">
                <h3 className="text-xl font-medium mt-3 mb-3">Our Purpose</h3>
                <p className="text-sm font-light max-w-5xl mx-auto font-light mb-7 tracking-wider">
                    What started as &quot;Meet the CEO&quot; sessions has evolved into Indonesia&apos;s premier strategic leadership accelerator 
                    and think-tank. We have expanded into a nationwide network that connects selected students from reputable universities with prominent industry 
                    players. Our platform is designed to boost professional networks and expand practical knowledge through the direct exchange of ideas and experiences.
                </p>
            </div>
        </div>
    </motion.div>
    </div>

    <motion.div
      className="hidden md:block"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut }}
      viewport={{ once: true }}
    >
        <h2 className="text-xl md:text-3xl font-medium mb-3 mt-20">Our Purpose</h2>
        <p className="text-sm md:text-lg max-w-5xl mx-auto font-normal tracking-wide">
            What started as &quot;Meet the CEO&quot; sessions has evolved into Indonesia&apos;s premier strategic leadership accelerator 
            and think-tank. We have expanded into a nationwide network that connects selected students from reputable universities with 
            prominent industry players. Our platform is designed to boost professional networks and expand practical knowledge through 
            the direct exchange of ideas and experiences.
        </p>
    </motion.div>

    </motion.section>
  );
}