import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <div className=" text-center ">
        <button className="btn btn-danger" type="button" disabled>
          <span
            className="spinner-border text-warning spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status"> Loading...</span>
        </button>
      </div>
    );
  }
}
