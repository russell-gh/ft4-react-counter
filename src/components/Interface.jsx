import React from "react";
import Characters from "./Characters";
import Sort from "./Sort";
import { sortCharacters } from "../utils/sort";
import Filter from "./Filter";
import { filterCharacters } from "../utils/filter";
import { calcTotalLiked } from "../utils/stats";

const Interface = (props) => {
  const {
    onSortSelection,
    onDeleteClick,
    onLikeClick,
    characters,
    sort,
    onFilterInput,
    filter,
  } = props;

  //call my sort logic
  sortCharacters(sort, characters);

  //filter the data
  const filtered = filterCharacters(filter, characters);

  //calc the total liked of the filtered
  const totalFiltertedLiked = calcTotalLiked(filtered);
  const totalLiked = calcTotalLiked(characters);

  return (
    <div className="container">
      <h1>Total liked: {totalLiked}</h1>
      <h1>Total liked in search: {totalFiltertedLiked}</h1>
      <Sort onSortSelection={onSortSelection} />
      <Filter onFilterInput={onFilterInput} />
      <Characters
        characters={filtered.length > 0 ? filtered : characters}
        onDeleteClick={onDeleteClick}
        onLikeClick={onLikeClick}
      />
    </div>
  );
};

export default Interface;
