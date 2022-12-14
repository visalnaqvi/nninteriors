import style from "../styles/infoCard.module.css";
import Image from "next/image";
const InfoCard = ({ cardHeading, cardText, cardImage }) => {
  return (
    <div className={style.card}>
      <div className={style.cardLeft}>
        <h3 className={`${style.cardHeading} curveFont`}>{cardHeading}</h3>
        <p className={style.cardText}>{cardText}</p>
        <a href="tel: +91 9810884704"><button className={style.cardButton}>Call us on 9911390398 , 9810884704</button></a>
      </div>
      <div className={style.cardRight}>
        <div className={style.cardImgContainer}>
          <Image
            layout="fill"
            src={cardImage}
            alt="interior designs by nn interiors"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
