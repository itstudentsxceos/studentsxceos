'use client';

import { Menu, X } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const ignoreScroll = useRef(false);

  const activeNav = "font-medium text-[var(--primary-600)] drop-shadow after:hidden"
  const navLink = "relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:origin-center after:h-[1px] after:bg-[var(--neutral-900)] after:transition-all after:duration-300 hover:after:w-full";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (ignoreScroll.current) return;

      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setActive("");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 px-5 md:px-9 py-8 transition-shadow">
      <div className="mx-auto max-w-[98rem] rounded-2xl bg-[var(--color-white)] px-6 py-2 shadow-sm">
        
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
          </div></Link>

          {/* MENU */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-base font-normal">
            
            <Link href="/#about"
              onClick={(e) => {
                e.preventDefault();
                ignoreScroll.current = true;
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                setActive("about");

                setTimeout(() => {
                  ignoreScroll.current = false;
                }, 5000);
              }}
              className={`${navLink} ${active === "about" ? activeNav : ""}`}>
              About
            </Link>

            <Link href="/#community"
              onClick={(e) => {
                e.preventDefault();
                ignoreScroll.current = true;
                document.getElementById("community")?.scrollIntoView({ behavior: "smooth" });
                setActive("community");

                setTimeout(() => {
                  ignoreScroll.current = false;
                }, 5000);
              }}
              className={`${navLink} ${active === "community" ? activeNav : ""}`}>
              Community
            </Link>

            <Link href="/#partners"
              onClick={(e) => {
                e.preventDefault();
                ignoreScroll.current = true;
                document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" });
                setActive("partners");

                setTimeout(() => {
                  ignoreScroll.current = false;
                }, 5000);
              }}
              className={`${navLink} ${active === "partners" ? activeNav : ""}`}>
              Support
            </Link>

            <Link href="/#faq"
              onClick={(e) => {
                e.preventDefault();
                ignoreScroll.current = true;
                document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
                setActive("faq");

                setTimeout(() => {
                  ignoreScroll.current = false;
                }, 5000);
              }}
              className={`${navLink} ${active === "faq" ? activeNav : ""}`}>
              FAQs
            </Link>

          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={27} /> : <Menu size={27} />}
          </button>

        </div>

        {/* MOBILE */}
        {open && (
          <div className="mt-3 flex flex-col gap-4 mb-4 text-lg tracking-wider justify-items-center items-center md:hidden">
            <Link href="/#about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/#community" onClick={() => setOpen(false)}>
              Community
            </Link>
            <Link href="/#partners" onClick={() => setOpen(false)}>
              Support
            </Link>
            <Link href="/#faq" onClick={() => setOpen(false)}>
              FAQs
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}