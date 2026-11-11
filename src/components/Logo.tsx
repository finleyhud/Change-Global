import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <img
      src="/assets/aistudio/image_f4c070d2.png"
      alt="CHANGE Global Investment LLC - Emerging and Frontier Markets"
      className={`h-11 sm:h-12 w-auto object-contain select-none ${className}`}
      referrerPolicy="no-referrer"
    />
  );
};
