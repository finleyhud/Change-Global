import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <Logo className="h-9 sm:h-10" />
        <p className="text-xs text-neutral-500 font-normal">
          © {new Date().getFullYear()} CHANGE Global Investment, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
