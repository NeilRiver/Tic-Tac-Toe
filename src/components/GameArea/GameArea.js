import React from "react";
import styles from "./GameArea.module.scss";

const GameArea = (props) => {
  return props.gameField.map((element, index) => (
    <div className={styles.GameArea} onClick={() => props.clickInfo(index)}>
      {element}
    </div>
  ));
};

export default GameArea;
