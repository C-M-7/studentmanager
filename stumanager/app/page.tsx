import Container from "@/app/components/Container";
import getCurrentUser from "@/app/actions/getCurrentUser";
import NsForm1 from "./components/new-student/NsForm1";
import { Hero } from "./components/hero-section/Hero";
import HomeForm from "./components/HomeForm";





const Home = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    return (

      <div className="">
        <Hero />
      </div>

    );
  }else{
    return(
      <HomeForm />
    )
  }


  
}

export default Home;
