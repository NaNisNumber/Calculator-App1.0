import "./CSS for components/DisplayResult.css";

export default function DisplayResult({ strValue, togglerPosition }) {
  return (
    <div
      className={`calculator__result-container calculator__result-container--${togglerPosition}`}
    >
      <p
        className={`calculator__result calculator__result--${togglerPosition}`}
      >
        {strValue}
      </p>
    </div>
  );
}
