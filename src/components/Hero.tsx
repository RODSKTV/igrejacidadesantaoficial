import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'motion/react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/banner_headline.png" 
          alt="Igreja Worship" 
          className="w-full h-full object-cover object-center"
        />
        {/* Deep dark overlay for premium feel and text readability */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-12 sm:mt-16">
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block text-brand-gold font-bold tracking-widest text-xs sm:text-sm mb-4"
        >
          {t.hero.welcome}
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.2] mb-6 drop-shadow-lg"
        >
          {t.hero.headline}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="text-lg sm:text-xl text-gray-200 font-medium italic mb-2">
            {t.hero.verse}
          </p>
          <p className="text-sm text-brand-gold font-semibold uppercase tracking-wider">
            {t.hero.verseRef}
          </p>
        </motion.div>


      </div>
    </section>
  );
}
