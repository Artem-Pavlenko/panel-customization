import { FC } from "react";

import IPersonalCustomizationScreenProps from "./props";
import { Block, Wrapper } from "./styles";
import { ColorsCustomization, Heading } from "../../components";

export const PersonalCustomizationScreen: FC<IPersonalCustomizationScreenProps> =
  () => {
    return (
      <Wrapper>
        <Heading
          text="Personal customization"
          width="50%"
          textAlign="left"
          fontSize={54}
          marginBottom={20}
        />

        <ColorsCustomization />
      </Wrapper>
    );
  };
