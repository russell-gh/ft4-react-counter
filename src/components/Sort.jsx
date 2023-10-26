import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="controls">
        <label htmlFor="sort">Sort by</label>
        <select name="sort" id="sort" onChange={this.props.onSortSelection}>
          <option value="character-az">Character - A to Z</option>
          <option value="character-za">Character - Z to A</option>
          <option value="quote-az">quote - A to Z</option>
          <option value="quote-za">quote - Z to A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
