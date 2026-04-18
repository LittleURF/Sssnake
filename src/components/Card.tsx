import type { HTMLAttributes } from "react";

// Generic surface card.
// Use elevated={true} for bg-bg-elevated (slightly raised), default is bg-bg-surface.

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
}

export function Card({
  elevated = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-lg border border-border p-6",
        elevated ? "bg-bg-elevated" : "bg-bg-surface",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
