import styled from "styled-components";

interface IHeadingProps {
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  textAlign?: "left" | "right" | "center";
  width?: string;
}

export const SecondLvlHeading = styled.h2<IHeadingProps>`
  color: ${(props) => props.theme.headingColor};
  font-size: ${({ fontSize = 40 }) => fontSize}px;
  margin-top: ${({ marginTop = 20 }) => marginTop}px;
  margin-bottom: ${({ marginBottom = 30 }) => marginBottom}px;
  margin-left: ${({ marginLeft = 0 }) => marginLeft}px;
  text-align: ${({ textAlign = "center" }) => textAlign};
  width: ${({ width = "100%" }) => width};
  display: inline-block;
  font-style: normal;
  font-weight: bold;
  line-height: 59px;
  transition: color 0.3s linear;
`;
