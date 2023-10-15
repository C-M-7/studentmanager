"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
type Ns1type = {
  step?: number | null
  name?: string| null
  gender?: string| null
  age?: number| null
}
function NsForm1({ data }: { data: Ns1type }) {
  const router = useRouter()
  const [form,setForm]=useState({name:data.name,gender:data.gender,age:data.age})
  const handleClick = ()=>{
    // change data in backend
  
    router.push(`/register?step=2`)
  }
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
          value={form.name??''}
          onChange={e=>{setForm({...form,name:(e.target.value)})}}
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
          value={form.gender??''}
          onChange={e=>{setForm({...form,gender:(e.target.value)})}}
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
          value={form.age??''}
          onChange={e=>{setForm({...form,age:Number(e.target.value)})}}
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
        {data.step && <button className="btn btn-active btn-warning hover:bg-yellow-600" onClick={() => { router.push(`/register?step=${data.step}`) }}>
          Continue
        </button>}
        <button className="btn btn-active btn-success hover:bg-green-600" onClick={handleClick}>
          Save & Next
        </button>
      </div>
    </>
  );
}
export default NsForm1;
