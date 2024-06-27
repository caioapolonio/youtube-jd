import Shorts from "./components/Shorts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Community from "./components/Community";
import YoutubeVideo from "./components/YoutubeVideos";

function App() {
  return (
    <>
      <Header />
      <YoutubeVideo videoID={1001} />
      <Shorts />
      <YoutubeVideo videoID={1002} />
      <YoutubeVideo videoID={1003} />
      <Shorts />
      <YoutubeVideo videoID={1004} />
      <Community postID={3001} />
      <YoutubeVideo videoID={1005} />
      <YoutubeVideo videoID={1006} />
      <Community postID={30002} />
      <YoutubeVideo videoID={1007} />
      <YoutubeVideo videoID={1008} />

      <Footer />
    </>
  );
}

export default App;
