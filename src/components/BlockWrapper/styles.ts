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
  margin: 0 15px 15px 0;
  box-shadow: 0px 2px 8px ${colors.GRAY}1A;
`;
