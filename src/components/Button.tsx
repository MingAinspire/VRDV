import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className,
  ...props 
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'primary' && [
          'bg-blue-600 text-white',
          'hover:bg-blue-700',
          'focus:ring-blue-500',
          'disabled:bg-blue-300'
        ],
        variant === 'secondary' && [
          'bg-white text-gray-700 border border-gray-300',
          'hover:bg-gray-50',
          'focus:ring-blue-500',
          'disabled:bg-gray-100 disabled:text-gray-400'
        ],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};