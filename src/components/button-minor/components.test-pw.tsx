import React from "react";
import ButtonMinor, { ButtonMinorProps } from ".";

const Default = (props: ButtonMinorProps) => <ButtonMinor {...props} />;

const ButtonMinorCustom = (props: ButtonMinorProps) => (
  <ButtonMinor {...props}>Example Button</ButtonMinor>
);
const ButtonMinorDifferentTypes = (props: ButtonMinorProps) => {
  return (
    <div>
      <ButtonMinor buttonType="primary" {...props}>
        Primary
      </ButtonMinor>
      <ButtonMinor buttonType="secondary" {...props}>
        Secondary
      </ButtonMinor>
      <ButtonMinor buttonType="tertiary" {...props}>
        Tertiary
      </ButtonMinor>
    </div>
  );
};

const ButtonMinorIconWithTooltip = ({
  iconTooltipMessage,
}: Pick<ButtonMinorProps, "iconTooltipMessage">) => (
  <ButtonMinor
    iconType="bin"
    iconTooltipMessage={iconTooltipMessage || "This is a tooltip"}
    aria-label="Delete"
  />
);

export {
  Default,
  ButtonMinorCustom,
  ButtonMinorDifferentTypes,
  ButtonMinorIconWithTooltip,
};
