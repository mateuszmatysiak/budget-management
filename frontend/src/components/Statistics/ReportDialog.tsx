/** @jsxFrag React.Fragment */
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { toast } from "react-toastify";
import { Button, LoadingButton } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../../components/Dialog";
import { useClient } from "../../hooks/useApi";
import { useDialogHandler } from "../../hooks/useDialogHandler";
import { useMedia } from "../../hooks/useMedia";
import { CloseIcon } from "../../icons/close";
import { reportCSV } from "../../utils/report";

const ReportDialog = () => {
  const { mobile } = useMedia();
  const authClient = useClient();
  const { isOpen, open, close } = useDialogHandler();

  const [loading, setLoading] = React.useState(false);

  const getReport = () => {
    setLoading(true);

    return authClient(`report`)
      .then((data) => {
        toast.success("Pobrano raport");
        reportCSV(data);
        close();
      })
      .catch((err) => toast.error(err.message))
      .then(() => setLoading(false));
  };

  return (
    <>
      <Button fullWidth={mobile} onClick={open}>
        Wygeneruj raport
      </Button>

      <Dialog
        ariaLabel="Dialog pozwalający na wygenerowanie raportu"
        isOpen={isOpen}
        onDismiss={close}
        width="500px"
      >
        <DialogHeader>
          <span>Wygenerowanie raportu</span>
          <ButtonIcon onClick={close}>
            <CloseIcon />
          </ButtonIcon>
        </DialogHeader>

        <DialogContent>
          Raport posiada wszystkie produkty z list zakupowych
        </DialogContent>
        <DialogFooter>
          <LoadingButton fullWidth loading={loading} onClick={getReport}>
            Wygeneruj
          </LoadingButton>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export { ReportDialog };
