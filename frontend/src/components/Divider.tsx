/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface DividerProps {
  icon?: ReactNode;
}

const StyledDivider = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: ${({ theme }) => `1px solid ${theme.borderColor.primary}`};
  margin: 32px 0;
  padding: 0;
`;

const StyledDividerWrapper = styled.div<DividerProps>`
  position: relative;

  > svg {
    width: 36px;
    height: 36px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    fill: ${({ theme }) => theme.color.white};
  }

  ${({ icon, theme }) =>
    icon
      ? {
          "::before": {
            content: "''",
            position: "absolute",
            left: " 50%",
            top: " 50%",
            transform: "translate(-50%, -50%)",
            padding: "1px 48px",
            backgroundColor: theme.backgroundColor.primary,
          },
        }
      : {}};
`;

const Divider = ({ icon }: DividerProps) => {
  return (
    <StyledDividerWrapper icon={!!icon}>
      <StyledDivider />
      {icon}
    </StyledDividerWrapper>
  );
};

export { Divider };
