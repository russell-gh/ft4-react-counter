import React, { Component } from "react";
import Button from "./Button";

class Controls extends Component {
  render() {
    const { onLikeClick, id, liked } = this.props;

    return (
      <div className="controls">
        {/* <Button text={"Delete"} /> */}
        <Button
          onLikeClick={onLikeClick}
          text={"Liked"}
          id={id}
          liked={liked}
        />
      </div>
    );
  }
}

export default Controls;
