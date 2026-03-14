import React, { Component } from "react";
import { connect } from "react-redux";

class Walk extends Component {
  render() {
    const { images, counter } = this.props;

    if (!images || images.length === 0) return null;

    const frame = images[counter % images.length];

    return (
      <img
        className="img-fluid"
        alt="walk sequence"
        src={process.env.PUBLIC_URL + frame}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images.images,
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(Walk);
