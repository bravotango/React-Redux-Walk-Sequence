import React, { Component } from "react";
import { connect } from "react-redux";
import Controls from "./controls";
import { is } from "@babel/types";

class Walk extends Component {
  render() {
    const {
      images,
      counter,
      isCycling,
      increment,
      interval,
      setIntervalId,
      clearIntervalId,
      pause
    } = this.props;

    if (isCycling && counter === 0) {
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
      <div>
        <img
          className="img-fluid"
          alt="walk sequence image"
          src={images[counter]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    counter: state.counter,
    isCycling: state.isCycling,
    interval: state.interval
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: (num, len) => {
      dispatch({ type: "INCREMENT", payload: { num, len } });
    },
    pause: () => {
      dispatch({ type: "PAUSE" });
    },
    setIntervalId: cycleId => {
      dispatch({ type: "SET_INTERVAL", payload: cycleId });
    },
    clearIntervalId: cycleId => {
      dispatch({ type: "CLEAR_INTERVAL", payload: cycleId });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Walk);
