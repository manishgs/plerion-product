import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export const InputText = ({ label, error, ...rest }: Props) => {
  return (
    <div className="mb-4">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-200 focus:border-gray-500"
        } 
             rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white `}
        type={rest.name ?? "text"}
        {...rest}
      />
      {error?.message && (
        <p className="text-red-500 text-xs italic">{error?.message}</p>
      )}
    </div>
  );
};
