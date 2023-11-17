import React, { useState } from "react";
import { ArgTypes, Meta, StoryObj } from "@storybook/react";

import generateStyledSystemProps from "../../../.storybook/utils/styled-system-props";

import NumeralDate, { NumeralDateProps } from ".";

const styledSystemProps = generateStyledSystemProps({
  margin: true,
}) as Partial<ArgTypes<NumeralDateProps>>;

const meta: Meta<typeof NumeralDate> = {
  title: "Numeral Date",
  component: NumeralDate,
  argTypes: {
    ...styledSystemProps,
  },
};

export default meta;
type Story = StoryObj<typeof NumeralDate>;

export const Default: Story = () => {
  return (
    <NumeralDate
      defaultValue={{ dd: "01", mm: "02", yyyy: "2020" }}
      label="Default"
    />
  );
};
Default.storyName = "Default";

export const Controlled: Story = () => {
  const [value, setValue] = useState({ dd: "", mm: "", yyyy: "" });

  return (
    <NumeralDate
      onChange={(e) => setValue(e.target.value)}
      label="Default"
      value={value}
    />
  );
};
Controlled.storyName = "Controlled";

export const AllowedDateFormats: Story = () => {
  return (
    <>
      <NumeralDate label="DD/MM/YYYY - default" />
      <NumeralDate label="MM/DD/YYYY" dateFormat={["mm", "dd", "yyyy"]} />
      <NumeralDate label="DD/MM" dateFormat={["dd", "mm"]} />
      <NumeralDate label="MM/DD" dateFormat={["mm", "dd"]} />
      <NumeralDate label="MM/YYYY" dateFormat={["mm", "yyyy"]} />
    </>
  );
};
AllowedDateFormats.storyName = "Allowed Date Formats";

export const InternalValidationError: Story = () => {
  const [value, setValue] = useState({
    dd: "",
    mm: "",
    yyyy: "",
  });
  return (
    <NumeralDate
      enableInternalError
      onChange={(e) => setValue(e.target.value)}
      label="Default"
      value={value}
    />
  );
};
InternalValidationError.storyName = "Internal Validation Error";

export const InternalValidationWarning: Story = () => {
  const [value, setValue] = useState({ dd: "", mm: "", yyyy: "" });
  return (
    <NumeralDate
      enableInternalWarning
      label="Default"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
InternalValidationWarning.storyName = "Internal Validation Warning";

export const InlineLabel: Story = () => {
  const [value, setValue] = useState({ dd: "", mm: "", yyyy: "" });
  return (
    <NumeralDate
      label="Inline"
      labelInline
      labelAlign="right"
      labelWidth={30}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
InlineLabel.storyName = "Inline Label";

export const EnablingAdaptiveBehaviour: Story = () => {
  const [value, setValue] = useState({ dd: "", mm: "", yyyy: "" });
  return (
    <NumeralDate
      adaptiveLabelBreakpoint={960}
      label="Adaptive behaviour"
      labelInline
      labelAlign="right"
      labelWidth={30}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
EnablingAdaptiveBehaviour.storyName = "Enabling Adaptive Behaviour";
EnablingAdaptiveBehaviour.parameters = {
  chromatic: { disableSnapshot: true },
};

export const WithLabelHelp: Story = () => {
  const [value, setValue] = useState({ dd: "", mm: "", yyyy: "" });
  return (
    <NumeralDate
      helpAriaLabel="Label help"
      label="With label help"
      labelHelp="Label help"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
WithLabelHelp.storyName = "With Label Help";

export const WithFieldHelp: Story = () => {
  const [value, setValue] = useState({ dd: "", mm: "", yyyy: "" });
  return (
    <NumeralDate
      label="With field help"
      fieldHelp="Field help"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};
WithFieldHelp.storyName = "With Field Help";

export const Size: Story = () => {
  return (
    <>
      <NumeralDate
        label="Date of Birth"
        dateFormat={["dd", "mm", "yyyy"]}
        size="small"
      />
      <NumeralDate
        label="Date of Birth"
        dateFormat={["dd", "mm", "yyyy"]}
        size="medium"
      />
      <NumeralDate
        label="Date of Birth"
        dateFormat={["dd", "mm", "yyyy"]}
        size="large"
      />
    </>
  );
};
Size.storyName = "Size";
