import styled from "@emotion/styled";
import { Mediaqueries } from "styles/mediaqueries";

export const Spacing = styled.div<{ size?: number; mobileSize?: number }>`
  height: ${({ size }) => size}px;

  ${Mediaqueries.모바일} {
    height: ${({ mobileSize }) => mobileSize}px;
  }
`;
