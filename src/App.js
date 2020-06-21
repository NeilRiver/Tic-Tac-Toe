import React from "react";
import "./App.scss";

class App extends React.Component {
  state = {
    playingField: Array(9).fill(null),
    xCount: 0,
  };

  componentDidUpdate(){

if(this.state.xCount >= 3){
  console.log('3тий шаг')
}
  }


  click(value, index) {
    let arr = JSON.parse(JSON.stringify(this.state.playingField));

    console.log("value = " + value);
    console.log("index = " + index);
    console.log(this.state.xCount);

    if (value === null) {
      arr = arr.map((itm, ind) => (ind === index ? (this.state.xCount%2===0?(value = "X"):(value = "O")) : itm));

      this.setState({
        playingField: arr,
        xCount:this.state.xCount+1
      });

      //console.log(this.state.playingField);
      console.log(arr);
    
    } else {
      console.log("Попытка перезаписать заблокирована");
    }
  }

  render() {
    return (
      <header className="App-header">
        <center>
          {this.state.playingField.map((value, index) => (
            <div onClick={() => this.click(value, index)}>{value}</div>
          ))}
        </center>
        Tic Tac Toe
      </header>
    );
  }
}

export default App;
