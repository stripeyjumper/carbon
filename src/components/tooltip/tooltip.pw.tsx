import React from "react";
import { test, expect } from "@playwright/experimental-ct-react17";
import {
  TooltipComponent,
  UncontrolledTooltipComponent,
  Controlled,
  Positioning,
  FlipBehaviourOverrides,
  LargeTooltip,
  Types,
  ColorOverrides,
} from "./components.test-pw";

import Box from "../../../src/components/box";
import { tooltipPreview } from "../../../playwright/components/tooltip";

import { TooltipPositions } from "../../../src/components/tooltip/tooltip.config";

import {
  checkAccessibility,
  assertCssValueIsApproximately,
} from "../../../playwright/support/helper";

import { SIZE, COLOR, CHARACTERS } from "../../../playwright/support/constants";
import { TooltipProps } from "../../../src/components/tooltip/tooltip.component";
import { getDataElementByValue } from "../../../playwright/components";

const backgroundColors = [COLOR.ORANGE, COLOR.RED, COLOR.BLACK, COLOR.BROWN];

const testData = [CHARACTERS.DIACRITICS, CHARACTERS.SPECIALCHARACTERS];

test.describe("Testing Tooltip component properties", () => {
  testData.forEach((message) => {
    test(`check when message prop is set as ${message}`, async ({
      mount,
      page,
    }) => {
      await mount(<TooltipComponent message={message} />);

      await expect(tooltipPreview(page)).toHaveText(message);
    });
  });

  testData.forEach((id) => {
    test(`check when id prop is set as ${id}`, async ({ mount, page }) => {
      await mount(<TooltipComponent id={id} />);

      await expect(tooltipPreview(page)).toHaveId(id);
    });
  });

  [true, false].forEach((boolVal) => {
    test(`check when tooltip visibility is set as ${boolVal}`, async ({
      mount,
      page,
    }) => {
      await mount(<TooltipComponent isVisible={boolVal} />);

      if (boolVal === true) {
        await expect(tooltipPreview(page)).toBeVisible();
      } else {
        await expect(tooltipPreview(page)).not.toBeVisible();
      }
    });
  });

  (["bottom", "left", "right", "top"] as [
    "bottom",
    "left",
    "right",
    "top"
  ]).forEach((position) => {
    test(`check when tooltip position is set as ${position}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <TooltipComponent position={position}>
          <>{`This tooltip is positioned ${position}`}</>
        </TooltipComponent>
      );

      await expect(tooltipPreview(page)).toBeVisible();
      await expect(tooltipPreview(page)).toHaveAttribute(
        "data-placement",
        position
      );
    });
  });

  ["undefined", "error"].forEach((type) => {
    test(`check when type prop is set as ${type}`, async ({ mount, page }) => {
      await mount(<TooltipComponent type={type} />);

      await expect(tooltipPreview(page)).toHaveAttribute("type", type);
    });
  });

  backgroundColors.forEach((color) => {
    test(`check when tooltip background color is set as ${color}`, async ({
      mount,
      page,
    }) => {
      await mount(<TooltipComponent bgColor={color} />);

      await expect(tooltipPreview(page)).toHaveCSS("background-color", color);
    });
  });

  backgroundColors.forEach((color) => {
    test(`check when tooltip font color is set as ${color}`, async ({
      mount,
      page,
    }) => {
      await mount(<TooltipComponent fontColor={color} />);

      await expect(tooltipPreview(page)).toHaveCSS("color", color);
    });
  });

  ([
    [SIZE.MEDIUM, 14],
    [SIZE.LARGE, 16],
  ] as [TooltipProps["size"], number][]).forEach(([size, fontSize]) => {
    test(`check when size prop is set as ${size}`, async ({ mount, page }) => {
      await mount(<TooltipComponent size={size} />);

      await expect(tooltipPreview(page)).toHaveCSS(
        "font-size",
        `${fontSize}px`
      );
    });
  });

  ([
    ["left", "bottom"],
    ["top", "bottom"],
    ["left", "top"],
    ["bottom", "top"],
    ["bottom", "left"],
    ["bottom", "right"],
    ["top", "left"],
    ["top", "right"],
    ["right", "bottom"],
    ["right", "top"],
  ] as [TooltipPositions, TooltipProps["position"]][]).forEach(
    ([flipPosition, tooltipPosition]) => {
      test(`check flip position to the ${flipPosition} when tooltip position is set as ${tooltipPosition}`, async ({
        mount,
        page,
      }) => {
        await page.setViewportSize({ width: 700, height: 120 });
        await mount(
          <Box py={60} pr={0} pl={250}>
            <TooltipComponent
              flipOverrides={[flipPosition]}
              position="bottom"
            />
          </Box>
        );

        await expect(tooltipPreview(page)).toHaveAttribute(
          "data-placement",
          flipPosition
        );
      });
    }
  );

  //  CYPRESS TEST

  // describe.each(["top", "bottom", "right", "left"] as NonNullable<
  //     TooltipProps["position"]
  //   >[])("when tooltip has %s position and", (position) => {
  //     it.each([
  //       [SIZE.SMALL, { top: 15, bottom: 631, left: 47, right: 1040 }],
  //       [SIZE.MEDIUM, { top: 14, bottom: 630, left: 44, right: 1037 }],
  //       [SIZE.LARGE, { top: 10, bottom: 626, left: 40, right: 1033 }],
  //     ] as [TooltipProps["inputSize"], { top: number; bottom: number; left: number; right: number }][])(
  //       "when inputSize is %s should have correct styles applied",
  //       (inputSize, offset) => {
  //         CypressMountWithProviders(
  //           <testStories.TooltipComponent
  //             isPartOfInput
  //             inputSize={inputSize}
  //             position={position}
  //           />
  //         );
  //         tooltipPreview().then(($el) => {
  //           assertCssValueIsApproximately($el, position, offset[position]);
  //           Cypress.dom.isVisible($el);
  //         });
  //       }
  //     );
  //   });

  ([
    [SIZE.SMALL, 15],
    [SIZE.MEDIUM, 14],
    [SIZE.LARGE, 10],
  ] as [TooltipProps["inputSize"], number][]).forEach(([inputSize, offset]) => {
    test(`check when inputSize is ${inputSize} should have correct styles when position is top`, async ({
      mount,
      page,
    }) => {
      await mount(
        <TooltipComponent isPartOfInput inputSize={inputSize} position="top" />
      );

      const element = tooltipPreview(page);
      await assertCssValueIsApproximately(element, "top", offset);
    });
  });

  // ([
  //   [SIZE.SMALL, 631],
  //   [SIZE.MEDIUM, 630],
  //   [SIZE.LARGE, 626],
  // ]as [TooltipProps["inputSize"], number][]).forEach(
  //   ([inputSize, offset]) => {
  //     test(`when inputSize is ${inputSize} should have correct styles when position is bottom`, async ({
  //       mount,
  //       page,
  //     }) => {
  //     await mount(
  //           <TooltipComponent
  //             isPartOfInput
  //             inputSize={inputSize}
  //             position="bottom"
  //           />
  //       );

  //      const element = tooltipPreview(page);
  //      await assertCssValueIsApproximately(element, "bottom", offset);
  //     });
  //   }
  // );

  // ([
  //   [SIZE.SMALL, 47],
  //   [SIZE.MEDIUM, 44],
  //   [SIZE.LARGE, 40],
  // ]as [TooltipProps["inputSize"], number][]).forEach(
  //   ([inputSize, offset]) => {
  //     test(`when inputSize is ${inputSize} should have correct styles when position is left`, async ({
  //       mount,
  //       page,
  //     }) => {
  //     await mount(
  //           <TooltipComponent
  //             isPartOfInput
  //             inputSize={inputSize}
  //             position="left"
  //           />
  //       );

  //      const element = tooltipPreview(page);
  //      await assertCssValueIsApproximately(element, "left", offset);
  //     });
  //   }
  // );

  // ([
  //   [SIZE.SMALL, 1040],
  //   [SIZE.MEDIUM, 1037],
  //   [SIZE.LARGE, 1033],
  // ]as [TooltipProps["inputSize"], number][]).forEach(
  //   ([inputSize, offset]) => {
  //     test(`when inputSize is ${inputSize} should have correct styles when position is right`, async ({
  //       mount,
  //       page,
  //     }) => {
  //     await mount(
  //           <TooltipComponent
  //             isPartOfInput
  //             inputSize={inputSize}
  //             position="right"
  //           />
  //       );

  //      const element = tooltipPreview(page);
  //      await assertCssValueIsApproximately(element, "right", offset);
  //     });
  //   }
  // );

  test(`should show tooltip when target is hovered`, async ({
    mount,
    page,
  }) => {
    await mount(<UncontrolledTooltipComponent />);

    await expect(tooltipPreview(page)).not.toBeVisible();
    const tooltipElement = page.getByRole("button");
    await tooltipElement.hover();
    await expect(tooltipPreview(page)).toBeVisible();
  });

  test(`should have the expected border radius styling`, async ({
    mount,
    page,
  }) => {
    await mount(<TooltipComponent />);

    await expect(tooltipPreview(page)).toHaveCSS("border-radius", "4px");
  });
});

test.describe("Accessibility tests for Tooltip component", () => {
  test(`check accessibility tests for Default story`, async ({
    mount,
    page,
  }) => {
    await mount(<TooltipComponent />);

    expect(getDataElementByValue(page, "main-text").click());
    await checkAccessibility(page);
  });

  test(`check accessibility tests for Controlled story`, async ({
    mount,
    page,
  }) => {
    await mount(<Controlled />);

    expect(getDataElementByValue(page, "main-text").nth(0).click());
    await checkAccessibility(page);
  });

  ([
    ["top", 0],
    ["bottom", 1],
    ["left", 2],
    ["right", 3],
  ] as [string, number][]).forEach(([position, button]) => {
    test(`check accessibility tests for Positioning story when position is set as ${position}`, async ({
      mount,
      page,
    }) => {
      await mount(<Positioning />);

      expect(getDataElementByValue(page, "main-text").nth(button).click());
      await checkAccessibility(page);
    });
  });

  test(`check accessibility tests for FlipBehaviourOverrides story`, async ({
    mount,
    page,
  }) => {
    await mount(<FlipBehaviourOverrides />);

    await checkAccessibility(page);
  });

  test(`check accessibility tests for LargeTooltip story`, async ({
    mount,
    page,
  }) => {
    await mount(<LargeTooltip />);

    expect(getDataElementByValue(page, "main-text").click());
    await checkAccessibility(page);
  });

  test(`check accessibility tests for Types story`, async ({ mount, page }) => {
    await mount(<Types />);

    expect(getDataElementByValue(page, "main-text").nth(1).click());
    expect(getDataElementByValue(page, "main-text").nth(2).click());
    await checkAccessibility(page);
  });
  test(`check accessibility tests for ColorOverrides story`, async ({
    mount,
    page,
  }) => {
    await mount(<ColorOverrides />);

    expect(getDataElementByValue(page, "main-text").click());
    await checkAccessibility(page);
  });
});
