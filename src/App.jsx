import React, { Component } from "react";
import axios from "axios";
import Character from "./components/Character";
import Spinner from "./components/Spinner";
import "./App.css";

class App extends Component {
  state = { search: "" };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=25`
      );

      data.forEach((element) => {
        element.id = Math.round(Math.random() * 100000000);
        element.liked = false;
      });

      this.setState({ simpsons: data });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }

  onLikeClick = (id) => {
    //copy the simspons
    const simpsons = [...this.state.simpsons];

    //find the item
    const index = simpsons.findIndex((item) => {
      return item.id === id;
    });

    //toggle the state
    simpsons[index].liked = !simpsons[index].liked;

    //send the stata back
    this.setState({ simpsons });
  };

  onInput = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
  };

  render() {
    const { simpsons } = this.state;

    if (!simpsons) {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }

    //filter the data around here
    const filteredSimpsons = simpsons.filter((item) => {
      return item.character
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    console.log(filteredSimpsons);

    //calculate total liked
    let total = 0;
    filteredSimpsons.forEach((item) => {
      if (item.liked) {
        total++;
      }
    });

    return (
      <div className="container">
        <div>Total liked: {total}</div>
        <div>
          <label htmlFor="search"></label>
          <input type="text" id="search" onInput={this.onInput} />
        </div>
        {filteredSimpsons.map((character) => {
          return (
            <Character character={character} onLikeClick={this.onLikeClick} />
          );
        })}
      </div>
    );
  }
}

export default App;
