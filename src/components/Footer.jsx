import useTranslation from '../i18n/useTranslation';

/**
 * Footer — Kanchipuram Red Footer
 * 
 * Features the zari pattern overlay, gold accents,
 * decorative zari bar elements, and blessing text.
 */
export default function Footer() {
    const t = useTranslation();

    return (
        <footer className="header-zari-overlay w-full min-h-[180px] md:min-h-[220px] flex flex-col items-center justify-center relative border-t-[12px] md:border-t-[20px] border-double border-[#D4AF37]/40 overflow-hidden z-20">

            {/* Background texture overlay */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10 Q70 30 60 50 Q50 30 60 10' fill='%23D4AF37' opacity='0.3'/%3E%3Cpath d='M30 60 Q50 50 60 60 Q50 70 30 60' fill='%23D4AF37' opacity='0.2'/%3E%3Cpath d='M90 60 Q70 50 60 60 Q70 70 90 60' fill='%23D4AF37' opacity='0.2'/%3E%3Cpath d='M60 70 Q70 90 60 110 Q50 90 60 70' fill='%23D4AF37' opacity='0.3'/%3E%3Ccircle cx='60' cy='60' r='4' fill='%23D4AF37' opacity='0.4'/%3E%3C/svg%3E")`,
                    backgroundSize: '120px 120px',
                }}
            />

            {/* Content */}
            <div className="z-10 text-center py-10 md:py-16 max-w-4xl mx-auto w-full">
                {/* Decorative divider with icon */}
                <div className="flex items-center justify-center gap-6 md:gap-8 mb-6 md:mb-8">
                    <div className="h-[2px] w-16 md:w-24 bg-[#D4AF37]/50" />
                    <svg width="40" height="40" viewBox="0 0 50 50" className="text-[#D4AF37] gold-glow">
                        {/* Two intertwined hearts */}
                        <path
                            d="M15 20 C15 14, 25 14, 25 20 C25 28, 15 32, 15 32 C15 32, 5 28, 5 20 C5 14, 15 14, 15 20"
                            fill="#D4AF37"
                            opacity="0.7"
                            transform="translate(8, 5) scale(0.8)"
                        />
                        <path
                            d="M15 20 C15 14, 25 14, 25 20 C25 28, 15 32, 15 32 C15 32, 5 28, 5 20 C5 14, 15 14, 15 20"
                            fill="#D4AF37"
                            opacity="0.7"
                            transform="translate(18, 5) scale(0.8)"
                        />
                    </svg>
                    <div className="h-[2px] w-16 md:w-24 bg-[#D4AF37]/50" />
                </div>

                <p className="text-[#D4AF37] text-xs md:text-base uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold gold-glow px-4">
                    {t.blessingsLine}
                </p>

                <p className="text-[#D4AF37]/50 text-xs mt-4 tracking-widest">
                    {t.madeWithLove}
                </p>
            </div>

            {/* Decorative zari bars at bottom */}
            <div className="absolute bottom-0 w-full flex justify-between px-2 opacity-40">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-6 md:h-8 bg-[#D4AF37]" />
                ))}
            </div>
        </footer>
    );
}
