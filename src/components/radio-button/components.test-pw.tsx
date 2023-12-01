/* eslint-disable no-console */
import React from "react";
import { ComponentStory } from "@storybook/react";
import { RadioButtonGroup, RadioButton } from ".";
import { RadioButtonGroupProps } from "./radio-button-group/radio-button-group.component";
import { RadioButtonProps } from "./radio-button.component";
import Typography from "../typography";

export const Required: ComponentStory<typeof RadioButton> = () => (
  <RadioButtonGroup name="required" legend="Radio group legend" required>
    <RadioButton id="radio-1" value="radio1" label="Radio Option 1" />
    <RadioButton id="radio-2" value="radio2" label="Radio Option 2" />
    <RadioButton id="radio-3" value="radio3" label="Radio Option 3" />
  </RadioButtonGroup>
);

export const WithValidationsOnButtons: ComponentStory<
  typeof RadioButton
> = () => (
  <RadioButtonGroup
    name="validations-on-buttons-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
  >
    <RadioButton
      id="validations-on-buttons-radio-1"
      value="radio1"
      label="Radio Option 1"
      error="message"
      fieldHelp="Some help text for this input."
    />
    <RadioButton
      id="validations-on-buttons-radio-2"
      value="radio2"
      label="Radio Option 2"
      warning="message"
    />
    <RadioButton
      id="validations-on-buttons-radio-3"
      value="radio3"
      label="Radio Option 3"
      info="message"
    />
  </RadioButtonGroup>
);

export const WithValidationsOnRadioGroup: ComponentStory<
  typeof RadioButton
> = () => (
  <RadioButtonGroup
    name="validations-on-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
    error="Error message"
  >
    <RadioButton
      id="validations-on-group-radio-1"
      value="radio1"
      label="Radio Option 1"
    />
    <RadioButton
      id="validations-on-group-radio-2"
      value="radio2"
      label="Radio Option 2"
    />
    <RadioButton
      id="validations-on-group-radio-3"
      value="radio3"
      label="Radio Option 3"
    />
  </RadioButtonGroup>
);

export const WithTooltipPosition: ComponentStory<typeof RadioButton> = () => (
  <RadioButtonGroup
    name="tooltip-position"
    onChange={() => console.log("change")}
    legend="Radio group legend"
  >
    <RadioButton
      id="radio-1"
      value="radio1"
      label="Radio Option 1"
      error="message"
      tooltipPosition="right"
    />
  </RadioButtonGroup>
);

export const WithTooltipPositionOnRadioGroup: ComponentStory<
  typeof RadioButton
> = () => (
  <RadioButtonGroup
    name="validations-on-group-group-tooltip-position-override"
    onChange={() => console.log("change")}
    legend="Radio group legend"
    error="Error message"
    tooltipPosition="top"
  >
    <RadioButton
      id="validations-on-group-radio-1-tooltip-position-override"
      value="radio1"
      label="Radio Option 1"
    />
    <RadioButton
      id="validations-on-group-radio-2-tooltip-position-override"
      value="radio2"
      label="Radio Option 2"
    />
    <RadioButton
      id="validations-on-group-radio-3-tooltip-position-override"
      value="radio3"
      label="Radio Option 3"
    />
  </RadioButtonGroup>
);

const radioContainerWidth = 400;

export function RadioButtonComponent(props: Partial<RadioButtonProps>) {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div
        style={{
          marginTop: "64px",
          marginLeft: "64px",
          width: radioContainerWidth,
        }}
      >
        <RadioButton
          id="radio-1"
          value="radio1"
          label="Radiobutton 1"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          {...props}
        />
      </div>
  );
}

export function RadioButtonGroupComponent({
  children,
  ...props
}: Partial<RadioButtonGroupProps>) {
  return (
    <div
      style={{
        marginTop: "64px",
        marginLeft: "64px",
      }}
    >
      <RadioButtonGroup
        name="radiobuttongroup"
        legend="Radio group legend"
        {...props}
      >
        <RadioButton id="radio-1" value="radio1" label="Yes" />
        <RadioButton id="radio-2" value="radio2" label="No" />
        <RadioButton id="radio-3" value="radio3" label="Maybe" />

        <>{children}</>
      </RadioButtonGroup>
    </div>
  );
}

export function Default() {
  return <RadioButtonGroup name="legend-and-labels-group">
    <RadioButton id="radio-1" value="radio1" label="Radio Option 1" />
    <RadioButton id="radio-2" value="radio2" label="Radio Option 2" />
    <RadioButton id="radio-3" value="radio3" label="Radio Option 3" />
  </RadioButtonGroup>
}

export function WithLegendAndLabels() {
  return <RadioButtonGroup
    name="legend-and-labels-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
  >
    <RadioButton
      id="radio-1"
      value="radio1"
      label="Radio Option 1"
      labelHelp="first option"
    />
    <RadioButton
      id="radio-2"
      value="radio2"
      label="Radio Option 2"
      labelHelp="second option"
    />
    <RadioButton
      id="radio-3"
      value="radio3"
      label="Radio Option 3"
      labelHelp="third option"
    />
  </RadioButtonGroup>
}

export function WithInlineLegend() {
  return <RadioButtonGroup
    name="inline-legend-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
    legendInline
    legendWidth={10}
  >
    <RadioButton id="radio-1" value="radio1" label="Radio Option 1" />
    <RadioButton id="radio-2" value="radio2" label="Radio Option 2" />
    <RadioButton id="radio-3" value="radio3" label="Radio Option 3" />
  </RadioButtonGroup>
}

export function WithLeftMargin() {
  return <RadioButtonGroup
    name="left-margin-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
    ml="20%"
  >
    <RadioButton
      id="left-margin-radio-1"
      value="radio1"
      label="Radio Option 1"
    />
    <RadioButton
      id="left-margin-radio-2"
      value="radio2"
      label="Radio Option 2"
    />
    <RadioButton
      id="left-margin-radio-3"
      value="radio3"
      label="Radio Option 3"
    />
  </RadioButtonGroup>
}

export function EnableAdaptiveBehaviour() {
  return <RadioButtonGroup
    name="enable-adaptive-behaviour-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
    ml="20%"
    adaptiveLegendBreakpoint={960}
    adaptiveSpacingBreakpoint={960}
  >
    <RadioButton
      id="enable-adaptive-behaviour-radio-1"
      value="radio1"
      label="Radio Option 1"
    />
    <RadioButton
      id="enable-adaptive-behaviour-radio-2"
      value="radio2"
      label="Radio Option 2"
    />
    <RadioButton
      id="enable-adaptive-behaviour-radio-3"
      value="radio3"
      label="Radio Option 3"
    />
  </RadioButtonGroup>
}

EnableAdaptiveBehaviour.parameters = { chromatic: { disableSnapshot: true } };

export function DifferentLabelSpacing() {
  return <RadioButtonGroup
    name="different-label-spacing-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
    labelSpacing={2}
  >
    <RadioButton
      id="different-label-spacing-radio-1"
      value="radio1"
      label="Radio Option 1"
    />
    <RadioButton
      id="different-label-spacing-radio-2"
      value="radio2"
      label="Radio Option 2"
    />
    <RadioButton
      id="different-label-spacing-radio-3"
      value="radio3"
      label="Radio Option 3"
    />
  </RadioButtonGroup>
}

export function InlineRadioButtons() {
  return <RadioButtonGroup
    name="inline-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
    inline
  >
    <RadioButton id="inline-radio-1" value="radio1" label="Radio Option 1" />
    <RadioButton id="inline-radio-2" value="radio2" label="Radio Option 2" />
    <RadioButton id="inline-radio-3" value="radio3" label="Radio Option 3" />
  </RadioButtonGroup>
}

export function ReverseRadioButtons() {
  return <RadioButtonGroup
    name="reverse-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
  >
    <RadioButton
      id="reverse-radio-1"
      value="radio1"
      label="Radio Option 1"
      reverse
    />
    <RadioButton
      id="reverse-radio-2"
      value="radio2"
      label="Radio Option 2"
      reverse
    />
    <RadioButton
      id="reverse-radio-3"
      value="radio3"
      label="Radio Option 3"
      reverse
    />
  </RadioButtonGroup>
}

export function DisableRadioButtons() {
  return <RadioButtonGroup
    name="disable-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
  >
    <RadioButton
      id="disable-radio-1"
      value="radio1"
      label="Radio Option 1"
      disabled
    />
    <RadioButton
      id="disable-radio-2"
      value="radio2"
      label="Radio Option 2"
      disabled
    />
    <RadioButton
      id="disable-radio-3"
      value="radio3"
      label="Radio Option 3"
      disabled
    />
  </RadioButtonGroup>
}

export function WithFieldHelp() {
  return <RadioButtonGroup
    name="field-help-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
  >
    <RadioButton
      id="field-help-radio-1"
      value="radio1"
      label="Radio Option 1"
      fieldHelp="Some help text for this input."
    />
    <RadioButton
      id="field-help-radio-2"
      value="radio2"
      label="Radio Option 2"
      fieldHelp="Some help text for this input."
    />
    <RadioButton
      id="field-help-radio-3"
      value="radio3"
      label="Radio Option 3"
      fieldHelp="Some help text for this input."
    />
  </RadioButtonGroup>
}

export function WithLargeRadioButtons() {
  return <RadioButtonGroup
    name="large-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
  >
    <RadioButton
      id="large-radio-1"
      value="radio1"
      label="Radio Option 1"
      size="large"
      fieldHelp="Some help text for this input."
    />
    <RadioButton
      id="large-radio-2"
      value="radio2"
      label="Radio Option 2"
      size="large"
      fieldHelp="Some help text for this input."
    />
    <RadioButton
      id="large-radio-3"
      value="radio3"
      label="Radio Option 3"
      size="large"
      fieldHelp="Some help text for this input."
    />
  </RadioButtonGroup>
}

export function WithCustomStyledLabels() {
  return <RadioButtonGroup
    name="custom-styled-label-group"
    onChange={() => console.log("change")}
    legend="Radio group legend"
  >
    <RadioButton
      id="custom-styled-label-radio-1"
      value="radio1"
      label={
        <>
          <Typography variant="b">Bold </Typography>
          <Typography as="span">regular </Typography>
          <Typography variant="em">emphasized</Typography>
        </>
      }
    />
    <RadioButton
      id="custom-styled-label-radio-2"
      value="radio2"
      label={
        <>
          <Typography variant="b">Bold </Typography>
          <Typography as="span">regular </Typography>
          <Typography variant="em">emphasized</Typography>
        </>
      }
    />
    <RadioButton
      id="custom-styled-label-radio-3"
      value="radio3"
      label={
        <>
          <Typography variant="b">Bold </Typography>
          <Typography as="span">regular </Typography>
          <Typography variant="em">emphasized</Typography>
        </>
      }
    />
  </RadioButtonGroup>
}
