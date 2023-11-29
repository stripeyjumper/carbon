import { expect, test } from "@playwright/experimental-ct-react17";
import React from "react";
import { CHARACTERS } from "../../../playwright/support/constants";
import { checkAccessibility } from "../../../playwright/support/helper";
import Typography, {
  TypographyProps,
} from "../../../src/components/typography";
import {
  ListComponent,
  ScreenReaderOnly,
  Truncate,
  Variants,
} from "../../../src/components/typography/components.test-pw";

const testDataStandard = CHARACTERS.STANDARD;
const VARIANT_TYPES = [
  "h1-large",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "segment-header",
  "segment-header-small",
  "segment-subheader",
  "segment-subheader-alt",
  "p",
  "span",
  "small",
  "big",
  "sup",
  "sub",
  "strong",
  "b",
  "em",
  "ul",
  "ol",
];

type VariantTypes = typeof VARIANT_TYPES[number];

const getAs = (variant: VariantTypes) => {
  switch (variant) {
    case "h1-large":
      return "h1";
    case "segment-header":
    case "segment-header-small":
    case "segment-subheader":
    case "segment-subheader-alt":
      return "h5";
    case "big":
      return "p";
    default:
      return variant;
  }
};

const getSize = (variant: VariantTypes) => {
  switch (variant) {
    case "h1-large":
      return "32px";
    case "h1":
      return "24px";
    case "h2":
      return "22px";
    case "h3":
    case "segment-header":
      return "20px";
    case "h4":
    case "segment-header-small":
      return "18px";
    case "h5":
    case "segment-subheader":
    case "big":
      return "16px";
    case "small":
    case "sub":
    case "sup":
      return "13px";
    case "segment-subheader-alt":
    case "p":
    case "span":
    case "b":
    case "strong":
    case "em":
    default:
      return "14px";
  }
};

const getLineHeight = (variant: VariantTypes) => {
  switch (variant) {
    case "h1-large":
      return "40px";
    case "h1":
    case "segment-subheader":
      return "31px";
    case "h2":
      return "29px";
    case "h3":
    case "segment-header":
      return "26px";
    case "big":
      return "24px";
    case "h4":
    case "segment-header-small":
      return "23px";
    case "small":
    case "sub":
    case "sup":
      return "20px";
    case "h5":
    case "segment-subheader-alt":
    case "p":
    case "span":
    case "b":
    case "strong":
    case "em":
    default:
      return "21px";
  }
};

const getWeight = (variant: VariantTypes) => {
  switch (variant) {
    case "h1-large":
    case "h1":
    case "segment-header":
    case "segment-header-small":
      return "900";
    case "h2":
    case "h3":
    case "segment-subheader":
    case "segment-subheader-alt":
    case "b":
    case "em":
    case "strong":
      return "700";
    case "h4":
    case "h5":
    case "p":
    case "span":
    case "small":
    case "big":
    case "sub":
    case "sup":
    default:
      return "400";
  }
};

const getTransform = (variant: VariantTypes) => {
  if (variant === "segment-subheader-alt") {
    return "uppercase";
  }
  return "none";
};

const getDecoration = (variant: VariantTypes) => {
  if (variant === "em") {
    return "underline";
  }
  return "none";
};

test.describe("should check Typography component properties", () => {
  (VARIANT_TYPES as TypographyProps["variant"][]).forEach((variant) => {
    test(`should check variant prop set to ${variant} for Typography component`, async ({
      mount,
      page,
    }) => {
      await mount(
        <Typography variant={variant}>{testDataStandard}</Typography>
      );

      const variantElement = getAs(String(variant));
      const cyElement = await page.locator(variantElement);

      await expect(cyElement).toHaveText(testDataStandard);
    });
  });

  (VARIANT_TYPES as TypographyProps["variant"][]).forEach((variant) => {
    test(`should check font-size for ${variant} variant prop for Typography component`, async ({
      mount,
      page,
    }) => {
      await mount(
        <Typography variant={variant}>{testDataStandard}</Typography>
      );

      const variantElem = getAs(String(variant));
      const fontSize = getSize(String(variant));
      const cyElement = await page.locator(variantElem);

      await expect(cyElement).toHaveCSS("font-size", fontSize);
    });
  });

  (VARIANT_TYPES as TypographyProps["variant"][]).forEach((variant) => {
    test(`should check line-height for ${variant} variant prop for Typography component`, async ({
      mount,
      page,
    }) => {
      await mount(
        <Typography variant={variant}>{testDataStandard}</Typography>
      );

      const variantElem = getAs(String(variant));
      const lineHeight = getLineHeight(String(variant));
      const cyElement = await page.locator(variantElem);

      await expect(cyElement).toHaveCSS("line-height", lineHeight);
    });
  });

  (VARIANT_TYPES as TypographyProps["variant"][]).forEach((variant) => {
    test(`should check font-weight for ${variant} variant prop for Typography component`, async ({
      mount,
      page,
    }) => {
      await mount(
        <Typography variant={variant}>{testDataStandard}</Typography>
      );

      const variantElem = getAs(String(variant));
      const fontWeight = getWeight(String(variant));
      const cyElement = await page.locator(variantElem);

      await expect(cyElement).toHaveCSS("font-weight", fontWeight);
    });
  });

  (VARIANT_TYPES as TypographyProps["variant"][]).forEach((variant) => {
    test(`should check text-transform for ${variant} variant prop for Typography component`, async ({
      mount,
      page,
    }) => {
      await mount(
        <Typography variant={variant}>{testDataStandard}</Typography>
      );

      const variantElem = getAs(String(variant));
      const textTransform = getTransform(String(variant));
      const cyElement = await page.locator(variantElem);

      await expect(cyElement).toHaveCSS("text-transform", textTransform);
    });
  });

  (VARIANT_TYPES as TypographyProps["variant"][]).forEach((variant) => {
    test(`should check text-decoration-line for ${variant} variant prop for Typography component`, async ({
      mount,
      page,
    }) => {
      await mount(
        <Typography variant={variant}>{testDataStandard}</Typography>
      );

      const variantElem = getAs(String(variant));
      const textDecorationLine = getDecoration(String(variant));
      const cyElement = await page.locator(variantElem);

      await expect(cyElement).toHaveCSS(
        "text-decoration-line",
        textDecorationLine
      );
    });
  });

  (VARIANT_TYPES as TypographyProps["variant"][]).forEach((variant) => {
    test(`should check text-align for ${variant} variant prop for Typography component when set`, async ({
      mount,
      page,
    }) => {
      await mount(
        <Typography variant={variant}>{testDataStandard}</Typography>
      );

      const variantElem = getAs(String(variant));
      const textDecorationLine = getDecoration(String(variant));
      const cyElement = await page.locator(variantElem);

      await expect(cyElement).toHaveCSS(
        "text-decoration-line",
        textDecorationLine
      );
    });
  });

  (["ol", "ul"] as const).forEach((as) => {
    test(`should check as prop set to ${as} for List component`, async ({
      mount,
      page,
    }) => {
      await mount(<ListComponent as={as} />);

      const cyElement = await page.locator(as);

      await expect(cyElement).toBeVisible();
      await expect(cyElement).toBeVisible();
    });
  });

  ([[true], [false]] as const).forEach(([truncate]) => {
    test(`should check truncate prop set to ${truncate} for Typography component`, async ({
      mount,
      page,
    }) => {
      await mount(
        <div
          style={{
            height: "80px",
            width: "80px",
          }}
        >
          <Typography variant="h1" truncate={truncate}>
            {testDataStandard}
          </Typography>
        </div>
      );

      const cyElement = await page.locator("h1");

      if (truncate) {
        await expect(cyElement).toHaveCSS("text-overflow", "ellipsis");
      } else {
        await expect(cyElement).not.toHaveCSS("text-overflow", "ellipsis");
      }
    });
  });

  (["left", "center", "right", "justify"] as const).forEach((textAlignment) => {
    test(`should adjust the text alignment when textAlign prop is set to ${textAlignment}`, async ({
      mount,
      page,
    }) => {
      await mount(
        <Typography variant="h1" textAlign={textAlignment}>
          {testDataStandard}
        </Typography>
      );

      const cyElement = await page.locator("h1");

      await expect(cyElement).toHaveCSS("text-align", textAlignment);
    });
  });

  test("should display as visually hidden when screenReaderOnly prop is enabled", async ({
    mount,
    page,
  }) => {
    await mount(
      <Typography variant="h1" screenReaderOnly>
        {testDataStandard}
      </Typography>
    );

    const cyElement = await page.locator("h1");

    await expect(cyElement).toHaveText(testDataStandard);
    await expect(cyElement).toHaveCSS("border", "0px none rgba(0, 0, 0, 0.9)");
    await expect(cyElement).toHaveCSS("height", "1px");
    await expect(cyElement).toHaveCSS("margin", "-1px");
    await expect(cyElement).toHaveCSS("overflow", "hidden");
    await expect(cyElement).toHaveCSS("padding", "0px");
    await expect(cyElement).toHaveCSS("position", "absolute");
    await expect(cyElement).toHaveCSS("width", "1px");
  });
});

test.describe("Accessibility tests", () => {
  test("should check accessibility for Variants example", async ({
    mount,
    page,
  }) => {
    await mount(<Variants />);

    await checkAccessibility(page);
  });

  test("should check accessibility for Truncate example", async ({
    mount,
    page,
  }) => {
    await mount(<Truncate />);

    await checkAccessibility(page);
  });

  test("should check accessibility for ScreenReaderOnly example", async ({
    mount,
    page,
  }) => {
    await mount(<ScreenReaderOnly />);

    await checkAccessibility(page);
  });
});
