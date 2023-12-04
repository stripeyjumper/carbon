import { SELECT_LIST, SELECT_TEXT, SELECT_LIST_WRAPPER } from "./locators";
import { getDataElementByValue } from "..";

// component preview locators
export const selectListText = (text) => cy.get(SELECT_LIST).contains(text);
export const selectText = () => getDataElementByValue(SELECT_TEXT);
export const selectListWrapper = () => cy.get(SELECT_LIST_WRAPPER);
