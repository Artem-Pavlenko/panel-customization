import { FC } from "react";

import IHeadingProps from "./props";
import { SecondLvlHeading } from "./styles";

export const Heading: FC<IHeadingProps> = ({ text, ...restProps }) => {
  return <SecondLvlHeading {...restProps}>{text}</SecondLvlHeading>;
};
