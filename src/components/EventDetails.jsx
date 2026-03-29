import useTranslation from '../i18n/useTranslation';

/**
 * EventDetails — Section C: Logistics
 * 
 * Interactive "Map & Muhurtham" section with gold-themed cards.
 * Contains ceremony timing (Muhurtham), venue details, and
 * an interactive map with "Navigate to Venue" CTA.
 */
export default function EventDetails() {
    const t = useTranslation();

    return (
        <section id="ceremony" className="relative z-10 w-full">
            <div className="max-w-5xl mx-auto px-4 md:px-6 pb-10 md:pb-15">

                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16 section-reveal">
                    <div className="flex justify-center items-center gap-4 md:gap-6 mb-4">
                        <div className="w-12 md:w-20 h-[2px] bg-gradient-to-r from-transparent to-[#996515]" />
                        <svg width="32" height="32" viewBox="0 0 40 40" className="opacity-60 lotus-animate">
                            <circle cx="20" cy="20" r="3" fill="#996515" />
                            <ellipse cx="20" cy="12" rx="3" ry="8" fill="#996515" opacity="0.5" />
                            <ellipse cx="20" cy="28" rx="3" ry="8" fill="#996515" opacity="0.5" />
                            <ellipse cx="12" cy="20" rx="8" ry="3" fill="#996515" opacity="0.5" />
                            <ellipse cx="28" cy="20" rx="8" ry="3" fill="#996515" opacity="0.5" />
                        </svg>
                        <div className="w-12 md:w-20 h-[2px] bg-gradient-to-l from-transparent to-[#996515]" />
                    </div>
                    <h2 className="text-[#B22222] font-serif text-3xl md:text-5xl">{t.eventDetails}</h2>
                </div>

                {/* Muhurtham & Venue Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-px bg-[#996515]/50 border-4 md:border-8 border-[#996515]/20 overflow-hidden shadow-2xl section-reveal rounded-lg">

                    {/* Muhurtham Card */}
                    <div className="content-panel p-10 md:p-16 flex flex-col items-center text-center group border-none hover-lift">
                        <div className="mb-6 md:mb-8 rounded-full bg-[#B22222]/10 p-6 md:p-8 group-hover:bg-[#B22222]/20 transition-all border-2 border-[#996515] shadow-xl">
                            {/* Calendar Icon SVG */}
                            <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-14 md:h-14" fill="none">
                                <rect x="6" y="10" width="36" height="32" rx="3" stroke="#B22222" strokeWidth="2.5" fill="none" />
                                <line x1="6" y1="20" x2="42" y2="20" stroke="#B22222" strokeWidth="2" />
                                <line x1="16" y1="6" x2="16" y2="14" stroke="#B22222" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="32" y1="6" x2="32" y2="14" stroke="#B22222" strokeWidth="2.5" strokeLinecap="round" />
                                <text x="24" y="35" textAnchor="middle" fill="#B22222" fontSize="12" fontWeight="bold" fontFamily="serif">24</text>
                            </svg>
                        </div>
                        <h3 className="text-[#B22222] font-serif text-3xl md:text-4xl mb-3 md:mb-4">{t.muhurtham}</h3>
                        <div className="w-16 md:w-20 h-1 bg-[#996515]/60 mb-6 md:mb-8 mx-auto" />
                        <p className="text-[#996515] text-xs uppercase tracking-[0.4em] font-black mb-2 md:mb-3">
                            {t.sundayMorning}
                        </p>
                        <p className="text-slate-900 font-bold text-xl md:text-2xl mb-1">
                            {t.ceremonyTime}
                        </p>
                        <p className="text-slate-700 font-serif text-base md:text-lg">
                            {t.ceremonyDate}
                        </p>
                    </div>

                    {/* Venue Card */}
                    <div className="content-panel p-10 md:p-16 flex flex-col items-center text-center group border-none hover-lift">
                        <div className="mb-6 md:mb-8 rounded-full bg-[#B22222]/10 p-6 md:p-8 group-hover:bg-[#B22222]/20 transition-all border-2 border-[#996515] shadow-xl">
                            {/* Location Pin Icon SVG */}
                            <svg viewBox="0 0 48 48" className="w-10 h-10 md:w-14 md:h-14" fill="none">
                                <path
                                    d="M24 4C16.268 4 10 10.268 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.268 31.732 4 24 4Z"
                                    stroke="#B22222"
                                    strokeWidth="2.5"
                                    fill="none"
                                />
                                <circle cx="24" cy="18" r="5" stroke="#B22222" strokeWidth="2" fill="none" />
                                <circle cx="24" cy="18" r="2" fill="#B22222" />
                            </svg>
                        </div>
                        <h3 className="text-[#B22222] font-serif text-3xl md:text-4xl mb-3 md:mb-4">{t.theVenue}</h3>
                        <div className="w-16 md:w-20 h-1 bg-[#996515]/60 mb-6 md:mb-8 mx-auto" />
                        <p className="text-[#996515] text-xs uppercase tracking-[0.4em] font-black mb-2 md:mb-3">
                            {t.venueArea}
                        </p>
                        <p className="text-slate-900 font-bold text-xl md:text-2xl mb-1">
                            {t.venueName}
                        </p>
                        <p className="text-slate-700 font-serif text-base md:text-lg">
                            {t.venueAddress}
                        </p>
                    </div>
                </div>

                {/* Map Section */}
                <div id="location" className="mt-16 md:mt-20 w-full overflow-hidden border-4 md:border-8 border-white shadow-2xl relative group section-reveal map-zoom-container rounded-lg">
                    {/* Map image with gradient overlay */}
                    <div className="h-72 md:h-96 w-full bg-gradient-to-br from-[#FDFBF7] to-[#f0e6d3] flex items-center justify-center relative">
                        {/* Stylized Map Placeholder with SVG */}
                        <svg viewBox="0 0 400 300" className="w-full h-full opacity-30 absolute inset-0">
                            {/* Road grid */}
                            <line x1="0" y1="150" x2="400" y2="150" stroke="#996515" strokeWidth="3" />
                            <line x1="200" y1="0" x2="200" y2="300" stroke="#996515" strokeWidth="3" />
                            <line x1="0" y1="80" x2="400" y2="80" stroke="#996515" strokeWidth="1" strokeDasharray="5,5" />
                            <line x1="0" y1="220" x2="400" y2="220" stroke="#996515" strokeWidth="1" strokeDasharray="5,5" />
                            <line x1="100" y1="0" x2="100" y2="300" stroke="#996515" strokeWidth="1" strokeDasharray="5,5" />
                            <line x1="300" y1="0" x2="300" y2="300" stroke="#996515" strokeWidth="1" strokeDasharray="5,5" />
                            {/* Buildings */}
                            <rect x="110" y="90" width="30" height="20" fill="#996515" opacity="0.3" rx="2" />
                            <rect x="260" y="160" width="25" height="30" fill="#996515" opacity="0.3" rx="2" />
                            <rect x="150" y="200" width="40" height="15" fill="#996515" opacity="0.3" rx="2" />
                            {/* Trees */}
                            <circle cx="80" cy="120" r="8" fill="#996515" opacity="0.2" />
                            <circle cx="320" cy="100" r="10" fill="#996515" opacity="0.2" />
                            <circle cx="250" cy="250" r="7" fill="#996515" opacity="0.2" />
                        </svg>

                        {/* Location pin at center */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
                            <svg width="40" height="50" viewBox="0 0 40 50" className="drop-shadow-lg">
                                <path d="M20 0C10 0 2 8 2 18C2 30 20 48 20 48S38 30 38 18C38 8 30 0 20 0Z" fill="#B22222" />
                                <circle cx="20" cy="18" r="7" fill="#D4AF37" />
                                <circle cx="20" cy="18" r="3" fill="#FDFBF7" />
                            </svg>
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#B22222]/30 to-transparent pointer-events-none" />
                    </div>

                    {/* Navigate button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <a
                            href="https://maps.google.com/?q=Jaymahal+Road+Bangalore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#B22222] text-[#D4AF37] px-8 md:px-10 py-3 md:py-4 font-bold shadow-2xl border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#B22222] transition-all flex items-center gap-3 md:gap-4 tracking-[0.15em] md:tracking-[0.2em] uppercase text-xs"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            {t.navigateToVenue}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
