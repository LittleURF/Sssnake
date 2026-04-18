import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { data, isPending } = useQuery({
    queryKey: ["greeting"],
    queryFn: () => Promise.resolve({ message: "Hello from TanStack Query!" }),
  });

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">Home</h1>
      {isPending ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <p>{data?.message}</p>
      )}
    </div>
  );
}
