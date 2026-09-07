import React from 'react';
import { useLanguage } from '../i18n';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Schedule() {
  const { t } = useLanguage();

  const events = [
    {
      day: "Domingo",
      schedule: [
        { time: "19:00h", title: "Culto de Louvor e Adoração" }
      ],
      icon: <Calendar className="w-8 h-8 text-brand-orange" />
    },
    {
      day: "Segunda-feira",
      schedule: [
        { time: "15:00h", title: "Monte de Oração" },
        { time: "19:30h", title: "Culto no Lar" }
      ],
      icon: <Calendar className="w-8 h-8 text-brand-orange" />
    },
    {
      day: "Terça-feira",
      schedule: [
        { time: "19:30h", title: "Culto da Família" }
      ],
      icon: <Calendar className="w-8 h-8 text-brand-orange" />
    },
    {
      day: "Quarta-feira",
      schedule: [
        { time: "18:00h", title: "Projeto Ana (online)" },
        { time: "19:30h", title: "Visitação" }
      ],
      icon: <Calendar className="w-8 h-8 text-brand-orange" />
    },
    {
      day: "Sexta-feira",
      schedule: [
        { time: "19:00h", title: "Estudo Bíblico" },
        { time: "20:30h", title: "Monte de Oração" }
      ],
      icon: <Calendar className="w-8 h-8 text-brand-orange" />
    }
  ];

  return (
    <section id="schedule" className="py-24 bg-brand-black relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-black to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">{t.schedule.title}</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-8 hover:border-gray-600 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] transition-all duration-300 flex flex-col sm:flex-row gap-6 group"
            >
              <div className="flex-shrink-0 bg-gray-900 p-4 rounded-xl self-start group-hover:scale-110 transition-transform duration-300">
                {event.icon}
              </div>
              <div className="flex-1 w-full">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 bg-gray-800 text-brand-gold rounded-full text-sm font-bold tracking-wide uppercase">
                    {event.day}
                  </span>
                </div>
                
                <div className="space-y-4">
                  {event.schedule.map((item, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-4 border-b border-gray-800/50 last:border-0 last:pb-0">
                      <span className="flex items-center gap-2 px-3 py-1 bg-gray-900/80 text-gray-300 rounded-md text-sm font-semibold w-fit shrink-0">
                        <Clock size={14} className="text-brand-orange" /> {item.time}
                      </span>
                      <h3 className="text-lg font-bold font-heading text-white">{item.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
