"use client";

import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2010",
    text: "First planted our seeds of leadership in Bandung and Jakarta.",
  },
  {
    year: "2015",
    text: "Extended our reach to key student hubs in Yogyakarta, Semarang, and East Java.",
  },
  {
    year: "Present",
    text: (<>Empowering a nationwide network of <span className="font-bold">300+ active fellows</span> and thousands of alumni annually.</>),
    highlight: true,
  },
];

const GrowthSection = () => {
  return (
    <section className="py-15 md:px-6 bg-white">
    <div className="max-w-6xl mx-auto md:rounded-2xl p-[2px] md:bg-gradient-to-b from-[var(--secondary-200)] to-[var(--color-white)]">
      {/* OUTER CONTAINER */}
      <div className="max-w-6xl mx-auto bg-[var(--color-blue-thin)] rounded-2xl py-20 px-8 md:px-16 relative overflow-hidden">

        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-md"
          >
            Our Growth Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl font-medium mt-1 bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-200)] bg-clip-text text-transparent"
          >
            Where Future Leaders Begin
          </motion.h2>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

        {/* LINE */}
        {/* Desktop (horizontal) */}
        <div className="hidden md:block absolute top-3 left-0 w-full h-[5px] bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-blue-thin)] rounded-full" />

        {/* Mobile (vertical) */}
        <div className="block md:hidden absolute top-0 left-5 w-[5px] h-full bg-gradient-to-b from-[var(--color-blue)] to-[var(--color-blue-thin)] rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {timelineData.map((item, index) => (
            <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-row md:flex-col items-start md:items-center text-center gap-4 md:gap-0"
            >
                {/* DOT + GLOW */}
                <div className="relative md:mb-12 mt-1 md:mt-0 md:ml-0">
                {/* glow */}
                <div className="mt-15 md:mt-0 absolute inset-0 rounded-full bg-[var(--secondary-250)] blur-md opacity-60 scale-100 ml-2.5 md:ml-0 md:scale-125" />

                {/* dot */}
                <div className="relative w-6 h-6 bg-[var(--color-blue)] rounded-full border-[3.5] border-[var(--neutral-200)] ml-2.5 mt-15 md:mt-0 md:ml-0 shadow-md" />
                </div>

                {/* CARD */}
                <div className="flex-1">
                <div className={`
                    rounded-2xl max-w-sm h-full p-[2px]
                    ${
                    item.highlight
                        ? "bg-gradient-to-b from-[var(--secondary-200)] to-[var(--neutral-200)]"
                        : "bg-[var(--neutral-200)]"
                    }
                `}
                >
                <div className="h-full bg-[var(--color-white)] rounded-2xl border-1 border-[var(--neutral-200)] px-4 md:px-8 py-8 max-w-sm">
                <h3 className="text-lg font-medium bg-gradient-to-b from-[var(--neutral-900)] to-[var(--primary-200)] bg-clip-text text-transparent mb-1">
                    {item.year}
                </h3>

                <p className="text-sm font-light md:font-normal tracking-wider">
                    {item.text}
                </p>
                </div>
                </div>
                </div>
            </motion.div>
            ))}
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default GrowthSection;