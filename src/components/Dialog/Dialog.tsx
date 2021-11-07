import styled from "@emotion/styled";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export interface DialogProps {
  isOpen: boolean;
  close: () => void;
}

const StyledDialog = styled(Dialog)`
  width: 500px;
  padding: 0;
  border: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  border-radius: ${({ theme }) => theme.borderRadius.tertiary};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
`;

const StyledDialogHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColor.secondary}`};
  font-size: 14px;
`;

const StyledDialogContent = styled.div`
  padding: 16px;
  color: ${({ theme }) => theme.color.tertiary};
  letter-spacing: 0.5px;
  font-size: 14px;
  line-height: 1.75;
`;

const StyledDialogFooter = styled.footer`
  padding: 0 16px 16px 16px;
`;

export {
  StyledDialog,
  StyledDialogHeader,
  StyledDialogContent,
  StyledDialogFooter,
};
