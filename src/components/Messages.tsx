import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'motion/react';
import { Play, Instagram } from 'lucide-react';

export default function Messages() {
  const { t } = useLanguage();

  const messages = [
    { title: "Saiba se você tem fé em Deus ou está com incredulidade", date: "Momento com Deus", preacher: "Palavra de Vida", videoUrl: "/momento_com_deus.mp4" }
  ];

  return (
    <section id="messages" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t.messages.title}</h2>
            <div className="w-24 h-1 bg-brand-red rounded-full"></div>
          </div>
          <a 
            href="https://www.instagram.com/igrejacidadesantasjdroficial/"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 border border-gray-200 rounded-full font-bold text-sm hover:bg-gray-100 hover:text-brand-orange transition-colors whitespace-nowrap"
          >
            <Instagram size={18} />
            {t.messages.followInsta}
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden relative shadow-lg"
            >
                {msg.videoUrl ? (
                  <div className="flex flex-col h-full bg-black w-full min-h-[450px]">
                    <div className="relative w-full flex-1 flex items-center justify-center bg-black">
                      <video 
                        src={msg.videoUrl}
                        controls
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-6 md:p-8 shrink-0 bg-gray-900 border-t border-gray-800">
                      <div className="flex items-center gap-3 text-gray-400 text-sm font-medium mb-3">
                        <span>{msg.date}</span>
                        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                        <span>{msg.preacher}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">{msg.title}</h3>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full cursor-pointer">
                    <div className="absolute inset-0">
                      <img src={msg.img} alt={msg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                        <Play className="text-white ml-2" size={32} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="flex items-center gap-3 text-gray-300 text-sm font-medium mb-3">
                        <span>{msg.date}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{msg.preacher}</span>
                      </div>
                      <h3 className="text-3xl font-bold font-heading text-white">{msg.title}</h3>
                    </div>
                  </div>
                )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
