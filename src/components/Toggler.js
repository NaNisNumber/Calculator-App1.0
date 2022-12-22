import "./CSS for components/Toggler.css";
export default function Toggler({ togglerPosition, togglerHandler }) {
  const moveToggler = function () {
    let moveToggler;
    const togglerClasses = ["move-initial", "move-next-pos", "move-last-pos"];
    for (let i = 0; i < togglerClasses.length; i++) {
      moveToggler = togglerClasses[togglerPosition];
    }
    return moveToggler;
  };

  return (
    <div
      className={`calculator__toggler-container calculator__toggler-container--${togglerPosition}`}
    >
      <div
        onClick={togglerHandler}
        className={`calculator__toggler calculator__toggler--${togglerPosition} ${moveToggler()}`}
      ></div>
    </div>
  );
}
