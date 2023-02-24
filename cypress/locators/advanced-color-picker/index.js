import {
  ADVANCED_COLOR_PICKER_CELL,
  OPEN_ADVANCED_COLOR_PICKER_BUTTON,
  CURRENT_COLOR_DESCRIPTION,
  SIMPLE_COLOR,
  SIMPLE_COLOR_PICKER,
} from "./locators";

export const simpleColorPickerInput = (index) =>
  cy.get(SIMPLE_COLOR).find("input").eq(index);
export const simpleColorPicker = (index) =>
  cy.get(SIMPLE_COLOR_PICKER).find(SIMPLE_COLOR).eq(index).find("input");
export const advancedColorPickerCell = () => cy.get(ADVANCED_COLOR_PICKER_CELL);
export const openAdvancedColorPickerButton = () =>
  cy.get(OPEN_ADVANCED_COLOR_PICKER_BUTTON);
export const currentColorDescription = () => cy.get(CURRENT_COLOR_DESCRIPTION);
export const advancedColorPicker = (index) => {
  return cy.get(SIMPLE_COLOR).eq(index);
};
export const simpleColorPickerComponent = () => cy.get(SIMPLE_COLOR_PICKER);
