import React from "react";
import { useSelector } from "react-redux";
import Walk from "./components/walk";
import Controls from "./components/controls";

function App() {
  const counter = useSelector(state => state.counter);
  const isCycling = useSelector(state => state.isCycling);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
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
              <p className="card-text">
                <Walk />
              </p>
            </div>
            <div className="card-footer text-muted">
              <Controls />
            </div>
          </div>
          <p>
            Git:{" "}
            <a
              href="https://github.com/bravotango/ReactRedux-WalkSequence"
              target="_blank"
            >
              bravotango / ReactRedux-WalkSequence
            </a>
          </p>
          <p className="card-title slide">Slide {counter + 1}</p>
          <p className="card-title slide">
            isCycling{" "}
            {isCycling ? (
              <a href="#" class="badge badge-success">
                &nbsp;
              </a>
            ) : (
              <a href="#" class="badge badge-danger">
                &nbsp;
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
