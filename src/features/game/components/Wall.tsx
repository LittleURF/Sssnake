export function Wall() {
  return (
    <div className="relative w-full h-full bg-amber-900 overflow-hidden">
      {/* dirt texture — 2×2 offset patches */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5">
        <div className="rounded-sm bg-amber-800/70" />
        <div className="rounded-sm bg-amber-950/70" />
        <div className="rounded-sm bg-amber-950/70" />
        <div className="rounded-sm bg-amber-800/70" />
      </div>
    </div>
  );
}
