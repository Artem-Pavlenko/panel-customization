import { FC } from "react";

import IInputProps from "./props";
import { FieldWrapper, InputField } from "./styles";
import { FieldHeading } from "../FieldHeading";

export const Input: FC<IInputProps> = ({
  title,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  width,
  isSearch,
  inputRef,
  ...restProps
}) => (
  <FieldWrapper
    width={width}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
  >
    {title && <FieldHeading marginLeft={50}>{title}</FieldHeading>}
    <InputField ref={inputRef} isSearch={isSearch} {...restProps} />
  </FieldWrapper>
);
