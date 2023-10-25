import React, { Component } from "react";

class Button extends Component {
  state = { clicked: false };

  onClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    console.log(this.state);
    const { text } = this.props;
    const { clicked } = this.state;

    return (
      <button
        className={clicked ? "liked" : "not-liked"}
        onClick={this.onClick}
      >
        {clicked ? "Already " + text : text}
      </button>
    );
  }
}

export default Button;
