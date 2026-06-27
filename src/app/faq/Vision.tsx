"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Vision() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is StudentsxCEOs and what makes it unique?",
      answer: `StudentsxCEOs (SxC) is Indonesia's premier leadership accelerator and fraternal organization that bridges exceptional students with today's top business leaders. Founded in October 2010, we're not just another student club—we're the number one business-oriented organization in Indonesia, distinguished by our scale and impact.

        The "x" in our name represents the intersection and multiplication of potential, symbolizing our belief that when students (future leaders) meet with CEOs (today's leaders), the result isn't just addition—it's exponential growth through learning, sharing, and impact-making. We're building a home for balanced and connected business leaders who will drive Indonesia toward becoming a developed nation.

        What truly sets us apart is our dual focus: not only do we create programs to empower students interested in business, but we also provide comprehensive internal development among our fellows, creating a tight-knit community of future leaders.`,
    },
    {
      question:
        'Why does StudentsxCEOs focus specifically on "business leaders"?',
      answer:
        `Indonesian transformation from a developing to a developed country requires exceptional business leadership across three complementary domains. First, we need policy-makers because government shapes the rules of the game. Second, we need corporate leaders because corporations drive the economy forward. Third, we need entrepreneurs because startups catalyze innovation and change.
        
        StudentsxCEOs serves as "Ground Zero" for nurturing all three types of leaders, ensuring Indonesia has the balanced leadership ecosystem it needs to thrive. By focusing on business leadership in this holistic way, we're not just creating business professionals—we're developing the architects of Indonesia's economic future who can operate effectively across public, private, and entrepreneurial sectors.`,
    },
    {
      question:
        "How big is the StudentsxCEOs network and what impact have you made?",
      answer: `Our network is substantial and growing. We have 300+ core fellows annually rotating among chapters, with each chapter typically hosting around 50-60 active members. Beyond current fellows, we've created a community of 2,500+ alumni across all chapters who have collectively impacted 70,000+ students from more than 30 top Indonesian universities. 
        
        Our ecosystem extends further through partnerships with 100+ corporate partners and connections with numerous local, national, and international community partners. We track our impact across multiple dimensions: individual growth through fellows' career trajectories and leadership positions, community reach through social media engagement and event participation, economic contribution through microfinance families supported and business projects launched, and network strength through active corporate partnerships, inter-chapter collaboration, and alumni engagement.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="vision" className="w-full bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-slate-900 mb-2 tracking-wide justify-start"
        >
          Vision & Identity
        </motion.h2>

        <div className="border border-slate-500/30 w-full mb-7 "></div>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`w-full rounded-2xl cursor-pointer transition-colors duration-300 overflow-hidden
                  ${isOpen ? "bg-[#F4F7F9] border-transparent shadow-sm" : "bg-white border border-gray-200 hover:border-gray-300"}
                `}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center p-6">
                  <h3 className="font-medium tracking-wide text-slate-900 text-base md:text-lg pr-8">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex-shrink-0 text-slate-900"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-600 text-sm md:text-base font-normal tracking-wide whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
