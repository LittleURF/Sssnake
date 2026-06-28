import { twMergeExtended } from "../../lib/tw";

interface AppTitleProps {
  className?: string;
  animated?: boolean;
}

export function AppTitle({ className, animated }: AppTitleProps) {
  return (
    <span
      className={twMergeExtended(
        "font-game font-black text-accent text-glow-accent tracking-widest cursor-default",
        className,
      )}
    >
      <span className={animated ? "animate-snake-slither" : undefined}>🐍</span>{" "}
      SSSNAKES
    </span>
  );
}
