import { FC } from "react";

import IButtonProps from "./props";
import { ButtonText, ButtonWrapper } from "./styles";

export const Button: FC<IButtonProps> = ({ text, ...restProps }) => (
  <ButtonWrapper {...restProps}>
    <ButtonText {...restProps}>{text}</ButtonText>
  </ButtonWrapper>
);
