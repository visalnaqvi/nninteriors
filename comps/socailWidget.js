import socialStyle from "../styles/socialContainer.module.css"
const SocialWidget = () => {
    return ( 
        <div className={`${socialStyle.wrap} ${socialStyle.onHome}`}>
        <a rel="noreferrer" href="https://www.instagram.com/n.n.interiors/" target="_blank" className={socialStyle.link}>
          <span className={socialStyle.span}>
            <ion-icon name="logo-instagram"></ion-icon>
          </span>
        </a>
        <a rel="noreferrer" href="https://www.facebook.com/nninteriors.delhi/" target="_blank" className={socialStyle.link}>
          <span className={socialStyle.span}>
            <ion-icon name="logo-facebook"></ion-icon>
          </span>
        </a>
        <a rel="noreferrer" href="https://in.pinterest.com/nninteriorsdelhi/" target="_blank" className={socialStyle.link}>
          <span className={socialStyle.span}>
            <ion-icon name="logo-pinterest"></ion-icon>
          </span>
        </a>
        <a rel="noreferrer" href="https://www.youtube.com/channel/UCVhOmA1RmsINZQWkC9cDOzQ" target="_blank" className={socialStyle.link}>
          <span className={socialStyle.span}>
            <ion-icon name="logo-youtube"></ion-icon>
          </span>
        </a>
      </div>
     );
}
 
export default SocialWidget;