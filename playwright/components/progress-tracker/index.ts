import type { Page } from "@playwright/test";
import { PROGRESS_TRACKER, PROGRESS_TRACKER_LINE } from "./locators";

// component preview locators
export const progressTrackerComponent = (page: Page) =>
  page.locator(PROGRESS_TRACKER);

export const progressTrackerLine = (page: Page) =>
  page.locator(PROGRESS_TRACKER_LINE);

export const progressTrackerMinVal = (page: Page, index = 0) =>
  progressTrackerComponent(page).locator("* > span").nth(index);

export const progressTrackerMaxVal = (page: Page, index = 2) =>
  progressTrackerComponent(page).locator("* > span").nth(index);

export const progressTrackerCustomValuePreposition = (page: Page, index = 1) =>
  progressTrackerComponent(page).locator("* > span").nth(index);

export const progressTrackerDescription = (page: Page, index = 3) =>
  progressTrackerComponent(page).locator("* > span").nth(index);
