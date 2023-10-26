import React from "react";
import Character from "./Character";

const Characters = (props) => {
  const { characters, onLikeClick, onDeleteClick } = props;

  return characters.map((character, index) => {
    return (
      <Character
        key={character.id}
        character={character}
        onLikeClick={onLikeClick}
        onDeleteClick={onDeleteClick}
      />
    );
  });
};

export default Characters;
