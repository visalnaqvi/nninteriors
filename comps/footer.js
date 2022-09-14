import style from "../styles/footer.module.css"
const Footer = () => {
    return ( <div className={style.footer}>
        <div className={style.left}>
            <h2 className={`${style.footerLogo} curveFont`}>
                N.N. Interiors
            </h2>
        </div>
        <div className={style.right}>
            <p className={style.footerText}>Call Us Now on</p>
            <a href="tel: +91 9810884704"><button className={style.footerButton}>9911390398, 9810884704</button></a>
        </div>
    </div> );
}
 
export default Footer;