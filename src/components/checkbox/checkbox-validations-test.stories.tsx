import React from "react";
import { ComponentStoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup } from ".";

type CheckboxStory = ComponentStoryObj<typeof Checkbox>;
type CheckboxGroupStory = ComponentStoryObj<typeof CheckboxGroup>;

export const SingleCheckboxTemplate: CheckboxStory = {
  // eslint-disable-next-line react/display-name, react/prop-types
  render: ({ error, warning, info, ...rest }) => (
    <CheckboxGroup>
      <Checkbox
        {...rest}
        label="Example checkbox (error)"
        name="checkbox-error"
        error={error}
      />
      <Checkbox
        {...rest}
        label="Example checkbox (warning)"
        name="checkbox-warning"
        warning={warning}
      />
      <Checkbox
        {...rest}
        label="Example checkbox (info)"
        name="checkbox-info"
        info={info}
      />
    </CheckboxGroup>
  ),
};

export const StringValidation: CheckboxStory = {
  ...SingleCheckboxTemplate,
  args: {
    error: "Message",
    warning: "Message",
    info: "Message",
  },
};

export const StringValidationWithTooltipPosition: CheckboxStory = {
  ...SingleCheckboxTemplate,
  args: {
    error: "Message",
    warning: "Message",
    info: "Message",
    tooltipPosition: "bottom",
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const BooleanValidation: CheckboxStory = {
  ...SingleCheckboxTemplate,
  args: {
    error: true,
    warning: true,
    info: true,
  },
};

export const CheckboxGroupTemplate: CheckboxGroupStory = {
  // eslint-disable-next-line react/display-name, react/prop-types
  render: ({ error, warning, info, ...rest }) => (
    <>
      <CheckboxGroup {...rest} error={error} legend="Group error">
        <Checkbox label="Example checkbox one" name="checkbox-one-error" />
        <Checkbox label="Example checkbox two" name="checkbox-two-error" />
        <Checkbox label="Example checkbox three" name="checkbox-three-error" />
      </CheckboxGroup>
      <CheckboxGroup {...rest} warning={warning} legend="Group warning">
        <Checkbox label="Example checkbox one" name="checkbox-one-warning" />
        <Checkbox label="Example checkbox two" name="checkbox-two-warning" />
        <Checkbox
          label="Example checkbox three"
          name="checkbox-three-warning"
        />
      </CheckboxGroup>
      <CheckboxGroup {...rest} info={info} legend="Group info">
        <Checkbox label="Example checkbox one" name="checkbox-one-info" />
        <Checkbox label="Example checkbox two" name="checkbox-two-info" />
        <Checkbox label="Example checkbox three" name="checkbox-three-info" />
      </CheckboxGroup>
    </>
  ),
};

export const CheckboxGroupStringValidation: CheckboxGroupStory = {
  ...CheckboxGroupTemplate,
  args: {
    error: "Message",
    warning: "Message",
    info: "Message",
  },
};

export const CheckboxGroupStringValidationTooltipPosition: ComponentStoryObj<
  typeof CheckboxGroup
> = {
  ...CheckboxGroupTemplate,
  args: {
    error: "Message",
    warning: "Message",
    info: "Message",
    tooltipPosition: "bottom",
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export const CheckboxGroupBooleanValidation: CheckboxGroupStory = {
  ...CheckboxGroupTemplate,
  args: {
    error: true,
    warning: true,
    info: true,
  },
};

export const Required: CheckboxStory = {
  // eslint-disable-next-line react/display-name
  render: (args) => <Checkbox {...args} />,
  args: {
    label: "I agree to the Terms and Conditions",
    name: "required",
    required: true,
  },
};
