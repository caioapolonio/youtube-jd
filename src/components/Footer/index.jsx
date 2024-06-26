import style from './style.module.css'
import home from '../../assets/footer/Home_Frame.svg'
import short from '../../assets/footer/Shorts_Frame.svg'
import subscription from '../../assets/footer/Subscriptions_Frame.svg'
import library from '../../assets/footer/Library_Frame.svg'
import add from '../../assets/footer/Add.svg'


const Footer = () => {
    return (
        <footer>
            <div className={style.container_icone}>
                <img src={home} alt="Icone de Home" />
                <h6>home</h6>
            </div>
            <div className={style.container_icone}>
                <img src={short} alt="Icone de Shorts" />
                <h6>Shorts</h6>
            </div>
            <div>
                <img src={add} alt="Icone de Add" />
            </div>
            <div className={style.container_icone}>
                <img src={subscription} alt="Icone de subscriptions" />
                <h6>Subscriptions</h6>
            </div>
            <div className={style.container_icone}>
                <img src={library} alt="Icone de Library" />
                <h6>Library</h6>
            </div>
        </footer>
    )
}

export default Footer;