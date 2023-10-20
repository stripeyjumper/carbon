import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import ButtonToggleGroup from ".";
import { ButtonToggle } from "..";

const meta: Meta<typeof ButtonToggleGroup> = {
  title: "ButtonToggleGroup",
  component: ButtonToggleGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonToggleGroup>;

export const Default: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-default-id"
      label="Default example"
      labelHelp="help message"
      helpAriaLabel="Help"
      fieldHelp="field help message"
    >
      <ButtonToggle value="foo">Foo</ButtonToggle>
      <ButtonToggle value="bar">Bar</ButtonToggle>
      <ButtonToggle value="baz">Baz</ButtonToggle>
    </ButtonToggleGroup>
  );
};
Default.storyName = "Default";

export const Controlled: Story = () => {
  const [value, setValue] = useState("bar");
  function onChangeHandler(
    event: React.MouseEvent<HTMLButtonElement>,
    selectedValue?: string
  ) {
    setValue(selectedValue as string);
  }
  return (
    <ButtonToggleGroup
      id="button-toggle-group-controlled-id"
      label="Controlled example"
      labelHelp="help message"
      helpAriaLabel="Help"
      fieldHelp="field help mesage"
      onChange={onChangeHandler}
      value={value}
    >
      <ButtonToggle value="foo">Foo</ButtonToggle>
      <ButtonToggle value="bar">Bar</ButtonToggle>
      <ButtonToggle value="baz">Baz</ButtonToggle>
    </ButtonToggleGroup>
  );
};
Controlled.storyName = "Controlled";

export const Grouped: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-grouped-id"
      label="Grouped example"
      labelHelp="help message"
      helpAriaLabel="Help"
      fieldHelp="field help mesage"
      onChange={() => {}}
    >
      <ButtonToggle value="foo" grouped>
        Foo
      </ButtonToggle>
      <ButtonToggle value="bar" grouped>
        Bar
      </ButtonToggle>
      <ButtonToggle value="baz" grouped>
        Baz
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
Grouped.storyName = "Grouped";

export const FullWidth: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-fullWidth-id"
      fullWidth
      label="fullWidth example"
      labelHelp="help message"
      helpAriaLabel="Help"
      fieldHelp="field help mesage"
      onChange={() => {}}
    >
      <ButtonToggle value="foo" grouped>
        Foo
      </ButtonToggle>
      <ButtonToggle value="bar" grouped>
        Bar
      </ButtonToggle>
      <ButtonToggle value="baz" grouped>
        Baz
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
FullWidth.storyName = "Full Width";

export const FieldHelp: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-help-inline-id"
      label="FieldHelp inline example"
      labelHelp="help message"
      helpAriaLabel="Help"
      fieldHelp="field help mesage"
      fieldHelpInline
      onChange={() => {}}
    >
      <ButtonToggle value="foo">Foo</ButtonToggle>
      <ButtonToggle value="bar">Bar</ButtonToggle>
      <ButtonToggle value="baz">Baz</ButtonToggle>
    </ButtonToggleGroup>
  );
};
FieldHelp.storyName = "Field Help";

export const LabelInline: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-label-inline-id"
      label="Label inline example"
      labelHelp="help message"
      helpAriaLabel="Help"
      fieldHelp="field help mesage"
      labelInline
      onChange={() => {}}
    >
      <ButtonToggle value="foo">Foo</ButtonToggle>
      <ButtonToggle value="bar">Bar</ButtonToggle>
      <ButtonToggle value="baz">Baz</ButtonToggle>
    </ButtonToggleGroup>
  );
};
LabelInline.storyName = "Label Inline";

export const AllowDeselection: Story = () => {
  const [value, setValue] = useState("bar");
  function onChangeHandler(
    event: React.MouseEvent<HTMLButtonElement>,
    selectedValue?: string
  ) {
    setValue(selectedValue as string);
  }
  return (
    <ButtonToggleGroup
      id="button-toggle-group-allowDeselect-id"
      label="deselection example"
      onChange={onChangeHandler}
      value={value}
      allowDeselect
      fieldHelp="Select an option, you can clear a selected option by selecting it again"
      fieldHelpInline
    >
      <ButtonToggle value="foo">Foo</ButtonToggle>
      <ButtonToggle value="bar">Bar</ButtonToggle>
      <ButtonToggle value="baz">Baz</ButtonToggle>
    </ButtonToggleGroup>
  );
};
AllowDeselection.storyName = "Allow Deselection";

export const AriaLabel: Story = () => {
  const [value, setValue] = useState("bar");
  function onChangeHandler(
    event: React.MouseEvent<HTMLButtonElement>,
    selectedValue?: string
  ) {
    setValue(selectedValue as string);
  }
  return (
    <ButtonToggleGroup
      id="button-toggle-group-ariaLabel-id"
      aria-label="an accessible name"
      onChange={onChangeHandler}
      value={value}
      allowDeselect
    >
      <ButtonToggle value="foo">Foo</ButtonToggle>
      <ButtonToggle value="bar">Bar</ButtonToggle>
      <ButtonToggle value="baz">Baz</ButtonToggle>
    </ButtonToggleGroup>
  );
};
AriaLabel.storyName = "Aria Label";
