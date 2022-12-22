import "./CSS for components/Theme.css";
import { useState } from "react";
import Toggler from "./Toggler";

export default function Theme({ togglerHandler, togglerPosition }) {
  return (
    <div className={`calculator__theme`}>
      <span
        className={`calculator__calc-text calculator__calc-text--${togglerPosition}`}
      >
        calc
      </span>
      <div className={`calculator__theme-changer-container`}>
        <span
          className={`calculator__theme-text calculator__theme-text--${togglerPosition}`}
        >
          THEME
        </span>
        <div className={`calculator__theme-changer-inner`}>
          <span
            className={`calculator__theme-number calculator__theme-number--${togglerPosition}`}
          >
            1
          </span>
          <span
            className={`calculator__theme-number calculator__theme-number--${togglerPosition}`}
          >
            2
          </span>
          <span
            className={`calculator__theme-number calculator__theme-number--${togglerPosition}`}
          >
            3
          </span>
          <Toggler
            togglerPosition={togglerPosition}
            togglerHandler={togglerHandler}
          />
        </div>
      </div>
    </div>
  );
}
