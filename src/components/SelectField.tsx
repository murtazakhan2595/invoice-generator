import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import CustomSelect from "./CustomDropdown";

interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  name: string;
  label: string;
  placeholder: string;
  options: Option[];
  required?: boolean;
  className?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  placeholder,
  options,
  required = false,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required ? `${label} is required` : false }}
      render={({ field }) => (
        <CustomSelect
          {...field}
          label={label}
          placeholder={placeholder}
          options={options}
          required={required}
          className={className}
          error={error}
        />
      )}
    />
  );
};

export default SelectField;
