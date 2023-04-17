import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

type ButtonSize = "small" | "medium" | "large";

const buttonSize = (size: ButtonSize) => {
  switch (size) {
    case "large":
      return css`
        // large type 버튼 스타일
      `;

    case "medium":
      return css`
        padding: 0.75rem 1.5rem;
      `;

    case "small":
      return css`
        // small type 버튼 스타일
      `;
  }
};

const disabledStyle = css`
  background-color: #cdcdcd;
  color: #fff;
  cursor: not-allowed;

  &:hover {
    background-color: #cdcdcd;
  }
`;

const Button = styled(motion.button)<{ size?: ButtonSize; disabled?: boolean }>`
  ${({ size = "medium" }) => buttonSize(size)}
  padding: .75rem 1.5rem;
  outline: none;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  background-color: #000;
  color: #fff;
  transition: 0.15s ease-in-out all;
  ${({ disabled }) => disabled && disabledStyle}
`;

export default Button;
