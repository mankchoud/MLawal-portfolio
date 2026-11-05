// src/app/components/LanguageToggle.tsx
"use client";
import { useLanguage } from "../context/LanguageContext";

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-semibold rounded-full bg-black/30 text-white border border-white/20 backdrop-blur-sm"
        >
            {language === 'fr' ? 'Switch to EN' : 'Passer en FR'}
        </button>
    );
};