'use client';
import { motion } from 'framer-motion';

export default function WhatYouGain() {
  // Data Card dengan format JSX untuk deskripsi agar span bold tetap jalan
  const cards = [
    {
      title: "Leadership development",
      desc: <>Participants gain exposure to <span className="font-medium text-slate-900">real-world challenges</span> and learn how leaders navigate complex situations.</>,
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    },
    {
      title: "Professional Networking Events",
      desc: <>Exclusive events that connect students with <span className="font-medium text-slate-900">leaders, alumni, and peers</span> — creating open doors to <span className="font-semibold text-slate-900">future opportunities.</span></>,
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      title: "Corporate Mentorship Opportunities",
      desc: <>Access to experienced professionals and executives who share practical <span className="font-medium text-slate-900">insights and career guidance.</span></>,
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Skill-Building Workshops",
      desc: <><span className="font-medium text-slate-900">Hands-on workshops</span> focused on practical competencies such as communication, problem-solving, and critical thinking.</>,
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    }
  ];

  return (
    <section id="what-you-gain" className="max-w-full mx-auto md:px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-linear-to-b from-[#121926] to-[#0A3C8E] rounded-xl px-5 py-5 md:p-30 flex flex-col items-center shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-10 mt-20 md:mt-0 text-center tracking-wide">
          What You Gain Through StudentxCEOs
        </h2>
        <p className="text-gray-300 text-sm md:text-[18px] mb-12 text-center font-normal hidden md:block tracking-wide">
          Each chapter develops its own initiatives and programs, under the shared values of SXC.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-24">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F8FAFC] rounded-2xl p-4 md:p-8 flex flex-col shadow-sm"
            >
              <div className="flex items-center gap-4 mb-2">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    delay: 0.1
                  }}
                  className="bg-linear-to-b from-[#121926] to-[#0A3C8E] p-2.5 rounded-xl flex items-center justify-center shrink-0"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon} />
                  </svg>
                </motion.div>
                
                <h4 className="font-medium text-lg text-slate-900 tracking-wide md:text-[22px]">
                  {card.title}
                </h4>
              </div>
              
              <hr className="border-gray-200 mb-4" />
              <p className="text-[#121926] text-sm md:text-base leading-relaxed font-normal md:mb-8 tracking-wide">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}