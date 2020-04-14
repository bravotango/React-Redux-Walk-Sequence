import React, { Component } from "react";
import { connect } from "react-redux";

class Walk extends Component {
  render() {
    const {
      images,
      counter
    } = this.props;

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
    counter: state.counter
  };
};


export default connect(mapStateToProps)(Walk);
