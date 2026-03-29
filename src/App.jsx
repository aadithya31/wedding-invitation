import { useState, useEffect, useCallback } from 'react';
import EntranceCurtain from './components/EntranceCurtain';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import EventDetails from './components/EventDetails';
import StitchAnimationContainer from './components/StitchAnimationContainer';
import Footer from './components/Footer';

/**
 * App — Root Component
 * 
 * Manages:
 * - URL parameter parsing for personalized greeting
 * - Intersection Observer for active section tracking
 * - Section reveal animations on scroll
 * - Overall layout with Kanchipuram silk framing
 */
export default function App() {
  const [activeSection, setActiveSection] = useState('story');
  const [guestName, setGuestName] = useState(null);

  // Parse ?name= URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name && name.trim()) {
      setGuestName(decodeURIComponent(name.trim()));
    }
  }, []);

  // Intersection Observer for active section tracking & reveal animations
  const setupObservers = useCallback(() => {
    // 1. Active section observer (for nav highlighting)
    const sectionIds = ['story', 'ceremony', 'location'];
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // 2. Reveal animation observer (for scroll-triggered fade-ins)
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.section-reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is rendered
    const timer = setTimeout(setupObservers, 500);
    return () => clearTimeout(timer);
  }, [setupObservers]);

  return (
    <>
      {/* Section A: The Entrance — Animated Curtain */}
      <EntranceCurtain />

      {/* Main Application — Wrapped in Zari Border Frame */}
      <div className="flex min-h-screen w-full mx-auto flex-col p-0 zari-border-outer">
        <div className="flex h-full grow flex-col bg-[#FDFBF7] relative zari-creeper-pattern-dense shadow-2xl overflow-hidden">

          {/* Header — Kanchipuram Red Navigation */}
          <Header activeSection={activeSection} />

          {/* Main Content Area */}
          <main className="flex-1 relative z-10">

            {/* Section B: The Card — Personalized Invitation */}
            <HeroSection guestName={guestName} />

            {/* Stitch Animation Integration Point */}
            <StitchAnimationContainer />

            {/* Section C: Logistics — Muhurtham, Venue, Map */}
            <EventDetails />

          </main>

          {/* Footer — Kanchipuram Red with Gold Accents */}
          <Footer />
        </div>
      </div>
    </>
  );
}
