import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

// function shuffleFriends(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

function shuffleFriends(array) {
  array.sort(function() { return 0.5 - Math.random() });
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  handleClick = id => {
    // if (this.state.clicked.indexOf(id) === -1) {
    //   this.handleIncrement();
    //   this.setState({ clicked: this.state.clicked.concat(id) });
    // } else {
    //   this.handleReset();
    // }
    this.handleShuffle();

  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  handleShuffle = () => {
    let shuffledFriends = shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
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
      </Wrapper>
    );
  }
}

export default App;