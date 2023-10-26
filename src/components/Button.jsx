import React from "react";

const Button = (props) => {
  const { text, onClick, id, className } = props;

  return (
    <button className={className} onClick={() => onClick(id)}>
      {text}
    </button>
  );
};

export default Button;
