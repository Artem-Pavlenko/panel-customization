import { ChangeEvent } from "react";

export default interface IColorPickerProps {
  name?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
}
