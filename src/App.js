import React from "react";
import "./App.scss";

class App extends React.Component {
  state = {
    playingField: Array(9).fill(null),
    xCount: 0,
  };

  componentDidUpdate() {
    if (this.state.xCount >= 5) {
      let arr = JSON.parse(JSON.stringify(this.state.playingField));
      let arr2 = [];
      let arr3 = [];

      for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 2) {
          arr2 = [];
          arr2.push(arr[i - 2], arr[i - 1], arr[i]);
          if (arr2.every((e, i, a) => e === a[0] && e !== null)) {
            /* console.log(arr2); */
            console.log(
              `комбинация ${arr[i - 2]}[${i - 2}] ${arr[i - 1]}[${i - 1}] ${
                arr[i]
              }[${i}]`
            );
          }

          arr3 = [];
          arr3.push(
            i === 8 ? arr[2] : i === 2 ? arr[0] : arr[1],
            i === 8 ? arr[5] : i === 2 ? arr[3] : arr[4],
            i === 8 ? arr[8] : i === 2 ? arr[6] : arr[7]
          );
          if (arr3.every((e, i, a) => e === a[0] && e !== null)) {
            /* console.log(arr2); */
            console.log(
              `комбинация ${i === 8 ? arr[2] : i === 2 ? arr[0] : arr[1]}[${
                i === 8 ? 2 : i === 2 ? 0 : 1
              }] ${i === 8 ? arr[5] : i === 2 ? arr[3] : arr[4]}[${
                i === 8 ? 5 : i === 2 ? 3 : 4
              }] ${i === 8 ? arr[8] : i === 2 ? arr[6] : arr[7]}[${
                i === 8 ? 8 : i === 2 ? 6 : 7
              }]`
            );
          }
        }
      }
    }
  }

  click(value, index) {
    let arr = JSON.parse(JSON.stringify(this.state.playingField));

    console.log("value = " + value);
    console.log("index = " + index);
    console.log(this.state.xCount);

    if (value === null) {
      arr = arr.map((itm, ind) =>
        ind === index
          ? this.state.xCount % 2 === 0
            ? (value = "X")
            : (value = "O")
          : itm
      );

      this.setState({
        playingField: arr,
        xCount: this.state.xCount + 1,
      });

      //console.log(this.state.playingField);
      console.log(arr);
    } else {
      console.log("Попытка перезаписать заблокирована");
    }
  }

  render() {
    return (
      <div className="App-container">
        <header>Tic Tac Toe</header>
        <center>
          {this.state.playingField.map((value, index) => (
            <div onClick={() => this.click(value, index)}>{value}</div>
          ))}
        </center>
      </div>
    );
  }
}

export default App;
