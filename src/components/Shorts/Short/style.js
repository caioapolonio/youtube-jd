import styled from "styled-components";

export const ShortVideo = styled.div`
  width: 166px;
  height: 276px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MoreIcon = styled.div`
  top: 16px;
  right: 12px;
  position: absolute;
`;

export const ShortTitle = styled.h2`
  font-weight: 700;
  font-size: 14px;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  text-shadow: 0px 0px 6px black;

  padding: 0px 12px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const ShortViews = styled.p`
  font-weight: 700;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-shadow: 0px 0px 6px black;

  padding: 8px 12px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;
