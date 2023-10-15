"use client";
import { useRouter, useSearchParams } from "next/navigation";
import NsForm1 from "./new-student/NsForm1";
import NsForm2 from "./new-student/NsForm2";
import NsForm3 from "./new-student/NsForm3";
import NsForm4 from "./new-student/NsForm4";
import NsForm5 from "./new-student/NsForm5";
import NsForm6 from "./new-student/NsForm6";
import NsForm7 from "./new-student/NsForm7";
import NsForm8 from "./new-student/NsForm8";
import Container from "./Container";

const data = {
    "sid": 30,
    "step": 6,
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
    "prof": "Technical",
    "scholar": "none"
}

const HomeForm = () => {
    const router = useRouter()
    const searchParameters = useSearchParams()
    let step = (searchParameters?.get('step') ?? '1')
    let form = (<NsForm1 data={{
        step: String(data.step+1), name: data.name,
        gender: data.gender,
        age: 18
    }} />)
    switch (step) {
        case '2':
            form = <NsForm2 />
            break;
        case '3':
            form = <NsForm3 />
            break;
        case '4':
            form = <NsForm4 />
            break;
        case '5':
            form = <NsForm5 />
            break;
        case '6':
            form = <NsForm6 />
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

    return (

        <Container>
            <div onLoad={() => { router.push(`?step=${step}`) }} className='bg-white pt-20' style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: "120vh", gap: '30px' }}>
                {form}
            </div>
        </Container>

    )
}

export default HomeForm