import { MoreIcon, ShortTitle, ShortVideo, ShortViews } from "./style";
import More from "../../../assets/shorts/More.png";

const Short = ({ image, title, views }) => {
  return (
    <ShortVideo>
      <img src={image} alt="Shorts Thumbnail" />
      <MoreIcon>
        <img src={More} alt="Options button" />
      </MoreIcon>
      <ShortTitle>{title}</ShortTitle>
      <ShortViews>{views}M views</ShortViews>
    </ShortVideo>
  );
};

export default Short;
