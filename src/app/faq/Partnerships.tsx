"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Partnerships() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question:
        "What are the benefits for companies partnering with StudentsxCEOs?",
      answer: `Partnering with StudentsxCEOs offers your organization three major value propositions. First, you gain talent pipeline access—direct connection to Indonesia's top-tier students from 30+ elite universities, pre-vetted high-performing candidates with leadership training, and early engagement with future policy-makers, corporate leaders, and entrepreneurs.

        Second, you benefit from brand building opportunities by positioning your company as a thought leader invested in Indonesia's future, achieving authentic engagement with high-potential youth audience, and amplifying content through our social media and summit platforms.

        Third, you can leverage strategic CSR and innovation through meaningful corporate social responsibility initiatives like microfinance and mentorship programs, access to fresh perspectives and innovative ideas through Project-Talks, and the opportunity to co-create programs that shape Indonesia's next generation of business leaders.`,
    },
    {
    question:
        "What types of partnerships does StudentsxCEOs offer and can we create custom programs?",
    answer: (
        <>
        We offer flexible partnership arrangements designed to meet your organization&apos;s specific needs and objectives. You can tap into individual programs from each chapter, or propose new ideas directly to chapters through our{" "}
        <Link
            href="/chapter" 
            className="text-blue-800 hover:text-blue-600 hover:underline font-normal transition-colors"
        >
            chapters page
        </Link>
        . For more general inquiries or proposals, you can contact us at{" "}
        <a 
            href="mailto:mail@studentsxceos.org" 
            className="text-blue-800 hover:text-blue-600 hover:underline font-normal transition-colors"
        >
            mail@studentsxceos.org
        </a>
        .
        <br /><br />
        We absolutely offer custom programs and are open to collaboration on virtually any initiative that aligns with our mission. Whether you&apos;re interested in a one-time event, an ongoing mentorship program, a research project, or something entirely unique, we&apos;re ready to work with you to design something impactful. Just reach out to us via{" "}
        <a 
            href="mailto:mail@studentsxceos.org" 
            className="text-blue-800 hover:text-blue-600 hover:underline font-normal transition-colors"
        >
            email
        </a>{" "}
        with your ideas, and we&apos;ll work together to bring them to life.
        </>
    ),
    },
    {
      question:
        "Can student organizations and other communities collaborate with StudentsxCEOs?",
      answer: `Absolutely! We firmly believe that "more collaboration means more impact." We've successfully partnered with numerous youth communities, university entrepreneurship clubs, and various other organizations. If you're a student leader from another organization and see potential for collaboration, we'd love to hear from you.

        Simply contact your nearest chapter if available, or reach out through our general email. We're always looking for synergies that can amplify our collective impact and create more value for the communities we serve. Collaboration allows us to learn from each other, share resources, and achieve goals that would be impossible to reach alone.`,
    },
    {
      question: "How can alumni, mentors, and supporters stay involved with StudentsxCEOs?",
      answer:
        `We're currently developing a comprehensive alumni program, so this is an exciting time to reconnect with our community. For now, alumni can contribute by becoming mentors or advisors—simply message us through email to let us know you're interested. If you can't join as a fellow but still want to support our mission, there are many ways to contribute.

        You can serve as a mentor, sharing your experience and insights with current fellows. You can be a speaker at our events, inspiring the next generation with your journey and expertise. You can participate in our programs, bringing your unique perspective to discussions and workshops. Or you can support us as a donor, helping us expand our reach and impact. Every form of support helps us move closer to our vision of developing Indonesia's business leaders, and we're grateful for anyone who wants to be part of this journey.`,
    },
    {
      question: "Who should I contact for partnerships or specific inquiries?",
      answer:
        <>For partnership inquiries and general questions, you can
        <a 
            href="mailto:mail@studentsxceos.org" 
            className="text-blue-800 hover:text-blue-600 hover:underline font-normal transition-colors"
        > email
        </a>{" "}
        us your proposal. If you want to connect with a specific chapter, you can find their contact information on our {" "}
        <Link
            href="/chapter" 
            className="text-blue-800 hover:text-blue-600 hover:underline font-normal transition-colors"
        >
            chapters page
        </Link>
        where each chapter&apos;s details are listed.

        <br /><br />
        We&apos;ve designed our communication channels to make it easy for you to reach the right people, whether you&apos;re interested in organization-wide collaboration or chapter-specific programs. Don&apos;t hesitate to reach out—we&apos;re always excited to connect with individuals and organizations who share our passion for developing Indonesia&apos;s future business leaders.
        </>,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="partnerships" className="w-full bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-medium text-slate-900 mb-2 tracking-wide justify-start"
        >
          Partnerships & Collaboration
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
