import React, { useState } from "react";
import { data } from "./config";
import DataInput from "./DataInput";

const App = () => {
  const [state, setState] = useState({});

  const onInputCallBack = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  console.log(state);
  return data.map((item) => {
    return (
      <div>
        <DataInput item={item} onInputCallBack={onInputCallBack} />
      </div>
    );
  });
};

export default App;
