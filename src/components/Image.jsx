import React from "react";

const Image = (props) => {
  const { image, name } = props;

  return (
    <div className="image">
      <img src={image} alt={name} />
    </div>
  );
};

export default Image;
