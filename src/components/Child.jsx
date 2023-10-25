import React, { Component } from "react";

class Child extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.count}</button>;
  }
}

export default Child;
