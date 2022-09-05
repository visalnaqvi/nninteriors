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
            <button className={style.footerButton}>+91 9911390398</button>
        </div>
    </div> );
}
 
export default Footer;