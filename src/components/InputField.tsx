import React from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  className = "",
}) => {
  const variantClass =
    variant === "filled"
      ? "bg-gray-100 border border-gray-300"
      : variant === "ghost"
      ? "border-b border-gray-400 bg-transparent"
      : "border border-gray-400";

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && <label className="font-medium">{label}</label>}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid}
        className={`rounded ${sizeClasses[size]} ${variantClass} ${
          invalid ? "border-red-500" : ""
        } ${disabled ? "bg-gray-200 cursor-not-allowed" : ""} bg-[#ecf0f3] rounded-2xl px-5 py-3 text-gray-700 border border-[#e2e8f0] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] focus:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] hover:shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] outline-none transition-all duration-300 ease-in-out`}
      />
      {helperText && !errorMessage && (
        <span className="text-xs text-gray-500">{helperText}</span>
      )}
      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
