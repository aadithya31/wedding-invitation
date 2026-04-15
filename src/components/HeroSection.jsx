import useTranslation from '../i18n/useTranslation';
import groomImg from '../assets/Groom.jpg';
import brideImg from '../assets/Bride.jpeg';

/**
 * HeroSection — Section B: The Card
 * 
 * The ivory silk section with personalized greeting text,
 * traditional serif typography, and Kanchipuram zari embellishments.
 * Contains the main wedding title and Save the Date CTA.
 */
export default function HeroSection({ guestName }) {
    const t = useTranslation();

    // Split the couple's short names to place images above them individually
    const names = (t.coupleShortNames || "").split(' & ');
    // const groomName = names[0] || 'Aadi';
    // const brideName = names[1] || 'Poorvi';

    // Dynamic greeting: personalized name or fallback
    const greeting = guestName
        ? `${t.greetingPrefix} ${guestName}${t.greetingSuffix}`
        : t.greetingDefault;

    // Generate and download a single .ics file with all 3 wedding events
    const saveAllDates = () => {
        const icsContent = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//Aadithya & Poorvika Wedding//EN',
            'CALSCALE:GREGORIAN',
            'METHOD:PUBLISH',
            // Event 1: Prewedding Reception
            'BEGIN:VEVENT',
            'DTSTART:20250502T123000Z',
            'DTEND:20250502T163000Z',
            'SUMMARY:Prewedding Reception – Aadithya & Poorvika',
            'DESCRIPTION:Prewedding Reception of Aadithya & Poorvika. Your presence and blessings are humbly requested.',
            'LOCATION:SLR Conventional Hall\\, Tumkur Road\\, Opposite Anjeneya Statue\\, Nelamangala\\, Bangalore North',
            'STATUS:CONFIRMED',
            'END:VEVENT',
            // Event 2: Wedding Muhurtham
            'BEGIN:VEVENT',
            'DTSTART:20250503T024500Z',
            'DTEND:20250503T040000Z',
            'SUMMARY:Wedding of Aadithya & Poorvika',
            'DESCRIPTION:Muhurtham | The Wedding of Aadithya & Poorvika. Your presence and blessings are humbly requested.',
            'LOCATION:SLR Conventional Hall\\, Tumkur Road\\, Opposite Anjeneya Statue\\, Nelamangala\\, Bangalore North',
            'STATUS:CONFIRMED',
            'END:VEVENT',
            // Event 3: Post Wedding Reception
            'BEGIN:VEVENT',
            'DTSTART:20250504T113000Z',
            'DTEND:20250504T153000Z',
            'SUMMARY:Post Wedding Reception – Aadithya & Poorvika',
            'DESCRIPTION:Post Wedding Reception of Aadithya & Poorvika at Srushty Residence\\, Kozhikode.',
            'LOCATION:Srushty Residence\\, Meppayur\\, Payyoli\\, Near 110KV KSEB Substation\\, Kozhikode\\, Kerala',
            'STATUS:CONFIRMED',
            'END:VEVENT',
            'END:VCALENDAR',
        ].join('\r\n');

        const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        // Navigate to the blob URL so the OS opens it with the calendar app directly
        window.location.href = url;
    };

    return (
        <section id="story" className="z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-15 text-center">

                {/* Decorative "Sacred Union" header */}
                <div className="mb-10 md:mb-14 flex justify-center items-center gap-4 md:gap-8 section-reveal">
                    <div className="w-16 md:w-24 h-[3px] bg-gradient-to-r from-transparent to-[#996515]" />
                    <span className="text-[#996515] bg-[#FDFBF7] px-4 py-1 font-serif italic text-lg md:text-2xl tracking-widest">
                        {t.theSacredUnion}
                    </span>
                    <div className="w-16 md:w-24 h-[3px] bg-gradient-to-l from-transparent to-[#996515]" />
                </div>

                {/* Main invitation card */}
                <div className="mb-12 md:mb-16 w-full max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-16 content-panel border-double border-4 border-[#996515]/40 section-reveal">

                    {/* Wedding title */}
                    <div className="mb-6 md:mb-8">
                        <div className="flex justify-center items-end gap-6 md:gap-12 mb-8 md:mb-12 text-[#996515] italic font-serif font-normal text-4xl md:text-6xl lg:text-7xl">
                            <div className="flex flex-col items-center group">
                                <img src={groomImg} alt="Groom" className="w-28 h-28 md:w-44 md:h-44 object-cover object-top rounded-full border-4 border-[#D4AF37] mb-0 shadow-2xl transition hover:scale-105" />
                            </div>

                            <div className="flex flex-col items-center group">
                                <img src={brideImg} alt="Bride" className="w-28 h-28 md:w-44 md:h-44 object-cover object-top rounded-full border-4 border-[#D4AF37] mb-0 shadow-2xl transition hover:scale-105" />
                            </div>
                        </div>

                        <h1 className="text-[#B22222] font-serif text-4xl md:text-7xl lg:text-8xl mb-6 md:mb-8 leading-tight">
                            {t.theWeddingOf}
                            <span className="italic font-normal block mt-4 md:mt-6 text-[#996515]">
                                {t.coupleShortNames}
                            </span>
                        </h1>
                    </div>

                    {/* Personalized greeting & invitation text */}
                    <div className=" mx-auto border-y-2 border-[#996515]/50 py-8 md:py-12 px-4 md:px-8">
                        <p className="text-[#B22222] text-xl md:text-3xl font-serif leading-relaxed italic mb-6 md:mb-8">
                            {greeting}
                        </p>
                        <p className="text-slate-800 text-base md:text-xl leading-relaxed font-medium mx-auto whitespace-pre-line text-justify">
                            {t.invitationBody}
                        </p>
                    </div>

                    {/* Decorative lotus divider */}
                    <div className="mt-8 flex justify-center items-center gap-6">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#996515]/70" />
                        <svg width="140" height="100" viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Center petal — tall rounded teardrop */}
                            <path d="M50 8 C54 16 56 28 50 40 C44 28 46 16 50 8Z" fill="#996515" />
                            {/* Left inner petal — fans up-left */}
                            <path d="M50 32 C44 26 32 24 26 32 C32 34 42 34 50 32Z" fill="#996515" opacity="0.85" />
                            {/* Right inner petal — fans up-right */}
                            <path d="M50 32 C56 26 68 24 74 32 C68 34 58 34 50 32Z" fill="#996515" opacity="0.85" />
                            {/* Left outer petal — wide, angled */}
                            <path d="M50 36 C40 28 20 30 14 42 C24 38 38 36 50 36Z" fill="#996515" opacity="0.5" />
                            {/* Right outer petal — wide, angled */}
                            <path d="M50 36 C60 28 80 30 86 42 C76 38 62 36 50 36Z" fill="#996515" opacity="0.5" />
                            {/* Sepal / base bowl */}
                            <path d="M30 46 C36 40 44 38 50 40 C56 38 64 40 70 46 C64 50 56 52 50 52 C44 52 36 50 30 46Z" fill="#996515" opacity="0.3" />
                            {/* Gold stamen */}
                            <circle cx="50" cy="34" r="4.5" fill="#D4AF37" />
                            <circle cx="50" cy="34" r="2" fill="#FFF8E7" />
                        </svg>
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#996515]/70" />
                    </div>
                </div>

                {/* CTA Row: Save the Date + Date Card */}
                <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center section-reveal">
                    <button
                        onClick={saveAllDates}
                        className="bg-[#B22222] hover:bg-[#B22222]/90 text-[#FDFBF7] px-10 md:px-16 py-4 md:py-6 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-md border-2 border-[#D4AF37] transition-all shadow-2xl hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
                    >
                        {t.saveTheDate}
                    </button>
                    {/* 
                    <div className="flex flex-col items-center p-4 md:p-6 content-panel border-[#996515]/30">
                        <p className="text-[#B22222] font-serif italic text-2xl md:text-3xl">
                            {t.weddingDate}
                        </p>
                        <div className="h-px w-full bg-[#996515]/50 mt-2" />
                    </div> */}
                </div>
            </div>
        </section>
    );
}
