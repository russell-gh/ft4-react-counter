import React, { Component } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import "./App.css";
import { sortCharacters } from "./utils/sort";
import Sort from "./components/Sort";
import Characters from "./components/Characters";

class App extends Component {
  state = {};

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=25`
      );

      //add a unique
      //add a liked property
      data.forEach((element) => {
        element.id = Math.round(Math.random() * 1000000);
        element.liked = false;
      });

      this.setState({ simpsons: data });
    } catch (e) {
      console.log("Looks like the API is down!");
    }
  }

  onLikeClick = (id) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.id === id);
    simpsons[index].liked = !simpsons[index].liked;
    this.setState({ simpsons });
  };

  onDeleteClick = (id) => {
    const simpsons = [...this.state.simpsons];
    const index = simpsons.findIndex((item) => item.id === id);
    simpsons.splice(index, 1);
    this.setState({ simpsons });
  };

  onSortSelection = (e) => {
    this.setState({ sort: e.target.value });
  };

  render() {
    console.log(this.state);
    const { simpsons, sort } = this.state;

    if (!simpsons) {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }

    //copy the simpsons
    const _simpsons = [...simpsons];

    //call my sort logic
    sortCharacters(sort, _simpsons);

    return (
      <div className="container">
        <Sort onSortSelection={this.onSortSelection} />
        <Characters
          characters={_simpsons}
          onDeleteClick={this.onDeleteClick}
          onLikeClick={this.onLikeClick}
        />
      </div>
    );
  }
}

export default App;
