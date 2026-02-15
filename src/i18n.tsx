import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface Translations {
  name: string;
  nav: {
    projects: string;
    about: string;
    contacts: string;
    contactBtn: string;
  };
  hero: {
    experience: string;
    role: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      stats?: string;
    }[];
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contacts: {
    eyebrow: string;
    title: string;
    telegram: string;
    email: string;
    linkedin: string;
    whatsapp: string;
    instagram: string;
    phone: string;
  };
  challenge: {
    title: string;
    description: string;
    placeholder: string;
    submit: string;
    error: string;
    success: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    name: 'Artem Akopian',
    nav: {
      projects: 'Projects',
      about: 'About',
      contacts: 'Contacts',
      contactBtn: 'Contact',
    },
    hero: {
      experience: '5+ years in the game',
      role: 'iOS Developer',
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Projects',
      subtitle: 'Here are just some of the projects.',
      items: [
        {
          title: 'DNS Shop',
          description: 'Digital and home appliance stores.',
          stats: '10M+ downloads, 4.8 rating'
        },
        {
          title: 'Geometry Fitness',
          description: 'Automated fitness clubs'
        },
        {
          title: 'PizzaProsto',
          description: 'Pizza delivery chain'
        },
        {
          title: 'Tokyo',
          description: 'Delivery and restaurant chain'
        },
        {
          title: 'Soglasie',
          description: 'Federal retail chain'
        },
        {
          title: 'Tiger de Cristal',
          description: 'Hotel and Casino'
        },
        {
          title: "Na LAVA'SHE",
          description: 'Fast food cafe chain'
        },
        {
          title: 'TravelOut',
          description: 'Own project, travel agent and visas'
        }
      ]
    },
    about: {
      eyebrow: 'About',
      title: 'About',
      description: 'Senior iOS developer with 5+ years of commercial experience in high-load applications. Full-cycle delivery: requirements analysis, architecture, implementation, release, and support. Strong expertise in custom UI (UIKit + SnapKit), stability, and performance for apps with millions of users.',
    },
    contacts: {
      eyebrow: 'Contact',
      title: 'Contacts',
      telegram: 'Telegram',
      email: 'Email',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      phone: 'Phone',
    },
    challenge: {
      title: 'Swift Challenge',
      description: 'Solve the task to open Instagram',
      placeholder: 'Your answer...',
      submit: 'Check',
      error: 'Wrong! Try again.',
      success: 'Nice to see, but better write me on Telegram',
    },
  },
  ru: {
    name: 'Артём Акопян',
    nav: {
      projects: 'Проекты',
      about: 'Обо мне',
      contacts: 'Контакты',
      contactBtn: 'Связаться',
    },
    hero: {
      experience: 'Более 5 лет в деле',
      role: 'iOS Developer',
    },
    projects: {
      eyebrow: 'Избранные работы',
      title: 'Проекты',
      subtitle: 'Вот лишь некоторые из проектов.',
      items: [
        {
          title: 'DNS Shop',
          description: 'Магазины цифровой и бытовой техники.',
          stats: '10М+ скачиваний, рейтинг 4.8'
        },
        {
          title: 'Геометрия Фитнеса',
          description: 'Автоматизированные фитнес клубы'
        },
        {
          title: 'PizzaProsto',
          description: 'Сеть доставки пиццы'
        },
        {
          title: 'Tokyo',
          description: 'Сеть доставки и ресторанов'
        },
        {
          title: 'Soglasie',
          description: 'Федеральная сеть магазинов'
        },
        {
          title: 'Tiger de Cristal',
          description: 'Отель и Казино'
        },
        {
          title: "Na LAVA'SHE",
          description: 'Сеть кафе быстрого питания'
        },
        {
          title: 'TravelOut',
          description: 'Собственный проект, тревел агент и визы'
        }
      ]
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Обо мне',
      description: 'Senior iOS-разработчик с 5+ годами коммерческого опыта в highload-приложениях. Полный цикл: анализ требований, архитектура, реализация, релиз и сопровождение. Сильная экспертиза в кастомном UI (UIKit + SnapKit), стабильности и производительности приложений с миллионами пользователей.',
    },
    contacts: {
      eyebrow: 'Контакты',
      title: 'Контакты',
      telegram: 'Telegram',
      email: 'Email',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      phone: 'Телефон',
    },
    challenge: {
      title: 'Swift Challenge',
      description: 'Решите задачу, чтобы увидеть Instagram',
      placeholder: 'Ваш ответ...',
      submit: 'Проверить',
      error: 'Неверно! Попробуйте еще раз.',
      success: 'Это приятно видеть, но лучше напиши мне в телеграм',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
