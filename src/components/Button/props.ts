import { ButtonStylePreset } from "../../utils/types";

export default interface IButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  marginLeft?: number;
  marginBottom?: number;
  width?: string;
  center?: boolean;
  onClick?: () => void;
  preset?: ButtonStylePreset;
}
