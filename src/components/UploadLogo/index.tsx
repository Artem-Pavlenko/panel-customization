import { ChangeEvent, FC, useRef, useState } from "react";

import IUploadLogoProps from "./props";
import { HiddenInput, Upload, WaitingPhotoText } from "./styles";
import { BlockWrapper, Button, Img, Text } from "..";
import { colors } from "../../utils/colors";
import { ButtonStylePreset } from "../../utils/types";

export const UploadLogo: FC<IUploadLogoProps> = () => {
  const [showExample, setShowExample] = useState(false);
  const [examplePhoto, setExamplePhoto] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadPhoto = () => inputRef?.current?.click();
  const onChangePhoto = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files?.length) {
      setExamplePhoto(URL.createObjectURL(event.currentTarget.files[0]));
      setShowExample(true);
    }
  };

  const resetPhoto = () => {
    setShowExample(false);
  };

  return (
    <BlockWrapper>
      <Text color={colors.MARINER} marginBottom={20}>
        Upload Logo
      </Text>
      <Upload onClick={onUploadPhoto} />

      <Text color={colors.MARINER} marginBottom={20}>
        Preview logo
      </Text>
      {showExample ? (
        <Img src={examplePhoto} width="100%" />
      ) : (
        <WaitingPhotoText>Your logo will be displayed here</WaitingPhotoText>
      )}

      <Button text="Save logo" marginBottom={10} />
      <Button
        onClick={resetPhoto}
        preset={ButtonStylePreset.BaseButton}
        text="reset"
      />
      <HiddenInput
        type="file"
        accept=".png,.jpeg,.jpg"
        ref={inputRef}
        onChange={onChangePhoto}
      />
    </BlockWrapper>
  );
};
