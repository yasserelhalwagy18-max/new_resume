import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language } from '../../data';
import { Direction, defaultLanguage, getDirection } from '../../lib/i18n';

interface DirectionContextValue {
  locale: Language;
  direction: Direction;
  toggleLanguage: () => void;
}

const DirectionContext = createContext<DirectionContextValue | undefined>(undefined);

interface DirectionProviderProps {
  children: ReactNode;
}

const LOCALE_STORAGE_KEY = 'app_locale';

export function DirectionProvider({ children }: DirectionProviderProps) {
  const [locale, setLocale] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored === 'en' || stored === 'fa') {
        return stored;
      }
    } catch (e) {
      console.error('Failed to read locale from localStorage', e);
    }
    return defaultLanguage;
  });

  const direction = getDirection(locale);

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = locale;

    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch (e) {
      console.error('Failed to save locale to localStorage', e);
    }
  }, [locale, direction]);

  const toggleLanguage = () => {
    setLocale((prev) => (prev === 'fa' ? 'en' : 'fa'));
  };

  return (
    <DirectionContext.Provider value={{ locale, direction, toggleLanguage }}>
      {children}
    </DirectionContext.Provider>
  );
}

export function useDirection() {
  const context = useContext(DirectionContext);
  if (context === undefined) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
}
