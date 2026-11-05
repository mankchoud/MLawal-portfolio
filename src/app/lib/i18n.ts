// src/app/lib/i18n.ts
export type L = { en: string; fr: string };

// tr("English text", "Texte français")  -- si identique : tr("Terraform")
export const tr = (en: string, fr: string = en): L => ({ en, fr });

export const pick = (language: string, text: L): string =>
    language === 'fr' ? text.fr : text.en;

export const pickAny = (language: string, value: string | L): string =>
    typeof value === 'string' ? value : pick(language, value);
