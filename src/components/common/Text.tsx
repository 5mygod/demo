import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { Mediaqueries } from "styles/mediaqueries";

type Props = {
  typography?: "h2" | "h3" | "p";
};

export const Text = ({ typography, children }: PropsWithChildren<Props>) => {
  switch (typography) {
    case "h2":
      return <Heading2 className="text-h2">{children}</Heading2>;
    case "h3":
      return <Heading3 className="text-h3">{children}</Heading3>;
    case "p":
      return <Paragraph className="text-paragraph">{children}</Paragraph>;
    default:
      return <Paragraph className="text-paragraph">{children}</Paragraph>;
  }
};

const Heading2 = styled.h2`
  font-size: 4rem;
  font-weight: 700;

  ${Mediaqueries.모바일} {
    font-size: 2.25rem;
  }
`;

const Heading3 = styled.h3`
  // 커스텀 H3 스타일
`;

const Paragraph = styled.p`
  margin: 0.25rem 0;
  line-height: 1.25;

  ${Mediaqueries.모바일} {
    margin: 0.125rem 0;
    font-size: 0.875rem;
  }
`;
