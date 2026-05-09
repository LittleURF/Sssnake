import { createContext, type ReactNode } from "react";

// Unused example of a compound component
const PairingContext = createContext<{
  status: "preparing" | "pairing" | "finished";
}>({
  status: "preparing",
});

export function Pairing({ children }: { children: ReactNode }) {
  return (
    <PairingContext value={{ status: "preparing" }}>{children}</PairingContext>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <span className="font-bold">{children}</span>;
}

function Description({ children }: { children: ReactNode }) {
  return <span className="font-light">{children}</span>;
}

function Footer({ children }: { children: ReactNode }) {
  return <div className="border-t-2 border-solid border-black">{children}</div>;
}

function Buttons({ children }: { children: ReactNode }) {
  return <div className="flex">{children}</div>;
}

function Button({ children, ...props }: { children: ReactNode }) {
  return <button {...props}>{children}</button>;
}

Pairing.Title = Title;
Pairing.Description = Description;
Pairing.Footer = Footer;
Pairing.Buttons = Buttons;
Pairing.Button = Button;
