import React from "react";
import { useSelector } from "react-redux";
import Walk from "./components/walk";
import Controls from "./components/controls";

function App() {
  const counter = useSelector(state => state.counter);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img
                src="/docs/4.4/assets/brand/bootstrap-solid.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              React | Redux | BootstrapCSS
            </a>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="card text-center">
            <div className="card-header">Walk Sequence</div>
            <div className="card-body">
              <h5 className="card-title">Slide {counter + 1}</h5>
              <p className="card-text">
                <Walk />
              </p>
            </div>
            <div className="card-footer text-muted">
              <Controls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
