import style from "../styles/oneIconCard.module.css"
const OneIconCard = ({icon,heading,text}) => {
    return ( 
        <div className={style.wrap}>
            <div className={style.left}>
                <span>
                <ion-icon name={icon}></ion-icon>
                </span>
            </div>
            <div className={style.right}>
                <h3 className={style.cardHeading}>{heading}</h3>
                <p className={style.cardText}>{text}</p>
            </div>
        </div>
     );
}
 
export default OneIconCard;