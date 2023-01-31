import React from "react";

const Spinner = () => {
  return (
    <div className="text-center my-3 ">
      <div className="spinner-grow text-success">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-grow text-danger">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-grow text-warning">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default Spinner;
