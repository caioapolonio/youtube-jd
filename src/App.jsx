import Shorts from "./components/Shorts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Community from "./components/Community";

function App() {
  return (
    <>
      <Header />
      <Shorts />
      <Community postID={3001} />
      <Community postID={30002} />
      <Footer />
    </>
  );
}

export default App;
