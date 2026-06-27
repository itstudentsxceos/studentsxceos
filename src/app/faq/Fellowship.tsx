"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Fellowship() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can join StudentsxCEOs and how selective is the process?",
      answer:
        `We attract exceptional candidates from top-tier Indonesian universities who share our vision and driving motivation. Our fellows typically demonstrate strong academic performance, leadership potential, entrepreneurial mindset, commitment to Indonesian economic development, and open-mindedness with problem-solving abilities. However, the selectivity actually depends on each chapters specific context and needs.
        
        Here's what we want you to know: we encourage you to apply regardless of your level of experience. As long as you're genuinely interested in learning, sharing, and creating impact, you have a place in our recruitment process. We believe potential can come from unexpected places, and we're committed to identifying and nurturing that potential wherever we find it.`,
    },
    {
      question:
        "How do I apply to become a fellow and what does the timeline look like?",
      answer:
        `A "fellow" is an official member of our organization. To become one, you need to apply through the open recruitment process run by the chapter nearest to your current location. Each chapter manages its own recruitment independently while maintaining our national standards.

        Recruitment typically happens around the end of the year or early in the new year, so we encourage you to prepare yourself now. Keep an eye on your nearest chapter's social media channels and website for specific announcement dates and application requirements. The application process is designed not just to select fellows, but also to give you a preview of what being part of StudentsxCEOs entails.`,
    },
    {
      question:
        "What will I actually do as a StudentsxCEOs fellow and what's the time commitment?",
      answer: `As a fellow, your role serves three core purposes: personal development, community impact, and organizational advancement. First, you have the right to develop yourself through various internal programs we provide. Second, you're expected to create meaningful impact in your community, regardless of which division you join. Third, you'll help move the organization faster and further by upholding our vision, mission, methodology, and values across all chapters. 
        
        We don't have strict weekly or monthly working hours because we believe in output over input. As long as you deliver your responsibilities according to the timeline with good quality and aligned with your job description, you have the flexibility to manage your own time. The duration of active fellowship typically ranges from 8 to 12 months, giving you a substantial period to grow, contribute, and make your mark.`,
    },
    {
      question:
        "Where are StudentsxCEOs chapters located and what's the difference between chapters and generations?",
      answer: `We currently operate active chapters in five major regions: Bandung, Jakarta, Yogyakarta, Semarang, and East Java. Each chapter runs independently while maintaining our national standards and culture. If you're from outside these five areas, we apologize that due to our current limitations, you can't join as a fellow, but you're more than welcome to participate in our online events. 
        
        To clarify the terminology: a 'chapter' refers to our geographic division (like Bandung Chapter or Jakarta Chapter), while 'generation' or 'batch' refers to the time-based cohort within each chapter (like Batch 1, Batch 2, etc.). For example, you might be 'Jakarta Chapter, Batch 5,' meaning you're the fifth cohort to join the Jakarta operations.`,
    },
    {
    question: "Is StudentsxCEOs expanding to new cities?",
    answer: (
        <>
        Yes, we&apos;re actively seeking to expand into new cities beyond Java, including international locations. We welcome proposals for new regional chapters from passionate leaders in cities where we don&apos;t currently operate.
        <br /><br />
        If you&apos;re interested in bringing StudentsxCEOs to your city, here&apos;s what we need: a committed local coordinator team with a minimum of five interested students. Submit your proposal to{" "}
        <a 
            href="mailto:mail@studentsxceos.org" 
            className="text-blue-800 hover:text-blue-600 hover:underline font-normal transition-colors"
        >
            mail@studentsxceos.org
        </a>{" "}
        with details about your city, your team, and your vision for the chapter. We&apos;re looking for leaders who can maintain our standards while adapting to local contexts, ensuring that every new chapter adds value to both the local community and our national network.
        </>
    ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="fellowship" className="w-full bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-slate-900 mb-2 tracking-wide justify-start"
        >
          Fellowship & Chapters
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
