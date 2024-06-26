import style from './style.module.css'

const Chip = (props) => {
    return (
        <div 
            className={style.container}
            style={{backgroundColor: props.mark, color: props.color}}
        >{props.children}</div>
    )
}

export default Chip