import React from "react";
//import style from "./GameArea.scss";

const GameArea = (props) => {
  return props.gameField.map((element, index) => <div onClick={()=>props.clickInfo(index)}>{element}</div>);
};

export default GameArea;
