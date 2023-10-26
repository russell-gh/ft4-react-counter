import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

const Character = (props) => {
  const { character, quote, image, characterDirection, id, liked } =
    props.character;
  const { onLikeClick, onDeleteClick } = props;

  if (characterDirection === "Left") {
    return (
      <div className="character">
        <Name name={character} />
        <Image image={image} />
        <Quote quote={quote} />
        <Controls
          id={id}
          liked={liked}
          onLikeClick={onLikeClick}
          onDeleteClick={onDeleteClick}
        />
      </div>
    );
  }

  return (
    <div className="character">
      <Name name={character} />
      <Quote quote={quote} />
      <Image image={image} />
      <Controls
        id={id}
        liked={liked}
        onLikeClick={onLikeClick}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};

export default Character;
