// https://levelup.gitconnected.com/how-to-create-an-accessible-react-modal-5b87e6a27503
import React, {createContext, useContext, useEffect}from "react";
import { createPortal } from "react-dom";

import "./modalStyle.css";

const modalContext = createContext();

export default function Modal({ children, onModalClose }) {
  useEffect(() => {
    function keyListener(e) {
      if (e.keyCode === 27) {
        onModalClose();
      }
    }
    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  });

  return createPortal(
    <div className="modal-container" role="dialog" aria-modal="true">
      <div className="modal-content">
        <modalContext.Provider value={{ onModalClose }}>
          {children}
        </modalContext.Provider>
      </div>
    </div>,
    document.body
  );
}

Modal.Header = function ModalHeader(props) {
  const { onModalClose } = useContext(modalContext);

  return (
    <div className="modal-header">
      {props.children}
      <button className="cross-btn close" type="button" title="close modal" onClick={onModalClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

Modal.Body = function ModalBody(props) {
  return <div className="modal-body">{props.children}</div>;
};

Modal.Footer = function ModalFooter(props) {
  return <div className="modal-footer">{props.children}</div>;
};

Modal.Footer.CloseBtn = function CloseBtn(props) {
  const { onModalClose } = useContext(modalContext);
  return (
    <button
      {...props}
      className="close-btn"
      title="close modal"
      onClick={onModalClose}
    />
  );
};