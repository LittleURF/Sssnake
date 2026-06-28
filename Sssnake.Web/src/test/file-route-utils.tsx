import React from "react";
import { render, type RenderOptions } from "@testing-library/react";
import {
  createRouter,
  RouterProvider,
  createMemoryHistory,
} from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "../routeTree.gen";
import { QueryClient } from "@tanstack/react-query";

// Create test router with generated route tree
export function createTestRouterFromFiles(initialLocation = "/") {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialLocation],
    }),
    context: {
      queryClient: new QueryClient(),
    },
  });

  return router;
}

// Custom render function for file-based routes
interface RenderWithFileRoutesOptions extends Omit<RenderOptions, "wrapper"> {
  initialLocation?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  routerContext?: any;
}

export function renderWithFileRoutes(
  ui: React.ReactElement,
  {
    initialLocation = "/",
    routerContext = {},
    ...renderOptions
  }: RenderWithFileRoutesOptions = {},
) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialLocation],
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    context: routerContext,
  });

  // eslint-disable-next-line react-x/component-hook-factories
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <RouterProvider router={router}>{children}</RouterProvider>;
  }

  return {
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    router,
  };
}

// Helper to test specific file routes
export function createMockFileRoute(
  path: string,
  component: React.ComponentType,
) {
  // This is useful for isolated testing when you don't want to use the full route tree
  return {
    path,
    component,
    // Add other common route properties as needed
  };
}
