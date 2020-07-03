import React from "react";
import styles from "./WinnerScreen.module.scss";
const WinnerScreen = (props) => {
  let divStyle = {
    display: props.display,
    opacity: props.opacity,
    transition: "opacity 1.2s ease",
  };
  console.log(divStyle);

  return (
 
    <div
      style={divStyle}
      className={styles.WinnerScreen}
      onClick={() => props.newGame(props.winner)}
    >
      <span> winner: {props.winner}</span>
      <span> Press screen to continue </span>
    </div>
  );
};

export default WinnerScreen;
