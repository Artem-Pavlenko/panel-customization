import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Wrapper = styled.form`
  position: relative;
  padding: 0 20px 20px;
`;

export const Block = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 500px;
  background: ${(props) => props.theme.backgroundColor}CC;
  border: 1px solid ${colors.KILLARNEY}0D;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 30px;
`;
