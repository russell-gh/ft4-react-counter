import { useDispatch, useSelector } from "react-redux";
import { DELETE_CHARACTER, SET_SEARCH_INPUT } from "../types";

const Characters = () => {
  const simpsons = useSelector((state) => state.simpsons);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch({ type: DELETE_CHARACTER, payload: id });
  };

  //vanialla react
  const filtered =
    simpsons &&
    simpsons.filter((item) => {
      return item.character.toLowerCase().includes(search.toLowerCase());
    });

  return (
    <>
      <input
        type="text"
        onInput={(e) => {
          dispatch({ type: SET_SEARCH_INPUT, payload: e.target.value });
        }}
      />
      {filtered &&
        filtered.map((item) => {
          return (
            <p key={item.id} onClick={() => onDelete(item.id)}>
              {item.quote}
            </p>
          );
        })}
    </>
  );
};

export default Characters;
