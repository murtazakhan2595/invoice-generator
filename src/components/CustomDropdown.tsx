import React, { useState, useRef, useEffect } from "react";
import DownIcon from "../assets/down.svg";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name: string;
  label: string;
  placeholder: string;
  options: Option[];
  required?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  error?:any;
  value?:string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  placeholder,
  options,
  required = false,
  className,
  error,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option.value);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
    useEffect(() => {
      const selected = options.find((option) => option.value === value);
      setSelectedOption(selected || null);
    }, [value, options]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <label className="text-sm font-medium leading-none text-slate-700">
        {label}
      </label>
      <div
        className={`flex items-center cursor-pointer bg-white rounded-lg shadow-sm border border-[#cfd4dc] focus-within:border-[#7e56d8] ${
          error ? "border-red-500" : ""
        }`}
        onClick={toggleDropdown}
      >
        <div className="flex-1 px-3 py-2.5 text-base text-gray-500">
          {selectedOption?.label || placeholder}
        </div>
        <div className="flex items-center px-3 py-2.5">
          <img
            loading="lazy"
            src={DownIcon}
            alt="dropdown icon"
            className="object-contain w-5 h-5"
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-1 bg-white rounded-lg shadow-lg max-h-60 overflow-auto w-full">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-50 hover:font-medium `}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message || `${label} is required`}
        </p>
      )}
    </div>
  );
};

export default CustomSelect;
