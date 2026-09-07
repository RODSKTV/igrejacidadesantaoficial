import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'motion/react';
import { Users, BookOpen, Heart, Target } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const leaders = [
    { name: 'Carlos Corrêa', role: t.about.leadership.roles.pres, image: '/foto_pastor.png' },
    { name: '', role: 'Líder do Ministério de Comunicação', image: '' },
    { name: '', role: 'Líder do Ministério de Louvor', image: '' }
  ];

  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">{t.about.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.about.subtitle}</p>
          <div className="w-24 h-1 bg-brand-orange mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          {/* Who we are */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-orange/10 rounded-xl text-brand-orange">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading">{t.about.whoWeAre.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t.about.whoWeAre.text}
            </p>
          </motion.div>

          {/* History */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold font-heading">{t.about.history.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {t.about.history.text}
            </p>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="bg-gray-50 rounded-3xl p-10 md:p-16 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-center mb-12 relative z-10">{t.about.missionVision.title}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="flex flex-col items-center text-center">
              <Target size={40} className="text-brand-orange mb-6" />
              <h4 className="text-xl font-bold mb-3">{t.about.missionVision.missionTitle}</h4>
              <p className="text-gray-600 text-lg">{t.about.missionVision.missionText}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart size={40} className="text-brand-red mb-6" />
              <h4 className="text-xl font-bold mb-3">{t.about.missionVision.visionTitle}</h4>
              <p className="text-gray-600 text-lg">{t.about.missionVision.visionText}</p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-3xl font-bold font-heading text-center mb-12">{t.about.leadership.title}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex items-center justify-center">
                  {leader.image ? (
                    <img 
                      src={leader.image} 
                      alt={leader.name || leader.role} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 bg-gray-100">
                      <Users size={48} className="mb-2 opacity-50" />
                      <span className="text-sm font-medium opacity-50">Foto em breve</span>
                    </div>
                  )}
                </div>
                <div className="p-6 text-center">
                  {leader.name && <h4 className="text-xl font-bold mb-1">{leader.name}</h4>}
                  <p className="text-brand-orange font-medium">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
