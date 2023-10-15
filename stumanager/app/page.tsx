import Container from "@/app/components/Container";
import getCurrentUser from "@/app/actions/getCurrentUser";




const Home = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    return (
      
        <div>Hello</div>
      
    );
  }

  return (

      <Container>
        <div >
          {/* hello */}
        </div>
      </Container>
    
  )
}

export default Home;
