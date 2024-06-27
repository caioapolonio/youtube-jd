import Shorts from "./components/Shorts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Community from "./components/Community";
import { Container } from "./App";

function App() {
  return (
    <Container>
      <Header />
      <Shorts />
      <Community postID={3001} />
      <Community postID={30002} />
      <Footer />
    </Container>
  );
}

export default App;
