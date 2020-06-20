import React, { Component } from "react";
import { connect } from "react-redux";

class Walk extends Component {
  render() {
    const { images, counter } = this.props;

    return (
      <>
        <img
          className="img-fluid"
          alt="walk sequence"
          src={process.env.PUBLIC_URL + images[counter]}
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
