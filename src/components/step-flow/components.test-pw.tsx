import React from "react";
import { StepFlow, StepFlowProps } from ".";

const StepFlowComponent = (props: Partial<StepFlowProps>) => {
  return <StepFlow title="foo" currentStep={1} totalSteps={8} {...props} />;
};

export default StepFlowComponent