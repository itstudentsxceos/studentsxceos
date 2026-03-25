import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-white px-4 md:px-8 pb-8">
      <div className="max-w-full mx-auto bg-linear-to-b from-[#E6F2F9] to-[#FDFDFD] rounded-[30px] pt-16 pb-8 px-8 md:px-16 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          <div className="flex flex-col max-w-sm md:items-start text-left">
            <Image
              src="/logo-sxc.png"
              alt="StudentsxCEOs Logo"
              width={100}
              height={100}
              className="h-10 w-auto object-contain mb-6"
            />

            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-light text-center md:text-start tracking-wider">
              Connecting ambitious students with world-class business leaders to
              shape the future of Indonesia.
            </p>

            <a
              href="mailto:studentxceos@gmail.com"
              className="text-slate-700 text-sm md:text-base font-light hover:text-[#0A3C8E] transition-colors text-center md:text-start tracking-wider"
            >
              studentxceos@gmail.com
            </a>
          </div>

          <div className="flex justify-center md:justify-end gap-16 md:gap-24">
            <div className="flex flex-col items-start">
              <h4 className="text-slate-900 font-medium mb-6">Page</h4>
              <ul className="flex flex-col gap-4 font-light tracking-wider">
                <li>
                  <a
                    href="/landing-page#about"
                    className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/landing-page#community"
                    className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="/landing-page#partners"
                    className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-slate-900 font-medium mb-6">Support</h4>
              <ul className="flex flex-col gap-4 font-light tracking-wider">
                <li>
                  <a
                    href="/landing-page#faq"
                    className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/studentsxceos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-[#0A3C8E] transition-colors text-sm md:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200/60 flex justify-center items-center">
          <p className="text-slate-700 text-sm font-normal tracking-wide">
            © 2026 StudentsxCEOs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
