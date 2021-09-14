import { ChangeEvent } from "react";

export default interface ICustomizationSectionProps {
  title: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
