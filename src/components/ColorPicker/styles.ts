import styled from "styled-components";

import { colors } from "../../utils/colors";

interface IPickerWrapperProps {
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  borderColor?: string;
}

export const PickerWrapper = styled.div<IPickerWrapperProps>`
  margin-top: ${({ marginTop = 0 }) => marginTop}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  margin-right: ${({ marginRight = 0 }) => marginRight}px;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom}px;
  border-bottom: 1px solid ${({ borderColor = colors.ALTO }) => borderColor};
  position: relative;
  height: 55px;
  width: 55px;
  margin-bottom: 5px;
  margin-left: 10px;
  border-radius: 50%;
  box-shadow: 0px 1px 2px ${colors.ALTO};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    box-shadow: 0px 4px 8px ${colors.ALTO};
  }
`;
