import React from "react";
// import "globals.css"

function NsForm1() {
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Personal Details
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Full Name</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Gender</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Date Of Birth</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Nationality</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "80px",
          margin: "20px 0",
        }}
      >
        <button className="btn btn-active btn-warning">Previous</button>
        <button className="btn btn-active btn-success">Next</button>
      </div>
    </>
  );
}

export default NsForm1;
