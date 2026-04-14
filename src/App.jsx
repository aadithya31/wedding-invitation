import { useState, useEffect, useCallback, useRef } from 'react';
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
  const [isMuted, setIsMuted] = useState(false);
  const [hasStartedMusic, setHasStartedMusic] = useState(false);
  const audioRef = useRef(null);

  // Parse ?name= URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name && name.trim()) {
      setGuestName(decodeURIComponent(name.trim()));
    }
  }, []);

  // Background music setup
  useEffect(() => {
    const audio = new Audio('/love.mpeg');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const handleStartMusic = useCallback(() => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(() => { });
      setHasStartedMusic(true);
    }
  }, []);

  // Handle tab visibility (pause when away, resume when back)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!audioRef.current || !hasStartedMusic) return;

      if (document.hidden) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [hasStartedMusic]);

  // Intersection Observer for active section tracking & reveal animations
  const setupObservers = useCallback(() => {
    // 1. Active section observer (for nav highlighting)
    const sectionIds = ['story', 'us', 'ceremony', 'location'];
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
      <EntranceCurtain onOpen={handleStartMusic} />

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

      {/* Floating Music Toggle */}
      <button
        onClick={() => {
          if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted;
            setIsMuted(!isMuted);
          }
        }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#B22222] border-2 border-[#D4AF37] shadow-xl flex items-center justify-center text-[#D4AF37] hover:bg-[#B22222]/90 transition-all hover:scale-110"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M16.5 12A4.5 4.5 0 0014 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-3.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </button>
    </>
  );
}
