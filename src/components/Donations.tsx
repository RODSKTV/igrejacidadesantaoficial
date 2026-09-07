import React, { useState } from 'react';
import { useLanguage } from '../i18n';
import { Copy, Check, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function Donations() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  
  const pixKey = "61.814.020/0001-90";

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="donations" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <HeartHandshake className="w-16 h-16 text-brand-gold mx-auto mb-6" />
        
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">{t.donations.title}</h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto italic">
          "{t.donations.text}"
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Chave Pix</label>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full bg-black border border-gray-700 rounded-lg py-4 px-6 text-xl text-white font-mono text-center sm:text-left">
                {pixKey}
              </div>
              <button 
                onClick={handleCopy}
                className={`w-full sm:w-auto px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                  copied ? 'bg-green-600 text-white' : 'bg-brand-orange hover:bg-orange-600 text-white'
                }`}
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                {copied ? t.donations.copied : t.donations.copyPix}
              </button>
            </div>
          </div>

          <div className="bg-black/50 border border-gray-800 rounded-xl p-6 text-left">
            <h4 className="text-brand-gold font-bold mb-2 flex items-center gap-2">
              {t.donations.instructionsTitle}
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              {t.donations.instructionsText}
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p><strong>Nome:</strong> Igreja Cidade Santa</p>
              <p><strong>CNPJ:</strong> 61.814.020/0001-90</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
