import React, { useState } from "react";
import { ArgTypes, Meta, StoryObj } from "@storybook/react";

import Decimal, { DecimalProps, CustomEvent } from ".";
import CarbonProvider from "../carbon-provider/carbon-provider.component";
import generateStyledSystemProps from "../../../.storybook/utils/styled-system-props";

const styledSystemProps = generateStyledSystemProps({
  margin: true,
}) as Partial<ArgTypes<DecimalProps>>;

const meta: Meta<typeof Decimal> = {
  title: "Decimal Input",
  component: Decimal,
  excludeStories: [
    "createDefaultStory",
    "createValidationsStory",
    "createValidationsTooltipStory",
  ],
  argTypes: {
    ...styledSystemProps,
  },
};

export default meta;
type Story = StoryObj<typeof Decimal>;

/* TODO: we really need a better of having a reusable default story that can show state
  * I've checked how it used to be and you couldn't see the state setting at that point either
  * I've put a message on the Storybook Discord but it's been ignored so will need to chase or ask on git */
export const DefaultStory: Story = (args: DecimalProps) => {
  const [state, setState] = useState("0.01");
  const setValue = ({ target }: CustomEvent) => {
    setState(target.value.rawValue);
  };

  return <Decimal label="Decimal" value={state} onChange={setValue} {...args} />;
};
DefaultStory.storyName = "Default";

export const Sizes: Story = () => {
  const [state, setState] = useState({
    small: "0.01",
    medium: "0.01",
    large: "0.01",
  });

  const handleChange = (size: DecimalProps["size"]) => (e: CustomEvent) => {
    setState({ ...state, [size || "small"]: e.target.value.rawValue });
  };

  return (["small", "medium", "large"] as const).map((size) => (
    <Decimal
      key={`Decimal - ${size}`}
      label={`Decimal - ${size}`}
      value={state[size]}
      onChange={handleChange(size)}
      size={size}
      mb={2}
    />
  ));
};
Sizes.storyName = "Sizes";

export const Disabled = DefaultStory.bind({});
Disabled.storyName = "Disabled";
Disabled.args = { disabled: true };

export const Prefix = DefaultStory.bind({});
Prefix.storyName = "Prefix";
Prefix.args = { prefix: "£", maxWidth: "20%" };

export const LabelAlign: Story = () => {
  const [state, setState] = useState({
    right: "0.01",
    left: "0.01",
  });
  const handleChange = (alignment: DecimalProps["labelAlign"]) => (
    e: CustomEvent
  ) => {
    setState({ ...state, [alignment || "left"]: e.target.value.rawValue });
  };
  return (["right", "left"] as const).map((alignment) => (
    <Decimal
      label="Decimal"
      labelInline
      inputWidth={50}
      key={alignment}
      labelAlign={alignment}
      value={state[alignment]}
      onChange={handleChange(alignment)}
    />
  ));
};
LabelAlign.storyName = "Label Align";

export const ReadOnly = DefaultStory.bind({});
ReadOnly.storyName = "Read Only";
ReadOnly.args = { readOnly: true };

export const Empty = DefaultStory.bind({});
Empty.storyName = "Empty";
Empty.args = { allowEmptyValue: true };

export const WithCustomPrecision: Story = () => {
  const [state, setState] = useState("0.0001");
  const setValue = ({ target }: CustomEvent) => {
    setState(target.value.rawValue);
  };
  return (
    <Decimal label="Decimal" value={state} onChange={setValue} precision={4} />
  );
};
WithCustomPrecision.storyName = "With Custom Precision";

export const LabelInline = DefaultStory.bind({});
LabelInline.storyName = "Label Inline";
LabelInline.parameters = { chromatic: { disableSnapshot: true } };
LabelInline.args = { labelInline: true };

export const WithCustomLabelWidthAndInputWidth = DefaultStory.bind({});
WithCustomLabelWidthAndInputWidth.storyName =
  "With Custom Label Width and Input Width";
WithCustomLabelWidthAndInputWidth.args = {
  labelWidth: 10,
  inputWidth: 90,
  labelInline: true,
};

export const WithCustomMaxWidth = DefaultStory.bind({});
WithCustomMaxWidth.storyName = "With Custom Max Width";
WithCustomMaxWidth.args = {
  maxWidth: "50%",
};

export const WithFieldHelp = DefaultStory.bind({});
WithFieldHelp.storyName = "With Field Help";
WithFieldHelp.args = { fieldHelp: "Help" };

export const WithLabelHelp = DefaultStory.bind({});
WithLabelHelp.storyName = "With Label Help";
WithLabelHelp.args = {
  labelHelp: "Help",
  helpAriaLabel: "Help",
};

export const WithInputHint = DefaultStory.bind({});
WithInputHint.args = {
  inputHint: "Hint text (optional).",
};

export const Required = DefaultStory.bind({});
Required.storyName = "Required";
Required.args = { required: true };

export const LeftAligned = DefaultStory.bind({});
LeftAligned.storyName = "Left Aligned";
LeftAligned.args = { align: "left" };

type Validation = "error" | "warning" | "info";

export const Validations: Story = (
  args: Partial<DecimalProps> & { message?: string | boolean } = {}
) => {
  const [state, setState] = useState({
    error: "0.01",
    warning: "0.01",
    info: "0.01",
  });

  const handleChange = (validation: Validation) => (e: CustomEvent) => {
    setState({ ...state, [validation]: e.target.value.rawValue });
  };

  return (
    <>
      {(["error", "warning", "info"] as const).map((validationType) => (
        <div key={`${validationType}`}>
          <Decimal
            label="Decimal"
            value={state[validationType]}
            onChange={handleChange(validationType)}
            {...{ [validationType]: args.message }}
            mb={2}
            {...args}
          />
          <Decimal
            label="Decimal - readOnly"
            value="0.01"
            readOnly
            {...{ [validationType]: args.message }}
            mb={2}
            {...args}
          />
        </div>
      ))}
    </>
  );
};
Validations.storyName = "Validations";

export const ValidationsStringComponent = Validations.bind({});
ValidationsStringComponent.storyName = "Validations - String Component";
ValidationsStringComponent.args = { message: "Message" };

export const ValidationsStringLabel = Validations.bind({});
ValidationsStringLabel.storyName = "Validations - String Label";
ValidationsStringLabel.args = { message: "Message", validationOnLabel: true };

export const ValidationsBoolean = Validations.bind({});
ValidationsBoolean.storyName = "Validation - Boolean";
ValidationsBoolean.args = { message: true };

export const ValidationsRedesign: Story = () => {
  const [state, setState] = useState({
    error: "0.01",
    warning: "0.01",
  });
  const handleChange = (validation: Validation) => (e: CustomEvent) => {
    setState({ ...state, [validation]: e.target.value.rawValue });
  };
  return (
    <CarbonProvider validationRedesignOptIn>
      {(["error", "warning"] as const).map((validationType) =>
        (["small", "medium", "large"] as const).map((size) => (
          <div style={{ width: "296px" }} key={`${size}-${validationType}`}>
            <Decimal
              label={`${size} - ${validationType}`}
              value={state[validationType]}
              size={size}
              onChange={handleChange(validationType)}
              {...{ [validationType]: "Message" }}
              m={4}
            />
            <Decimal
              label={`readOnly - ${size} - ${validationType}`}
              value="0.01"
              size={size}
              readOnly
              {...{ [validationType]: "Message" }}
              m={4}
            />
          </div>
        ))
      )}
    </CarbonProvider>
  );
};
ValidationsRedesign.storyName = "Validations - Redesign";

export const ValidationsTooltip: Story = (args: DecimalProps = {}) => {
  const [state, setState] = useState({
    error: "0.01",
    warning: "0.01",
    info: "0.01",
  });

  const handleChange = (validation: Validation) => (e: CustomEvent) => {
    setState({ ...state, [validation]: e.target.value.rawValue });
  };

  return (
    <>
      {(["error", "warning", "info"] as const).map((validationType) => (
        <div key={`${validationType}`}>
          <Decimal
            label="Decimal"
            value={state[validationType]}
            onChange={handleChange(validationType)}
            {...{ [validationType]: "Message" }}
            mb={2}
            tooltipPosition="bottom"
            {...args}
          />
        </div>
      ))}
    </>
  );
};
ValidationsTooltip.storyName = "Validations - Tooltip";
ValidationsTooltip.parameters = { chromatic: { disableSnapshot: true } };

export const ValidationsTooltipLabel = ValidationsTooltip.bind({});
ValidationsTooltipLabel.storyName = "Validations - Tooltip - Label";
ValidationsTooltipLabel.parameters = { chromatic: { disableSnapshot: true } };
ValidationsTooltipLabel.args = { validationOnLabel: true };
