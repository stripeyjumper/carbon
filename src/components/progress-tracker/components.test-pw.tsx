import React from "react";
import ProgressTracker, { ProgressTrackerProps } from ".";

export const Default = (args: ProgressTrackerProps) => {
  return <ProgressTracker {...args} />;
};
export const ProgressTrackerComponent = (props: ProgressTrackerProps) => {
  return <ProgressTracker progress={50} showDefaultLabels {...props} />;
};
