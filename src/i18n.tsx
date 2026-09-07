import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

type Translations = {
  [key in Language]: {
    nav: {
      home: string;
      about: string;
      schedule: string;
      ministries: string;
      messages: string;
      donations: string;
      contact: string;
    };
    hero: {
      welcome: string;
      headline: string;
      verse: string;
      verseRef: string;
      primaryBtn: string;
      secondaryBtn: string;
    };
    about: {
      title: string;
      subtitle: string;
      whoWeAre: { title: string; text: string };
      history: { title: string; text: string };
      missionVision: { 
        title: string; 
        missionTitle: string; 
        missionText: string;
        visionTitle: string;
        visionText: string;
      };
      leadership: {
        title: string;
        roles: { pres: string; aux: string; leader: string; };
      }
    };
    schedule: {
      title: string;
      learnMore: string;
    };
    ministries: {
      title: string;
      subtitle: string;
      discover: string;
    };
    messages: {
      title: string;
      followInsta: string;
    };
    donations: {
      title: string;
      text: string;
      copyPix: string;
      copied: string;
      instructionsTitle: string;
      instructionsText: string;
    };
    contact: {
      title: string;
      talkToUs: string;
      followUs: string;
    };
    cta: {
      title: string;
      subtitle: string;
      btn1: string;
      btn2: string;
    };
    footer: {
      rights: string;
      madeWith: string;
    };
  };
};

const translations: Translations = {
  pt: {
    nav: { home: "Início", about: "A Igreja", schedule: "Programação", ministries: "Ministérios", messages: "Mensagens", donations: "Dízimos & Ofertas", contact: "Contato" },
    hero: { welcome: "SEJA BEM-VINDO", headline: "Uma igreja para viver a fé, encontrar propósito e caminhar em comunhão.", verse: "\"Eu e a minha casa serviremos ao Senhor.\"", verseRef: "Josué 24:15", primaryBtn: "QUERO CONHECER A IGREJA", secondaryBtn: "VER NOSSA PROGRAMAÇÃO" },
    about: { title: "A Igreja", subtitle: "Um lugar para pertencer, servir e crescer na presença de Deus.", whoWeAre: { title: "Quem Somos", text: "Somos uma comunidade de fé apaixonada por Jesus, dedicada a viver o Evangelho de forma genuína e transformadora." }, history: { title: "Nossa História", text: "Fundada com o propósito de ser luz na cidade, nossa igreja tem construído um legado de amor, serviço e adoração a Deus ao longo dos anos." }, missionVision: { title: "Missão e Visão", missionTitle: "Missão:", missionText: "Anunciar o Evangelho, amar pessoas e formar discípulos.", visionTitle: "Visão:", visionText: "Ser uma igreja relevante, acolhedora e comprometida com o propósito de Deus." }, leadership: { title: "Liderança", roles: { pres: "Pastor Presidente", aux: "Pastor Auxiliar", leader: "Líder" } } },
    schedule: { title: "Nossa Programação", learnMore: "Saiba mais" },
    ministries: { title: "Nossos Ministérios", subtitle: "Há um lugar para você servir, crescer e fazer parte.", discover: "Conheça" },
    messages: { title: "Mensagens que Transformam", followInsta: "SIGA NO INSTAGRAM" },
    donations: { title: "Dízimos & Ofertas", text: "Sua contribuição faz parte daquilo que Deus realiza através desta igreja.", copyPix: "COPIAR CHAVE PIX", copied: "Chave Pix copiada!", instructionsTitle: "Orientações", instructionsText: "Utilize a chave Pix acima para realizar sua contribuição de forma rápida e segura. Deus abençoe sua vida!" },
    contact: { title: "Entre em Contato", talkToUs: "FALE CONOSCO", followUs: "SIGA-NOS" },
    cta: { title: "Você é bem-vindo aqui.", subtitle: "Venha nos conhecer e faça parte da nossa comunidade.", btn1: "QUERO CONHECER A IGREJA", btn2: "FALAR PELO WHATSAPP" },
    footer: { rights: "Todos os direitos reservados.", madeWith: "Feito com fé, propósito e excelência." }
  },
  en: {
    nav: { home: "Home", about: "About Us", schedule: "Schedule", ministries: "Ministries", messages: "Messages", donations: "Tithes & Offerings", contact: "Contact" },
    hero: { welcome: "WELCOME", headline: "A church to live faith, find purpose, and walk in communion.", verse: "\"As for me and my house, we will serve the Lord.\"", verseRef: "Joshua 24:15", primaryBtn: "I WANT TO VISIT", secondaryBtn: "SEE OUR SCHEDULE" },
    about: { title: "Our Church", subtitle: "A place to belong, serve, and grow in God's presence.", whoWeAre: { title: "Who We Are", text: "We are a faith community passionate about Jesus, dedicated to living the Gospel genuinely." }, history: { title: "Our History", text: "Founded with the purpose of being a light in the city, our church has built a legacy of love, service, and worship." }, missionVision: { title: "Mission & Vision", missionTitle: "Mission:", missionText: "Proclaim the Gospel, love people, and make disciples.", visionTitle: "Vision:", visionText: "To be a relevant, welcoming church committed to God's purpose." }, leadership: { title: "Leadership", roles: { pres: "Senior Pastor", aux: "Associate Pastor", leader: "Leader" } } },
    schedule: { title: "Our Schedule", learnMore: "Learn more" },
    ministries: { title: "Our Ministries", subtitle: "There is a place for you to serve, grow, and belong.", discover: "Discover" },
    messages: { title: "Transforming Messages", followInsta: "FOLLOW ON INSTAGRAM" },
    donations: { title: "Tithes & Offerings", text: "Your contribution is part of what God is doing through this church.", copyPix: "COPY PIX KEY", copied: "Pix Key copied!", instructionsTitle: "Instructions", instructionsText: "Use the Pix key above to make your contribution quickly and securely. God bless you!" },
    contact: { title: "Get in Touch", talkToUs: "TALK TO US", followUs: "FOLLOW US" },
    cta: { title: "You are welcome here.", subtitle: "Come visit us and be part of our community.", btn1: "I WANT TO VISIT", btn2: "TALK ON WHATSAPP" },
    footer: { rights: "All rights reserved.", madeWith: "Made with faith, purpose, and excellence." }
  },
  es: {
    nav: { home: "Inicio", about: "La Iglesia", schedule: "Programación", ministries: "Ministerios", messages: "Mensajes", donations: "Diezmos y Ofrendas", contact: "Contacto" },
    hero: { welcome: "BIENVENIDO", headline: "Una iglesia para vivir la fe, encontrar propósito y caminar en comunión.", verse: "\"Yo y mi casa serviremos a Jehová.\"", verseRef: "Josué 24:15", primaryBtn: "QUIERO VISITAR", secondaryBtn: "VER PROGRAMACIÓN" },
    about: { title: "La Iglesia", subtitle: "Un lugar para pertenecer, servir y crecer en la presencia de Dios.", whoWeAre: { title: "Quiénes Somos", text: "Somos una comunidad de fe apasionada por Jesús, dedicada a vivir el Evangelio de forma genuina." }, history: { title: "Nuestra Historia", text: "Fundada con el propósito de ser luz en la ciudad, nuestra iglesia ha construido un legado de amor, servicio y adoración." }, missionVision: { title: "Misión y Visión", missionTitle: "Misión:", missionText: "Anunciar el Evangelio, amar a las personas y hacer discípulos.", visionTitle: "Visión:", visionText: "Ser una iglesia relevante, acogedora y comprometida con el propósito de Dios." }, leadership: { title: "Liderazgo", roles: { pres: "Pastor Principal", aux: "Pastor Asociado", leader: "Líder" } } },
    schedule: { title: "Nuestra Programación", learnMore: "Saber más" },
    ministries: { title: "Nuestros Ministerios", subtitle: "Hay un lugar para que sirvas, crezcas y seas parte.", discover: "Conoce" },
    messages: { title: "Mensajes que Transforman", followInsta: "SÍGUENOS EN INSTAGRAM" },
    donations: { title: "Diezmos y Ofrendas", text: "Tu contribución es parte de lo que Dios hace a través de esta iglesia.", copyPix: "COPIAR CLAVE PIX", copied: "¡Clave copiada!", instructionsTitle: "Instrucciones", instructionsText: "Usa la clave Pix de arriba para realizar tu contribución de forma rápida y segura. ¡Dios te bendiga!" },
    contact: { title: "Contáctanos", talkToUs: "HABLA CON NOSOTROS", followUs: "SÍGUENOS" },
    cta: { title: "Eres bienvenido aquí.", subtitle: "Ven a conocernos y sé parte de nuestra comunidad.", btn1: "QUIERO VISITAR", btn2: "HABLAR POR WHATSAPP" },
    footer: { rights: "Todos los derechos reservados.", madeWith: "Hecho con fe, propósito y excelencia." }
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations['pt'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
