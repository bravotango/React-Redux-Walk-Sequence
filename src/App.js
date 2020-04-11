import React from "react";
import { useSelector } from "react-redux";
import Walk from "./components/Walk.js";

function App() {
  const counter = useSelector(state => state.counter);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="App">
            <h1>{counter}</h1>
            <Walk />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
