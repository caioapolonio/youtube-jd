import communityStyle from "./community.module.css";

import useFetchDataByUrl from "../../hooks/fetchUrl";
import Survey from "./Survey/Survey";
import Post from "./Post/Post";
import Footer from "./Footer/Footer";

export default function Community({ postID }) {
  const baseUrl = "https://complemento-grupo-3-jd.vercel.app/communityPost";
  const { data, loading, error } = useFetchDataByUrl(baseUrl, postID);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;
  return (
    <div>
      <section className={communityStyle.community_section}>
        {data?.channelAvatar && (
          <Post
            channelAvatar={data.channelAvatar}
            channelName={data.channelName}
            postContent={data.postContent}
          />
        )}
        {data?.question && (
          <Survey
            question={data.question}
            answerOne={data.answerOne}
            answerTwo={data.answerTwo}
            totalVotes={data.totalVotes}
          />
        )}
        <Footer />
      </section>
    </div>
  );
}
