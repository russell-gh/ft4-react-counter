import React, { Component } from "react";
import Button from "./Button";

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <Button text={"Delete"} />
        <Button text={"Liked"} />
      </div>
    );
  }
}

export default Controls;
