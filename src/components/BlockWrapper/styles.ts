import styled from "styled-components";

import { colors } from "../../utils/colors";

export const Block = styled.div`
  background: ${(props) => props.theme.backgroundColor}CC;
  width: 100%;
  max-width: 800px;
  min-height: 500px;
  border: 1px solid ${colors.KILLARNEY}0D;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 30px;
`;
