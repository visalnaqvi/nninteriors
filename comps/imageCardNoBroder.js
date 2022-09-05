import style from "../styles/imageCardNoBorder.module.css";
import Image from "next/image";
const ImageCardnoBorder = ({ number, src, text, alt }) => {
  return (
    <div className={style.card}>
      <div className={style.imgMainWrap}>
        <div className={style.imgContainer}>
          <Image layout="fill" src={src} alt={alt}></Image>
        </div>
      </div>
      <div className={style.content}>
        <span className={style.number}>
          {number}
        </span>
        <p className={style.text}>{text}</p>
      </div>
    </div>
  );
};

export default ImageCardnoBorder;
