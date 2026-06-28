import { render, screen, within } from "@testing-library/react";
import type { ComponentPropsWithoutRef } from "react";
import { HighscoresPage } from "./HighscoresPage";
import { useHighscoresStore } from "./store/highscoresStore";

vi.mock("framer-motion", () => ({
  motion: {
    li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li {...props}>{children}</li>
    ),
  },
}));

describe("/highscores route", () => {
  beforeEach(() => {
    useHighscoresStore.setState({ highscores: [] });
  });

  it("renders seeded highscores in descending score order", async () => {
    useHighscoresStore.setState({
      highscores: [
        { score: 120, date: "2026-05-01T00:00:00.000Z" },
        { score: 420, date: "2026-05-02T00:00:00.000Z" },
      ],
    });

    render(<HighscoresPage />);

    expect(
      await screen.findByRole("heading", { name: /highscores/i }),
    ).toBeTruthy();

    const items = await screen.findAllByRole("listitem");

    expect(within(items[0]).getByText("420")).toBeTruthy();
    expect(within(items[1]).getByText("120")).toBeTruthy();
  });
});
