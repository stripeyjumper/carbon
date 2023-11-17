import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { ButtonToggle, ButtonToggleGroup } from ".";
import Box from "../box";

const meta: Meta<typeof ButtonToggle> = {
  title: "Button Toggle",
  component: ButtonToggle,
};

export default meta;
type Story = StoryObj<typeof ButtonToggle>;

export const Default: Story = () => {
  return (
    <ButtonToggleGroup id="button-toggle-group-id" label="Default example">
      <ButtonToggle value="foo">Foo</ButtonToggle>
      <ButtonToggle value="bar">Bar</ButtonToggle>
      <ButtonToggle value="baz">Baz</ButtonToggle>
    </ButtonToggleGroup>
  );
};
Default.storyName = "Default";

export const DefaultWrappedText: Story = () => {
  return (
    <Box margin={4} width="250px" display="flex" flexWrap="nowrap">
      <ButtonToggleGroup
        id="button-toggle-group-id"
        label="Wrapped text example"
      >
        <ButtonToggle value="wraps" grouped>
          Some text that wraps
        </ButtonToggle>
        <ButtonToggle value="foobar" grouped>
          FooBar
        </ButtonToggle>
      </ButtonToggleGroup>
    </Box>
  );
};
DefaultWrappedText.storyName = "Default Wrapped Text";

export const DefaultSmallIcon: Story = () => {
  return (
    <ButtonToggleGroup id="button-toggle-group-id" label="Small icon example">
      <ButtonToggle value="foo" buttonIcon="add">
        Add
      </ButtonToggle>
      <ButtonToggle value="bar" buttonIcon="share">
        Share
      </ButtonToggle>
      <ButtonToggle value="baz" buttonIcon="tick">
        Tick
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
DefaultSmallIcon.storyName = "Default Small Icon";

export const DefaultLargeIcon: Story = () => {
  return (
    <ButtonToggleGroup id="button-toggle-group-id" label="Large icon example">
      <ButtonToggle value="foo" buttonIcon="add" buttonIconSize="large">
        Add
      </ButtonToggle>
      <ButtonToggle value="bar" buttonIcon="share" buttonIconSize="large">
        Share
      </ButtonToggle>
      <ButtonToggle value="baz" buttonIcon="tick" buttonIconSize="large">
        Tick
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
DefaultLargeIcon.storyName = "Default Large Icon";

export const IconOnly: Story = () => {
  return (
    <ButtonToggleGroup id="button-toggle-group-id" label="Icon only example">
      <ButtonToggle value="foo" buttonIcon="add" aria-label="add" />
      <ButtonToggle value="bar" buttonIcon="share" aria-label="share" />
      <ButtonToggle value="baz" buttonIcon="tick" aria-label="tick" />
    </ButtonToggleGroup>
  );
};
IconOnly.storyName = "Icon Only";

export const Small: Story = () => {
  return (
    <ButtonToggleGroup id="button-toggle-group-id" label="Small example">
      <ButtonToggle size="small" value="foo">
        Add
      </ButtonToggle>
      <ButtonToggle size="small" value="bar">
        Share
      </ButtonToggle>
      <ButtonToggle size="small" value="baz">
        Tick
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
Small.storyName = "Small";

export const SmallSmallIcon: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-id"
      label="Small with small icon example"
    >
      <ButtonToggle size="small" value="foo" buttonIcon="add">
        Add
      </ButtonToggle>
      <ButtonToggle size="small" value="bar" buttonIcon="share">
        Share
      </ButtonToggle>
      <ButtonToggle size="small" value="baz" buttonIcon="tick">
        Tick
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
SmallSmallIcon.storyName = "Small Small Icon";

export const SmallLargeIcon: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-id"
      label="Small with large icon example"
    >
      <ButtonToggle
        size="small"
        value="foo"
        buttonIcon="add"
        buttonIconSize="large"
      >
        Add
      </ButtonToggle>
      <ButtonToggle
        size="small"
        value="bar"
        buttonIcon="share"
        buttonIconSize="large"
      >
        Share
      </ButtonToggle>
      <ButtonToggle
        size="small"
        value="baz"
        buttonIcon="tick"
        buttonIconSize="large"
      >
        Tick
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
SmallLargeIcon.storyName = "Small Large Icon";

export const Large: Story = () => {
  return (
    <ButtonToggleGroup id="button-toggle-group-id" label="Large example">
      <ButtonToggle size="large" value="foo">
        Add
      </ButtonToggle>
      <ButtonToggle size="large" value="bar">
        Share
      </ButtonToggle>
      <ButtonToggle size="large" value="baz">
        Tick
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
Large.storyName = "Large";

export const LargeSmallIcon: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-id"
      label="Large with small icon example"
    >
      <ButtonToggle size="large" value="foo" buttonIcon="add">
        Add
      </ButtonToggle>
      <ButtonToggle size="large" value="bar" buttonIcon="share">
        Share
      </ButtonToggle>
      <ButtonToggle size="large" value="baz" buttonIcon="tick">
        Tick
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
LargeSmallIcon.storyName = "Large Small Icon";

export const LargeLargeIcon: Story = () => {
  return (
    <ButtonToggleGroup
      id="button-toggle-group-id"
      label="Large with large icon example"
    >
      <ButtonToggle
        size="large"
        value="foo"
        buttonIcon="add"
        buttonIconSize="large"
      >
        Add
      </ButtonToggle>
      <ButtonToggle
        size="large"
        value="bar"
        buttonIcon="share"
        buttonIconSize="large"
      >
        Share
      </ButtonToggle>
      <ButtonToggle
        size="large"
        value="baz"
        buttonIcon="tick"
        buttonIconSize="large"
      >
        Tick
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
LargeLargeIcon.storyName = "Large Large Icon";

export const Disabled: Story = () => {
  return (
    <ButtonToggleGroup id="button-toggle-group-id" label="Disabled example">
      <ButtonToggle value="foo" disabled>
        Foo
      </ButtonToggle>
      <ButtonToggle value="bar" disabled>
        Bar
      </ButtonToggle>
      <ButtonToggle value="baz" disabled>
        Baz
      </ButtonToggle>
    </ButtonToggleGroup>
  );
};
Disabled.storyName = "Disabled";

export const Grouped: Story = () => {
  return (
    <ButtonToggleGroup id="button-toggle-group-id" label="Grouped example">
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
