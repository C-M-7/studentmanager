// import { Listbox } from "@headlessui/react";
"use client"
import { useRouter } from "next/navigation";
import queryString from "query-string";
import React, { useState } from "react";
// import "globals.css"
// import GenderListbox from "../listboxes/GenderListbox"

function NsForm1() {
  const router = useRouter()
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
          placeholder="Male/Female/Others"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text" style={{ color: "black" }}>
            <strong>Age</strong>
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
        <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={()=>{router.replace('?step=1')}}>
          Previous
        </button>
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={()=>{router.replace('?step=2')}}>
          Next
        </button>
      </div>
    </>
  );
}

export default NsForm1;
