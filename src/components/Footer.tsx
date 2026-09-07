import React from 'react';
import { useLanguage } from '../i18n';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] border-t border-gray-900 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/logo_cs.png" alt="Logo" className="h-12 w-auto object-contain brightness-0 invert opacity-80" />
          </div>

          {/* Center */}
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-500 text-sm mb-2">
              © {year} Igreja Evangélica Cidade Santa. {t.footer.rights}
            </p>
            <p className="text-gray-600 text-xs italic">
              {t.footer.madeWith}
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/igrejacidadesantasjdroficial/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-orange hover:scale-110 transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="[LINK DO FACEBOOK]" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300">
              <Facebook size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
