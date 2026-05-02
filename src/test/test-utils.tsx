import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  render,
  type RenderOptions,
  type RenderResult,
} from "@testing-library/react";
import { useState, type PropsWithChildren, type ReactElement } from "react";

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });
}

function AllTheProviders({ children }: PropsWithChildren) {
  const [queryClient] = useState(createTestQueryClient);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): RenderResult {
  return render(ui, { wrapper: AllTheProviders, ...options });
}
export * from "@testing-library/user-event";
export * from "@testing-library/react";
export { customRender as render };
