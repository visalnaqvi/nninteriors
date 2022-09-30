import style from "../styles/contactUsCard.module.css";

const ContactUsCard = ({styleds,heading,text,l1,l2}) => {
    const style1 =  {transform:"translateY(0px)"}
    const style2 =  {paddingBottom:"90px"}
    return ( 
        <div style={styleds ? style1 : style2} className={style.wrap}>
            <div className={style.heading}>{heading}</div>
            <div className={style.text}>{ text }</div>
            {l1&&<div className={style.wrapper}>
                <div className={style.wrapperInner}>
                <span className={style.span}>
                    <ion-icon name="call-sharp"></ion-icon>
          </span><p>{l1}</p>
                </div>
                <div className={style.wrapperInner}>
                <span className={style.span}>
                    <ion-icon name="call-sharp"></ion-icon>
          </span><p>{l2}</p>
                </div>
            </div>}
        </div>
     );
}
 
export default ContactUsCard;