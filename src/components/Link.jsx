import React, { Component } from "react";

class Link extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <a className="link" href="#">
          {this.props.text}
        </a>{" "}
      </>
    );
  }
}

export default Link;
