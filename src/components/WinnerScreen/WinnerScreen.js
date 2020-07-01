import React from "react";
import styles from "./WinnerScreen.module.scss";
const WinnerScreen = (props) => {
  return (
    <div className={styles.WinnerScreen}
    onClick={()=>props.newGame(props.winner)}
    >
      <span> winner: {props.winner}</span>
      <span> Press screen to continue </span>
    </div>
  );
};

export default WinnerScreen;
