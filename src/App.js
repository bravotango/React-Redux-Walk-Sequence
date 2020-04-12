import React from "react";
import { useSelector } from "react-redux";
import Walk from "./components/Walk";
import Controls from "./components/controls";

function App() {
  const counter = useSelector(state => state.counter);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <div className="App">
            <h1>Slide {counter + 1}</h1>
            <Walk />
            <Controls />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
