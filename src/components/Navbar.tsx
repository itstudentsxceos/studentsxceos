'use client';

import { Menu, X } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeNav = "font-medium text-[var(--primary-600)] drop-shadow after:hidden"
  const navLink = "cursor-pointer relative text-[var(--neutral-700)] hover:text-[var(--primary-600)] hover:scale-110 transition-all duration-200 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[var(--primary-600)] after:transition-all after:duration-300 hover:after:w-full";
  const router = useRouter();
  const active = pathname.replace("/", "") || "home";

  const handleNavigate = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <nav className="fixed w-full z-50 transition-shadow">
      <div className="top-0 left-0 right-0 w-full mx-auto rounded-b-xl bg-[var(--color-white)] px-8 md:px-11 py-3 shadow-sm">
        
        <div className="relative flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/logo-sxc.png"
                alt="StudentsxCEOs Logo"
                width={40}
                height={40}
              />
            </div>
          </Link>

          {/* MENU DEKSTOP */}
          <div className="hidden md:flex gap-10 text-base md:items-center justify-end font-normal text-md">
            <button
              onClick={() => handleNavigate("/about")}
              className={`${navLink} ${active === "about" ? activeNav : ""}`}
            >
              About
            </button>

            <button
              onClick={() => handleNavigate("/community")}
              className={`${navLink} ${active === "community" ? activeNav : ""}`}
            >
              Chapters
            </button>

            <button
              onClick={() => handleNavigate("/support")}
              className={`${navLink} ${active === "support" ? activeNav : ""}`}
            >
              Partners
            </button>

            <button
              onClick={() => handleNavigate("/faq")}
              className={`${navLink} ${active === "faq" ? activeNav : ""}`}
            >
              FAQs
            </button>

            <button
              onClick={() => handleNavigate("/support")}
              className="hover:scale-110 transition-all duration-200 text-white text-sm tracking-wide relative cursor-pointer bg-gradient-to-br from-[#121926] to-[#0A3C8E] overflow-hidden py-2 px-3 rounded-lg z-0 border border-black"   
            > 
              Partner with Us 
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={27} /> : <Menu size={27} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/40" 
              onClick={() => setOpen(false)}
            />
            
            {/* Menu Panel */}
            <div className="absolute top-0 right-0 h-full w-full max-w-[85%] bg-white shadow-2xl flex flex-col p-10">
              {/* Close Button & Logo */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={() => setOpen(false)}>
                  <Image
                    src="/logo-sxc.png"
                    alt="StudentsxCEOs Logo"
                    width={50}
                    height={50}
                  />
                </Link>
                <button onClick={() => setOpen(false)}>
                  <X size={40} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-6 text-lg mt-auto">
                <button 
                  onClick={() => handleNavigate("/about")}
                  className={`text-left ${active === "about" ? "text-[var(--primary-600)] font-medium" : "text-[var(--neutral-700)]"}`}
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavigate("/community")}
                  className={`text-left ${active === "community" ? "text-[var(--primary-600)] font-medium" : "text-[var(--neutral-700)]"}`}
                >
                  Chapters
                </button>
                <button 
                  onClick={() => handleNavigate("/support")}
                  className={`text-left ${active === "support" ? "text-[var(--primary-600)] font-medium" : "text-[var(--neutral-700)]"}`}
                >
                  Support
                </button>
                <button 
                  onClick={() => handleNavigate("/faq")}
                  className={`text-left ${active === "faq" ? "text-[var(--primary-600)] font-medium" : "text-[var(--neutral-700)]"}`}
                >
                  FAQs
                </button>
              </div>

              {/* Partner Button */}
              <button
                onClick={() => handleNavigate("/support")}
                className="mt-auto w-full tracking-widest text-white text-md bg-gradient-to-br from-[#121926] to-[#0A3C8E] py-3 px-4 rounded-lg"   
              >
                Partner with Us
              </button>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}