import { useState } from 'react';
import useTranslation from '../i18n/useTranslation';

/**
 * Header — Kanchipuram Red Navigation Bar
 * 
 * Features the zari pattern overlay, gold navigation links,
 * active section highlighting, and mobile hamburger menu.
 */
export default function Header({ activeSection }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t = useTranslation();

    const navItems = [
        { id: 'story', label: t.navOurStory, href: '#story' },
        { id: 'us', label: 'Us', href: '#us' },
        { id: 'ceremony', label: t.navCeremony, href: '#ceremony' },
        // { id: 'location', label: t.navLocation, href: '#location' },
    ];

    const scrollTo = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <header className="header-zari-overlay relative z-30 pallu-accent px-6 md:px-12 py-8 md:py-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo & Title */}
                    <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
                        <div className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center">
                            {/* Vite Logo */}
                            <img src="/vite.svg" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <h2
                            className="text-[#D4AF37] text-lg md:text-3xl font-serif font-bold leading-tight tracking-[0.05em] md:tracking-[0.15em] uppercase gold-glow truncate"
                        >
                            {t.coupleNames}
                        </h2>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex flex-1 justify-end gap-10">
                        <nav className="flex items-center gap-10">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    onClick={(e) => scrollTo(e, item.href)}
                                    className={`text-sm font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${activeSection === item.id
                                        ? 'text-white'
                                        : 'text-[#D4AF37]/90 hover:text-white'
                                        }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <span className="block h-[2px] bg-[#D4AF37] mt-1 rounded-full" />
                                    )}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#D4AF37] p-2"
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
                            <rect y="3" width="24" height="2.5" rx="1" />
                            <rect y="10.5" width="24" height="2.5" rx="1" />
                            <rect y="18" width="24" height="2.5" rx="1" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <button
                    className="absolute top-6 right-6 text-[#D4AF37] text-4xl"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>

                {/* Decorative Logo */}
                <img src="/vite.svg" alt="App Logo" className="w-16 h-16 lotus-animate mb-2 opacity-80 object-contain" />

                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => scrollTo(e, item.href)}
                        className="text-[#D4AF37] text-2xl font-serif font-bold uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                        {item.label}
                    </a>
                ))}


            </div>
        </>
    );
}
