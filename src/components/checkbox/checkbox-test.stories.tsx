import React from "react";
import { StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import type { CheckboxProps } from ".";
import CarbonProvider from "../carbon-provider";
import type { CarbonProviderProps } from "../carbon-provider";

export default {
  title: "Checkbox/Test",
  component: Checkbox,
  parameters: {
    info: { disable: true },
    chromatic: {
      disableSnapshot: false,
    },
    controls: {
      exclude: ["inputRef", "data-component"],
    },
  },
  argTypes: {
    adaptiveSpacingBreakpoint: {
      control: {
        type: "number",
        min: 0,
        step: 1,
      },
    },
    fieldHelp: {
      control: "text",
    },
    inputWidth: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    label: {
      control: "text",
    },
    labelHelp: {
      control: "text",
    },
    labelWidth: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    error: {
      options: ["Message", true, false],
    },
    warning: {
      options: ["Message", true, false],
    },
    info: {
      options: ["Message", true, false],
    },
  },
};

type Story = StoryObj<
  CheckboxProps & Pick<CarbonProviderProps, "validationRedesignOptIn">
>;
export const Default: Story = {
  storyName: "default",
  // eslint-disable-next-line react/display-name, react/prop-types
  render: ({ validationRedesignOptIn, ...args }) => (
    <CarbonProvider validationRedesignOptIn={validationRedesignOptIn}>
      <Checkbox {...args} />
    </CarbonProvider>
  ),
  args: {
    validationRedesignOptIn: true,
    autoFocus: false,
    disabled: false,
    error: undefined,
    fieldHelp: "This text provides help for the input.",
    fieldHelpInline: false,
    info: undefined,
    inputWidth: 0,
    label: "Example Checkbox",
    labelHelp: "This text provides more information for the label.",
    labelSpacing: 1,
    labelWidth: 0,
    required: false,
    reverse: false,
    size: "small",
    warning: undefined,
  },
};
