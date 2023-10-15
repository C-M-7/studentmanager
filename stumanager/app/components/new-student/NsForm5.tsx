import React from "react";
// import "globals.css"

function NsForm5() {
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Admission Details
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Student ID</strong>
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
            <strong>Degree</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="BTech/Mtech/PhD"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Batch</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="2021-2025"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Branch</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="CSE/ECE/EE/MECH"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      {/* <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Date Of Admission</strong>
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
            <strong>Allotted Email ID</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="someone@xyz.com"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "80px",
          margin: "20px 0",
        }}
      >
        <button className="btn btn-active btn-warning hover:bg-yellow-600">
          Previous
        </button>
        <button className="btn btn-active btn-success hover:bg-green-600">
          Next
        </button>
      </div>
    </>
  );
}

export default NsForm5;
