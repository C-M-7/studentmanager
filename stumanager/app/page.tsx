import Container from "@/app/components/Container";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";



const Home = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    return (
      <ClientOnly>
        <div></div>
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div >
          
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home;
