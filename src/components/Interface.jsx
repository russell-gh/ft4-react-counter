import React, { Component } from "react";
import Characters from "./Characters";
import Sort from "./Sort";
import { sortCharacters } from "../utils/sort";
import Filter from "./Filter";
import { filterCharacters } from "../utils/filter";

class Interface extends Component {
  render() {
    const {
      onSortSelection,
      onDeleteClick,
      onLikeClick,
      characters,
      sort,
      onFilterInput,
      filter,
    } = this.props;

    //call my sort logic
    sortCharacters(sort, characters);

    //filter the data
    const filtered = filterCharacters(filter, characters);

    return (
      <div className="container">
        <Sort onSortSelection={onSortSelection} />
        <Filter onFilterInput={onFilterInput} />
        <Characters
          characters={filtered.length > 0 ? filtered : characters}
          onDeleteClick={onDeleteClick}
          onLikeClick={onLikeClick}
        />
      </div>
    );
  }
}

export default Interface;
