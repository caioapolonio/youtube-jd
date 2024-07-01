import React from "react";
import style from "./style.module.css";
import firstImage from "../../../assets/Community/image_Frame_1.png";
import secondImage from "../../../assets/Community/image_Frame_2.png";
import menuIconSvg from "../../../assets/Community/menu_icon_black.svg";

const Post = ({ channelAvatar, channelName, postContent }) => {
  return (
    <>
      <div className={style.community_section_header}>
        <div className={style.channel_wrapper}>
          <img
            src={channelAvatar}
            alt="channelAvatar"
            className={style.channel_icon}
          />
          <div className={style.channel_and_date}>
            <p className={style.channel_name}>
              {channelName || "Unknown Channel"}
            </p>
            <p className={style.released_date}>1 day ago</p>
          </div>
        </div>
        <img src={menuIconSvg} alt="menuIconSvg" className={style.menu_icon} />
      </div>
      <div className={style.main_section}>
        <p className={style.content_text}>{postContent || "Loading..."}</p>
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
      </div>
    </>
  );
};

export default Post;
