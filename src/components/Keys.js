import React from "react";
import "./CSS for components/Keys.css";
export default function IntegersKeys({
  strValue,
  setStrValue,
  togglerPosition,
  nanoid,
}) {
  const symbols = ["+", "-", "/", "*", "."];
  const calcValidations = {
    //There is a symbol as the last char of the strValue
    thereIsSymbolAsLastChar: symbols.some(
      (symbol) => symbol === strValue[strValue.length - 1]
    ),
    strIsEmpty: strValue.length === 0,
  };

  const changeStrValueBtnHandler = function (integer) {
    const strInteger = String(integer);
    setStrValue((prevValue) => {
      const thereIsSymbolAfterZero = symbols.some(
        (symbol) => symbol === prevValue[1]
      );

      return prevValue[0] === "0" && !thereIsSymbolAfterZero
        ? strInteger
        : prevValue + strInteger;
    });
  };

  const addSymbolToStrValueBtnHandler = function (symbol) {
    if (
      (symbol === "-" && calcValidations.strIsEmpty) ||
      (symbol === "." && calcValidations.strIsEmpty)
    ) {
      return setStrValue((prevValue) => prevValue + symbol);
    } else if (
      calcValidations.strIsEmpty ||
      calcValidations.thereIsSymbolAsLastChar
    ) {
      return;
    } else {
      return setStrValue((prevValue) => prevValue + symbol);
    }
  };

  const equalBtnHandler = function () {
    if (calcValidations.thereIsSymbolAsLastChar || calcValidations.strIsEmpty)
      return;
    const result = String(eval(strValue).toFixed(2));
    setStrValue(result);
  };
  const deleteCharBtnHandler = function () {
    setStrValue((prevValue) => {
      return prevValue.length === 1 ? "0" : prevValue.slice(0, -1);
    });
  };
  const resetBtnHandler = function () {
    setStrValue("0");
  };
  let integers = [];
  for (let i = 0; i <= 9; i++) {
    integers.push(i);
  }

  const intBtns = integers.map((integer) => {
    return (
      <button
        onClick={() => {
          changeStrValueBtnHandler(integer);
        }}
        className={`calculator__btn calculator__btn--${togglerPosition}`}
        key={nanoid()}
      >
        {integer}
      </button>
    );
  });

  const integerKeyLines = {
    0: [],
    1: [],
    2: [],
    3: [],
  };

  for (let i = 0; i < intBtns.length; i++) {
    if (integerKeyLines["0"].length === 0) {
      integerKeyLines["0"].push(intBtns[0]);
    }
    if (intBtns[i].props.children != 0 && integerKeyLines["1"].length < 3) {
      integerKeyLines["1"].push(intBtns[i]);
    }

    if (i >= 4 && integerKeyLines["2"].length < 3) {
      integerKeyLines["2"].push(intBtns[i]);
    }
    if (i >= 7 && integerKeyLines["3"].length < 3) {
      integerKeyLines["3"].push(intBtns[i]);
    }
  }

  return (
    <React.Fragment>
      <div
        className={`calculator__keys-container calculator__keys-container--${togglerPosition}`}
      >
        {integerKeyLines["3"]}
        <button
          onClick={deleteCharBtnHandler}
          className={`calculator__btn calculator__btn--del calculator__btn--del-${togglerPosition} `}
        >
          DEL
        </button>
        {integerKeyLines["2"]}
        <button
          onClick={() => addSymbolToStrValueBtnHandler("+")}
          className={`calculator__btn calculator__btn--${togglerPosition}`}
        >
          +
        </button>
        {integerKeyLines["1"]}
        <button
          onClick={() => addSymbolToStrValueBtnHandler("-")}
          className={`calculator__btn calculator__btn--${togglerPosition}`}
        >
          -
        </button>
        <button
          onClick={() => addSymbolToStrValueBtnHandler(".")}
          className={`calculator__btn calculator__btn--${togglerPosition}`}
        >
          .
        </button>
        {integerKeyLines["0"]}
        <button
          onClick={() => addSymbolToStrValueBtnHandler("/")}
          className={`calculator__btn calculator__btn--${togglerPosition}`}
        >
          /
        </button>
        <button
          onClick={() => addSymbolToStrValueBtnHandler("*")}
          className={`calculator__btn calculator__btn--${togglerPosition}`}
        >
          x
        </button>
        <button
          onClick={resetBtnHandler}
          className={`calculator__btn-reset calculator__btn-reset--${togglerPosition}`}
        >
          RESET
        </button>
        <button
          onClick={equalBtnHandler}
          className={`calculator__btn-equal calculator__btn-equal--${togglerPosition}`}
        >
          =
        </button>
      </div>
    </React.Fragment>
  );
}
