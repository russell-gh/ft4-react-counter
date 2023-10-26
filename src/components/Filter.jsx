import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <label htmlFor="filter">Search</label>
      <input type="text" id="filter" onInput={props.onFilterInput} />
    </div>
  );
};

export default Filter;
