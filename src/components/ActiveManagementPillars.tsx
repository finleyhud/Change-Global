import React from 'react';
import { INVESTMENT_PILLARS } from '../data/mockData';

export const ActiveManagementPillars: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#EBEBEB] border-t border-b border-neutral-200/80">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Heading matching original color treatment */}
        <div className="mb-16">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500 mb-3">
            03 · Investment Discipline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-[-0.025em] text-neutral-950 leading-[1.15]">
            Active Management.{' '}
            <span className="text-[#EA580C]">Proven Vision.</span>
          </h2>
        </div>

        {/* 3-Column Horizontal Image + Text Layout with Institutional Hairline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {INVESTMENT_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="border-t border-neutral-300 pt-8 flex items-start gap-6"
            >
              {/* Left Thumbnail Image */}
              <div className="w-[155px] sm:w-[175px] aspect-4/5 shrink-0 overflow-hidden bg-neutral-200">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Text Block */}
              <div className="flex flex-col pt-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#EA580C] mb-2">
                  {pillar.index}
                </span>
                <h3 className="text-[15px] font-bold text-neutral-900 mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-neutral-700 font-normal leading-[1.55]">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
