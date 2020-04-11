import React, { Component } from "react";
import { connect } from "react-redux";
import Controls from "./controls";

class Walk extends Component {
  render() {
    const { images, counter, isCycling } = this.props;

    if (isCycling) {
      alert("we are cycling");
      // setInterval(function() {
      //   this.props.increment(1);
      // }, 3000);
    }

    // if (counter >= images.length) {
    //   this.props.reset();
    // }
    const img = images.length ? (
      <img alt="walk sequence image" src={images[counter]} />
    ) : (
      <code>No images</code>
    );

    return (
      <div>
        <Controls />
        {img}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    counter: state.counter,
    isCycling: state.isCycling
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: num => {
      dispatch({ type: "INCREMENT", payload: parseInt(num) });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Walk);
