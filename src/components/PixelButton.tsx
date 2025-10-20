import { ReactNode } from 'react';

interface PixelButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

export default function PixelButton({ children, variant = 'primary', onClick, className = '' }: PixelButtonProps) {
  const baseStyles = "pixel-text text-xs sm:text-sm px-8 py-4 border-4 border-pixel-black transition-all duration-100 hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 cursor-pointer pixel-shadow hover:shadow-none";

  const variantStyles = {
    primary: "bg-pixel-yellow text-pixel-black",
    secondary: "bg-pixel-cyan text-pixel-black"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
