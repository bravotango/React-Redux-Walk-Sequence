import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset, cycle, pause } from "../actions";
import "../App.scss";

function Controls() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="btn-group" role="group">
        <button onClick={() => dispatch(decrement(1))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            width="32"
            height="32"
          >
            <path d="M2048 819v410H784l530 529-290 290L0 1024 1024 0l290 290-530 529h1264z" />
          </svg>
        </button>
        <button onClick={() => dispatch(pause())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            width="32"
            height="32"
          >
            <path d="M512 1877V171h341v1706H512zm683-1706h341v1706h-341V171z" />
          </svg>
        </button>
        <button onClick={() => dispatch(increment(1))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            width="32"
            height="32"
          >
            <path d="M1024 0l1024 1024-1024 1024-290-290 530-529H0V819h1264L734 290 1024 0z" />
          </svg>
        </button>
        <button onClick={() => dispatch(cycle())}>cycle</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </>
  );
}

export default Controls;
