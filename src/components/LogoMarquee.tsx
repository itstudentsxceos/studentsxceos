'use client';

import Image from "next/image";

type LogoMarqueeProps = {
  logos: string[];
  direction?: "left" | "right";
  speed?: number;
};

export default function LogoMarquee({
  logos,
  direction = "left",
  speed = 25,
}: LogoMarqueeProps) {
  return (
    <div className="relative overflow-hidden py-6">

      {/* kabut kiri */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

      {/* kabut kanan */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div
        className="flex w-max gap-0 md:gap-10 will-change-transform"
        style={{
            animation: `marquee-logos ${speed}s linear infinite`,
            animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="relative h-12 w-[120px] flex-shrink-0">
            <Image
              src={logo}
              alt="partner logo"
              width={160}
              height={100}
              className="object-contain h-full w-full transition duration-300 md:scale-100 scale-75 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}