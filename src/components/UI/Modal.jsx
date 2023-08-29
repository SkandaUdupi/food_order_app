import styles from "./modal.module.css";
import React, { useContext } from "react";
import ReactDom from "react-dom";
import CartOverlayContext from "../../store/CartOverlayContext";

const Backdrop = (props) => {
  const cartOverlayContext = useContext(CartOverlayContext);

  const onCloseHandler = () => {
    cartOverlayContext.setCartClose();
  };
  return <div onClick={onCloseHandler} className={styles.backdrop} />;
};
const Overlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return ReactDom.createPortal(
    <>
      <Backdrop />
      <Overlay>{props.children}</Overlay>
    </>,
    document.querySelector(".overlay")
  );
};

export default Modal;
