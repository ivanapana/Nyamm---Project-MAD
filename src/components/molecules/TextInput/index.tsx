import React from 'react';

interface TextInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  onTogglePassword?: () => void;
}

const TextInput: React.FC<TextInputProps> = ({ 
  label, 
  type = 'text', 
  placeholder, 
  value, 
  onChange,
  icon,
  showPasswordToggle = false,
  onTogglePassword
}) => {
  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-medium mb-2 text-sm">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-[#FDB022] focus:outline-none text-gray-700 transition-colors"
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default TextInput;