import React from "react";
import "./App.scss";
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
    whoWin: [],
    sortPosition: [[], []],
    whoseStep: true, // true - X   false - O
  };

  clickInfo(indexElment) {
    let arrCopy = JSON.parse(JSON.stringify(this.state.gameField));

    console.log(`index = ${indexElment}`);
    console.log(this.state.whoseStep ? "X" : "O");

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

    this.setState(
      {
        sortPosition: arrSortPos,
      }
      //  () => console.log(this.state.sortPosition)
    );
  }

  showWinner(combinationArray, nameWinner) {
    console.log(combinationArray, nameWinner);
  }

  render() {
    return (
      <div className="App-container">
        <header>
          <Score className="score" labelName="X" winCount="1" />
          <Score labelName="Tic Tac Toe" />
          <Score className="score" labelName="O" winCount="2" />
        </header>
        <WinnerScreen/>
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
