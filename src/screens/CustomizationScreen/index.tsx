import { FC } from "react";

import ICustomizationScreenProps from "./props";
import { Wrapper } from "./styles";
import { ColorsCustomization, Heading, UploadLogo } from "../../components";

export const CustomizationScreen: FC<ICustomizationScreenProps> = () => (
  <Wrapper>
    <Heading
      text="Personal customization"
      width="50%"
      textAlign="left"
      fontSize={54}
      marginBottom={20}
    />

    <ColorsCustomization />
    <UploadLogo />
  </Wrapper>
);
