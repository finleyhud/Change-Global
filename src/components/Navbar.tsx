import React from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200/70">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 h-24 flex items-center justify-between gap-8">
        {/* Original Brand Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Non-clickable Navigation Items (Home Page Mockup Only) */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-9 text-[15px] font-normal tracking-[-0.01em] text-neutral-900 select-none">
          <span className="underline underline-offset-[6px] decoration-1 cursor-default whitespace-nowrap shrink-0">
            Home
          </span>
          <span className="text-neutral-700 cursor-default whitespace-nowrap shrink-0">
            How We Invest
          </span>
          <span className="text-neutral-700 cursor-default whitespace-nowrap shrink-0">
            Who We Are
          </span>
          <span className="text-neutral-700 cursor-default whitespace-nowrap shrink-0">
            Contact
          </span>
        </nav>
      </div>
    </header>
  );
};
