import React, { Component } from "react";
import { connect } from "react-redux";

class Walk extends Component {
  render() {
    const {
      images,
      counter
    } = this.props;

    return (
      <>
        <img
          className="img-fluid"
          alt="walk sequence"
          src={images[counter]}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    images: state.images,
    counter: state.counter
  };
};


export default connect(mapStateToProps)(Walk);
