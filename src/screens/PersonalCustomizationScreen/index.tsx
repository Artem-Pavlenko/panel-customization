import { ChangeEvent, FC } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import IPersonalCustomizationScreenProps from "./props";
import { Block, Wrapper } from "./styles";
import { Button, CustomizationSection, Heading } from "../../components";
import { ButtonStylePreset } from "../../utils/types";
import { customizationSelector } from "../../redux/customization/selectors";
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

export const PersonalCustomizationScreen: FC<IPersonalCustomizationScreenProps> =
  () => {
    const defaultTheme = useSelector(customizationSelector);
    const dispatch = useDispatch();

    const { handleChange, handleSubmit, values } = useFormik({
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
      <Wrapper onSubmit={handleSubmit}>
        <Heading
          text="Personal customization"
          width="50%"
          textAlign="left"
          fontSize={54}
          marginBottom={20}
        />

        <Block>
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
        </Block>
      </Wrapper>
    );
  };
