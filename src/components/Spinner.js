import React from "react";

const Spinner =()=> {
 
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
export default Spinner
