import { Meta, StoryObj } from "@storybook/react";
import Slide from "./slide.component";

const meta: Meta<typeof Slide> = {
  title: "Slide",
  component: Slide,
  tags: ["isHidden"],
};

export default meta;
type Story = StoryObj<typeof Slide>;

export const Default: Story = {
  args: {},
};
