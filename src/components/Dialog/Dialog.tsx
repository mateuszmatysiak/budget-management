import styled from "@emotion/styled";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

export interface DialogProps {
  isOpen: boolean;
  close: () => void;
}

const StyledDialog = styled(Dialog)`
  color: #fff;
  width: 500px;
  border-radius: 15px;
  background-color: #262626;
  border: 1px solid rgba(229, 229, 229, 0.15);
  padding: 0;
`;

const StyledDialogHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(229, 229, 229, 0.15);
  font-size: 14px;
`;

const StyledDialogContent = styled.div`
  padding: 16px;

  > p {
    color: rgba(212, 212, 212, 1);
    letter-spacing: 0.5px;
    font-size: 14px;
    line-height: 1.75;
  }
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
