// https://levelup.gitconnected.com/how-to-create-an-accessible-react-modal-5b87e6a27503
import React, {createContext, useContext, useEffect}from "react";
import { createPortal } from "react-dom";
import "../stylesheet.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    <div className="modal-container container-fluid" role="dialog" aria-modal="true">
      <div className="modal-content container">
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
    <div className="modal-header row">
      {props.children}
      <button className="cross-btn close col-lg-2 col-md-2 col-sm-1 col-1" type="button" title="close modal" onClick={onModalClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

Modal.Body = function ModalBody(props) {
  return <div className="modal-body">{props.children}</div>;
};

Modal.Footer = function ModalFooter(props) {
  const link1 = props.link ?
  <div className="col-lg-5 col-md-5 col-sm-5 col-6 link">
    <FontAwesomeIcon icon={faArrowRight} className="icon"/>
    <a href={props.link}>{props.linkText}</a>
  </div> : <React.Fragment/>;

  const link2 = props.link2 ?
  <div className="col-lg-5 col-md-5 col-sm-5 col-6 link">
    <FontAwesomeIcon icon={faArrowRight} className="icon"/>
    <a href={props.link2}>{props.link2Text}</a>
  </div> : <React.Fragment/>

  return (
    <div className="modal-footer">
      <div className="row justify-content-center container-fluid align-bottom">
        {link1}
        {link2}
        {props.children}
      </div>
    </div>
  );
};

Modal.Footer.CloseBtn = function CloseBtn(props) {
  const { onModalClose } = useContext(modalContext);
  return (
      <button
        {...props}
        className="close-btn col-lg-2 col-md-2 col-sm-2 col-3"
        title="close modal"
        onClick={onModalClose}
      />
  );
};