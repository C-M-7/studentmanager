"use client";
import { useRouter, useSearchParams } from "next/navigation";
import NsForm1 from "../../components/new-student/NsForm1";
import NsForm2 from "../../components/new-student/NsForm2";
import NsForm3 from "../../components/new-student/NsForm3";
import NsForm4 from "../../components/new-student/NsForm4";
import NsForm5 from "../../components/new-student/NsForm5";
import NsForm6 from "../../components/new-student/NsForm6";
import NsForm7 from "../../components/new-student/NsForm7";
import NsForm8 from "../../components/new-student/NsForm8";
import Container from "../../components/Container";

type FormType = {
    "sid"?: number | null,
    "step"?: number | null,
    "name"?: string | null,
    "gender"?: string | null,
    "city"?: string | null,
    "pincode"?: number | null,
    "degree"?: string | null,
    "branch"?: string | null,
    "batch"?: number | null,
    "email"?: string | null,
    "quota"?: string | null,
    "updatetime"?: Date | null,
    "cgpa"?: number | null,
    "sgpa"?: number | null,
    "hostel"?: string | null,
    "prof"?: string | null,
    "scholar"?: string | null
    age?: number | null
}

const HomeForm = ({ data }: { data: FormType }) => {
    const router = useRouter()
    const searchParameters = useSearchParams()
    let step = (searchParameters?.get('step') ?? '1')
    const formData: FormType = {
        step: null,
        name: '',
        gender: '',
        age: 18
    }
    if (data.step) {
        formData.step = data.step + 1
    }
    let form = (<NsForm1 data={formData} />)
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