'use client';

import { Menu, X } from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  const activeNav = "font-medium text-[var(--primary-600)] drop-shadow after:hidden"
  const navLink = "cursor-pointer relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-0 after:origin-center after:h-[1px] after:bg-[var(--neutral-900)] after:transition-all after:duration-300 hover:after:w-full";
  const handleScroll = (id: string) => {
    setActive(id);

    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const setActiveFromURL = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash) {
        setActive(hash);
      } else {
        setActive(pathMap[pathname] || "");
      }
    };

    setActiveFromURL();

    window.addEventListener("hashchange", setActiveFromURL);
    return () => window.removeEventListener("hashchange", setActiveFromURL);
  }, [pathname]);

  const pathMap: Record<string, string> = {
    "/about": "about",
    "/community": "community",
    "/support": "support",
    "/faq": "faq",
  };

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
            <button
              onClick={() => handleScroll("about")}
              className={`${navLink} ${active === "about" ? activeNav : ""}`}
            >
              About
            </button>

            <button
              onClick={() => handleScroll("community")}
              className={`${navLink} ${active === "community" ? activeNav : ""}`}
            >
              Community
            </button>

            <button
              onClick={() => handleScroll("support")}
              className={`${navLink} ${active === "support" ? activeNav : ""}`}
            >
              Support
            </button>

            <button
              onClick={() => handleScroll("faq")}
              className={`${navLink} ${active === "faq" ? activeNav : ""}`}
            >
              FAQs
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
          <div className="mt-3 flex flex-col gap-4 mb-4 text-lg tracking-wider justify-items-center items-center md:hidden">
            <button onClick={() => { handleScroll("about"); setOpen(false); }}>
              About
            </button>
            <button onClick={() => { handleScroll("community"); setOpen(false); }}>
              Community
            </button>
            <button onClick={() => { handleScroll("support"); setOpen(false); }}>
              Support
            </button>
            <button onClick={() => { handleScroll("faq"); setOpen(false); }}>
              FAQs
            </button>
          </div>
        )}

      </div>
    </nav>
  );
}