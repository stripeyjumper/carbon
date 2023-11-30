import type { Page } from "@playwright/test";
import {
  TOOLTIP_PREVIEW,
  TOOLTIP_POINTER,
  TOOLTIP_TRIGGER,
  TOOLTIP_TRIGGER_TOGGLE,
  TOOLTIP_MAIN_TEXT,
} from "./locators";

// component preview locators
export const tooltipPreview = (page: Page) => {
  return page.locator(TOOLTIP_PREVIEW);
};

export const tooltipPointer = (page: Page) => {
  return page.locator(TOOLTIP_POINTER);
};

export const tooltipTrigger = (page: Page) => {
  return page.locator(TOOLTIP_TRIGGER);
};

export const tooltipTriggerToggle = (page: Page) => {
  return page.locator(TOOLTIP_TRIGGER_TOGGLE).locator("input");
};

export const tooltipMainText = (page: Page) => {
  return page.locator(TOOLTIP_MAIN_TEXT);
};
