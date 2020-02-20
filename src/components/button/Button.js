import React from "react";
import css from "./Button.module.css";

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} className={css.button}>
    Load more
  </button>
);

export default Button;
