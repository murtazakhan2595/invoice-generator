import React from "react";
import { FieldError, useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  required?: boolean;
  className?: string;
}


const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  required = false,
  className = "",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name] as FieldError | undefined;
  return (
    <div
      className={`flex flex-col flex-1 shrink self-stretch my-auto basis-0  ${className} `}
    >
      <label className="text-sm font-medium leading-none text-slate-700">
        {label}
      </label>
      <div
        className={`flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full bg-white rounded-lg shadow-sm border border-[#cfd4dc] focus-within:border-[#7e56d8] ${
          error ? "border-red-500" : ""
        }`}
      >
        <input
          type="text"
          {...register(name, { required })}
          className="flex-1 shrink gap-2 self-stretch my-auto w-full text-base text-gray-900 focus:outline-none"
          aria-label={label}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message || `${label} is required`}
        </p>
      )}
    </div>
  );
};

export default InputField;
