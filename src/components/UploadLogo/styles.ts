import styled from "styled-components";
import { IMAGES } from "../../assets";
import { colors } from "../../utils/colors";

export const HiddenInput = styled.input`
  visibility: hidden;
`;

export const Upload = styled.div`
  position: relative;
  height: 53px;
  background: ${colors.ALABASTER}CC;
  backdrop-filter: blur(15px);
  border-radius: 15px;
  cursor: pointer;
  padding-top: 58px;
  color: ${colors.SILVER};
  width: 40%;
  margin: 0 auto;

  &:after {
    position: absolute;
    content: "";
    top: 45px;
    left: calc(50% - 12px);
    width: 24px;
    height: 24px;
    background: url(${IMAGES.CAMERA_SMALL}) center no-repeat;
  }
`;

export const WaitingPhotoText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 53px;
  background: ${colors.ALABASTER}CC;
  backdrop-filter: blur(15px);
  border-radius: 15px;
  cursor: pointer;
  color: ${colors.SILVER};
  width: 40%;
  margin: 0 auto;
  margin-bottom: 25px;
`;
