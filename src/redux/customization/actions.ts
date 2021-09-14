import {
  BACKGROUND,
  HEADING,
  PANEL,
  PANEL_FONT,
  RESET_THEME,
  SET_THEME_COLOR,
} from "./constants";

// ========= Types ========= //
export type CustomizationActions = IResetThemeAction | ISetThemeColorAction;

export type ThemeTypes =
  | typeof BACKGROUND
  | typeof HEADING
  | typeof PANEL
  | typeof PANEL_FONT;

export interface IResetThemeAction {
  type: typeof RESET_THEME;
}

export interface ISetThemeColorAction {
  type: typeof SET_THEME_COLOR;
  payload: {
    preset: ThemeTypes;
    color: string;
  };
}

// ========= Actions ========= //

export const resetTheme = (): IResetThemeAction => ({ type: RESET_THEME });

export const setThemeColor = (
  preset: ThemeTypes,
  color: string
): ISetThemeColorAction => ({
  type: SET_THEME_COLOR,
  payload: { preset, color },
});
