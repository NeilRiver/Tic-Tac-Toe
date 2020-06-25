import React from "react";
import "./App.scss";
import Score from "./components/Score/Score.js";
import GameArea from "./components/GameArea/GameArea.js";

class App extends React.Component {
  state = {
    gameField: [],
    winnerPosition: [],
    whoWin: [],
    whoseStep: true, // true - X   false - O
  };

  componentDidMount() {
    this.setState({
      gameField: new Array(9).fill(null),
      // prettier-ignore
      whoWin: [0,1,2,
             3,4,5,
             6,7,8,
             0,3,6,
             1,4,7,
             2,5,8,
             0,4,8,
             2,4,6 ]
    });
  }

  clickInfo(indexElment) {
    let arrCopy = JSON.parse(JSON.stringify(this.state.gameField));

    console.log(`index = ${indexElment}`);
    console.log(arrCopy);
    console.log(this.state.whoseStep);

    this.setState({
      gameField:arrCopy.map((value,index,array)=>index===indexElment?value=(this.state.whoseStep)?'X':'O':value),
      whoseStep: !this.state.whoseStep
    });

  }

  render() {
    return (
      <div className="App-container">
        <header>
          <Score className="score" labelName="X" winCount="1" />
          <Score labelName="Tic Tac Toe" />
          <Score className="score" labelName="O" winCount="2" />
        </header>
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
