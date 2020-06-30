import React from "react";
//import styles from './WinnerScreen.scss';
const WinnerScreen = (props) => {
  const styles = {
    fontFamily: "Bernier Shade",
    fontSize: "80px",
  };
  return (
    <div className={WinnerScreen}>
      <span style={styles}> winner: X</span>
    </div>
  );
};

export default WinnerScreen;
