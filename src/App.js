import React from "react";
import styles from "./App.module.scss";
import Score from "./components/Score/Score.js";
import GameArea from "./components/GameArea/GameArea.js";
import WinnerScreen from "./components/WinnerScreen/WinnerScreen.js";

class App extends React.Component {
  state = {
    gameField: new Array(9).fill(null),
    // prettier-ignore
    winnerPosition: [
      0,1,2,
      3,4,5,
      6,7,8,
      0,3,6,
      1,4,7,
      2,5,8,
      0,4,8,
      2,4,6 ],
    whoWin: null,
    sortPosition: [[], []],
    score: [0, 0],
    whoseStep: true, // true - X   false - O
    //----------------------------------------------
    display: "none",
    opacity: 0,
  };

  clickInfo(indexElment) {
    let arrCopy = JSON.parse(JSON.stringify(this.state.gameField));

    console.log(`index = ${indexElment}`);
    console.log(this.state.whoseStep ? "X" : "O");

    if (arrCopy[indexElment] === null) {
      this.setState(
        {
          gameField: arrCopy.map((value, index, array) =>
            index === indexElment
              ? (value = this.state.whoseStep ? "X" : "O")
              : value
          ),
          whoseStep: !this.state.whoseStep,
        },
        () => this.findWinner(this.state.gameField)
      );
    }
  }

  findWinner(arrCopy) {
    let arrWinnerPos = JSON.parse(JSON.stringify(this.state.winnerPosition));
    let arrSortPos = [[], []];

    arrCopy.map((value, index) => {
      value === "X" && value !== null
        ? arrSortPos[0].push(index)
        : value === "O" && value !== null
        ? arrSortPos[1].push(index)
        : (() => {})();
    });

    for (let i = 0; i < arrWinnerPos.length; i = i + 3) {
      let firstCollection = [
        arrWinnerPos[i],
        arrWinnerPos[i + 1],
        arrWinnerPos[i + 2],
      ];

      arrSortPos.map((value, index, array) =>
        Array.from(new Set(array[index].concat(firstCollection))).length ===
        array[index].length
          ? this.showWinner(firstCollection, index === 0 ? "X" : "O")
          : //console.log(firstCollection, array[index], index === 0 ? "X" : "O")
            // :console.log(firstCollection,'Filed')
            null
      );
    }

    this.setState({
      sortPosition: arrSortPos,
    });
  }

  showWinner(combinationArray, nameWinner) {
    console.log(combinationArray, nameWinner);
    this.setState(
      { whoWin: this.state.whoWin !== null ? null : nameWinner },
      () => this.openWindow()
    );
  }

  newGame(nameWinner) {
    if (this.state.opacity === 0) {
      return;
    }

    let copyscore = this.state.score;
    if (nameWinner === "X") {
      copyscore[0] = copyscore[0] + 1;
    } else if (nameWinner === "O") {
      copyscore[1] = copyscore[1] + 1;
    }
    this.setState(
      {
        score: copyscore,
        gameField: new Array(9).fill(null),
        whoseStep: true,
      },
      () => this.openWindow()
    );
  }

  openWindow() {
    if (this.state.display === "none") {
      this.setState({ display: "flex" });
      setTimeout(() => this.setState({ opacity: 1, visible: true }), 10);
      clearTimeout();
    }
    if (this.state.display === "flex") {
      this.setState({ opacity: 0, visible: false });
      setTimeout(
        () => this.setState({ display: "none", visible: false, whoWin: null }),
        400
      );
      clearTimeout();
    }
  }

  render() {
    return (
      <div className={styles.AppContainer}>
        <header>
          <Score
            className="score"
            labelName="X"
            winCount={this.state.score[0]}
          />
          <Score labelName="Tic Tac Toe" />
          <Score
            className="score"
            labelName="O"
            winCount={this.state.score[1]}
          />
        </header>

        {this.state.whoWin !== null ? (
          <WinnerScreen
            winner={this.state.whoWin}
            newGame={this.newGame.bind(this)}
            display={this.state.display}
            opacity={this.state.opacity}
          />
        ) : null}

        <center>
          <GameArea
            gameField={this.state.gameField}
            clickInfo={this.clickInfo.bind(this)}
          />
        </center>
      </div>
    );
  }
}

export default App;
