import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { AppTitle } from "../components/AppTitle";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen bg-bg">
      <header className="bg-bg-surface border-b border-border sticky top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="text-xl  no-underline">
            <AppTitle />
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Your Snake</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to as never}
      className="text-sm font-medium no-underline transition-colors duration-150"
      inactiveProps={{ className: "text-text-secondary" }}
      activeProps={{
        className: "text-accent font-semibold border-b-2 border-accent pb-0.5",
      }}
    >
      {children}
    </Link>
  );
}
