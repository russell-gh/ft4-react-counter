import React from "react";
import Button from "./Button";

const Controls = (props) => {
  const { id, liked, onLikeClick, onDeleteClick } = props;

  return (
    <div className="controls">
      <Button text={"Delete"} id={id} onClick={onDeleteClick} />
      <Button
        text={liked ? "Already liked" : "Like"}
        className={liked ? "liked" : "not-liked"}
        id={id}
        liked={liked}
        onClick={onLikeClick}
      />
    </div>
  );
};

export default Controls;
