import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n';
import { motion, AnimatePresence } from 'motion/react';
import iconBrazil from '../assets/flags/brazil.png';
import iconUsa from '../assets/flags/usa.png';
import iconSpain from '../assets/flags/spain.png';

const flagIcons: Record<string, string> = {
  pt: iconBrazil,
  en: iconUsa,
  es: iconSpain,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.schedule, href: '#schedule' },
    { name: t.nav.ministries, href: '#ministries' },
    { name: t.nav.messages, href: '#messages' },
    { name: t.nav.donations, href: '#donations' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white text-black ${
        isScrolled ? 'py-2 shadow-md' : 'py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3 h-12 md:h-16">
              <img src="/logo_cs.png" alt="Igreja Cidade Santa" className={`w-auto object-contain drop-shadow-sm transition-all duration-300 origin-left scale-125 md:scale-150 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`} />
              {/* Optional text if logo is missing/small */}
              {/* <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">CIDADE SANTA</span> */}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-end items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Language Selector Desktop */}
            <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
              <button 
                onClick={() => setLanguage('pt')} 
                title="Português"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  language === 'pt' 
                    ? 'ring-2 ring-brand-orange ring-offset-2 scale-105 opacity-100 shadow-sm' 
                    : 'opacity-65 hover:opacity-100'
                }`}
              >
                <img src={iconBrazil} alt="Português" className="w-7 h-7 object-contain rounded-full" />
              </button>
              <button 
                onClick={() => setLanguage('en')} 
                title="English"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  language === 'en' 
                    ? 'ring-2 ring-brand-orange ring-offset-2 scale-105 opacity-100 shadow-sm' 
                    : 'opacity-65 hover:opacity-100'
                }`}
              >
                <img src={iconUsa} alt="English" className="w-7 h-7 object-contain rounded-full" />
              </button>
              <button 
                onClick={() => setLanguage('es')} 
                title="Español"
                className={`rounded-full transition-all duration-200 hover:scale-110 ${
                  language === 'es' 
                    ? 'ring-2 ring-brand-orange ring-offset-2 scale-105 opacity-100 shadow-sm' 
                    : 'opacity-65 hover:opacity-100'
                }`}
              >
                <img src={iconSpain} alt="Español" className="w-7 h-7 object-contain rounded-full" />
              </button>
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Selector */}
            <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100 shadow-sm">
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0, paddingRight: 0 }}
                    animate={{ width: 'auto', opacity: 1, paddingRight: 4 }}
                    exit={{ width: 0, opacity: 0, paddingRight: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-center overflow-hidden"
                  >
                    <div className="flex space-x-2 pr-1 pl-1">
                      {language !== 'pt' && (
                        <button onClick={() => { setLanguage('pt'); setIsLangMenuOpen(false); }} title="Português" className="p-1 hover:bg-white rounded-full transition-all shrink-0">
                          <img src={iconBrazil} alt="Português" className="w-7 h-7 object-contain rounded-full" />
                        </button>
                      )}
                      {language !== 'en' && (
                        <button onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }} title="English" className="p-1 hover:bg-white rounded-full transition-all shrink-0">
                          <img src={iconUsa} alt="English" className="w-7 h-7 object-contain rounded-full" />
                        </button>
                      )}
                      {language !== 'es' && (
                        <button onClick={() => { setLanguage('es'); setIsLangMenuOpen(false); }} title="Español" className="p-1 hover:bg-white rounded-full transition-all shrink-0">
                          <img src={iconSpain} alt="Español" className="w-7 h-7 object-contain rounded-full" />
                        </button>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                title="Trocar idioma"
                className={`p-1 rounded-full transition-all shrink-0 ${isLangMenuOpen ? 'bg-white shadow-sm ring-1 ring-brand-orange' : 'hover:bg-white'}`}
              >
                <img 
                  src={flagIcons[language] || iconBrazil} 
                  alt="Idioma" 
                  className="w-7 h-7 object-contain rounded-full" 
                />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-brand-orange transition-colors p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={handleNavClick}
              className="text-lg font-medium text-gray-800 hover:text-brand-orange py-2 block"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
