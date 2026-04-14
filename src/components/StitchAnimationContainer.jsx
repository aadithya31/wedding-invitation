import { useRef, useEffect } from 'react';
import useTranslation from '../i18n/useTranslation';

// Use Vite's glob import to automatically pull all JPEGs from the corousal folder
const modules = import.meta.glob('../assets/corousal/*.jpeg', { eager: true });
const images = Object.values(modules).map((mod) => mod.default);

export default function StitchAnimationContainer() {
    const t = useTranslation();
    const scrollRef = useRef(null);

    // Auto-scroll logic for the image slider
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                // If reached end, scroll back to start, else scroll to the next slide
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
                }
            }
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const slideLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const slideRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    return (
        <section id="us" className="relative z-10 py-6 md:py-10 w-full">
            <div className="max-w-5xl mx-auto px-4 md:px-6">

                {/* Decorative header */}
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex justify-center items-center gap-4 md:gap-6">
                        <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#996515]" />
                        <span className="text-[#996515] font-serif italic text-sm md:text-base tracking-[0.2em] uppercase">
                            {t.celebration}
                        </span>
                        <div className="w-12 md:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#996515]" />
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative w-full overflow-hidden group">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {images.length > 0 ? images.map((src, index) => (
                            <div key={index} className="flex-none w-full snap-center h-[50vh] md:h-[70vh] flex items-center justify-center">
                                <img
                                    src={src}
                                    alt={`Celebration ${index + 1}`}
                                    className="w-full h-full object-contain rounded-lg drop-shadow-[0_10px_15px_rgba(153,101,21,0.2)]"
                                />
                            </div>
                        )) : (
                            <div className="flex-none w-full snap-center h-[50vh] flex items-center justify-center">
                                <p className="text-[#996515] font-serif italic">{t.animationPlaceholder}</p>
                            </div>
                        )}
                    </div>

                    {/* Navigation controls */}
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FDFBF7]/80 hover:bg-[#D4AF37] text-[#996515] hover:text-white rounded-full p-2 md:p-3 shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
                        onClick={slideLeft}
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FDFBF7]/80 hover:bg-[#D4AF37] text-[#996515] hover:text-white rounded-full p-2 md:p-3 shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10"
                        onClick={slideRight}
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </button>
                </div>

            </div>
        </section>
    );
}
