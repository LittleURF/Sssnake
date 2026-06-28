import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold">About</h1>
      <p>This app uses TanStack Router and TanStack Query.</p>
    </div>
  );
}
