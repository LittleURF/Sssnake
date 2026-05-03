import { AppTitle } from "./AppTitle";
import { render, screen, userEvent } from "../../test/test-utils";
describe("AppTitle", () => {
  it("displays SSSNAKES", () => {
    render(<AppTitle />);

    expect(screen.getByText(/SSSNAKES/).textContent).toContain("SSSNAKES");
  });

  it("applies animation class when 'animated' is true", async () => {
    render(<AppTitle animated={true} />);

    await userEvent.keyboard("asd");

    const snake = screen.getByText("🐍");
    expect(snake.className).toContain("animate-snake-slither");
  });
});
