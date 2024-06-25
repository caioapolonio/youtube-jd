import style from './style.module.css'

const Chip = (props) => {
    return (
        <div className={style.container} >{props.children}</div>
    )
}

export default Chip