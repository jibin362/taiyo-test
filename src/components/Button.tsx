import { ReactNode } from "react";

type Variant = "Success" | "Danger" | "Warning" | "Primary" | undefined;

interface IButtonProps {
  variant?: Variant;
  onClick: () => void;
  children: ReactNode | string;
  disbaled?: boolean;
}

function getClassName(variant: Variant): string {
  switch (variant) {
    case "Primary":
      return "bg-cyan-900 hover:bg-cyan-700";
    case "Success":
      return "bg-green-900 hover:bg-green-700";
    case "Danger":
      return "bg-red-900 hover:bg-red-700";
    case "Warning":
      return "bg-yellow-900 hover:bg-yellow-700";
    default:
      return "bg-slate-900 hover:bg-slate-700";
  }
}

function Button({
  variant,
  onClick,
  disbaled = false,
  children,
}: IButtonProps) {
  const className = getClassName(variant);

  return (
    <button
      disabled={disbaled}
      onClick={onClick}
      className={`${className} focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto mt-5 disabled:bg-neutral-200 disabled:text-black`}
    >
      {children}
    </button>
  );
}

export default Button;
