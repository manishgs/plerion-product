import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isLoading?: boolean;
}

export const Button = ({ label, isLoading = false, ...rest }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
        ${isLoading ? "disabled:opacity-75" : ""}
        `}
        type={rest.type ?? "button"}
        {...rest}
        disabled={isLoading}
      >
        {isLoading ? "...loading" : label}
      </button>
    </div>
  );
};
