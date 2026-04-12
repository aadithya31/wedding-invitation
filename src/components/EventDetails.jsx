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

                {/* Events Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 section-reveal">
                    {t.eventsList?.map((event, index) => (
                        <div key={index} className="content-panel p-8 md:p-10 flex flex-col items-center text-center group border-2 border-[#996515]/30 hover-lift rounded-lg bg-[#FDFBF7]/90 shadow-xl">
                            {/* Icon Container */}
                            <div className="mb-6 rounded-full bg-[#B22222]/10 p-5 group-hover:bg-[#B22222]/20 transition-all border border-[#996515] shadow-md flex items-center justify-center">
                                {/* Multi-event bell/temple icon */}
                                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#B22222]" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                </svg>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-[#B22222] font-serif text-2xl md:text-3xl mb-3">{event.title}</h3>
                            <div className="w-12 h-[2px] bg-[#996515]/60 mb-5 mx-auto" />
                            
                            {/* Date & Time */}
                            <p className="text-[#996515] text-xs uppercase tracking-[0.2em] font-black mb-1">
                                {event.date}
                            </p>
                            <p className="text-slate-900 font-bold text-lg mb-6">
                                {event.time}
                            </p>
                            
                            {/* Venue */}
                            <div className="flex-grow flex flex-col justify-center">
                                <p className="text-slate-900 font-bold text-md mb-1">
                                    {event.venueName}
                                </p>
                                <p className="text-slate-600 font-serif text-sm">
                                    {event.venueAddress}
                                </p>
                                <p className="text-[#996515] font-medium text-sm mt-1 mb-6">
                                    {event.venueArea}
                                </p>
                            </div>
                            
                            {/* Navigate Button */}
                            <a
                                href={event.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full mt-auto bg-transparent border border-[#B22222] text-[#B22222] px-4 py-3 font-bold hover:bg-[#B22222] hover:text-[#FDFBF7] transition-all flex items-center justify-center gap-2 tracking-widest uppercase text-xs"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                </svg>
                                {t.navigateToVenue}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
