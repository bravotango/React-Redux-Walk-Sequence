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
          increment(1);
        }, 250)
      );
    }

    if (!isCycling) {
      // alert("not cycling, clearing interval : " + interval);
      clearInterval(interval);
      clearIntervalId(interval);
    }

    return (
      <div>
        <img alt="walk sequence image" src={images[counter]} />
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
    increment: num => {
      dispatch({ type: "INCREMENT", payload: parseInt(num) });
    },
    pause: () => {
      dispatch({ type: "PAUSE" });
    },
    setIntervalId: cycleId => {
      dispatch({ type: "SET_INTERVAL", payload: parseInt(cycleId) });
    },
    clearIntervalId: cycleId => {
      dispatch({ type: "CLEAR_INTERVAL", payload: parseInt(cycleId) });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Walk);
