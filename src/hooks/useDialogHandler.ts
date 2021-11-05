import React from "react";

function useDialogHandler() {
  const [showDialog, setShowDialog] = React.useState(false);

  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return {
    isOpen: showDialog,
    open,
    close,
    dialogProps: {
      isOpen: showDialog,
      open,
      close,
    },
  };
}

export { useDialogHandler };
