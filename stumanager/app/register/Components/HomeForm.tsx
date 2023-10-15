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

export type FormType = {
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
    let form = (<NsForm1 data={data} />)
    switch (step) {
        case '2':
            form = <NsForm2 data={data} />
            break;
        case '3':
            form = <NsForm3 data={data} />
            break;
        case '5':
            form = <NsForm5 data={data} />
            break;
        case '7':
            form = <NsForm7 data={data} />
            break;
        case '8':
            form = <NsForm8 data={data} />
            break;
        default:
            break;
    }

    return (

        <Container>
            <div onLoad={() => { router.push(`/register?step=${step}`) }} className='bg-white pt-20' style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: "120vh", gap: '30px' }}>
                {form}
            </div>
        </Container>

    )
}

export default HomeForm