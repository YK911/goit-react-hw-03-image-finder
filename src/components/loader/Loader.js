import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import css from "./Loader.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={css.pending}>
        <Loader type="ThreeDots" color="#3f51b5" height={60} width={60} />
      </div>
    );
  }
}
