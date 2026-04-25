import { AppTitle } from "../../components/AppTitle";

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-65px)]">
      <AppTitle className="text-6xl" />
      <p className="mt-4 text-text-secondary text-lg font-body">
        The classic, reimagined.
      </p>
    </div>
  );
}
