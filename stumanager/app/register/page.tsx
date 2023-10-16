"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NsForm1 from "../components/new-student/NsForm1";
import NsForm2 from "../components/new-student/NsForm2";
import NsForm3 from "../components/new-student/NsForm3";
import NsForm5 from "../components/new-student/NsForm5";
import NsForm7 from "../components/new-student/NsForm7";
import NsForm8 from "../components/new-student/NsForm8";
import Container from "../components/Container";
import axios from "axios";
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
export type FormType = {
    "sid": number | null,
    "step": number | null,
    "name": string | null,
    "gender": string | null,
    "city": string | null,
    "pincode": number | null,
    "degree": string | null,
    "branch": string | null,
    "batch": number | null,
    "email": string | null,
    "quota": string | null,
    "updatetime": Date | null,
    "cgpa": number | null,
    "sgpa": number | null,
    "hostel": string | null,
    "prof": string | null,
    "scholar": string | null
    age: number | null
}

const Register = () => {
    const [formData, setData] = useState<any>(data)
    const router = useRouter()
    const searchParameters = useSearchParams()
    let step = (searchParameters?.get('step') ?? '0')
    const updateData = async (data:any)=>{
        // update data in axios
    }
    let form = (<NsForm1 data={formData} up={updateData} st={setData} />)
    switch (step) {
        case '2':
            // TODO: add state to backend
            form = <NsForm2 data={formData} up={updateData} st={setData} />
            break;
        case '3':
            form = <NsForm3 data={formData} up={updateData} st={setData}/>
            break;
        case '4':
            form = <NsForm5 data={formData} up={updateData} st={setData}/>
            break;
        case '5':
            form = <NsForm7 data={formData} up={updateData} st={setData}/>
            break;
        case '6':
            form = <NsForm8 data={formData} up={updateData} st={setData}/>
            break;
        default:
            break;
    }
    const handleSubmit = async (data: any) => {
        // const res=await axios("http://127.0.0.1:8000/api/logs/");
        // setData(res.data);
        // get data from backend data.sid using axios
        // setData(data fetched from backend)
        setData({
            "sid": 30,
            "age": null,
            "step": 5,
            "name": "Sahil Singh",
            "gender": "male",
            "city": "other",
            "pincode": 160015,
            "degree": "Btech",
            "branch": "EE",
            "batch": 2024,
            "email": "sahil@admin.com",
            "quota": "General",
            "updatetime": null,
            "cgpa": 8.1,
            "sgpa": 8.1,
            "hostel": "Himalaya",
            "prof": null,
            "scholar": "none"
        })
        console.log(formData);
        router.push('/register?step=1')

    }

    return (
        <Container>
            <div className='bg-white pt-20' style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: "120vh", gap: '30px' }}>
                {(step==='0')?<div className='justify-center items-center mb-auto'>
                    <h1 className='my-10' style={{ color: "black", fontSize: "2rem", fontWeight: "bold" }}>
                        Please Enter Your Student ID
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
                            value={formData.sid===0?'':String(formData.sid??'')}
                            onChange={(e)=>{setData({...formData,sid:e.target.value})}}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem' }}>
                        <button
                            className="btn btn-active btn-warning hover:bg-yellow-600"
                        onClick={()=>{
                            handleSubmit(formData)
                        }}
                        >
                            Start Registration
                        </button>
                    </div>
                </div>:form}
            </div>
        </Container>

    )
}

export default Register