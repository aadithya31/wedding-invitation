import useTranslation from '../i18n/useTranslation';

/**
 * StitchAnimationContainer
 * 
 * A dedicated container for the Stitch animation integration.
 * This component provides a responsive, centered placeholder
 * that can hold an iframe, canvas, or any embedded animation.
 * 
 * INTEGRATION INSTRUCTIONS:
 * 1. Replace the placeholder content below with your Stitch animation
 * 2. The container supports iframe, canvas, or any block-level element
 * 3. CSS ensures the content stays centered and scales responsively
 * 4. The container maintains a 16:9 aspect ratio by default
 */
export default function StitchAnimationContainer() {
    const t = useTranslation();

    return (
        <section className="relative z-10 py-6 md:py-10 w-full">
            <div className="max-w-4xl mx-auto px-4 md:px-6">

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

                {/* ====================================================
            STITCH ANIMATION CONTAINER
            
            This is the integration point for the Stitch animation.
            The surrounding CSS handles iframe or canvas scaling
            so the animation stays centered and responsive.
            
            Supported child elements:
            - <iframe> for embedded web animations
            - <canvas> for WebGL/2D canvas animations
            - Any block-level element
            
            The container maintains a 16:9 aspect ratio and is
            capped at 800px max width for optimal viewing.
            ==================================================== */}
                <div
                    id="StitchAnimationContainer"
                    className="stitch-container content-panel border-2 border-[#996515]/30 rounded-lg overflow-hidden"
                >
                    {/* <!-- STITCH_ANIMATION_PLACEHOLDER --> */}
                    {/* 
            Replace this placeholder with your Stitch animation.
            Example integrations:
            
            For iframe:
            <iframe 
              src="YOUR_STITCH_ANIMATION_URL" 
              title="Wedding Animation"
              allowFullScreen
            />
            
            For canvas:
            <canvas id="stitch-canvas" />
          */}
                    <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 opacity-40">
                        <svg width="60" height="60" viewBox="0 0 80 80" className="mb-4 lotus-animate">
                            <circle cx="40" cy="40" r="5" fill="#996515" />
                            <ellipse cx="40" cy="25" rx="5" ry="12" fill="#996515" opacity="0.4" />
                            <ellipse cx="40" cy="55" rx="5" ry="12" fill="#996515" opacity="0.4" />
                            <ellipse cx="25" cy="40" rx="12" ry="5" fill="#996515" opacity="0.4" />
                            <ellipse cx="55" cy="40" rx="12" ry="5" fill="#996515" opacity="0.4" />
                        </svg>
                        <p className="text-[#996515] font-serif italic text-sm">
                            {t.animationPlaceholder}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
