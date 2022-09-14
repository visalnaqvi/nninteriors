import Image from "next/image";
import Link from "next/link";
import style from "../styles/infoCard4Images.module.css"
const InfoCard4Images = ({text,link,heading,img1,img2,img3,img4,alt1,alt2,alt3,alt4}) => {
    return ( 
        <div className={style.card}>
        <div className={style.left}>
          <h1 className={style.cardHeading}>{heading}</h1>
          <p className={style.cardText}>
            {text}
          </p>
          <div className={style.buttonContainer}>
            <Link href="/products/gypsumPartitionInDelhiNCR"><button className={style.cardButtonBorder}>View More</button></Link>
            <a href="tel: +91 9810884704"><button className={style.cardButton}>Call Us on 9911390398, 98108 84704</button></a>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.top}>
            <div className={style.imgContainer}>
              <Image
                loading="eager"
                src={img1}
                alt={alt1}
              ></Image>
            </div>
            <div className={style.imgContainer}>
              <Image
                loading="eager"
                src={img2}
                alt={alt2}
              ></Image>
            </div>
          </div>
          <div className={style.bottom}>
            <div className={style.imgContainer}>
              <Image
                loading="eager"
                src={img3}
                alt={alt3}
              ></Image>
            </div>
            <div className={style.imgContainer}>
              <Image
                loading="eager"
                src={img4}
                alt={alt4}
              ></Image>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default InfoCard4Images;