import React from "react";
import css from "./Searchbar.module.css";

const Searchbar = ({ onHandleSubmit }) => {
  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={onHandleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

export default Searchbar;
