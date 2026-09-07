import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'motion/react';

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-32 relative bg-black overflow-hidden">
      {/* Decorative Elements */}
      <img 
        src="/bg%20rodap%C3%A9.png" 
        alt="Igreja Cidade Santa" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
      
      <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-brand-orange/20 rounded-full blur-[100px]"></div>
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-brand-gold/20 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
        >
          {t.cta.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          {t.cta.subtitle}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#about"
            className="w-full sm:w-auto px-10 py-5 bg-brand-orange text-white font-bold rounded-full hover:scale-105 hover:bg-orange-600 transition-all duration-300 shadow-[0_0_30px_rgba(247,76,5,0.4)]"
          >
            {t.cta.btn1}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
