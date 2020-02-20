import React from "react";
import css from "./Modal.module.css";

const Modal = ({ largeImg, onCloseModal }) => {
  return (
    <div className={css.Overlay} onClick={onCloseModal}>
      <div className={css.Modal}>
        <img src={largeImg} alt="wallpaper" name="overlay" />
      </div>
    </div>
  );
};

export default Modal;
