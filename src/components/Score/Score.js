import React from "react";
import styles from "./Score.module.scss";

const Score = (props) => {
  return (
    <span className={props.className === "score" ? styles.score : null}>
      {props.className === props.winCount
        ? props.labelName
        : `${props.labelName}: ${props.winCount}`}
    </span>
  );
};

export default Score;
