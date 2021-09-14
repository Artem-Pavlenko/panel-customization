import { FC, useRef } from "react";

import IColorPickerProps from "./props";
import { PickerWrapper } from "./styles";
import { Input } from "..";
import { ReactComponent as ColorPickerSVG } from "../../assets/images/color-picker.svg";

export const ColorPicker: FC<IColorPickerProps> = ({
  value,
  onChange,
  name,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <PickerWrapper {...restProps}>
      <Input
        inputRef={inputRef}
        name={name}
        value={value}
        onChange={onChange}
        type="color"
        visibility="hidden"
        width="35px"
        borderRadius={10}
        marginBottom={0}
      />

      <ColorPickerSVG
        style={{
          position: "absolute",
          top: "-20px",
          transform: "translate(-50%, 50%)",
          left: "50%",
        }}
        width="40px"
        cursor="pointer"
        fill={value}
        onClick={() => inputRef?.current?.click()}
      />
    </PickerWrapper>
  );
};
