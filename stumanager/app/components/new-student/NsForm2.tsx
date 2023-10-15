import { useRouter } from "next/navigation";
import React from "react";
// import "globals.css"

function NsForm2() {
  const router = useRouter()
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Address Details
      </h1>
        {/* <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text" style={{ color: "black" }}>
              <strong>Address</strong>
            </span>
          </label>
          <input
            type="text"
            placeholder="Line-1"
            className="input input-bordered w-full max-w-xs bg-white"
          />
        </div> */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>City</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Chd/Pkl/Moh/Others"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>State</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      {/* <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Country</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div> */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Pincode</strong>
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
        <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={()=>{router.push('/register?step=1')}}>
          Previous
        </button>
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={()=>{router.push('/register?step=3')}}>
          Next
        </button>
      </div>
    </>
  );
}

export default NsForm2;
