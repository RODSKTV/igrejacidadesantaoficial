import React, { useState } from 'react';
import { useLanguage } from '../i18n';
import { motion, AnimatePresence } from 'motion/react';
import { Smile, Music, Laptop, X } from 'lucide-react';

export default function Ministries() {
  const { t } = useLanguage();
  const [selectedMinistry, setSelectedMinistry] = useState<any>(null);

  const ministriesList = [
    { 
      name: "Ministério Infantil", 
      icon: <Smile size={32} />, 
      color: "text-blue-500", 
      bg: "bg-blue-50",
      details: {
        title: "Ensinar para transformar, cuidar para aproximar e conduzir cada criança a Jesus.",
        paragraphs: [
          "O Ministério Infantil tem a missão de ensinar a Palavra de Deus de forma simples, alegre e significativa, ajudando as crianças a conhecerem o amor de Jesus e a desenvolverem uma fé desde os primeiros anos.",
          "Por meio de histórias bíblicas, músicas, brincadeiras, atividades e momentos de comunhão, criamos um ambiente seguro e acolhedor onde cada criança pode aprender, crescer e descobrir o propósito de Deus para sua vida.",
          "Nossa missão é plantar hoje a Palavra de Deus em pequenos corações que poderão transformar o mundo amanhã."
        ],
        membersTitle: "Membros do Ministério Infantil",
        membersCount: 3
      }
    },
    { 
      name: "Ministério de Louvor", 
      icon: <Music size={32} />, 
      color: "text-brand-gold", 
      bg: "bg-brand-gold/10",
      details: {
        title: "Adorar para exaltar a Deus, tocar corações e conduzir vidas à Sua presença.",
        paragraphs: [
          "O Ministério de Louvor existe para conduzir a igreja em momentos de adoração, comunhão e entrega a Deus, utilizando a música como instrumento para proclamar Sua grandeza e anunciar Sua Palavra.",
          "Através do canto, dos instrumentos e da dedicação de cada integrante, buscamos servir à igreja com excelência, compromisso e, acima de tudo, um coração verdadeiramente voltado para Deus.",
          "Nossa missão é adorar a Deus e conduzir pessoas a uma experiência genuína com Sua presença."
        ],
        membersTitle: "Membros do Ministério de Louvor",
        membersCount: 3
      }
    },
    { 
      name: "Ministério de Comunicação", 
      icon: (
        <div className="relative flex items-center justify-center w-8 h-8">
          <Laptop size={32} className="absolute" />
          <span className="absolute text-[11px] font-bold mt-[-2px] ml-[1px]">@</span>
        </div>
      ), 
      color: "text-indigo-500", 
      bg: "bg-indigo-50",
      details: {
        title: "Comunicar para conectar, inspirar e alcançar vidas.",
        paragraphs: [
          "O Ministério de Comunicação existe para levar a mensagem da igreja além das quatro paredes, utilizando criatividade, tecnologia e comunicação para anunciar o Evangelho e compartilhar tudo aquilo que Deus está realizando em nossa comunidade.",
          "Através de fotografia, vídeos, transmissões, redes sociais, design e mídias digitais, trabalhamos para informar, aproximar pessoas e contribuir para que a mensagem de Cristo alcance cada vez mais vidas.",
          "Nossa missão é simples: comunicar com excelência aquilo que Deus está fazendo."
        ],
        membersTitle: "Membros do Ministério de Comunicação",
        membersCount: 3
      }
    },
  ];

  return (
    <section id="ministries" className="py-24 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t.ministries.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.ministries.subtitle}</p>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {ministriesList.map((min, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedMinistry(min)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${min.bg} ${min.color} group-hover:scale-110 transition-transform duration-300`}>
                {min.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{min.name}</h3>
              <span className="text-sm font-medium text-gray-400 group-hover:text-brand-orange transition-colors">
                {t.ministries.discover} →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMinistry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMinistry(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedMinistry(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 md:p-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${selectedMinistry.bg} ${selectedMinistry.color}`}>
                  {selectedMinistry.icon}
                </div>
                <h2 className="text-3xl font-bold font-heading mb-6">{selectedMinistry.name}</h2>
                
                {selectedMinistry.details ? (
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      {selectedMinistry.details.title}
                    </h3>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                      {selectedMinistry.details.paragraphs.map((p: string, i: number) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    
                    {selectedMinistry.details.membersTitle && (
                      <div className="pt-10 border-t border-gray-100 mt-10">
                        <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                          {selectedMinistry.details.membersTitle}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                          {Array.from({ length: selectedMinistry.details.membersCount || 0 }).map((_, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                              <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl mb-4 shadow-inner flex flex-col items-center justify-center overflow-hidden border border-gray-200">
                                <span className="text-gray-400 text-sm font-medium">Foto 3x4</span>
                              </div>
                              <p className="font-semibold text-gray-800 text-center">Nome do Membro</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 text-lg">Mais informações sobre este ministério estarão disponíveis em breve.</p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
