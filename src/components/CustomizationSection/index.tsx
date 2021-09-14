import { FC } from "react";

import ICustomizationSectionProps from "./props";
import { Section } from "./styles";
import { ColorPicker, Text } from "..";
import { colors } from "../../utils/colors";

export const CustomizationSection: FC<ICustomizationSectionProps> = ({
  name,
  value,
  onChange,
  title,
}) => (
  <Section>
    <Text marginTop={5} color={colors.DOVE_GRAY}>
      {title}:
    </Text>
    <ColorPicker name={name} value={value} onChange={onChange} />
  </Section>
);
