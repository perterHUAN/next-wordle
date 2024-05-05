import React from "react";
function useModalToggle(initialState) {
  const [open, setOpen] = React.useState(initialState);
  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);
  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  return [open, closeModal, openModal];
}

export default useModalToggle;
