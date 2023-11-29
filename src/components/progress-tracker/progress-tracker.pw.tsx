import { expect, test } from "@playwright/experimental-ct-react17";
import React from "react";

import {
  progressTrackerComponent,
  progressTrackerCustomValuePreposition,
  progressTrackerDescription,
  progressTrackerLine,
  progressTrackerMaxVal,
  progressTrackerMinVal,
} from "../../../playwright/components/progress-tracker";
import { CHARACTERS } from "../../../playwright/support/constants";
import {
  assertCssValueIsApproximately,
  checkAccessibility,
  checkCSSOutline,
} from "../../../playwright/support/helper";
import { ProgressTrackerProps } from "../progress-tracker";
import { ProgressTrackerComponent } from "./components.test-pw";
import { PROGRESS_TRACKER_SIZES } from "./progress-tracker.config";

const DEFAULT_PROP_VALUE = 50;

const checkPropName = (propName: string) =>
  propName.endsWith("now") &&
  propName.endsWith("min") &&
  propName.endsWith("max");

const getProps = (propName: string, shouldBeDefault: boolean) => {
  if (!shouldBeDefault) {
    return {
      [propName]: DEFAULT_PROP_VALUE,
    };
  }
  return {
    [propName]: CHARACTERS.STANDARD,
  };
};

test.describe("Check props for ProgressTracker component", () => {
  ([
    "aria-label",
    "aria-describedby",
    "aria-valuenow",
    "aria-valuemin",
    "aria-valuemax",
    "aria-valuetext",
  ] as const).forEach((propName) => {
    test.describe(`When ${propName} prop is passed`, () => {
      test(`verify that the ${propName} is set to cypress-standard`, async ({
        mount,
        page,
      }) => {
        const isNowMinOrMax = checkPropName(propName);
        const props = getProps(propName, isNowMinOrMax);
        const assertion = isNowMinOrMax
          ? CHARACTERS.STANDARD
          : DEFAULT_PROP_VALUE;

        await mount(<ProgressTrackerComponent {...props} />);

        const progressTrackerComponentElement = progressTrackerComponent(page);
        await expect(progressTrackerComponentElement).toHaveAttribute(
          propName,
          String(assertion)
        );
      });
    });
  });

  ([
    [PROGRESS_TRACKER_SIZES[0], 4],
    [PROGRESS_TRACKER_SIZES[1], 8],
    [PROGRESS_TRACKER_SIZES[2], 16],
  ] as [ProgressTrackerProps["size"], number][]).forEach(([size, value]) => {
    test(`render component with ${size} size`, async ({ mount, page }) => {
      await mount(<ProgressTrackerComponent size={size} />);

      const progressTrackerLineElement = progressTrackerLine(page);
      await assertCssValueIsApproximately(
        progressTrackerLineElement,
        "height",
        value
      );
    });
  });

  ([150, 350, 550] as const).forEach((length) => {
    test(`render component with ${length} px length`, async ({
      mount,
      page,
    }) => {
      await mount(<ProgressTrackerComponent length={`${length}px`} />);

      const progressTrackerComponentElement = progressTrackerComponent(page);
      await assertCssValueIsApproximately(
        progressTrackerComponentElement,
        "width",
        length
      );
    });
  });

  ([
    [12, "rgb(51, 91, 112)"],
    [47, "rgb(51, 91, 112)"],
    [100, "rgb(0, 138, 33)"],
  ] as const).forEach(([progress, color]) => {
    test(`render component with ${progress}% of progress`, async ({
      mount,
      page,
    }) => {
      await mount(<ProgressTrackerComponent progress={progress} />);

      const progressTrackerComponentElement = progressTrackerComponent(page);
      await expect(progressTrackerComponentElement).toHaveAttribute(
        "aria-valuenow",
        String(progress)
      );
      await expect(progressTrackerComponentElement).toBeVisible();

      const progressTrackerLineElement = progressTrackerLine(page);
      await expect(progressTrackerLineElement).toHaveCSS(
        "background-color",
        color
      );
    });
  });

  test("render component with error prop", async ({ mount, page }) => {
    await mount(
      <ProgressTrackerComponent error showDefaultLabels progress={35} />
    );

    const progressTrackerLineElement = progressTrackerLine(page);
    await expect(progressTrackerLineElement).toHaveCSS(
      "background-color",
      "rgb(203, 55, 74)"
    );

    const progressTrackerLineElementParent = progressTrackerLine(page).locator(
      ".."
    );
    await checkCSSOutline(
      progressTrackerLineElementParent,
      "1px",
      "border",
      "solid",
      "rgb(203, 55, 74)"
    );
  });

  ([true, false] as const).forEach((boolean) => {
    test(`render component with showDefaultLabels is set to ${boolean}`, async ({
      mount,
      page,
    }) => {
      await mount(<ProgressTrackerComponent showDefaultLabels={boolean} />);
      const labelElement = page.getByText("50%");

      if (boolean) {
        await expect(labelElement).toBeInViewport();
      } else {
        await expect(labelElement).not.toBeInViewport();
      }
    });
  });

  ([CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const).forEach(
    (currentProgressLabel) => {
      test(`render component with currentProgressLabel is set to ${currentProgressLabel}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent
            currentProgressLabel={currentProgressLabel}
          />
        );

        const progressTrackerMinValElement = progressTrackerMinVal(page);
        await expect(progressTrackerMinValElement).toHaveText(
          currentProgressLabel
        );
      });
    }
  );

  ([CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const).forEach(
    (maxProgressLabel) => {
      test(`render component with maxProgressLabel is set to ${maxProgressLabel}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent maxProgressLabel={maxProgressLabel} />
        );

        const progressTrackerMaxValElement = progressTrackerMaxVal(page);
        await expect(progressTrackerMaxValElement).toHaveText(maxProgressLabel);
      });
    }
  );

  ([CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const).forEach(
    (customValuePreposition) => {
      test(`render component with customValuePreposition is set to ${customValuePreposition}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent
            customValuePreposition={customValuePreposition}
            showDefaultLabels
          />
        );

        const progressTrackerCustomValuePrepositionElement = progressTrackerCustomValuePreposition(
          page
        );
        await expect(progressTrackerCustomValuePrepositionElement).toHaveText(
          customValuePreposition
        );
      });
    }
  );

  ([
    ["top", 0, 2],
    ["bottom", 1, 3],
  ] as [ProgressTrackerProps["labelsPosition"], number, number][]).forEach(
    ([labelsPosition, minValIndex, maxValIndex]) => {
      test(`render component with labelsPosition is set to ${labelsPosition}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent labelsPosition={labelsPosition} />
        );

        const progressTrackerMinValElementIndex = progressTrackerMinVal(
          page,
          minValIndex
        );
        await expect(progressTrackerMinValElementIndex).toHaveText("50%");

        const progressTrackerMaxValElementIndex = progressTrackerMaxVal(
          page,
          maxValIndex
        );
        await expect(progressTrackerMaxValElementIndex).toHaveText("100%");
      });
    }
  );

  ([CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const).forEach(
    (description) => {
      test(`render component with description prop set to ${description}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent
            showDefaultLabels
            description={description}
          />
        );

        const progressTrackerDescriptionElement = progressTrackerDescription(
          page
        );
        await expect(progressTrackerDescriptionElement).toHaveText(description);
      });
    }
  );

  test("has the expected border radius styling", async ({ mount, page }) => {
    await mount(<ProgressTrackerComponent progress={35} />);

    const progressTrackerLineElementParent = progressTrackerLine(page).locator(
      ".."
    );
    await expect(progressTrackerLineElementParent).toHaveCSS(
      "border-radius",
      "32px"
    );
    const progressTrackerLineElement = progressTrackerLine(page);
    await expect(progressTrackerLineElement).toHaveCSS("border-radius", "32px");
  });
});

test.describe("Accessibility tests", () => {
  ([
    "aria-label",
    "aria-describedby",
    "aria-valuenow",
    "aria-valuemin",
    "aria-valuemax",
    "aria-valuetext",
  ] as const).forEach((propName) => {
    test.describe(`when ${propName} prop is passed`, () => {
      test(`check the accessibility when the ${propName} is set to cypress-standard`, async ({
        mount,
        page,
      }) => {
        const isNowMinOrMax = checkPropName(propName);
        const props = getProps(propName, isNowMinOrMax);
        await mount(<ProgressTrackerComponent {...props} />);

        await checkAccessibility(page);
      });
    });
  });

  ([
    PROGRESS_TRACKER_SIZES[0],
    PROGRESS_TRACKER_SIZES[1],
    PROGRESS_TRACKER_SIZES[2],
  ] as ProgressTrackerProps["size"][]).forEach((size) => {
    test(`should check the accessibility when component is rendered with ${size} size`, async ({
      mount,
      page,
    }) => {
      await mount(<ProgressTrackerComponent size={size} />);

      await checkAccessibility(page);
    });
  });

  (["150px", "350px", "550px"] as const).forEach((length) => {
    test(`should check the accessibility when component is rendered ${length} length`, async ({
      mount,
      page,
    }) => {
      await mount(<ProgressTrackerComponent length={length} />);

      await checkAccessibility(page);
    });
  });

  ([12, 47, 100] as const).forEach((progress) => {
    test(`should check the accessibility when component is rendered with ${progress}% of progress`, async ({
      mount,
      page,
    }) => {
      await mount(<ProgressTrackerComponent progress={progress} />);

      await checkAccessibility(page);
    });
  });

  test("should check the accessibility when component is rendered with error prop", async ({
    mount,
    page,
  }) => {
    await mount(
      <ProgressTrackerComponent error showDefaultLabels progress={35} />
    );
    await checkAccessibility(page);
  });

  ([true, false] as const).forEach((boolean) => {
    test(`should check the accessibility when component is rendered with showDefaultLabels is set to ${boolean}`, async ({
      mount,
      page,
    }) => {
      await mount(<ProgressTrackerComponent showDefaultLabels={boolean} />);

      await checkAccessibility(page);
    });
  });

  ([CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const).forEach(
    (currentProgressLabel) => {
      test(`should check the accessibility when component is rendered with currentProgressLabel is set to ${currentProgressLabel}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent
            currentProgressLabel={currentProgressLabel}
          />
        );

        await checkAccessibility(page);
      });
    }
  );

  ([CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const).forEach(
    (maxProgressLabel) => {
      test(`should check the accessibility when component is rendered with maxProgressLabel is set to ${maxProgressLabel}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent maxProgressLabel={maxProgressLabel} />
        );

        await checkAccessibility(page);
      });
    }
  );

  ([CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const).forEach(
    (customValuePreposition) => {
      test(`should check the accessibility when component is rendered with customValuePreposition is set to ${customValuePreposition}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent
            customValuePreposition={customValuePreposition}
            showDefaultLabels
          />
        );

        await checkAccessibility(page);
      });
    }
  );

  (["top", "bottom"] as ProgressTrackerProps["labelsPosition"][]).forEach(
    (labelsPosition) => {
      test(`should check the accessibility when component is rendered with labelsPosition is set to ${labelsPosition}`, async ({
        mount,
        page,
      }) => {
        await mount(
          <ProgressTrackerComponent labelsPosition={labelsPosition} />
        );

        await checkAccessibility(page);
      });
    }
  );

  ([CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const).forEach(
    (description) => {
      test(`should check the accessibility when component is rendered with description prop set to ${description}`, async ({
        mount,
        page,
      }) => {
        await mount(<ProgressTrackerComponent description={description} />);

        await checkAccessibility(page);
      });
    }
  );
});
