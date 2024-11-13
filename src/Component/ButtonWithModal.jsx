import { useState } from "react";
import Modal from "./Modal";
import useModalDialog from "../hooks/useModalDialog";
const ButtonWithModal = () => {
  const { isOpen, open, close } = useModalDialog();
  return (
    <>
      <button onClick={open}>Open Modal </button>
      <div>Do somethign Here</div>
      <div>{isOpen && <Modal close={close} />}</div>
    </>
  );
};

export default ButtonWithModal;
