import React, {Component} from "react";
import "../App.scss";
import { connect, useDispatch } from "react-redux";

class Controls extends Component {

  render() {
    const {images,interval,isCycling,increment,decrement,pause,cycle,reset,setIntervalId,clearIntervalId} = this.props
    const handleClick = event => {
      event.stopPropagation();
      console.log(event);
      cycle();
    }

    if (!interval && isCycling) {
      setIntervalId(
        setInterval(() => {
          increment(1, images.length - 1);
        }, 250)
      );
    }

    if (interval && !isCycling) {
      alert("not cycling, clearing interval : " + interval);
      clearInterval(interval);
      clearIntervalId(interval);
    }

  return (
    <>
      <div className="btn-group" role="group">
        <button type="link" onClick={(event) => {event.persist();handleClick(event) }}> 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            width="32"
            height="32"
          >
            <path d="M1792 1024L512 1920V128l1280 896zM640 1674l929-650-929-650v1300z" />
          </svg>
        </button>
        <button onClick={() => (decrement(1, images.length-1))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            width="32"
            height="32"
          >
            <path d="M896 1674L90 1024l806-645v1295zm-128-267V645l-474 379 474 383zm218-383l806-645v1295l-806-650zm678 383V645l-474 379 474 383z" />
          </svg>
        </button>
        <button onClick={() => (increment(1, images.length-1))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            width="32"
            height="32"
          >
            <path d="M1152 379l806 645-806 650V379zm128 266v762l474-383-474-379zM256 1674V379l806 645-806 650zM384 645v762l474-383-474-379z" />
          </svg>
        </button>
        <button onClick={() => (pause())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            width="32"
            height="32"
          >
            <path d="M640 256h128v1536H640V256zm768 0v1536h-128V256h128z" />
          </svg>
        </button>
        <button onClick={() => (reset())}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            width="32"
            height="32"
          >
            <path d="M1024 1707q120 0 229-39t197-109 151-168 89-215l166 37q-33 146-111 268t-188 210-247 137-286 49q-136 0-262-40t-236-120q-54-38-98-83t-86-97l-1-1v171H171v-512h512v170H433q45 79 109 142t140 107 164 69 178 24zm853-1366v512h-512V683h250q-45-79-109-142t-140-107-164-69-178-24q-120 0-229 39T598 489 447 657t-89 215l-166-38q33-145 111-267t188-210 247-137 286-49q136 0 262 40t236 120q54 38 98 83t86 97l1 1V341h170z" />
          </svg>
        </button>
      </div>
    </>
  );
}
}

const mapStateToProps = state => {
  return {
    images: state.images,
    interval: state.interval,
    isCycling: state.isCycling
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: (num, len) => {
      dispatch({ type: "INCREMENT", payload: { num, len } });
    },
    decrement: (num, len) => {
      dispatch({ type: "DECREMENT", payload: { num, len } });
    },
    pause: () => {
      dispatch({ type: "PAUSE" });
    },
    cycle: () => {
      dispatch({ type: "CYCLING" })
    },
    reset: () => {
      dispatch({ type: "RESET" })
    },
    setIntervalId: cycleId => {
      dispatch({ type: "SET_INTERVAL", payload: cycleId });
    },
    clearIntervalId: cycleId => {
      dispatch({ type: "CLEAR_INTERVAL", payload: cycleId });
    }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controls);
