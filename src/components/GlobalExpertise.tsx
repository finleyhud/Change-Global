import React from 'react';

export const GlobalExpertise: React.FC = () => {
  return (
    <section id="global-expertise" className="py-24 lg:py-36 bg-white border-b border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Institutional Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="w-8 h-[2px] bg-[#EA580C] mb-6" />
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 mb-3">
              01 · Institutional Mandate
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-[-0.025em] text-neutral-900 leading-[1.15] mb-8 text-balance">
              Global Expertise, Local Roots
            </h2>

            <div className="space-y-5 text-base sm:text-[17px] text-neutral-700 font-normal leading-[1.65] max-w-[480px]">
              <p>
                CHANGE Global Investment is an asset management firm focused on uncovering pricing inefficiencies in the developing world.
              </p>
              <p>
                We manage public equity strategies for pension funds, foundations, and family offices worldwide.
              </p>
            </div>
          </div>

          {/* Right Column: Original Waterfront Skyline Photograph */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden bg-neutral-100">
              <img
                src="/assets/changegi/skyline.jpg"
                alt="Waterfront skyline at sunset"
                className="w-full h-[520px] sm:h-[680px] lg:h-[760px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
