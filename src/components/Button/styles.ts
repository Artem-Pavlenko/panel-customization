import styled from "styled-components";

import { colors } from "../../utils/colors";
import { ButtonStylePreset } from "../../utils/types";

interface IButtonTextProps {
  preset?: ButtonStylePreset;
}
interface IButtonWrapperProps extends IButtonTextProps {
  marginLeft?: number;
  center?: boolean;
  marginBottom?: number;
  width?: string;
}

export const ButtonWrapper = styled.button<IButtonWrapperProps>`
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  ${({ center }) => center && `margin: 0 auto;`}
  ${({
    preset = ButtonStylePreset.BaseButtonWithBackground,
    width = "200px",
  }) => {
    switch (preset) {
      case ButtonStylePreset.BaseButtonWithBackground:
        return `
        width: ${width};
        height: 40px;
        background-color: ${colors.KILLARNEY};
        border-radius: 100px;
        `;
      case ButtonStylePreset.BaseButton:
        return `
        background: transparent;
        `;
      default:
        break;
    }
  }}
  
  display: block;
  cursor: pointer;
  border: none;
`;

export const ButtonText = styled.span<IButtonTextProps>`
  ${({ preset = ButtonStylePreset.BaseButtonWithBackground }) => {
    switch (preset) {
      case ButtonStylePreset.BaseButtonWithBackground:
        return `
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: ${colors.WHITE};
        `;
      case ButtonStylePreset.BaseButton:
        return `
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
        text-decoration-line: underline;
        color: ${colors.SILVER_CHALICE};
        `;
      default:
        break;
    }
  }}

  text-align: center;
`;
