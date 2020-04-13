import React from "react";
import { useSelector } from "react-redux";
import Walk from "./components/Walk";
import Controls from "./components/controls";

function App() {
  const counter = useSelector(state => state.counter);

  return (
    <div className="container">
      <div className="row">
        <div class="col-sm">
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <img
                src="/docs/4.4/assets/brand/bootstrap-solid.svg"
                width="30"
                height="30"
                class="d-inline-block align-top"
                alt=""
              />
              React | Redux | BootstrapCSS
            </a>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div class="card text-center">
            <div class="card-header">Walk Sequence</div>
            <div class="card-body">
              <h5 class="card-title">Slide {counter + 1}</h5>
              <p class="card-text">
                <Walk />
              </p>
            </div>
            <div class="card-footer text-muted">
              <Controls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
