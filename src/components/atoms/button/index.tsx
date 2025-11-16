import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const baseStyle = 'w-full py-4 rounded-2xl font-semibold text-base transition-all';
  const variants = {
    primary: 'bg-[#FDB022] text-white hover:bg-[#E69F1F]',
    secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;