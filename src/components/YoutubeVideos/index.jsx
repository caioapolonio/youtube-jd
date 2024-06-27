import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import menuIcon from "../../assets/YoutubeVideos/menu_icon_black.svg";
import divider from "../../assets/YoutubeVideos/divider.svg";

const YoutubeVideo = ({ videoID }) => {
  // , channelName,channelAvatar,videoTitle,videoThumb,videoViews,videoDate
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDataById = async (id) => {
    try {
      const response = await fetch(
        `https://complemento-grupo-3-jd.vercel.app/youtubeVideos/${id}`
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
    fetchDataById(videoID);
  }, [videoID]);

  const thumbSettings = data?.thumbSettings
    ? {
        objectPosition: data.thumbSettings.object_position,
        height: data.thumbSettings.height,
      }
    : {};

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;
  return (
    <div>
      <div className={style.video_container}>
        <img
          className={style.video_thumb}
          src={data.videoThumb}
          alt="videoThumb"
          style={thumbSettings}
        />
        <div className={style.video_infos_container}>
          <img
            className={style.user_avatar}
            src={data.channelAvatar}
            alt="channelAvatar"
          />
          <div className={style.video_infos}>
            <div className={style.Title}>{data.videoTitle}</div>
            <div className={style.user_view_date}>
              <p>{data.channelName}</p>
              <img src={divider} alt="divider" />
              <p>{data.videoViews}</p>
              <img src={divider} alt="divider" />

              <p>{data.videoDate}</p>
            </div>
          </div>
          <img className={style.menu_icon} src={menuIcon} alt="menuIcon" />
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
