import { Page } from "playwright-core";
import { DRAWER, DRAWER_SIDEBAR, DRAWER_TOGGLE } from "./locators";

// component preview locators
export const drawerToggle = (page: Page) => page.locator(DRAWER_TOGGLE);
export const drawer = (page: Page) => page.locator(DRAWER);
export const drawerSidebar = (page: Page) => page.locator(DRAWER_SIDEBAR);
export const drawerSidebarContentInnerElement = (page: Page, index: number) =>
  page.locator(DRAWER_SIDEBAR).locator("li").nth(index);
