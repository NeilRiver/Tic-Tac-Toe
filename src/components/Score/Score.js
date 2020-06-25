import React from "react";
import style from "./Score.scss";

const Score = (props) => {
  return (
    <span className={props.className}>
      {props.className === props.winCount
        ? props.labelName
        : `${props.labelName}: ${props.winCount}`}
    </span>
  );
};

export default Score;
