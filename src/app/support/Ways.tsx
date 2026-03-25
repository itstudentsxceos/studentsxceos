'use client';

import { Heart } from "react-feather";
import { motion } from "framer-motion";

export default function Ways() {
const values = [
    {
        title: "Corporate Partnership",
        description: "Collaborate with us to gain brand visibility, access top emerging talent, and align with your CSR goals through sponsorship and executive involvement in our talent pipeline programs.",
        icon: <Heart/>,
        button: "Learn More"
    },
    {
        title: "Financial Support",
        description: "Make a direct impact by funding our leadership programs, providing student scholarships, sponsoring events, and supporting the establishment of new chapters across the nation.",
        icon: <Heart/>,
        button:"Donate Now"
    },
    {
        title: "Mentorship & Expertise",
        description: "Share your industry expertise and shape future leaders by serving as a mentor, facilitating workshops, joining our advisory board, or speaking at our national events.",
        icon: <Heart/>,
        button: "Get Involved"
    },
]

const handleScroll = (id: string) => {

    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
};

  return (
    <section className="w-full px-6 md:px-16 py-20 pb-5 md:py-5 mb-20 text-center md:bg-none bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-500)] backdrop-blur-md">
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative p-[2px] rounded-[22px] md:bg-gradient-to-b md:from-[var(--neutral-900)] md:to-[var(--primary-500)] backdrop-blur-md w-full"
        >
            <div className="relative justify-center h-full md:pt-20 pb-10 max-w-3xl mx-auto">
            
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-medium mb-2 text-[var(--color-white)]"
            >
                Ways to Support
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-sm md:text-lg max-w-5xl mx-auto font-normal text-[var(--color-white)] tracking-wide"
            >
                Choose how you&apos;d like to contribute to our mission.
            </motion.p>
            </div>

            <div className="relative justify-center h-full pb-15 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {values.map((value, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="border border-[var(--color-neutral-200)] rounded-xl p-6 shadow-sm bg-[var(--color-white)] flex flex-col h-full"
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

                <div className="mt-auto">
                <motion.button
                    onClick={() => handleScroll("community")}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="mt-4 py-1.5 w-full rounded-md bg-[var(--color-black)] text-white text-sm font-medium cursor-pointer hover:bg-[var(--neutral-800)] transition-colors tracking-wider"
                >
                    {value.button}
                </motion.button>
                </div>
            </motion.div>
            ))}
            </div>
            </div>
        </motion.div>
    </section>
  );
}