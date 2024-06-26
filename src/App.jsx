import Shorts from "./components/Shorts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Community from "./components/Community";
import { Container } from "./App";
import YoutubeVideo from "./components/YoutubeVideos";

function App() {
  return (
    <>
      <Header />
      <Container>
        <YoutubeVideo videoID={1001} />
        <Shorts start={0} end={3} />
        <YoutubeVideo videoID={1002} />
        <YoutubeVideo videoID={1003} />
        <Shorts start={3} end={7} />
        <YoutubeVideo videoID={1004} />
        <Community postID={3001} />
        <YoutubeVideo videoID={1005} />
        <YoutubeVideo videoID={1006} />
        <Community postID={30002} />
        <YoutubeVideo videoID={1007} />
        <YoutubeVideo videoID={1008} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
