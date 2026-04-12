/**
 * translations.js — Multi-language text dictionary
 *
 * Supported languages:
 *   en — English
 *   kn — Kannada (ಕನ್ನಡ)
 *   ml — Malayalam (മലയാളം)
 *
 * Set VITE_LANGUAGE in .env to switch languages.
 */

const translations = {
    en: {
        // EntranceCurtain
        coupleNames: 'Aadithya & Poorvika',
        requestPresence: 'Request your gracious presence',

        // Header
        navOurStory: 'Our Story',
        navCeremony: 'Ceremony',
        navLocation: 'Location',


        // HeroSection
        theSacredUnion: 'The Sacred Union',
        theWeddingOf: 'The Wedding of',
        coupleShortNames: 'Aadi & Poorvi',
        greetingDefault: 'Dear Family & Friends,',
        greetingPrefix: 'Dear',
        greetingSuffix: ',',
        invitationBody:
            'With hearts full of love and joy, we cordially invite your esteemed presence along with your family to grace our wedding. Your blessings and presence would make our celebration truly complete as we begin this beautiful new journey together.',
        saveTheDate: 'Save the Date',
        weddingDate: '3rd May 2025',

        // EventDetails
        eventDetails: 'Event Details',
        eventsList: [
            {
                title: 'Prewedding Reception',
                date: 'May 02, 2025',
                time: '6:00 PM Onwards',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://share.google/LjcEuOHejNRFg5Tkn',
            },
            {
                title: 'Wedding',
                date: 'May 03, 2025',
                time: '08:15 AM - 09:30 AM',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://share.google/LjcEuOHejNRFg5Tkn',
            },
            {
                title: 'Post Wedding Reception',
                date: 'May 04, 2025',
                time: '5:00 PM Onwards',
                venueArea: 'Kozhikode, Kerala',
                venueName: 'Srushty Residence',
                venueAddress: 'Meppayur, Payyoli, Near 110KV KSEB Substation',
                mapUrl: 'https://share.google/GWWk075M33qyUuUyo',
            }
        ],
        navigateToVenue: 'Navigate to Venue',

        // StitchAnimationContainer
        celebration: 'Celebration',
        animationPlaceholder: 'Animation will appear here',

        // Footer
        blessingsLine: 'Blessings Only • Aadithya & Poorvika • 2023',
        madeWithLove: 'Made with love in the tradition of Kanchipuram silk',
    },

    kn: {
        // EntranceCurtain
        coupleNames: 'ಆದಿತ್ಯ & ಪೂರ್ವಿಕಾ',
        requestPresence: 'ನಿಮ್ಮ ಆಶೀರ್ವಾದದ ಉಪಸ್ಥಿತಿಯನ್ನು ಕೋರುತ್ತೇವೆ',

        // Header
        navOurStory: 'ನಮ್ಮ ಕಥೆ',
        navCeremony: 'ಮುಹೂರ್ತ',
        navLocation: 'ಸ್ಥಳ',


        // HeroSection
        theSacredUnion: 'ಪವಿತ್ರ ಬಂಧನ',
        theWeddingOf: 'ವಿವಾಹ ಮಹೋತ್ಸವ',
        coupleShortNames: 'ಆದಿ & ಪೂರ್ವಿ',
        greetingDefault: 'ಆತ್ಮೀಯ ಕುಟುಂಬ & ಸ್ನೇಹಿತರೇ,',
        greetingPrefix: 'ಆತ್ಮೀಯ',
        greetingSuffix: ',',
        invitationBody:
            'ಪ್ರೀತಿ ಮತ್ತು ಸಂತೋಷದ ತುಂಬಿದ ಹೃದಯದಿಂದ, ನಮ್ಮ ವಿವಾಹಕ್ಕೆ ನಿಮ್ಮನ್ನು ಮತ್ತು ನಿಮ್ಮ ಕುಟುಂಬವನ್ನು ಗೌರವಪೂರ್ವಕವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ. ನಾವು ಈ ಸುಂದರ ಹೊಸ ಜೀವನದ ಪಯಣವನ್ನು ಪ್ರಾರಂಭಿಸಿದಾಗ ನಿಮ್ಮ ಆಶೀರ್ವಾದ ಮತ್ತು ಉಪಸ್ಥಿತಿಯು ಈ ಸಂಭ್ರಮವನ್ನು ಪೂರ್ಣಗೊಳಿಸುತ್ತದೆ.',
        saveTheDate: 'ದಿನಾಂಕ ನೆನಪಿಡಿ',
        weddingDate: '೩ ಮೇ ೨೦೨೫',

        // EventDetails
        eventDetails: 'ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು',
        eventsList: [
            {
                title: 'Prewedding Reception',
                date: 'May 02, 2025',
                time: '6:00 PM Onwards',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://share.google/LjcEuOHejNRFg5Tkn',
            },
            {
                title: 'Wedding',
                date: 'May 03, 2025',
                time: '08:15 AM - 09:30 AM',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'hhttps://share.google/LjcEuOHejNRFg5Tkn',
            },
            {
                title: 'Post Wedding Reception',
                date: 'May 04, 2025',
                time: '5:00 PM Onwards',
                venueArea: 'Kozhikode, Kerala',
                venueName: 'Srushty Residence',
                venueAddress: 'Meppayur, Payyoli, Near 110KV KSEB Substation',
                mapUrl: 'https://share.google/GWWk075M33qyUuUyo',
            }
        ],
        navigateToVenue: 'ಸ್ಥಳಕ್ಕೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ',

        // StitchAnimationContainer
        celebration: 'ಸಂಭ್ರಮ',
        animationPlaceholder: 'ಅನಿಮೇಶನ್ ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ',

        // Footer
        blessingsLine: 'ಆಶೀರ್ವಾದ ಮಾತ್ರ • ಆದಿತ್ಯ & ಪೂರ್ವಿಕಾ • ೨೦೨೩',
        madeWithLove: 'ಕಾಂಚೀಪುರಂ ರೇಷ್ಮೆಯ ಸಂಪ್ರದಾಯದಲ್ಲಿ ಪ್ರೀತಿಯಿಂದ ರಚಿಸಲಾಗಿದೆ',
    },

    ml: {
        // EntranceCurtain
        coupleNames: 'ആദിത്യ & പൂർവ്വിക',
        requestPresence: 'നിങ്ങളുടെ സാന്നിധ്യം അഭ്യർത്ഥിക്കുന്നു',

        // Header
        navOurStory: 'ഞങ്ങളുടെ കഥ',
        navCeremony: 'മുഹൂർത്തം',
        navLocation: 'സ്ഥലം',


        // HeroSection
        theSacredUnion: 'പവിത്ര ബന്ധനം',
        theWeddingOf: 'വിവാഹ മഹോത്സവം',
        coupleShortNames: 'ആദി & പൂർവ്വി',
        greetingDefault: 'പ്രിയ കുടുംബാംഗങ്ങളും സുഹൃത്തുക്കളും,',
        greetingPrefix: 'പ്രിയ',
        greetingSuffix: ',',
        invitationBody:
            'സ്നേഹവും സന്തോഷവും നിറഞ്ഞ ഹൃദയത്തോടെ, ഞങ്ങളുടെ വിവാഹത്തിലേക്ക് നിങ്ങളെയും കുടുംബത്തെയും ഞങ്ങൾ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു. ഞങ്ങൾ ഈ മനോഹരമായ പുതിയ ജീവിതയാത്ര ആരംഭിക്കുമ്പോൾ നിങ്ങളുടെ സാന്നിധ്യവും അനുഗ്രഹങ്ങളും ഈ ആഘോഷത്തെ പൂർണ്ണമാക്കും.',
        saveTheDate: 'തീയതി ഓർക്കുക',
        weddingDate: '3 മെയ് 2025',

        // EventDetails
        eventDetails: 'ചടങ്ങ് വിവരങ്ങൾ',
        eventsList: [
            {
                title: 'Prewedding Reception',
                date: 'May 02, 2025',
                time: '6:00 PM Onwards',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://maps.google.com/?q=SLR+Conventional+Hall+Nelamangala',
            },
            {
                title: 'Wedding',
                date: 'May 03, 2025',
                time: '08:15 AM - 09:30 AM',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://maps.google.com/?q=SLR+Conventional+Hall+Nelamangala',
            },
            {
                title: 'Post Wedding Reception',
                date: 'May 04, 2025',
                time: '5:00 PM Onwards',
                venueArea: 'Kozhikode, Kerala',
                venueName: 'Srushty Residence',
                venueAddress: 'Meppayur, Payyoli, Near 110KV KSEB Substation',
                mapUrl: 'https://maps.google.com/?q=Meppayur+Payyoli+Kerala',
            }
        ],
        navigateToVenue: 'വേദിയിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക',

        // StitchAnimationContainer
        celebration: 'ആഘോഷം',
        animationPlaceholder: 'ആനിമേഷൻ ഇവിടെ ദൃശ്യമാകും',

        // Footer
        blessingsLine: 'അനുഗ്രഹങ്ങൾ മാത്രം • ആദിത്യ & പൂർവ്വിക • 2023',
        madeWithLove: 'കാഞ്ചീപുരം പട്ടിന്റെ പാരമ്പര്യത്തിൽ സ്നേഹത്തോടെ നിർമ്മിച്ചത്',
    },
};

export default translations;
