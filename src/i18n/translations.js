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
        theWeddingOf: 'Aadi & Poorvi',
        coupleShortNames: 'are tying the knot!!',
        greetingDefault: 'Dear Family & Friends,',
        greetingPrefix: 'Dear',
        greetingSuffix: ',',
        invitationBody: `Love has a strange way of finding you, just when you’re about to lose faith.
After years of never crossing paths, one unexpected conversation changed everything. What began as something random slowly turned into something we couldn’t ignore.
It wasn’t always easy..there were doubts, distance, and moments that almost broke us. But somehow, through it all, one thought stayed… what if it works?
And it did.

Now, with full hearts and a story we never saw coming, we’re choosing each other forever.`,
        saveTheDate: 'Save the Date',
        weddingDate: '3rd May 2026',

        // EventDetails
        eventDetails: 'Event Details',
        eventsList: [
            {
                title: 'Prewedding Reception',
                date: 'May 02, 2026',
                time: '6:00 PM Onwards',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://www.google.com/maps/place/SLR+Convention+Hall/@13.0950027,77.3875793,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae2582cd7950c5:0x4b8152836e8f9439!8m2!3d13.0950027!4d77.3901542!16s%2Fg%2F11b6gghynd?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
            },
            {
                title: 'Wedding',
                date: 'May 03, 2026',
                time: '08:15 AM - 09:30 AM',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://www.google.com/maps/place/SLR+Convention+Hall/@13.0950027,77.3875793,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae2582cd7950c5:0x4b8152836e8f9439!8m2!3d13.0950027!4d77.3901542!16s%2Fg%2F11b6gghynd?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
            },
            {
                title: 'Post Wedding Reception',
                date: 'May 10, 2026',
                time: '5:00 PM Onwards',
                venueArea: 'Kozhikode, Kerala',
                venueName: 'Srushty Residence',
                venueAddress: 'Meppayur, Payyoli, Near 110KV KSEB Substation',
                mapUrl: 'https://www.google.com/maps/dir//Srushty,+GPJ3%2B9XH,+Manhakulam,+Kerala+673523/@11.5181107,75.7029988,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba689000d8a7aa5:0x9026781d5c3cd0!2m2!1d75.7050554!2d11.5309228?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
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
        invitationBody: `ನೀವು ಭರವಸೆ ಕಳೆದುಕೊಳ್ಳುವ ಸಮಯದಲ್ಲಿಯೇ ಪ್ರೀತಿ ನಿಮ್ಮನ್ನು ಹುಡುಕಿಕೊಂಡು ಬರುವ ವಿಚಿತ್ರ ಗುಣವನ್ನು ಹೊಂದಿದೆ.
ವರ್ಷಗಳ ಕಾಲ ಎಂದೂ ಭೇಟಿಯಾಗದಿದ್ದರೂ, ಒಂದು ಅನಿರೀಕ್ಷಿತ ಸಂಭಾಷಣೆ ಎಲ್ಲವನ್ನೂ ಬದಲಾಯಿಸಿತು. ಕಾಕತಾಳೀಯವಾಗಿ ಶುರುವಾದದ್ದು ನಿಧಾನವಾಗಿ ನಾವು ಕಡೆಗಣಿಸಲಾಗದಂತಹ ಬಾಂಧವ್ಯವಾಗಿ ಬೆಳೆಯಿತು.
ಇದು ಯಾವಾಗಲೂ ಸುಲಭವಾಗಿರಲಿಲ್ಲ.. ಅನುಮಾನಗಳು, ದೂರ, ಮತ್ತು ನಮ್ಮನ್ನು ಒಡೆಯುವಂತಹ ಹಲವಾರು ಕ್ಷಣಗಳು ಎದುರಾದವು. ಆದರೆ ಅದನ್ನೆಲ್ಲಾ ಮೀರಿ ಒಂದು ಆಲೋಚನೆ ಮಾತ್ರ ಹಾಗೆಯೇ ಉಳಿಯಿತು... ಇದು ನಮ್ಮಿಬ್ಬರ ನಡುವೆ ಸರಿಹೋದರೆ?
ಮತ್ತು ಅದು ಸರಿಹೋಯಿತು.

ಈಗ, ಪ್ರೀತಿ ತುಂಬಿದ ಹೃದಯಗಳೊಂದಿಗೆ, ನಾವು ಊಹಿಸದ ಕಥೆಯೊಂದಿಗೆ ನಮ್ಮ ಮುಂದಿನ ಜೀವನವನ್ನು ಒಟ್ಟಿಗೆ ಕಳೆಯಲು ನಿರ್ಧರಿಸಿದ್ದೇವೆ.`,
        saveTheDate: 'ದಿನಾಂಕ ನೆನಪಿಡಿ',
        weddingDate: '೩ ಮೇ ೨೦೨೫',

        // EventDetails
        eventDetails: 'ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು',
        eventsList: [
            {
                title: 'Prewedding Reception',
                date: 'May 02, 2026',
                time: '6:00 PM Onwards',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://www.google.com/maps/place/SLR+Convention+Hall/@13.0950027,77.3875793,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae2582cd7950c5:0x4b8152836e8f9439!8m2!3d13.0950027!4d77.3901542!16s%2Fg%2F11b6gghynd?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
            },
            {
                title: 'Wedding',
                date: 'May 03, 2026',
                time: '08:15 AM - 09:30 AM',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://www.google.com/maps/place/SLR+Convention+Hall/@13.0950027,77.3875793,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae2582cd7950c5:0x4b8152836e8f9439!8m2!3d13.0950027!4d77.3901542!16s%2Fg%2F11b6gghynd?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
            },
            {
                title: 'Post Wedding Reception',
                date: 'May 10, 2026',
                time: '5:00 PM Onwards',
                venueArea: 'Kozhikode, Kerala',
                venueName: 'Srushty Residence',
                venueAddress: 'Meppayur, Payyoli, Near 110KV KSEB Substation',
                mapUrl: 'https://www.google.com/maps/dir//Srushty,+GPJ3%2B9XH,+Manhakulam,+Kerala+673523/@11.5181107,75.7029988,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba689000d8a7aa5:0x9026781d5c3cd0!2m2!1d75.7050554!2d11.5309228?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
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
        invitationBody: `പ്രതീക്ഷ നഷ്ടപ്പെടുമെന്ന് തോന്നുമ്പോഴാണ് സ്നേഹം നിങ്ങളെ തേടിയെത്തുന്നത്, അതൊരു വലിയ അത്ഭുതമാണ്.
വർഷങ്ങളോളം പരസ്പരം കാണാതിരുന്നിട്ടും, തികച്ചും അപ്രതീക്ഷിതമായ ഒരു സംസാരം എല്ലാം മാറ്റിമറിച്ചു. വളരെ യാദൃശ്ചികമായി തുടങ്ങിയെങ്കിലും പിന്നീട് ഒഴിവാക്കാൻ കഴിയാത്ത ഒന്നായി അത് മാറി.
എല്ലാം എളുപ്പമായിരുന്നില്ല.. സംശയങ്ങളും അകലങ്ങളും, ഞങ്ങളെ തകർക്കുമെന്ന് തോന്നിയ നിമിഷങ്ങളും ഉണ്ടായിരുന്നു. എന്നാൽ ഇതിലെല്ലാം ഒരു ചിന്ത മാത്രം ബാക്കിയായി... ഇത് വിജയിച്ചാലോ?
അങ്ങനെ അത് സംഭവിച്ചു.

ഇപ്പോൾ, നിറഞ്ഞ ഹൃദയത്തോടെയും ഞങ്ങൾ ഒരിക്കലും പ്രതീക്ഷിക്കാത്ത ഈ കഥയോടെയും, ഞങ്ങൾ എന്നെന്നേക്കുമായി പരസ്പരം തിരഞ്ഞെടുക്കുന്നു.`,
        saveTheDate: 'തീയതി ഓർക്കുക',
        weddingDate: '3 മെയ് 2026',

        // EventDetails
        eventDetails: 'ചടങ്ങ് വിവരങ്ങൾ',
        eventsList: [
            {
                title: 'Prewedding Reception',
                date: 'May 02, 2026',
                time: '6:00 PM Onwards',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://www.google.com/maps/place/SLR+Convention+Hall/@13.0950027,77.3875793,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae2582cd7950c5:0x4b8152836e8f9439!8m2!3d13.0950027!4d77.3901542!16s%2Fg%2F11b6gghynd?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
            },
            {
                title: 'Wedding',
                date: 'May 03, 2026',
                time: '08:15 AM - 09:30 AM',
                venueArea: 'Nelamangala, Bangalore North',
                venueName: 'SLR Conventional Hall',
                venueAddress: 'Tumkur Road, Opposite Anjeneya Statue',
                mapUrl: 'https://www.google.com/maps/place/SLR+Convention+Hall/@13.0950027,77.3875793,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae2582cd7950c5:0x4b8152836e8f9439!8m2!3d13.0950027!4d77.3901542!16s%2Fg%2F11b6gghynd?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
            },
            {
                title: 'Post Wedding Reception',
                date: 'May 10, 2026',
                time: '5:00 PM Onwards',
                venueArea: 'Kozhikode, Kerala',
                venueName: 'Srushty Residence',
                venueAddress: 'Meppayur, Payyoli, Near 110KV KSEB Substation',
                mapUrl: 'https://www.google.com/maps/dir//Srushty,+GPJ3%2B9XH,+Manhakulam,+Kerala+673523/@11.5181107,75.7029988,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba689000d8a7aa5:0x9026781d5c3cd0!2m2!1d75.7050554!2d11.5309228?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D',
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
