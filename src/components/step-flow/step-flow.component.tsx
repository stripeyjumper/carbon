import React from "react";
import { MarginProps } from "styled-system";
import Icon from "../icon";
import IconButton from "../icon-button";
import {
  StyledStepFlow,
  StyledStepContent,
  StyledStepContentText,
  StyledCategoryText,
  StyledTitleText,
  StyledVisibleTitleText,
  StyledHiddenTitleText,
  StyledStepLabelAndProgress,
  StyledStepLabel,
  StyledProgressIndicatorBar,
  StyledProgressIndicator,
} from "./step-flow.style";
import tagComponent, {
  TagProps,
} from "../../__internal__/utils/helpers/tags/tags";
import { VariantTypes } from "../typography"
import useLocale from "../../hooks/__internal__/useLocale";

export type Steps = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface StepFlowProps extends MarginProps, TagProps {
  /** A category for the user journey.  */
  category?: string;
  /** Set the variant of the internal 'Typography' component which contains the category.  
  * However, despite the heading level the styling will always be overridden. 
  */
  categoryTypographyVariant?: VariantTypes;
  /** The title of the current step.  */
  title: string;
  /** Set the variant of the internal 'Typography' component which contains the title. 
  * However, despite the heading level the styling will always be overridden. 
  */
  titleTypographyVariant?: VariantTypes;
  /** A ref which will be applied to the DOM element which contains the component's title.  
   * Used to focus on the title, to ensure screen reader user's are aware of title changes,
   * and allow navigation from the StepFlow component to the contents below.
  */
  titleRef: React.RefObject<HTMLDivElement>;
  /** The tabindex which will be applied to the DOM element which contains the component's title. 
   * This ensures the element becomes tabbable. Pass any number needed for tabbing order.
   */
  titleTabIndex?: number;
  /** The total steps in the user journey.  */
  totalSteps: Steps;
  /**
   * The current step of the user journey. If the set `currentStep` is higher than
   * `totalSteps`the value of `currentStep` will be that of `totalSteps` instead.
   */
  currentStep: Steps;
  /** Determines if the progress indicator is shown. */
  showProgressIndicator?: boolean;
  /** Determines if the close icon button is shown */
  showCloseIcon?: boolean;
  /** function runs when user click dismiss button */
  onDismiss?: (
    e:
      | React.KeyboardEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => void;
}

let currentStepWarnTriggered = false;

export const StepFlow = ({
  category,
  categoryTypographyVariant,
  title,
  titleTypographyVariant,
  titleRef,
  titleTabIndex = 0,
  totalSteps,
  currentStep,
  showProgressIndicator = false,
  showCloseIcon = false,
  onDismiss,
  ...rest
}: StepFlowProps) => {
  const totalStepsArray = Array.from(
    { length: totalSteps },
    (_, index) => index + 1
  );

  const validatedCurrentStep =
    currentStep > totalSteps ? totalSteps : currentStep;

  if (!currentStepWarnTriggered && currentStep > totalSteps) {
    currentStepWarnTriggered = true;
    console.warn(
      "[WARNING] The `currentStep` prop should not be higher than the `totalSteps`prop in `StepFlow`." +
        " Please ensure `currentStep`s value does not exceed that of `totalSteps`, in the meantime" +
        " we have set `currentStep` value to that of `totalSteps`, and all indicators have been marked as completed."
    );
  }

  const progressIndicators = totalStepsArray.map((step) => (
    <StyledProgressIndicator
      key={step}
      data-element="progress-indicator"
      isCompleted={step < validatedCurrentStep}
      isInProgress={step === validatedCurrentStep}
    >
      &nbsp;
    </StyledProgressIndicator>
  ));

  const closeIcon = (
    <IconButton data-element="close" onClick={onDismiss}>
      <Icon type="close" />
    </IconButton>
  );

  const locale = useLocale();

  return (
    <StyledStepFlow {...rest} {...tagComponent("step-flow", rest)}>
      <StyledStepContent>
        <StyledStepContentText>
          {category ? (
            <StyledCategoryText variant={categoryTypographyVariant || "h1"} data-element="category-text" aria-hidden="true">{category}</StyledCategoryText>
          ) : null}
          <StyledTitleText tabIndex={titleTabIndex} ref={titleRef}>
            <StyledVisibleTitleText variant={titleTypographyVariant || category ? "h2" : "h1"} data-element="title-text" aria-hidden="true">
              {title}
            </StyledVisibleTitleText>
            <StyledHiddenTitleText screenReaderOnly>
              {locale.stepFlow.screenReaderOnlyTitle(title, validatedCurrentStep, totalSteps, category)}
            </StyledHiddenTitleText>
          </StyledTitleText>
        </StyledStepContentText>
        {showCloseIcon ? closeIcon : null}
      </StyledStepContent>
      <StyledStepLabelAndProgress>
        <StyledStepLabel data-element="step-label" aria-hidden="true">
          {locale.stepFlow.stepLabel(validatedCurrentStep, totalSteps)}
        </StyledStepLabel>
        {showProgressIndicator ? (
          <StyledProgressIndicatorBar data-element="progress-indicator-bar">
            {progressIndicators}
          </StyledProgressIndicatorBar>
        ) : null}
      </StyledStepLabelAndProgress>
    </StyledStepFlow>
  );
};

export default StepFlow;
