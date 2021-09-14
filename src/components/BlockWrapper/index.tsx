import { FC } from "react";

import IBlockWrapperProps from "./props";
import { Block } from "./styles";

export const BlockWrapper: FC<IBlockWrapperProps> = ({ children }) => (
  <Block>{children}</Block>
);
