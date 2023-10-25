import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <Child onClick={this.onClick} count={this.state.count} />
      </>
    );
  }
}

export default Parent;
