import {
  createRootRouteWithContext,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { AppTitle } from "../components/AppTitle";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isGameActive = pathname === "/game";

  return (
    <div className="min-h-screen bg-bg">
      <main className="flex flex-col items-center pt-[clamp(16px,10vh,128px)]">
        <Link to="/">
          <AppTitle
            className="text-6xl cursor-pointer"
            animated={isGameActive}
          />
        </Link>
        <p className="mt-4 text-text-secondary text-lg font-body">
          The classic, reimagined.
        </p>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </div>
  );
}
