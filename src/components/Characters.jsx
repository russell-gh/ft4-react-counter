import { useDispatch, useSelector } from "react-redux";
import { DELETE_CHARACTER } from "../types";

const Characters = () => {
  const simpsons = useSelector((state) => state.simpsons);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch({ type: DELETE_CHARACTER, payload: id });
  };

  return (
    simpsons &&
    simpsons.map((item) => {
      return (
        <p key={item.id} onClick={() => onDelete(item.id)}>
          {item.quote}
        </p>
      );
    })
  );
};

export default Characters;
