import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import menuIconSvg from "../../assets/Community/menu_icon_black.svg";
import commentIcon from "../../assets/Community/comment.svg";
import dislikeIcon from "../../assets/Community/dislike.svg";
import likeIcon from "../../assets/Community/like.svg";
import arrowsIcon from "../../assets/Community/arrows.svg";
import firstImage from "../../assets/Community/image_Frame_1.png";
import secondImage from "../../assets/Community/image_Frame_2.png";
import userAvatar from "../../assets/Community/user_avatar.png";
import questionImg from "../../assets/Community/question.png";

export default function Community({ postID }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataById = async (id) => {
    try {
      const response = await fetch(
        `https://complemento-grupo-3-jd.vercel.app/communityPost/${id}`
      );
      if (!response.ok) {
        throw new Error(`Erro HTTP! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
      console.log(result);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataById(postID);
  }, [postID]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;
  return (
    <div>
      <section className={style.community_section}>
        {data?.channelAvatar && (
          <>
            <header className={style.community_section_header}>
              <div className={style.channel_wrapper}>
                <img
                  src={data.channelAvatar}
                  alt="channelAvatar"
                  className={style.channel_icon}
                />
                <div className={style.channel_and_date}>
                  <p className={style.channel_name}>
                    {data.channelName || "Unknown Channel"}
                  </p>
                  <p className={style.released_date}>1 day ago</p>
                </div>
              </div>
              <img
                src={menuIconSvg}
                alt="menuIconSvg"
                className={style.menu_icon}
              />
            </header>
            <main className={style.main_section}>
              <p className={style.content_text}>
                {data?.postContent || "Loading..."}
              </p>
              <div className={style.content_section}>
                <img
                  src={firstImage}
                  alt="firstImage"
                  className={style.content_image}
                />
                <img
                  src={secondImage}
                  alt="secondImage"
                  className={style.content_image}
                />
              </div>
            </main>
          </>
        )}
        {data?.question && (
          <>
            <div className={style.question_wrapper}>
              <h4>{data.question}</h4>
              <img src={questionImg} alt="questionImg" />
              <img src={questionImg} alt="questionImg" />
              <p>1.7k votes</p>
            </div>
          </>
        )}
        <footer className={style.footer_section}>
          <section className={style.feedback_section}>
            <div className={style.rate_icons}>
              <img
                src={likeIcon}
                alt="likeIcon"
                className={style.like_button}
              />
              <p>4.2k</p>
              <img
                src={dislikeIcon}
                alt="dislikeIcon"
                className={style.dislike_button}
              />
            </div>
            <div className={style.comment_icon}>
              <img src={commentIcon} alt="commentIcon" />
              <p>464</p>
            </div>
          </section>
          <section className={style.comments_section}>
            <div className={style.comments_wrapper}>
              <h5>Comments</h5>
              <p>464</p>
            </div>

            <img
              src={arrowsIcon}
              alt="arrowsIcon"
              className={style.arrows_icon}
            />
          </section>
          <div className={style.input_wrapper}>
            <img src={userAvatar} alt="" className={style.user_icon} />
            <textarea
              type="text"
              id="user_comment_input"
              name="user_comment_input"
              placeholder="Add a comment..."
            ></textarea>
          </div>
        </footer>
      </section>
    </div>
  );
}
