import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = ({ children, isLoading = false, ...rest }: Props) => {
  return (
    <button
      className={`bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
        ${isLoading ? "disabled:opacity-75" : ""}
        `}
      type={rest.type ?? "button"}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? "...loading" : children}
    </button>
  );
};
