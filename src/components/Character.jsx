import React, { Component } from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";
import Controls from "./Controls";

class Character extends Component {
  render() {
    const { character, quote, image } = this.props.character;

    return (
      <div className="character">
        <Name name={character} />
        <Quote quote={quote} />
        <Image image={image} />
        <Controls />
      </div>
    );
  }
}

export default Character;
