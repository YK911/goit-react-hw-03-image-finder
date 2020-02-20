import React from "react";
import css from "./Modal.module.css";

const Modal = ({ largeImg, onCloseModal }) => {
  return (
    <div className={css.Overlay} onClick={onCloseModal}>
      <div className={css.Modal}>
        <img className={css.Img} src={largeImg} alt="wallpaper" />
      </div>
    </div>
  );
};

export default Modal;
