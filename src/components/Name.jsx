import React from "react";

const Name = (props) => {
  const { name } = props;
  return (
    <div className="name">
      <p>{name}</p>
    </div>
  );
};

export default Name;
