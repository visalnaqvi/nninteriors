import style from "../styles/imageCard.module.css"
import Image from "next/image";
const ImageCard = ({src,heading,alt}) => {
    return ( 
        <div className={style.card}>
            <div className={style.imgMainWrap}>
            <div className={style.imgContainer}>
            <Image layout="fill" src={src} alt={alt}></Image>
            </div>
            </div>
            <h3 className={style.heading}>{heading}</h3>
        </div>
     );
}
 
export default ImageCard;