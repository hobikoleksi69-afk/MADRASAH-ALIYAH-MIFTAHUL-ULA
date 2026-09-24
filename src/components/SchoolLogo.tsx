import React from 'react';

interface SchoolLogoProps {
  className?: string;
  showShadow?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({ 
  className = 'w-10 h-10',
  showShadow = true 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}>
      <img
        src="/logo-mam.svg"
        alt="Logo Resmi MA Miftahul 'Ula Nglawak Kertosono"
        className={`w-full h-full object-contain ${showShadow ? 'drop-shadow-sm' : ''}`}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
