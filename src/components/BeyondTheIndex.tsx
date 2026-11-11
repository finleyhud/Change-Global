import React from 'react';

export const BeyondTheIndex: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Original Wind Turbines Landscape Photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="overflow-hidden bg-neutral-100">
              <img
                src="/assets/changegi/wind_turbines.png"
                alt="Wind turbines overlooking a developing community"
                className="w-full h-[520px] sm:h-[680px] lg:h-[760px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Institutional Editorial Copy */}
          <div className="lg:col-span-6 lg:pl-12 order-1 lg:order-2 flex flex-col justify-center">
            <div className="w-8 h-[2px] bg-[#EA580C] mb-6" />
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400 mb-3">
              02 · On-The-Ground Fluency
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-[-0.025em] text-neutral-900 leading-[1.15] mb-8 text-balance">
              Beyond the Index
            </h2>

            <div className="space-y-5 text-base sm:text-[17px] text-neutral-700 font-normal leading-[1.65] max-w-[480px]">
              <p>
                Our team was born and raised in the markets we invest in. This firsthand experience provides a cultural fluency that index-based vehicles simply cannot match.
              </p>
              <p>
                We don&apos;t just analyze markets; we understand the people behind the growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
