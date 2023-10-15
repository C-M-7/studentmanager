"use client";
import { useState } from "react";
import NsForm0 from "../components/new-student/NsForm0"
const data = {
    "sid": null,
    "age": null,
    "step": null,
    "name": null,
    "gender": null,
    "city": null,
    "pincode": null,
    "degree": null,
    "branch": null,
    "batch": null,
    "email": null,
    "quota": null,
    "updatetime": null,
    "cgpa": null,
    "sgpa": null,
    "hostel": null,
    "prof": null,
    "scholar": null
}

const Register = () => {
    const [formData, setData] = useState<any>(data)
    const handleSubmit = ()=>{

        # 

    }
    return (
        <div className='bg-white pt-20' style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: "120vh", gap: '30px' }}>
            <div>
                <h1 style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
                    Personal Details
                </h1>
                <h1>Please Enter Your Student ID</h1>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text" style={{ color: "black" }}>
                            <strong>Student ID</strong>
                        </span>
                    </label>
                    <input
                        value={formData.sid === 0 ? '' : String(formData.sid ?? 0)}
                        onChange={(e) => { setData({ ...formData, sid: Number(e.target.value) }) }}
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs bg-white"
                    />
                </div>
                <button
                    className="btn btn-active btn-success hover:bg-green-600"
                onClick={handleSubmit}
                >
                    Start Registration
                </button>
            </div>
        </div>

    )
}

export default Register