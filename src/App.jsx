import React, { Component } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import "./App.css";
import Interface from "./components/Interface";

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

  onFilterInput = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { simpsons, sort, filter } = this.state;

    if (!simpsons) {
      return (
        <div className="container">
          <Spinner />
        </div>
      );
    }

    //copy the simpsons
    const _simpsons = [...simpsons];

    return (
      <Interface
        onSortSelection={this.onSortSelection}
        onLikeClick={this.onLikeClick}
        onDeleteClick={this.onDeleteClick}
        characters={_simpsons}
        sort={sort}
        filter={filter}
        onFilterInput={this.onFilterInput}
      />
    );
  }
}

export default App;
