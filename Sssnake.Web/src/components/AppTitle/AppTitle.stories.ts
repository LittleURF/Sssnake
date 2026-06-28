import type { Meta, StoryObj } from "@storybook/react-vite";

import { AppTitle } from "./AppTitle";

const meta = {
  title: "Components/AppTitle",
  component: AppTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    animated: false,
  },
} satisfies Meta<typeof AppTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Animated: Story = {
  args: {
    animated: true,
  },
};
