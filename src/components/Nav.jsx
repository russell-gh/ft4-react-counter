import React, { Component } from "react";
import Link from "./Link";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link text={"Home"} />
        <Link text={"Contact"} />
        <Link text={"Products"} />
        <Link text={"Other" + new Date().toDateString()} />
      </nav>
    );
  }
}

export default Nav;
