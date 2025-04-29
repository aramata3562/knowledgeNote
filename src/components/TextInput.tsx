import { forwardRef } from "react";

type Props = {
  label: string;
  placeholder?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ label, placeholder, error, ...rest }, ref) => (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        ref={ref}
        placeholder={placeholder}
        className="w-full p-2 border rounded bg-grayScale-0 dark:bg-grayScale-2 text-grayScale-12"
        {...rest}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
);
