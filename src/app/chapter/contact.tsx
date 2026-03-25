'use client';
import { motion } from 'framer-motion';

interface ContactProps {
  email: string;
}

export default function Contact({ email }: ContactProps) {
  const socialMedia = [
    { 
      name: 'Instagram', 
      link: 'https://www.instagram.com/studentsxceos',
      icon: 'M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.32 4 20 5.68 20 7.75v8.5C20 18.32 18.32 20 16.25 20h-8.5C5.68 20 4 18.32 4 16.25v-8.5C4 5.68 5.68 4 7.75 4zm4.25 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.88a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24z' 
    },
    { 
      name: 'LinkedIn', 
      link: 'https://www.linkedin.com/company/studentsxceos/',
      icon: 'M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.18h.07c.66-1.25 2.28-2.57 4.69-2.57C21.42 7.61 24 10.09 24 14.28V24h-5v-8.43c0-2.01-.04-4.59-2.8-4.59-2.8 0-3.23 2.18-3.23 4.44V24h-5V8z' 
    },
    { 
      name: 'TikTok', 
      link: 'https://www.tiktok.com/@studentsxceosjkt',
      icon: 'M21 8.5a7.5 7.5 0 01-4.5-1.5V16a6 6 0 11-6-6c.34 0 .67.03 1 .08v3.03a3 3 0 10 3 2.89V2h3a4.5 4.5 0 003.5 3.5v3z' 
    },
  ];

  return (
    <section className="w-full bg-[#E6F2F9] px-8 py-16 md:py-24 overflow-hidden sm:px-16 mt-10 mb-25">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <h2 className="text-[26px] font-medium text-[#333333] mb-4">Connect with us</h2>
          <p className="mb-8 max-w-lg mx-auto md:mx-0 tracking-wider">
            We&apos;re always looking to connect with those who share an interest in our community.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            {socialMedia.map((social, index) => (
              <a 
                key={social.name} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="w-10 h-10 bg-[#0A1325] text-white rounded-lg flex items-center justify-center hover:bg-[#0A3C8E] transition-colors cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d={social.icon} />
                  </svg>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-linear-to-b from-[#0A1325] to-[#0A3C8E] rounded-3xl p-8 md:p-8 shadow-2xl"
        >
          <h3 className="text-center md:text-start text-2xl font-medium text-white mb-4">Contact us</h3>
          <p className="text-center md:text-start text-white/80 text-sm md:text-base mb-8 font-light tracking-wider">
            We&apos;re always looking to connect with those who share an interest in our community.
          </p>
          
          <a href={`mailto:${email}`}>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-slate-900 font-bold py-2.5 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors text-sm cursor-pointer w-full md:w-auto justify-center"
            >
              Email us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}