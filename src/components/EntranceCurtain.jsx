import { useState, useEffect } from 'react';
import useTranslation from '../i18n/useTranslation';

/**
 * EntranceCurtain — Section A: The Grand Entrance
 * 
 * A high-z-index "Red & Gold" split curtain that slides apart
 * after a brief delay, revealing the wedding invitation beneath.
 * Features Kanchipuram silk zari patterns on the curtain panels.
 */
export default function EntranceCurtain({ onOpen }) {
    const [isOpening, setIsOpening] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);
    const t = useTranslation();

    const handleCurtainOpen = () => {
        setIsOpening(true);
        if (onOpen) onOpen();
        // Remove curtain from DOM after animation completes
        setTimeout(() => {
            setIsRemoved(true);
        }, 1800);
    };

    if (isRemoved) return null;

    return (
        <div className={`curtain-container ${isOpening ? 'curtain-opening' : ''}`}>
            {/* Left curtain panel */}
            <div className="curtain-panel curtain-left" />

            {/* Center ornament — visible before curtains part */}
            <div className="curtain-ornament">
                {/* Decorative Lotus SVG */}
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    className="mx-auto mb-4 lotus-animate"
                    style={{ filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.5))' }}
                >
                    {/* Center circle */}
                    <circle cx="40" cy="40" r="5" fill="#D4AF37" opacity="0.9" />
                    {/* Lotus petals */}
                    <ellipse cx="40" cy="25" rx="6" ry="14" fill="#D4AF37" opacity="0.6" />
                    <ellipse cx="40" cy="55" rx="6" ry="14" fill="#D4AF37" opacity="0.6" />
                    <ellipse cx="25" cy="40" rx="14" ry="6" fill="#D4AF37" opacity="0.6" />
                    <ellipse cx="55" cy="40" rx="14" ry="6" fill="#D4AF37" opacity="0.6" />
                    {/* Diagonal petals */}
                    <ellipse cx="29" cy="29" rx="5" ry="12" fill="#D4AF37" opacity="0.4" transform="rotate(-45, 29, 29)" />
                    <ellipse cx="51" cy="29" rx="5" ry="12" fill="#D4AF37" opacity="0.4" transform="rotate(45, 51, 29)" />
                    <ellipse cx="29" cy="51" rx="5" ry="12" fill="#D4AF37" opacity="0.4" transform="rotate(45, 29, 51)" />
                    <ellipse cx="51" cy="51" rx="5" ry="12" fill="#D4AF37" opacity="0.4" transform="rotate(-45, 51, 51)" />
                </svg>

                <h2>{t.coupleNames}</h2>
                <p>{t.requestPresence}</p>

                <button
                    onClick={handleCurtainOpen}
                    className="mt-8 px-10 py-3 rounded-full bg-gradient-to-r from-[#996515] via-[#D4AF37] to-[#996515] text-[#FDFBF7] font-semibold tracking-widest uppercase text-sm shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 border border-[#D4AF37]/50 cursor-pointer relative overflow-hidden group"
                >
                    <span className="md:hidden">Tap Me</span>
                    <span className="hidden md:inline">Click Me</span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                </button>
            </div>

            {/* Right curtain panel */}
            <div className="curtain-panel curtain-right" />
        </div>
    );
}
