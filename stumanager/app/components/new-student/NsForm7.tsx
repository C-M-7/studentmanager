import { useRouter } from "next/navigation";
import React from "react";

function NsForm7() {
  const router = useRouter();
  return (
    <>
      <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
        Additional Information
      </h1>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Quota</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="Gen/SC/ST/OBC"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Scholarship(if applicable)</strong>
          </span>
        </label>
        <input
          type="text"
          placeholder="None/Acad/Sports/PWD"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span
            className="label-text"
            style={{ color: "black", fontSize: "0.95rem", fontWeight: "bold" }}
          >
            Attach your Quota Certificate (If Applicable)
          </span>
        </label>
        <input type="file" className="file-input w-full max-w-xs bg-gray-100" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "80px",
          margin: "20px 0",
        }}
      >
        <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={()=>{router.replace('?step=6')}}>
          Previous
        </button>
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={()=>{router.replace('?step=8')}}>
          Next
        </button>
      </div>
    </>
  );
}

export default NsForm7;
