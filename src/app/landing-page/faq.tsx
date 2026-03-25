"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
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
        "Indonesian transformation from a developing to a developed country requires exceptional business leadership across three complementary domains. First, we need policy-makers because government shapes the rules of the game. Second, we need corporate leaders because corporations drive the economy forward. Third, we need entrepreneurs because startups catalyze innovation and change",
    },
    {
      question: "Who can join StudentsxCEOs and how selective is the process?",
      answer:
        "We attract exceptional candidates from top-tier Indonesian universities who share our vision and driving motivation. Our fellows typically demonstrate strong academic performance, leadership potential, entrepreneurial mindset, commitment to Indonesian economic development, and open-mindedness with problem-solving abilities. However, the selectivity actually depends on each chapters specific context and needs.",
    },
    {
      question:
        "How do I apply to become a fellow and what does the timeline look like?",
      answer:
        'A "fellow" is an official member of our organization. To become one, you need to apply through the open recruitment process run by the chapter nearest to your current location. Each chapter manages its own recruitment independently while maintaining our national standards. Recruitment typically happens around the end of the year or early in the new year, so we encourage you to prepare yourself now. Keep an eye on your nearest chapters social media channels and website for specific announcement dates and application requirements.',
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
      answer: `Yes, we're actively seeking to expand into new cities beyond Java, including international locations. We welcome proposals for new regional chapters from passionate leaders in cities where we don't currently operate. If you're interested in bringing StudentsxCEOs to your city, here's what we need: a committed local coordinator team with a minimum of five interested students. Submit your proposal to mail@studentsxceos.org with details about your city, your team, and your vision for the chapter. We're looking for leaders who can maintain our standards while adapting to local contexts, ensuring that every new chapter adds value to both the local community and our national network.`,
    },
    {
      question:
        "How big is the StudentsxCEOs network and what impact have you made?",
      answer: `Our network is substantial and growing. We have 300+ core fellows annually rotating among chapters, with each chapter typically hosting around 50-60 active members. Beyond current fellows, we've created a community of 2,500+ alumni across all chapters who have collectively impacted 70,000+ students from more than 30 top Indonesian universities. 
        
        Our ecosystem extends further through partnerships with 100+ corporate partners and connections with numerous local, national, and international community partners. We track our impact across multiple dimensions: individual growth through fellows' career trajectories and leadership positions, community reach through social media engagement and event participation, economic contribution through microfinance families supported and business projects launched, and network strength through active corporate partnerships, inter-chapter collaboration, and alumni engagement.`,
    },
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
      answer: `We offer flexible partnership arrangements designed to meet your organization's specific needs and objectives. You can tap into individual programs from each chapter, or propose new ideas directly to chapters through our community page. For more general inquiries or proposals, you can contact us at mail@studentsxceos.org.

         We absolutely offer custom programs and are open to collaboration on virtually any initiative that aligns with our mission. Whether you're interested in a one-time event, an ongoing mentorship program, a research project, or something entirely unique, we're ready to work with you to design something impactful. Just reach out to us via email with your ideas, and we'll work together to bring them to life.`,
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
        `For partnership inquiries and general questions, you can email us your proposal. If you want to connect with a specific chapter, you can find their contact information on our community page, where each chapter's details are listed.

        We've designed our communication channels to make it easy for you to reach the right people, whether you're interested in organization-wide collaboration or chapter-specific programs. Don't hesitate to reach out—we're always excited to connect with individuals and organizations who share our passion for developing Indonesia's future business leaders.`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-medium text-slate-900 mb-10 tracking-wide text-center"
        >
          Frequently Asked Questions
        </motion.h2>

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
