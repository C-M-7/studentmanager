import NsForm0 from "../components/new-student/NsForm0"
import HomeForm from "./Components/HomeForm"
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
    "scholar": "none",
    age: 18
}

const Register = ()=>{
    return (
        <NsForm0 />
        // <HomeForm data={data} />
    )
}

export default Register