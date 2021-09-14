import { ICustomizationState } from ".";
import { AppState } from "..";

export const customizationSelector = (state: AppState): ICustomizationState =>
  state.customization;
