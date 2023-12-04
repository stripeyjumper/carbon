import { expect, test } from "@playwright/experimental-ct-react17";
import { Page } from "@playwright/test";
import React from "react";
import { getDataElementByValue, icon } from "../../../playwright/components";
import {
  dateRangeComponentInput,
  dateRangeComponentLabel,
} from "../../../playwright/components/date-range/index";
import {
  ERROR_ICON,
  ICON,
  INFO_ICON,
  WARNING_ICON,
} from "../../../playwright/components/locators";
import { CHARACTERS, VALIDATION } from "../../../playwright/support/constants";
import {
  checkAccessibility,
  waitForAnimationEnd,
} from "../../../playwright/support/helper";
import { DateRangeCustom, DateRangeNewValidation } from "./components.test-pw";
import { DateRangeProps } from "./date-range.component";
import {
  END_DATE,
  START_DATE,
} from "../../../playwright/components/date-range/locators";

const testText = "test_playwright";
const testData = [CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS] as const;
const START_DATE_RANGE_INDEX = 0;
const END_DATE_RANGE_INDEX = 1;

const checkInputColor = async (page: Page, index: number, color: string) => {
  const dateRangeComponentInputElementIndexParent = dateRangeComponentInput(
    page,
    index
  ).locator("..");

  await expect(dateRangeComponentInputElementIndexParent).toHaveCSS(
    "border-bottom-color",
    color
  );

  await expect(dateRangeComponentInputElementIndexParent).toHaveCSS(
    "border-left-color",
    color
  );

  await expect(dateRangeComponentInputElementIndexParent).toHaveCSS(
    "border-right-color",
    color
  );

  await expect(dateRangeComponentInputElementIndexParent).toHaveCSS(
    "border-top-color",
    color
  );
};

test.describe("Functionality tests for DateRange component", () => {
  testData.forEach((startLabel) => {
    test(`should check the startLabel renders as ${startLabel}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom startLabel={startLabel} />);

      const dateRangeStartDateLabelElement = dateRangeComponentLabel(
        page,
        START_DATE_RANGE_INDEX
      );

      await expect(dateRangeStartDateLabelElement).toHaveText(startLabel);
    });
  });

  testData.forEach((endLabel) => {
    test(`should check the endLabel renders as ${endLabel}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom endLabel={endLabel} />);

      const dateRangeComponentLabelElementEndDateRange = dateRangeComponentLabel(
        page,
        END_DATE_RANGE_INDEX
      );

      await expect(dateRangeComponentLabelElementEndDateRange).toHaveText(
        endLabel
      );
    });
  });

  testData.forEach((startError) => {
    test(`should check the startError as string renders as ${startError}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom startError={startError} />);

      const dateRangeComponentInputElementICON = dateRangeComponentInput(
        page,
        START_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(ICON);
      await dateRangeComponentInputElementICON.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );

      await expect(getDataElementByValueElementTooltip).toHaveText(startError);
      await checkInputColor(page, START_DATE_RANGE_INDEX, VALIDATION.ERROR);
    });
  });

  testData.forEach((endError) => {
    test(`should check the endError as string renders as ${endError}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom endError={endError} />);

      const dateRangeComponentInputElementIcon = dateRangeComponentInput(
        page,
        END_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(ICON);
      await dateRangeComponentInputElementIcon.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );

      await expect(getDataElementByValueElementTooltip).toHaveText(endError);
      await checkInputColor(page, END_DATE_RANGE_INDEX, VALIDATION.ERROR);
    });
  });

  testData.forEach((startWarning) => {
    test(`should check the startWarning as string renders as ${startWarning}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom startWarning={startWarning} />);

      const dateRangeComponentInputElementIcon = dateRangeComponentInput(
        page,
        START_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(ICON);
      await dateRangeComponentInputElementIcon.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );

      await expect(getDataElementByValueElementTooltip).toHaveText(
        startWarning
      );
      await checkInputColor(page, START_DATE_RANGE_INDEX, VALIDATION.WARNING);
    });
  });

  testData.forEach((endWarning) => {
    test(`should check the endWarning as string renders as ${endWarning}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom endWarning={endWarning} />);

      const dateRangeComponentInputElementIcon = dateRangeComponentInput(
        page,
        END_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(ICON);
      await dateRangeComponentInputElementIcon.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );

      await expect(getDataElementByValueElementTooltip).toHaveText(endWarning);
      await checkInputColor(page, END_DATE_RANGE_INDEX, VALIDATION.WARNING);
    });
  });

  testData.forEach((startInfo) => {
    test(`should check the startInfo as string renders as ${startInfo}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom startInfo={startInfo} />);

      const dateRangeComponentInputElementIcon = dateRangeComponentInput(
        page,
        START_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(ICON);
      await dateRangeComponentInputElementIcon.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );

      await expect(getDataElementByValueElementTooltip).toHaveText(startInfo);
      await checkInputColor(page, START_DATE_RANGE_INDEX, VALIDATION.INFO);
    });
  });

  testData.forEach((endInfo) => {
    test(`should check the endInfo as string renders as ${endInfo}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom endInfo={endInfo} />);

      const dateRangeComponentInputElementIcon = dateRangeComponentInput(
        page,
        END_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(ICON);
      await dateRangeComponentInputElementIcon.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );

      await expect(getDataElementByValueElementTooltip).toHaveText(endInfo);
      await checkInputColor(page, END_DATE_RANGE_INDEX, VALIDATION.INFO);
    });
  });

  test("should check the startError as boolean", async ({ mount, page }) => {
    await mount(<DateRangeCustom startError />);

    await checkInputColor(page, START_DATE_RANGE_INDEX, VALIDATION.ERROR);
  });

  test("should check the endError as boolean", async ({ mount, page }) => {
    await mount(<DateRangeCustom endError />);

    await checkInputColor(page, END_DATE_RANGE_INDEX, VALIDATION.ERROR);
  });

  test("should check the startWarning as boolean", async ({ mount, page }) => {
    await mount(<DateRangeCustom startWarning />);

    await checkInputColor(page, START_DATE_RANGE_INDEX, VALIDATION.WARNING);
  });

  test("should check the endWarning as boolean", async ({ mount, page }) => {
    await mount(<DateRangeCustom endWarning />);

    await checkInputColor(page, END_DATE_RANGE_INDEX, VALIDATION.WARNING);
  });

  test("should check the startInfo as boolean", async ({ mount, page }) => {
    await mount(<DateRangeCustom startInfo />);

    await checkInputColor(page, START_DATE_RANGE_INDEX, VALIDATION.INFO);
  });

  test("should check the endInfo as boolean", async ({ mount, page }) => {
    await mount(<DateRangeCustom endInfo />);

    await checkInputColor(page, END_DATE_RANGE_INDEX, VALIDATION.INFO);
  });

  testData.forEach((error) => {
    test(`should check the validationOnLabel with error state as ${error}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <DateRangeCustom
          startError={error}
          endError={error}
          validationOnLabel
        />
      );

      const dateRangeComponentLabelElementStartDateIcon = dateRangeComponentLabel(
        page,
        START_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(ERROR_ICON);

      await dateRangeComponentLabelElementStartDateIcon.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );
      await waitForAnimationEnd(getDataElementByValueElementTooltip);
      await expect(getDataElementByValueElementTooltip).toHaveText(error);

      await page.hover("body"); // hover on body to close the tooltip

      const dateRangeComponentLabelElementIcon = dateRangeComponentLabel(
        page,
        END_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(ERROR_ICON);
      await dateRangeComponentLabelElementIcon.hover();
      await waitForAnimationEnd(getDataElementByValueElementTooltip);

      await expect(getDataElementByValueElementTooltip).toHaveText(error);
    });
  });

  testData.forEach((warning) => {
    test(`should check the validationOnLabel with warning state as ${warning}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <DateRangeCustom
          startWarning={warning}
          endWarning={warning}
          validationOnLabel
        />
      );

      const dateRangeComponentLabelElementStartDateWarningIcon = dateRangeComponentLabel(
        page,
        START_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(WARNING_ICON);
      await dateRangeComponentLabelElementStartDateWarningIcon.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );
      await waitForAnimationEnd(getDataElementByValueElementTooltip);

      await expect(getDataElementByValueElementTooltip).toHaveText(warning);

      await page.hover("body"); // hover on body to close the tooltip

      const dateRangeComponentLabelElementEndDateWarningIcon = dateRangeComponentLabel(
        page,
        END_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(WARNING_ICON);
      await dateRangeComponentLabelElementEndDateWarningIcon.hover();
      await waitForAnimationEnd(getDataElementByValueElementTooltip);

      await expect(getDataElementByValueElementTooltip).toHaveText(warning);
    });
  });

  testData.forEach((info) => {
    test(`should check the validationOnLabel with info state as ${info}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <DateRangeCustom startInfo={info} endInfo={info} validationOnLabel />
      );
      const dateRangeComponentLabelElementStartDateInfoIcon = dateRangeComponentLabel(
        page,
        START_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(INFO_ICON);

      await dateRangeComponentLabelElementStartDateInfoIcon.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );
      await waitForAnimationEnd(getDataElementByValueElementTooltip);

      await expect(getDataElementByValueElementTooltip).toHaveText(info);

      await page.hover("body"); // hover on body to close the tooltip

      const dateRangeComponentLabelElementEndDateInfoIcon = dateRangeComponentLabel(
        page,
        END_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator(INFO_ICON);

      await dateRangeComponentLabelElementEndDateInfoIcon.hover();
      await waitForAnimationEnd(getDataElementByValueElementTooltip);
      await expect(getDataElementByValueElementTooltip).toHaveText(info);
    });
  });

  ([
    [true, "top", "flex"],
    [false, "bottom", "block"],
  ] as const).forEach(([boolean, cssValue, displayValue]) => {
    test(`should check the labelsInline prop is set to ${boolean}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom labelsInline={boolean} />);

      const startDateElement = page.locator(START_DATE);

      await expect(startDateElement).toHaveCSS("vertical-align", cssValue);

      const dateRangeComponentLabelElementStartDateParent = dateRangeComponentLabel(
        page,
        START_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator("..");

      await expect(dateRangeComponentLabelElementStartDateParent).toHaveCSS(
        "display",
        displayValue
      );

      const endDateElement = page.locator(END_DATE);

      await expect(endDateElement).toHaveCSS("vertical-align", cssValue);

      const dateRangeComponentLabelElementEndDateIndexParent = dateRangeComponentLabel(
        page,
        END_DATE_RANGE_INDEX
      )
        .locator("..")
        .locator("..");

      await expect(dateRangeComponentLabelElementEndDateIndexParent).toHaveCSS(
        "display",
        displayValue
      );
    });
  });

  test("should check the startDateProps prop", async ({ mount, page }) => {
    await mount(
      <DateRangeCustom
        startDateProps={{
          disabled: true,
        }}
      />
    );

    const startDateInput = getDataElementByValue(page, "input").nth(
      START_DATE_RANGE_INDEX
    );

    await expect(startDateInput).toHaveAttribute("disabled", "");
  });

  test("should check the endDateProps prop", async ({ mount, page }) => {
    await mount(
      <DateRangeCustom
        endDateProps={{
          disabled: true,
        }}
      />
    );

    const endDateInput = getDataElementByValue(page, "input").nth(
      END_DATE_RANGE_INDEX
    );

    await expect(endDateInput).toHaveAttribute("disabled", "");
  });

  (["top", "bottom", "left", "right"] as const).forEach((position) => {
    test(`should check the tooltipPosition is set to ${position}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <DateRangeCustom
          m={9}
          tooltipPosition={position}
          startError={testText}
        />
      );

      const iconElement = icon(page);
      await iconElement.nth(0).hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );
      await expect(getDataElementByValueElementTooltip).toHaveAttribute(
        "data-placement",
        position
      );

      await page.hover("body"); // hover on body to close the tooltip
    });
  });
});

test.describe("Event tests for DateRange component", () => {
  ([0, 1] as const).forEach((inputIndex) => {
    test(`should call onChange callback when a clear event is triggered on ${inputIndex} DateRange input`, async ({
      mount,
      page,
    }) => {
      let callbackCount = 0;
      await mount(
        <DateRangeCustom
          onChange={() => {
            callbackCount += 1;
          }}
        />
      );

      const getDataElementByValueElementInputEqInputIndex = getDataElementByValue(
        page,
        "input"
      ).nth(inputIndex);
      await getDataElementByValueElementInputEqInputIndex.clear();

      await expect(callbackCount).toEqual(1);
    });
  });

  ([0, 1] as const).forEach((inputIndex) => {
    test(`should call onChange callback when a type event is triggered on ${inputIndex} DateRange input`, async ({
      mount,
      page,
    }) => {
      let callbackCount = 0;
      await mount(
        <DateRangeCustom
          onChange={() => {
            callbackCount += 1;
          }}
        />
      );

      const getDataElementByValueElementInputEqInputIndex = getDataElementByValue(
        page,
        "input"
      ).nth(inputIndex);
      await getDataElementByValueElementInputEqInputIndex.type("01/10/2022");

      await expect(callbackCount).toEqual(10);
    });
  });

  test("should call onBlur callback when a blur event is triggered", async ({
    mount,
    page,
  }) => {
    let callbackCount = 0;
    await mount(
      <DateRangeCustom
        onBlur={() => {
          callbackCount += 1;
        }}
      />
    );

    const getDataElementByValueElementInputEq0 = getDataElementByValue(
      page,
      "input"
    ).nth(0);
    await getDataElementByValueElementInputEq0.press("Tab");

    await expect(callbackCount).toEqual(0);

    const focusedElement = page.locator("*:focus");
    await focusedElement.press("Tab");
    await page.locator("body").click();

    await expect(callbackCount).toEqual(1);
  });

  test("should check name and id props", async ({ mount, page }) => {
    let callbackCount = 0;
    await mount(
      <DateRangeCustom
        onChange={() => {
          callbackCount += 1;
        }}
        name={testText}
        id={testText}
      />
    );

    const getDataElementByValueElementInputEq0 = getDataElementByValue(
      page,
      "input"
    ).nth(0);
    await getDataElementByValueElementInputEq0.type("1");

    await expect(callbackCount).toEqual(1);
  });
});

test.describe("Accessibility tests for Date Range", () => {
  testData.forEach((startLabel) => {
    test(`should check accessibility with the startLabel renders as ${startLabel}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom startLabel={startLabel} />);

      await checkAccessibility(page);
    });
  });

  testData.forEach((endLabel) => {
    test(`should check accessibility with the endLabel renders as ${endLabel}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom endLabel={endLabel} />);

      await checkAccessibility(page);
    });
  });

  testData.forEach((startError) => {
    test(`should check accessibility with the startError as string renders as ${startError}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom startError={startError} />);

      await checkAccessibility(page);
    });
  });

  testData.forEach((endError) => {
    test(`should check accessibility with the endError as string renders as ${endError}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom endError={endError} />);

      await checkAccessibility(page);
    });
  });

  testData.forEach((startWarning) => {
    test(`should check accessibility with the startWarning as string renders as ${startWarning}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom startWarning={startWarning} />);

      await checkAccessibility(page);
    });
  });

  testData.forEach((endWarning) => {
    test(`should check accessibility with the endWarning as string renders as ${endWarning}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom endWarning={endWarning} />);

      await checkAccessibility(page);
    });
  });

  testData.forEach((startInfo) => {
    test(`should check accessibility with the startInfo as string renders as ${startInfo}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom startInfo={startInfo} />);

      await checkAccessibility(page);
    });
  });

  testData.forEach((endInfo) => {
    test(`should check accessibility with the endInfo as string renders as ${endInfo}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom endInfo={endInfo} />);

      await checkAccessibility(page);
    });
  });

  testData.forEach((error) => {
    test(`should check accessibility with the validationOnLabel with error state as ${error}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <DateRangeCustom
          startError={error}
          endError={error}
          validationOnLabel
        />
      );

      await checkAccessibility(page);
    });
  });

  testData.forEach((warning) => {
    test(`should check accessibility with the validationOnLabel with warning state as ${warning}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <DateRangeCustom
          startWarning={warning}
          endWarning={warning}
          validationOnLabel
        />
      );

      await checkAccessibility(page);
    });
  });

  testData.forEach((info) => {
    test(`should check accessibility with the validationOnLabel with info state as ${info}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <DateRangeCustom startInfo={info} endInfo={info} validationOnLabel />
      );

      await checkAccessibility(page);
    });
  });

  ([
    "top",
    "bottom",
    "left",
    "right",
  ] as DateRangeProps["tooltipPosition"][]).forEach((position) => {
    test(`should check accessibility with the tooltipPosition is set to ${position}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <DateRangeCustom
          m={9}
          tooltipPosition={position}
          startError={testText}
        />
      );
      const errorIconElement = getDataElementByValue(page, "error");
      await errorIconElement.hover();
      const getDataElementByValueElementTooltip = getDataElementByValue(
        page,
        "tooltip"
      );

      await checkAccessibility(page, getDataElementByValueElementTooltip);

      await page.hover("body"); // hover on body to close the tooltip
    });
  });

  test("should check accessibility with the startError as boolean", async ({
    mount,
    page,
  }) => {
    await mount(<DateRangeCustom startError />);

    await checkAccessibility(page);
  });

  test("should check accessibility with the endError as boolean", async ({
    mount,
    page,
  }) => {
    await mount(<DateRangeCustom endError />);

    await checkAccessibility(page);
  });

  test("should check accessibility with the startWarning as boolean", async ({
    mount,
    page,
  }) => {
    await mount(<DateRangeCustom startWarning />);

    await checkAccessibility(page);
  });

  test("should check accessibility with the endWarning as boolean", async ({
    mount,
    page,
  }) => {
    await mount(<DateRangeCustom endWarning />);

    await checkAccessibility(page);
  });

  test("should check accessibility with the startInfo as boolean", async ({
    mount,
    page,
  }) => {
    await mount(<DateRangeCustom startInfo />);

    await checkAccessibility(page);
  });

  test("should check accessibility with the endInfo as boolean", async ({
    mount,
    page,
  }) => {
    await mount(<DateRangeCustom endInfo />);

    await checkAccessibility(page);
  });

  ([true, false] as const).forEach((boolean) => {
    test(`should check accessibility with the labelsInline prop is set to ${boolean}`, async ({
      mount,
      page,
    }) => {
      await mount(<DateRangeCustom labelsInline={boolean} />);

      await checkAccessibility(page);
    });
  });

  test("should check accessibility with the startDateProps prop", async ({
    mount,
    page,
  }) => {
    await mount(
      <DateRangeCustom
        startDateProps={{
          disabled: true,
        }}
      />
    );

    await checkAccessibility(page);
  });

  test("should check accessibility with the endDateProps prop", async ({
    mount,
    page,
  }) => {
    await mount(
      <DateRangeCustom
        endDateProps={{
          disabled: true,
        }}
      />
    );

    await checkAccessibility(page);
  });

  test("should check accessibility with new validation", async ({
    mount,
    page,
  }) => {
    await mount(<DateRangeNewValidation />);

    await checkAccessibility(page);
  });
});
