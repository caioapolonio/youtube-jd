import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import menuIcon from "../../assets/YoutubeVideos/menu_icon_black.svg";
import divider from "../../assets/YoutubeVideos/divider.svg";
import useFetchDataByUrl from "../../hooks/fetchUrl";

const YoutubeVideo = ({ videoID }) => {
  const baseUrl = "https://complemento-grupo-3-jd.vercel.app/youtubeVideos";
  const { data, loading, error } = useFetchDataByUrl(baseUrl, videoID);
  const thumbSettings = data?.thumbSettings
    ? {
        objectPosition: data.thumbSettings.object_position,
        height: data.thumbSettings.height,
        maxHeight: data.thumbSettings.maxHeight,
      }
    : {};

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;
  return (
    <div className={style.video_container}>
      <img
        className={`${style.video_thumb} ${style.hover_itens}`}
        src={data.videoThumb}
        alt="videoThumb"
        style={thumbSettings}
      />
      <div className={style.video_infos_container}>
        <img
          className={`${style.user_avatar} ${style.hover_itens}`}
          src={data.channelAvatar}
          alt="channelAvatar"
        />
        <div className={style.video_infos}>
          <div className={`${style.Title} ${style.hover_itens}`}>
            {data.videoTitle}
          </div>
          <div className={`${style.user_view_date} ${style.hover_itens}`}>
            <p>{data.channelName}</p>
            <img src={divider} alt="divider" />
            <p>{data.videoViews}</p>
            <img src={divider} alt="divider" />

            <p>{data.videoDate}</p>
          </div>
        </div>
        <img
          className={`${style.menu_icon} ${style.hover_itens}`}
          src={menuIcon}
          alt="menuIcon"
        />
      </div>
    </div>
  );
};

export default YoutubeVideo;
