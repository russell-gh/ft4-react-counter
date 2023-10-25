import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Character extends Component {
  render() {
    const {
      character,
      quote,
      image,
      characterDirection,
      id,
      onLikeClick,
      liked,
    } = this.props.character;

    if (characterDirection === "Left") {
      return (
        <div className="character">
          <Name name={character} />
          <Image image={image} liked={liked} />
          <Quote quote={quote} />
          <Controls
            onLikeClick={this.props.onLikeClick}
            id={id}
            liked={liked}
          />
        </div>
      );
    }

    return (
      <div className="character">
        <Name name={character} />
        <Quote quote={quote} />
        <Image image={image} liked={liked} />
        <Controls onLikeClick={this.props.onLikeClick} id={id} liked={liked} />
      </div>
    );
  }
}

export default Character;
