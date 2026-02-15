import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface Translations {
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
    cardRole: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
  };
  contacts: {
    eyebrow: string;
    title: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      contacts: 'Contacts',
      contactBtn: 'Contact',
    },
    hero: {
      experience: '5+ years of experience',
      role: 'iOS Developer',
    },
    projects: {
      eyebrow: 'Selected work',
      title: 'Projects',
      subtitle: 'Vertical placeholders for iPhone screenshots. Will replace with your real screens later.',
      cardRole: 'Role, stack, measurable impact.',
    },
    about: {
      eyebrow: 'About',
      title: 'Product-oriented iOS development',
      description: 'I focus on mobile products with high UX quality and stable codebase: architecture, performance, clean releases.',
    },
    contacts: {
      eyebrow: 'Contact',
      title: "Let's build together",
    },
  },
  ru: {
    nav: {
      projects: 'Проекты',
      about: 'Обо мне',
      contacts: 'Контакты',
      contactBtn: 'Связаться',
    },
    hero: {
      experience: '5+ лет опыта',
      role: 'iOS Разработчик',
    },
    projects: {
      eyebrow: 'Избранные работы',
      title: 'Проекты',
      subtitle: 'Вертикальные плейсхолдеры под iPhone-скриншоты. Позже заменим на твои реальные экраны.',
      cardRole: 'Роль, стек, измеримый результат.',
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Продуктовая iOS разработка',
      description: 'Я фокусируюсь на мобильных продуктах с высоким качеством UX и стабильной кодовой базой: архитектура, производительность, аккуратные релизы.',
    },
    contacts: {
      eyebrow: 'Контакты',
      title: 'Давайте строить вместе',
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
  const [language, setLanguage] = useState<Language>('ru'); // Default to Russian as per context, or maybe English? Let's start with RU as the user speaks Russian.

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
