// src/app/faq/CategoryFilter.tsx
"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "react-feather";

const categories = [
  { id: "all", label: "All Categories" },
  { id: "vision", label: "Vision & Identity" },
  { id: "fellowship", label: "Fellowship & Chapters" },
  { id: "partnerships", label: "Partnerships & Collaboration" },
];

export default function CategoryFilter() {
  const [active, setActive] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    if (id === "all") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("all");
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;

      for (let i = categories.length - 1; i >= 0; i--) {
        const cat = categories[i];
        if (cat.id === "all") continue;

        const element = document.getElementById(cat.id);
        if (element && element.offsetTop <= scrollPos) {
          setActive(cat.id);
          return;
        }
      }
      setActive("all");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLabel = categories.find((c) => c.id === active)?.label;

  return (
    <div className="top-20 z-40 bg-white/80 backdrop-blur-md py-4">
      <div className="max-w-4xl mx-auto mt-5 px-6 md:px-0">
        <div className="hidden md:flex gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToSection(cat.id)}
              className={`px-5 py-2 rounded-md text-sm font-normal transition-all whitespace-nowrap tracking-wider cursor-pointer
                ${
                  active === cat.id
                    ? "bg-[var(--primary-700)] text-white"
                    : "bg-slate-200 text-[var(--neutral-900)] hover:bg-slate-300"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-5 py-3 rounded-md border border-slate-500/30 text-sm font-normal tracking-wider"
          >
            <span>{activeLabel}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`w-full text-left px-5 py-3 text-sm font-normal tracking-wider transition-colors
                    ${
                      active === cat.id
                        ? "bg-slate-200"
                        : "text-[var(--neutral-900)] hover:bg-slate-100"
                    }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}