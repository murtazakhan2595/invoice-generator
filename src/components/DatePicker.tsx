import React from "react";
import { FieldError, useFormContext } from "react-hook-form";

interface DatePickerProps {
  name: string;
  label: string;
  required?: boolean;
  defaultValue?: string;
  className?: string
}

function DatePicker({
  name,
  label,
  required = false,
  defaultValue = "",
  className,
}: DatePickerProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name] as FieldError | undefined;

  return (
    <div
      className={`flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] ${className}`}
    >
      <label className="text-sm font-medium leading-none text-slate-700">
        {label}
      </label>
      <div className="flex overflow-hidden mt-1.5 w-full bg-white rounded-lg shadow-sm border border-[#cfd4dc] focus-within:border-[#7e56d8]">
        <div className="flex flex-1 shrink gap-2 items-center self-start py-2.5 px-3.5 text-base text-gray-900 whitespace-nowrap basis-3.5 min-w-[240px]">
          <input
            type="date"
            defaultValue={defaultValue}
            {...register(name, {
              required: required ? "This field is required" : false,
            })}
            className="flex-1 shrink gap-2 self-stretch my-auto w-full min-w-[240px] focus:outline-none"
            aria-label={label}
          />
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error.message || `${label} is required`}
        </p>
      )}
    </div>
  );
}

export default DatePicker;
