import React from 'react';

interface HeroProps {
  onWhatWeDoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWhatWeDoClick }) => {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900">
      <div className="relative min-h-[640px] lg:min-h-[780px] w-full flex items-center">
        {/* Original Maritime Container Port Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/changegi/hero.png"
            alt="Container ship and maritime port cranes"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle measured gradient on right to ensure crisp legibility for white text */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/25 to-black/50" />
        </div>

        {/* Right-Aligned Content matching original composition with institutional typographic precision */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="hidden lg:block lg:col-span-6" />
            <div className="lg:col-span-6 lg:pl-6">
              <div className="w-10 h-[3px] bg-[#F7A600] mb-7" />

              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-[-0.03em] text-white leading-[1.06] mb-10 text-balance">
                The Catalyst for Transformation.
              </h1>

              <p className="text-lg sm:text-[21px] text-white/95 font-normal leading-[1.55] mb-12 max-w-[540px]">
                CHANGE denotes the positive evolution of emerging and frontier markets. We invest in the human spirit&apos;s power to aspire, create, and build.
              </p>

              <div>
                <button
                  onClick={onWhatWeDoClick}
                  className="inline-flex items-center justify-center px-14 py-5 bg-[#F7A600] hover:bg-[#E59800] active:scale-[0.99] text-neutral-950 text-[13px] font-medium uppercase tracking-[0.08em] rounded-full transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  WHAT WE DO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
