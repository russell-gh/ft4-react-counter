import React, { useEffect } from "react";
import Interface from "./components/Interface";
import "./App.css";
import { getTodos } from "./controllers/apiController";

const App = () => {
  useEffect(() => {
    getTodos();
  }, []);

  return <Interface />;
};

export default App;
