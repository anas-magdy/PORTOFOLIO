'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const handleScroll = () => {
    const nextSection = document.getElementById('profile-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-white overflow-hidden px-4">
      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <svg width="100%" height="100%" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#e5e7eb" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-2xl">
        <div className="flex flex-row items-end gap-2 md:gap-4">
          {/* الأرقام */}
          <span className="flex flex-col">
            <span className="text-xs md:text-base lg:text-2xl font-semibold text-[#5ec6e7]">20</span>
            <span className="text-xs md:text-base lg:text-2xl font-semibold text-[#7b6eea]">25</span>
          </span>

          {/* كلمة PORTOFOLIO مع الأنيميشن */}
          <motion.span
            variants={titleVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="font-extrabold text-[#17203a] tracking-tight leading-none text-3xl md:text-6xl lg:text-7xl"
          >
            PORTOFOLIO
          </motion.span>
        </div>

        {/* الاسم */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-2 pl-24 font-bold text-base md:text-2xl lg:text-3xl text-center"
          style={{
            fontFamily: "'Arabella', cursive",
            background: 'linear-gradient(90deg, #5ec6e7 0%, #b97adf 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Alaa M.Abd-Elsalam
        </motion.span>

        {/* زر النزول */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={handleScroll}
          className="mt-16 px-6 py-3 bg-gradient-to-r from-[#5ec6e7] to-[#b97adf] text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-200 font-bold text-lg flex items-center gap-2"
          style={{ cursor: "pointer" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}