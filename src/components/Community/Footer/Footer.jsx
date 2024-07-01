import React, { useState } from "react";
import style from "./style.module.css";
import commentIcon from "../../../assets/Community/comment.svg";
import arrowsIcon from "../../../assets/Community/arrows.svg";
import userAvatar from "../../../assets/Community/user_avatar.png";

const likeIcon = (
  <svg
    width="20"
    height="18"
    viewBox="0 0 20 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1008 6.079L10.963 6.68919H11.5885H17.6526C18.4609 6.68919 19.056 7.2807 19.0743 7.92691L19.0696 7.96095L19.0345 8.21952L19.0747 8.2565V9.72587C19.0747 9.88017 19.0436 10.0238 18.9831 10.1685L16.0846 16.3937L16.0845 16.3937L16.0824 16.3984C15.8807 16.8438 15.3848 17.1834 14.7696 17.1834H6.1203C5.29926 17.1834 4.69824 16.5731 4.69824 15.9151V7.07336C4.69824 6.73763 4.84272 6.42839 5.09873 6.19922L5.09877 6.19926L5.10406 6.19439L11.0907 0.678182L11.769 1.29634C11.7692 1.29658 11.7695 1.29681 11.7697 1.29705C11.9299 1.44471 12.0236 1.64171 12.03 1.8436L12.0072 2.0678L11.1008 6.079Z"
      stroke="#0F0F0F"
    />
    <path
      d="M4.62205 7.12305H0.901367L0.901444 17.2255H4.69062M7.526 17.2255H4.69062M4.69062 16.0648V17.2255"
      stroke="#0F0F0F"
    />
  </svg>
);
const dislikeIcon = (
  <svg
    width="20"
    height="19"
    viewBox="0 0 20 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.70189 12.6044L8.83976 11.9942H8.21419H2.1501C1.3418 11.9942 0.746759 11.4027 0.728473 10.7564L0.733098 10.7224L0.768229 10.4638L0.72804 10.4268V8.95748C0.72804 8.80318 0.759125 8.6595 0.819675 8.51489L3.71816 2.28968L3.71819 2.28969L3.72036 2.28491C3.92207 1.83952 4.41789 1.49995 5.03318 1.49995H13.6824C14.5035 1.49995 15.1045 2.11026 15.1045 2.76829V11.61C15.1045 11.9457 14.96 12.255 14.704 12.4841L14.704 12.4841L14.6987 12.489L8.71206 18.0052L8.03376 17.387C8.03351 17.3868 8.03325 17.3865 8.03299 17.3863C7.87288 17.2386 7.7791 17.0416 7.77272 16.8397L7.79557 16.6156L8.70189 12.6044Z"
      stroke="#0F0F0F"
    />
    <path
      d="M15.1807 11.5603H18.9014L18.9013 1.45788H15.1121M12.2767 1.45788H15.1121M15.1121 2.61854V1.45788"
      stroke="#0F0F0F"
    />
  </svg>
);

const Footer = () => {
  const [likeColor, setLikeColor] = useState("none");
  const [dislikeColor, setDislikeColor] = useState("none");

  const handleLikeClick = () => {
    if (likeColor === "none") {
      setLikeColor("#7b7a7acc");
      setDislikeColor("none");
    } else {
      setLikeColor("none");
    }
  };

  const handleDislikeClick = () => {
    if (dislikeColor === "none") {
      setDislikeColor("#7b7a7acc");
      setLikeColor("none");
    } else {
      setDislikeColor("none");
    }
  };

  return (
    <div className={style.footer_section}>
      <section className={style.feedback_section}>
        <div className={style.rate_icons}>
          <div
            className={style.like_button}
            onClick={handleLikeClick}
            style={{ fill: likeColor }}
          >
            {likeIcon}
          </div>
          <p className={style.rate_icons_p}>4.2k</p>
          <div
            className={style.dislike_button}
            onClick={handleDislikeClick}
            style={{ fill: dislikeColor }}
          >
            {dislikeIcon}
          </div>
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

        <img src={arrowsIcon} alt="arrowsIcon" className={style.arrows_icon} />
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
    </div>
  );
};

export default Footer;
