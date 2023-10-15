"use client";
import { useState } from "react";
import NsForm0 from "../components/new-student/NsForm0"
import HomeForm from "./Components/HomeForm"
const data = {
    "sid": null,
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

const Register = ()=>{
    const [formData, setData]=useState()
    return (
        <div className='bg-white pt-20' style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: "120vh", gap: '30px' }}>
                <NsForm0 />
            </div>
        
        // <HomeForm data={data} />
    )
}

export default Register