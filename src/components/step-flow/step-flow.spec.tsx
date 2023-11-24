import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { assertStyleMatch } from "../../__spec_helper__/test-utils";
import { StepFlow, StepFlowProps } from "./index";
import {
  StyledCategoryText,
  StyledProgressIndicator,
  StyledProgressIndicatorBar,
  StyledStepLabel,
  StyledTitleText,
} from "./step-flow.style";
import { Steps } from "./step-flow.component";
import IconButton from "../icon-button/icon-button.component";

function renderStepFlow(props: Partial<StepFlowProps>) {
  return mount(
    <StepFlow title="foo" currentStep={5} totalSteps={6} {...props} />
  );
}

function renderEmptyStepFlow(props: StepFlowProps) {
  return mount(<StepFlow {...props} />);
}

/** Generates the correct case of every possible prop variation, currentStep will never be higher
 * than totalStep. Intended for when we're testing how the component should be used. correctly
 * */

function generateLimitedVariations(): [Steps, Steps][] {
  const variations: [Steps, Steps][] = [];

  for (let totalSteps = 1; totalSteps <= 8; totalSteps++) {
    for (let currentStep = 1; currentStep <= totalSteps; currentStep++) {
      variations.push([totalSteps as Steps, currentStep as Steps]);
    }
  }

  return variations;
}

/** Generates correct case of some possible prop variation's, however totalStep will always be
 * higher than currentStep. Only intended for testing this specific, correct use case.
 * */

  function generateTotalStepsOverCurrentStepVariations(): [Steps, Steps][] {
    const variations: [Steps, Steps][] = [];
  
    for (let totalSteps = 2; totalSteps <= 8; totalSteps++) {
      for (let currentStep = 1; currentStep < totalSteps; currentStep++) {
        variations.push([totalSteps as Steps, currentStep as Steps]);
      }
    }
  
    return variations;
  }

/** Generates the every possible prop variation, however currentStep will sometimes be
 * higher than totalStep. Intended for testing how the component should be used, and potentially when it is
 * misused.*/

function generateUnlimitedVariations(): [Steps, Steps][] {
  const variations: [Steps, Steps][] = [];

  for (let totalSteps = 1; totalSteps <= 8; totalSteps++) {
    for (let currentStep = 1; currentStep <= 8; currentStep++) {
      variations.push([totalSteps as Steps, currentStep as Steps]);
    }
  }

  return variations;
}

/** Generates some possible prop variation's, however currentStep will always be
 * higher than totalStep. Only intended for testing if the component is misused.
 * */

function generateCurrentStepOverTotalStepsVariations(): [Steps, Steps][] {
    const variations: [Steps, Steps][] = [];
  
    for (let totalSteps = 1; totalSteps <= 8; totalSteps++) {
      for (let currentStep = totalSteps + 1; currentStep <= 8; currentStep++) {
        variations.push([totalSteps as Steps, currentStep as Steps]);
      }
    }
  
    return variations;
  }


  function createIndexedArray (totalSteps: number) {
    const totalStepsArray = Array.from(
      { length: totalSteps },
      (_, index) => index + 1
    );

    return totalStepsArray;
  }

describe("Step Flow component", () => {
  let wrapper: ReactWrapper;
  const allLimitedVariations: [Steps, Steps][] = generateLimitedVariations();
  const allUnlimitedVariations: [
    Steps,
    Steps
  ][] = generateUnlimitedVariations();

  const allCurrentStepOverTotalStepsVariations: [Steps, Steps][] = generateCurrentStepOverTotalStepsVariations();
  const allCurrentTotalStepsOverCurrentStepVariations: [Steps, Steps][] = generateTotalStepsOverCurrentStepVariations();

  describe("prop checks", () => {
    it("when the 'category' prop is passed, the correct element and text renders", () => {
      wrapper = renderStepFlow({ category: "bar" });
      expect(wrapper.find(StyledCategoryText).text()).toBe("bar");
    });

    it("when the 'title' prop is passed, the correct element and text renders", () => {
      wrapper = renderEmptyStepFlow({
        title: "baz",
        totalSteps: 6,
        currentStep: 1,
      });
      expect(wrapper.find(StyledTitleText).text()).toBe("baz");
    });

    it("when the 'showProgressIndicator' prop is true, the correct element renders", () => {
      wrapper = renderStepFlow({ showProgressIndicator: true });
      expect(wrapper.find(StyledProgressIndicatorBar).exists()).toBeTruthy();
    });

    it.each(allUnlimitedVariations)(
      "when 'totalSteps' is passed as %s and 'currentStep' prop is %s, the step label contains the correct values",
      (totalSteps, currentStep) => {
        if (currentStep > totalSteps) {
          wrapper = renderEmptyStepFlow({
            title: "baz",
            totalSteps,
            currentStep,
          });
          expect(wrapper.find(StyledStepLabel).text()).toBe(
            `${totalSteps} of ${totalSteps}`
          );
        } else {
          wrapper = renderEmptyStepFlow({
            title: "baz",
            totalSteps,
            currentStep,
          });
          expect(wrapper.find(StyledStepLabel).text()).toBe(
            `${currentStep} of ${totalSteps}`
          );
        }
      }
    );

    it.each(allLimitedVariations)(
      "when 'totalSteps' prop is passed as %s and 'showProgressIndicator' is true, the correct amount of progress indicators are rendered",
      (steps) => {
        wrapper = renderEmptyStepFlow({
          title: "baz",
          totalSteps: steps,
          currentStep: steps,
          showProgressIndicator: true,
        });
        expect(wrapper.find(StyledProgressIndicator).length).toBe(steps);
      }
    );

    it("when the 'showCloseIcon' prop is true, the correct element renders", () => {
      wrapper = renderStepFlow({ showCloseIcon: true });
      expect(wrapper.find(IconButton).exists()).toBeTruthy();
    });
  });

  describe("functionality checks", () => {
    it.each(allLimitedVariations)(
      "when 'totalSteps' is passed as %s and 'currentStep' prop is %s, the correct current progress indicator should be active",
      (totalSteps, currentStep) => {
        wrapper = renderEmptyStepFlow({
          title: "baz",
          totalSteps,
          currentStep,
          showProgressIndicator: true,
        });

        /** here we're finding the `StyledProgressIndicator` in the DOM, our internal array of indicators is 1-8,
        however .at() starts at 0, so to find the correct indicator here, we have to do the currentStep -1 to find
        the correct DOM element, our first element is 0, second is 1 and so forth. 
        */

        const progressIndicators = wrapper
          .find(StyledProgressIndicator)
          .at(currentStep - 1);

          expect(progressIndicators.prop("isCompleted")).toBeFalsy();
          expect(progressIndicators.prop("isInProgress")).toBeTruthy();

        assertStyleMatch(
          {
            backgroundColor: "var(--colorsUtilityYin090)",
          },
          progressIndicators
        );
      }
    );

    it.each(allLimitedVariations)(
      "when 'totalSteps' is passed as %s and 'currentStep' prop is %s, the correct progress indicators should be marked as completed",
      (totalSteps, currentStep) => {

        /**  here we're slicing from the currentStep, however this would leave the current step
        in the array, so we have to go one further back. Lets say we have 6 total steps, 5 being the current
        this will now leave [1, 2, 3, 4] opposed to [1, 2, 3, 4, 5] beforehand. 
        */

        let totalStepsArray = createIndexedArray(totalSteps).slice(0, currentStep - 1);

        /** we then use a .map to shift everything down a peg to ensure we can use the .at() down the line properly
        as mentioned before our internal array of progress indicators is 1-8, whereas .at() starts at 0.
         */

        totalStepsArray = totalStepsArray.map((step) => step - 1); 

        totalStepsArray.map((step) => {
          wrapper = renderEmptyStepFlow({
            title: "baz",
            totalSteps,
            currentStep,
            showProgressIndicator: true,
          });
          const progressIndicators = wrapper
            .find(StyledProgressIndicator)
            .at(step);
          expect(progressIndicators.prop("isCompleted")).toBeTruthy();
          expect(progressIndicators.prop("isInProgress")).toBeFalsy();

          assertStyleMatch(
            {
              backgroundColor: "var(--colorsSemanticPositive500)",
            },
            progressIndicators
          );

          return null;
        });
      }
    );

    it.each(allCurrentTotalStepsOverCurrentStepVariations)(
      "when 'totalSteps' is passed value (%s) is higher than that of 'currentStep' (%s), the correct progress indicators should be marked as not completed",
      (totalSteps, currentStep) => {

          /**  here we're slicing from currentStep, which will leave us with an array of all other indicators left which are after the indicator in progress.
          for example if we had 6 indicators, and the current indicator in progress was the fifth, this would leave us with an array of [6], or if we had 8
          indicators, and the current indicator in progress was 5, we'd have [6, 7, 8].
          */

          let totalStepsArray = createIndexedArray(totalSteps).slice(currentStep);

        /** Again, we then use a .map to shift everything down a peg to ensure we can use the .at() down the line properly
        as mentioned before our internal array of progress indicators is 1-8, whereas .at() starts at 0. 
        */

          totalStepsArray = totalStepsArray.map((step) => step - 1);

          totalStepsArray.map((step) => {
            wrapper = renderEmptyStepFlow({
              title: "baz",
              totalSteps,
              currentStep,
              showProgressIndicator: true,
            });
            const progressIndicators = wrapper
              .find(StyledProgressIndicator)
              .at(step);
              expect(progressIndicators.prop("isCompleted")).toBeFalsy();
              expect(progressIndicators.prop("isInProgress")).toBeFalsy();

              assertStyleMatch(
                {
                  backgroundColor: "var(--colorsActionDisabled600)",
                },
                progressIndicators
              );

              return null;
          });
        }
    );

    it.each(allCurrentStepOverTotalStepsVariations)(
        "when 'totalSteps's passed value (%s) is lower than that of 'currentStep' (%s) all progress indicators, bar the last should be marked as complete",
        (totalSteps, currentStep) => {

        /** Again, we then use a .map to shift everything down a peg to ensure we can use the .at() down the line properly
        as mentioned before our internal array of progress indicators is 1-8, whereas .at() starts at 0. We then .slice(0, -1)
        to remove the last value from the array, as this will be tested in the test below. 
        */

          const totalStepsArray = createIndexedArray(totalSteps).map((step) => step - 1).slice(0, -1);

            totalStepsArray.map((step) => {

              wrapper = renderEmptyStepFlow({
                title: "baz",
                totalSteps,
                currentStep,
                showProgressIndicator: true,
              });
              const progressIndicators = wrapper
                .find(StyledProgressIndicator)
                .at(step);
                expect(progressIndicators.prop("isCompleted")).toBeTruthy();
                expect(progressIndicators.prop("isInProgress")).toBeFalsy();

                return null;
            }
            );
          }
      );

      it.each(allCurrentStepOverTotalStepsVariations)(
        "when 'totalSteps's passed value (%s) is lower than that of 'currentStep' (%s) the last indicator should be marked as in progress",
        (totalSteps, currentStep) => {

        /** Again, we then use a .map to shift everything down a peg to ensure we can use the .at() down the line properly
        as mentioned before our internal array of progress indicators is 1-8, whereas .at() starts at 0. We then .pop()
        to remove the last value from the array, and store it in this new const (const lastIndicator). 
        */

         const totalStepsArray = createIndexedArray(totalSteps).map((step) => step - 1);
          const lastIndicator = totalStepsArray.pop();

            wrapper = renderEmptyStepFlow({
                title: "baz",
                totalSteps,
                currentStep,
                showProgressIndicator: true,
              });

              const progressIndicators = wrapper
                .find(StyledProgressIndicator)
                .at(lastIndicator as number);
                expect(progressIndicators.prop("isCompleted")).toBeFalsy();
                expect(progressIndicators.prop("isInProgress")).toBeTruthy();
          }
      );
  });
});