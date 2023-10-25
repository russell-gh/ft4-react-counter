import React, { Component } from "react";

class Button extends Component {
  render() {
    const { text, onLikeClick, id, liked } = this.props;

    return (
      <button
        className={liked ? "liked" : "not-liked"}
        onClick={() => onLikeClick(id)}
      >
        {liked ? "Already " + text : text}
      </button>
    );
  }
}

export default Button;
