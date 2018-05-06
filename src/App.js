import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

function scramble(array) {
  array.sort(function () { return 0.5 - Math.random() });
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
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
    let shuffled = scramble(friends);
    this.setState({ friends: shuffled });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="row">
          <div className="col-6 col-md-5 bg-primary">
            <h1 className="display-4">Clickety Clack Game</h1>
          </div>
          <Title
            score={this.state.currentScore}
          />
        </div>
        <div className="row">
          <h2>Try to click on each character, but don't hit any twice!</h2>
        </div>
        <div className="row">
          {this.state.friends.map(friend => (
            <FriendCard
              // removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              image={friend.image}
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
