import Container from "@/app/components/Container";
import getCurrentUser from "@/app/actions/getCurrentUser";
import NsForm1 from "./components/new-student/NsForm1";
import { Hero } from "./components/hero-section/Hero";




const Home = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      
      <div className="">
        <Hero />
      </div>
      
    );
  }

  return (

      <Container>
        <div className='bg-white pt-20' style={{display: "flex",flexDirection : 'column', alignItems:'center', justifyContent:'space-around',height : "120vh", gap:'30px' }}>
          <NsForm1/>
        </div>
      </Container>
    
  )
}

export default Home;
