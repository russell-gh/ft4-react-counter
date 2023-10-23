import React, { Component } from "react";
import Nav from "./Nav";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Welcome</h1>
        <p>Our site!</p>
        <Nav />
        <Nav />
      </header>
    );
  }
}

export default Header;
