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
  border-top: 1px solid rgba(38, 38, 38, 1);
  margin: 32px 0;
  padding: 0;
`;

const StyledDividerWrapper = styled.div<DividerProps>`
  position: relative;

  > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    fill: rgba(229, 229, 229, 0.85);
  }

  ${({ icon }) =>
    icon
      ? {
          "::before": {
            content: "''",
            position: "absolute",
            left: " 50%",
            top: " 50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgb(5, 5, 5)",
            padding: "1px 48px",
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
