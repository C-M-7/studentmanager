import getCurrentUser from "@/app/actions/getCurrentUser";
import { Hero } from "./components/hero-section/Hero";

const Home = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (

      <div className="">
        <Hero />
      </div>

    );
  }else{
    return <></>
  }
  
}

export default Home;
