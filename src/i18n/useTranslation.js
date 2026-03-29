import { useMemo } from 'react';
import translations from './translations';

/**
 * useTranslation — reads VITE_LANGUAGE from .env and returns
 * the matching translation object.
 *
 * Usage:
 *   const t = useTranslation();
 *   <h1>{t.theWeddingOf}</h1>
 *
 * Supported values: 'en' | 'kn' | 'ml'
 * Falls back to 'en' if unset or unrecognized.
 */
export default function useTranslation() {
    return useMemo(() => {
        const lang = import.meta.env.VITE_LANGUAGE || 'en';
        return translations[lang] || translations.en;
    }, []);
}
