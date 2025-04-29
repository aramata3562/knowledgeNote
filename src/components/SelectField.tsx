import { forwardRef } from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  options: Option[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const SelectField = forwardRef<HTMLSelectElement, Props>(
  ({ label, options, ...rest }, ref) => (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <select
        ref={ref}
        className="w-full p-2 border rounded bg-grayScale-0 dark:bg-grayScale-2 text-grayScale-12"
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
);
