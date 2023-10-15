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
    const router = useRouter()
    const searchParameters = useSearchParams()
    let step = (searchParameters?.get('step') ?? '1')
    let form = (<NsForm1 data={data} />)
    switch (step) {
        case '2':
            form = <NsForm2 />
            break;
        case '3':
            form = <NsForm3 />
            break;
        case '5':
            form = <NsForm5 />
            break;
        case '7':
            form = <NsForm7 />
            break;
        case '8':
            form = <NsForm8 />
            break;
        default:
            break;
    }
    const handleSubmit = async (data: any) => {

        // get data from backend data.sid using axios
        // setData(data fetched from backend)

        router.push('/register?step=1')

    }
    return (
        <div className='bg-white pt-20' style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: "120vh", gap: '30px' }}>
            <div className='justify-center items-center mb-auto'>
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
                        type="tel"
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
            </div>
        </div>

    )
}

export default Register