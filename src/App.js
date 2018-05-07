import React, { Component } from "react";
import TrainCard from "./components/TrainCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import trains from "./trains.json";
import "./App.css";

function scramble(array) {
  array.sort(function () { return 0.5 - Math.random() });
  return array;
};

class App extends Component {
  // Setting this.state.trains to the trains json array
  state = {
    trains,
    currentScore: 0,
    // topScore: 0,
    // rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (!this.state.clicked.includes(id)) {
      
      this.handleIncrement();
      this.state.clicked.push(id);

    } else {
      alert("Oops - already clicked this one.");

      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      // rightWrong: ""
    });
    // if (newScore >= this.state.topScore) {
    //   this.setState({ topScore: newScore });
    // }
    // else if (newScore === 12) {
    if (newScore === 12) {
      // this.setState({ rightWrong: "You win!" });
      alert("You win!");
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      // topScore: this.state.topScore,
      // rightWrong: "Glaven!",
      clicked: []
    });
    // alert("You Lose");
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffled = scramble(trains);
    this.setState({ trains: shuffled });
  };

  // Map over this.state.trains and render a TrainCard component for each train object
  render() {
    return (
      <Wrapper>
        <div className="row">
          <div className="col-12 col-md-8">
            <h1 className="display-4">Clickety Clack Game</h1>
          </div>
          <Title
            score={this.state.currentScore}
          />
        </div>
        <div className="row container">
          <h2 className="text-danger">Try to click on each train, but don't hit any twice!</h2>
        </div>
        <div className="row container">
          {this.state.trains.map(train => (
            <TrainCard
              // removeTrain={this.removeTrain}
              id={train.id}
              key={train.id}
              image={train.image}
              handleClick={this.handleClick}
              handleShuffle={this.handleShuffle}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
