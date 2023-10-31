const initialState = { count: 0 };

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      const copy = { ...state };
      copy.count = copy.count + action.payload;
      return copy;
    }

    case "MINUS": {
      const copy = { ...state };
      copy.count = copy.count - 1;
      return copy;
    }

    case "RESET": {
      const copy = { ...state };
      copy.count = 0;
      return copy;
    }

    default:
      return state;
  }
}
