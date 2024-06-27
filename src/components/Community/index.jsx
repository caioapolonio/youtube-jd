import React, { useState, useEffect } from "react";
import communityStyle from "./community.module.css";
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
      // console.log(result);
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
      <section className={communityStyle.community_section}>
        {data?.channelAvatar && (
          <>
            <div className={communityStyle.community_section_header}>
              <div className={communityStyle.channel_wrapper}>
                <img
                  src={data.channelAvatar}
                  alt="channelAvatar"
                  className={communityStyle.channel_icon}
                />
                <div className={communityStyle.channel_and_date}>
                  <p className={communityStyle.channel_name}>
                    {data.channelName || "Unknown Channel"}
                  </p>
                  <p className={communityStyle.released_date}>1 day ago</p>
                </div>
              </div>
              <img
                src={menuIconSvg}
                alt="menuIconSvg"
                className={communityStyle.menu_icon}
              />
            </div>
            <div className={communityStyle.main_section}>
              <p className={communityStyle.content_text}>
                {data?.postContent || "Loading..."}
              </p>
              <div className={communityStyle.content_section}>
                <img
                  src={firstImage}
                  alt="firstImage"
                  className={communityStyle.content_image}
                />
                <img
                  src={secondImage}
                  alt="secondImage"
                  className={communityStyle.content_image}
                />
              </div>
            </div>
          </>
        )}
        {data?.question && (
          <>
            <div className={communityStyle.question_wrapper}>
              <h4>{data.question}</h4>
              <img src={questionImg} alt="questionImg" />
              <img src={questionImg} alt="questionImg" />
              <p>1.7k votes</p>
            </div>
          </>
        )}
        <div className={communityStyle.footer_section}>
          <section className={communityStyle.feedback_section}>
            <div className={communityStyle.rate_icons}>
              <img
                src={likeIcon}
                alt="likeIcon"
                className={communityStyle.like_button}
              />
              <p className={communityStyle.rate_icons_p}>4.2k</p>
              <img
                src={dislikeIcon}
                alt="dislikeIcon"
                className={communityStyle.dislike_button}
              />
            </div>
            <div className={communityStyle.comment_icon}>
              <img src={commentIcon} alt="commentIcon" />
              <p>464</p>
            </div>
          </section>
          <section className={communityStyle.comments_section}>
            <div className={communityStyle.comments_wrapper}>
              <h5>Comments</h5>
              <p>464</p>
            </div>

            <img
              src={arrowsIcon}
              alt="arrowsIcon"
              className={communityStyle.arrows_icon}
            />
          </section>
          <div className={communityStyle.input_wrapper}>
            <img src={userAvatar} alt="" className={communityStyle.user_icon} />
            <textarea
              type="text"
              id="user_comment_input"
              name="user_comment_input"
              placeholder="Add a comment..."
            ></textarea>
          </div>
        </div>
      </section>
    </div>
  );
}
