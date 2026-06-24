import { en } from './en';
import { es } from './es';

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

const translations = { en, es };

export function useTranslations(lang: 'en' | 'es') {
  return translations[lang] ?? translations[defaultLang];
}

export function getLangFromUrl(url: URL): 'en' | 'es' {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as 'en' | 'es';
  return defaultLang;
}
