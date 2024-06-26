import style from "./style.module.css";
import logo from "../../assets/header/Logo.svg";
import cast from "../../assets/header/Cast.svg";
import notification from "../../assets/header/Notification_Icon_Frame.svg";
import search from "../../assets/header/Search_Icon_Frame.svg";
import avatar from "../../assets/header/Avatar_Frame.svg";
import explore from "../../assets/header/Explore.svg";
import Chip from "../Chip";

const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.top}>
        <div>
          <img className={style.header_imgs} src={logo} alt="Imagem da logo" />
        </div>
        <div className={style.top_rigth}>
          <img className={style.header_imgs} src={cast} alt="Imagem do cast" />
          <img
            className={style.header_imgs}
            src={notification}
            alt="Imagem da notificação"
          />
          <img
            className={style.header_imgs}
            src={search}
            alt="Imagem do icone de busca"
          />
          <img
            className={style.header_imgs}
            src={avatar}
            alt="Imagem do icone do avatar"
          />
        </div>
      </div>
      <div className={style.bottom}>
        <img
          src={explore}
          alt="Imagem do icone de uma bulsula"
          className={`${style.header_imgs} ${style.icone_explore}`}
        />
        <Chip 
          mark='black'
          color='white'
        >All</Chip>

        <Chip>New to you</Chip>
        <Chip>UX design</Chip>
        <Chip>Figma</Chip>
      </div>
    </header>
  );
};

export default Header;
