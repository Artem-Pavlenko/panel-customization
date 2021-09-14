import { CustomizationActions } from "./actions";
import {
  BACKGROUND,
  HEADING,
  PANEL,
  PANEL_FONT,
  RESET_THEME,
  SET_THEME_COLOR,
} from "./constants";
import { colors } from "../../utils/colors";

export interface ICustomizationState {
  backgroundColor: string;
  headingColor: string;
  panel: string;
  panelFont: string;
  buttonBgColor: string;
}

const INITIAL_STATE: ICustomizationState = {
  backgroundColor: colors.WHITE,
  headingColor: colors.KILLARNEY,
  panel: colors.ALABASTER,
  panelFont: colors.BOULDER,
  buttonBgColor: colors.KILLARNEY,
};

export const customizationReducer = (
  state: ICustomizationState = INITIAL_STATE,
  action: CustomizationActions
): ICustomizationState => {
  switch (action.type) {
    case RESET_THEME:
      return INITIAL_STATE;

    case SET_THEME_COLOR:
      switch (action.payload.preset) {
        case HEADING:
          return { ...state, headingColor: action.payload.color };
        case PANEL:
          return { ...state, panel: action.payload.color };
        case PANEL_FONT:
          return { ...state, panelFont: action.payload.color };
        case BACKGROUND:
          return { ...state, backgroundColor: action.payload.color };
        default:
          return state;
      }

    default:
      return state;
  }
};
