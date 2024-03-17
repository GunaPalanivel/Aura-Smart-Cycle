import React, { Component } from "react";

export default class ProductVideo extends Component {
  render() {
    return (
      <div>
        <video width="640" height="360" controls>
          {/* <source src={product} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}
