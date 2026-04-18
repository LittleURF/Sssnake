import { useQuery } from "@tanstack/react-query";

export function HomePage() {
  const { data, isPending } = useQuery({
    queryKey: ["greeting"],
    queryFn: () => Promise.resolve({ message: "Hello from TanStack Query!" }),
  });

  return (
    <div className="p-8 space-y-2">
      <h1 className="font-game text-2xl font-bold text-text-primary">Home</h1>
      {isPending ? (
        <p className="text-text-secondary">Loading…</p>
      ) : (
        <p className="text-text-secondary">{data?.message}</p>
      )}
    </div>
  );
}
