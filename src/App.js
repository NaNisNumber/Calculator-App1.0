import React, { useState, Fragment } from "react";
import "./components/CSS for components/App.css";
import MadeBy from "./components/MadeBy";
import Theme from "./components/Theme";
import DisplayResult from "./components/DisplayResult";
import Keys from "./components/Keys";

export default function App() {
  const [togglerPosition, setTogglerPosition] = useState(0);
  const [strValue, setStrValue] = useState("0");

  const togglerHandler = function () {
    setTogglerPosition((prevPosition) => {
      return prevPosition === 2 ? 0 : prevPosition + 1;
    });
  };

  let nanoid = (size = 21) => {
    let id = "";
    let bytes = crypto.getRandomValues(new Uint8Array(size));
    while (size--) {
      let byte = bytes[size] & 63;
      if (byte < 36) {
        // `0-9a-z`
        id += byte.toString(36);
      } else if (byte < 62) {
        // `A-Z`
        id += (byte - 26).toString(36).toUpperCase();
      } else if (byte < 63) {
        id += "_";
      } else {
        id += "-";
      }
    }
    return id;
  };

  return (
    <Fragment>
      <main className={`theme-${togglerPosition}`}>
        <div className="calculator">
          <Theme
            togglerPosition={togglerPosition}
            togglerHandler={togglerHandler}
          />
          <DisplayResult
            strValue={strValue}
            togglerPosition={togglerPosition}
          />
          <Keys
            strValue={strValue}
            setStrValue={setStrValue}
            togglerPosition={togglerPosition}
            nanoid={nanoid}
          />
        </div>
      </main>
      <MadeBy />
    </Fragment>
  );
}
