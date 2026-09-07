import React from 'react';
import { useLanguage } from '../i18n';
import { MapPin, Phone, Instagram, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t.contact.title}</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-center"
          >
            {/* WhatsApp Contact */}
            <a href="https://wa.me/5532998288312?text=Aqu%C3%AD%20%C3%A9%20o%20Pastor%20Carlos%2C%20e%20%C3%A9%20um%20prazer%20falar%20com%20voc%C3%AA%21%20Fa%C3%A7a%20seu%20pedido%20de%20ora%C3%A7%C3%A3o." target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                <img src="/icon whatsapp.png" alt="WhatsApp" className="w-16 h-16 object-contain drop-shadow-md" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-black group-hover:text-[#25D366] transition-colors">Pedido de Oração</h4>
                <p className="text-gray-600 leading-relaxed">+55 (32) 99828-8312</p>
              </div>
            </a>

            {/* Address */}
            <a href="https://maps.google.com/?q=R.+Expedicionário+Lucindo+Martins+de+Abreu+-+Matozinhos,+São+João+del+Rei+-+MG,+36305-198" target="_blank" rel="noreferrer" className="flex items-center gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform shrink-0">
                <img src="/icon mapa.png" alt="Localização" className="w-16 h-16 object-contain drop-shadow-md" />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-1 text-black group-hover:text-brand-orange transition-colors">Localização</h4>
                <p className="text-gray-600 leading-relaxed">R. Expedicionário Lucindo Martins de Abreu - Matozinhos<br/>São João del Rei - MG, 36305-198</p>
              </div>
            </a>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-full flex items-center justify-center"
          >
            <img src="/foto_pastor.png" alt="Pastor Carlos Corrêa" className="w-full h-auto max-h-[500px] object-contain" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
