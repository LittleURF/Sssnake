import type { ButtonHTMLAttributes } from "react";
import { twMergeExtended } from "../../lib/tw";

const variantClasses = {
  primary:
    "bg-accent text-bg font-bold border border-accent box-glow-accent hover:bg-accent-dim active:scale-95",
  secondary:
    "bg-transparent text-accent border border-accent/60 hover:border-accent hover:bg-accent/5 active:scale-95",
  danger:
    "bg-danger text-white border border-danger hover:opacity-90 active:scale-95",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-10 py-3.5 text-base",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMergeExtended(
        "inline-flex items-center justify-center font-game uppercase tracking-widest cursor-pointer transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
