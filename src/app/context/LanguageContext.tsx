"use client";
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('fr');

    useEffect(() => {
        try {
            const saved = localStorage.getItem('lang');
            // Lecture volontaire après l'hydratation : évite un écart serveur/client sur la langue
            // eslint-disable-next-line react-hooks/set-state-in-effect
            if (saved === 'fr' || saved === 'en') setLanguage(saved);
        } catch {}
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const next: Language = prev === 'fr' ? 'en' : 'fr';
            try { localStorage.setItem('lang', next); } catch {}
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
