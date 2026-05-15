import { Language } from '../data';

export type Direction = 'rtl' | 'ltr';

export const defaultLanguage: Language = 'fa';

export const getDirection = (lang: Language): Direction => {
  return lang === 'fa' ? 'rtl' : 'ltr';
};
