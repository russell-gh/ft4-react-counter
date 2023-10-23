import React, { Component } from "react";

class App extends Component {
  state = { count: 1, name: "Bob" };

  add = () => {
    this.setState({ count: this.state.count + 1 });
  };

  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.add}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default App;
