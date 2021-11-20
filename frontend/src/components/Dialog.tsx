/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import {
  DialogContent as ReachDialogContent,
  DialogOverlay as ReachDialogOverlay,
  DialogProps as ReachDialogProps,
} from "@reach/dialog";
import "@reach/dialog/styles.css";

export interface DialogProps extends ReachDialogProps {
  ariaLabel: string;
  width?: string;
  height?: string;
}

const DialogOverlay = styled(ReachDialogOverlay)`
  z-index: 999;
`;

const DialogHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  font-weight: 300;
`;

const StyledDialog = styled(ReachDialogContent)`
  width: 500px;
  padding: 0 !important;
  margin: 10vh auto;
  border: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  border-radius: ${({ theme }) => theme.borderRadius.tertiary};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) =>
    `${theme.backgroundColor.tertiary} !important`};
`;

const DialogContent = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.color.tertiary};
  letter-spacing: 0.5px;
  font-size: 14px;
  line-height: 1.75;
`;

const DialogFooter = styled.footer`
  padding: 0 16px 16px 16px;
`;

const Dialog = ({
  children,
  ariaLabel,
  width = "600px",
  height,
  ...props
}: DialogProps) => {
  return (
    <DialogOverlay {...props}>
      <StyledDialog
        aria-label={ariaLabel}
        css={css`
          width: ${width} !important;
          height: ${height} !important;
        `}
      >
        {children}
      </StyledDialog>
    </DialogOverlay>
  );
};

export { Dialog, DialogHeader, DialogContent, DialogFooter };
