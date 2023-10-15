import getCurrentUser from "@/app/actions/getCurrentUser";
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
