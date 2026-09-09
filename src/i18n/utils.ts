import pt from './locales/pt.json';
import en from './locales/en.json';

const translations: Record<string, Record<string, any>> = { pt, en };

export const languages: Record<string, string> = {
  pt: 'Português',
  en: 'English',
};

export const langLabels: Record<string, string> = {
  pt: 'PT',
  en: 'EN',
};

export const langHtmlLocale: Record<string, string> = {
  pt: 'pt-BR',
  en: 'en-US',
};

export const defaultLang = 'pt';
export type Lang = 'pt' | 'en';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages && lang !== defaultLang) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: string): any {
    const keys = key.split('.');
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    if (value === undefined) {
      let fallback: any = translations[defaultLang];
      for (const k of keys) {
        fallback = fallback?.[k];
      }
      return fallback ?? key;
    }
    return value;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path || '/';
  return `/${lang}${path}`;
}

export function getPathWithoutLang(pathname: string): string {
  for (const lang of Object.keys(languages)) {
    if (lang !== defaultLang) {
      if (pathname.startsWith(`/${lang}/`)) {
        return pathname.slice(lang.length + 1);
      }
      if (pathname === `/${lang}`) {
        return '/';
      }
    }
  }
  return pathname;
}
