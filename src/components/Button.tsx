import type { ButtonHTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";

const variantClasses = {
  primary: "bg-accent text-bg font-semibold hover:bg-accent-dim",
  secondary:
    "bg-bg-elevated text-text-primary border border-border hover:bg-bg-surface",
  danger: "bg-danger text-white hover:opacity-90",
};

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
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
      className={twJoin(
        "inline-flex items-center justify-center rounded font-body cursor-pointer transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed",
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
