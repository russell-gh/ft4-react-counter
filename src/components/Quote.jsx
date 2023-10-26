import React from "react";

const Quote = (props) => {
  const { quote } = props;
  return (
    <div className="quote">
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
