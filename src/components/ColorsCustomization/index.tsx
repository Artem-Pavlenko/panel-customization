import { useFormik } from "formik";
import { ChangeEvent, FC } from "react";

import IColorsCustomizationProps from "./props";
import { useDispatch, useSelector } from "react-redux";
import { BlockWrapper, Button, CustomizationSection } from "..";
import { ButtonStylePreset } from "../../utils/types";
import {
  resetTheme,
  setThemeColor,
  ThemeTypes,
} from "../../redux/customization/actions";
import {
  BACKGROUND,
  HEADING,
  PANEL,
  PANEL_FONT,
} from "../../redux/customization/constants";
import { customizationSelector } from "../../redux/customization/selectors";

export const ColorsCustomization: FC<IColorsCustomizationProps> = () => {
  const defaultTheme = useSelector(customizationSelector);
  const dispatch = useDispatch();

  const { handleChange, values } = useFormik({
    initialValues: {
      [BACKGROUND]: defaultTheme.backgroundColor,
      [HEADING]: defaultTheme.headingColor,
      [PANEL]: defaultTheme.panel,
      [PANEL_FONT]: defaultTheme.panelFont,
    },
    onSubmit: (values) => {},
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    dispatch(
      setThemeColor(e.currentTarget.name as ThemeTypes, e.currentTarget.value)
    );
  };

  const resetThemeHandler = () => dispatch(resetTheme());

  return (
    <BlockWrapper>
      <CustomizationSection
        name={BACKGROUND}
        value={values[BACKGROUND]}
        onChange={onChange}
        title="Background color"
      />
      <CustomizationSection
        name={HEADING}
        value={values[HEADING]}
        onChange={onChange}
        title="Header color"
      />
      <CustomizationSection
        name={PANEL}
        value={values[PANEL]}
        onChange={onChange}
        title="Panel color"
      />
      <CustomizationSection
        name={PANEL_FONT}
        value={values[PANEL_FONT]}
        onChange={onChange}
        title=" Panel font color"
      />

      <Button type="submit" text="Change theme" marginBottom={10} />
      <Button
        onClick={resetThemeHandler}
        preset={ButtonStylePreset.BaseButton}
        type="reset"
        text="Reset"
      />
    </BlockWrapper>
  );
};
