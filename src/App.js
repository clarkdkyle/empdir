import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import SortBtn from "./components/SortBtn"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  handleSort = () => {
    const friends =  this.state.friends.slice(0);
     friends.sort(function(a,b) {
     var x = a.name.toLowerCase();
     var y = b.name.toLowerCase();
     return x < y ? -1 : x > y ? 1 : 0;
 });
     this.setState({friends});
   }
 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        <SortBtn handleSort={this.handleSort} />
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
