import style from "../styles/section.module.css"

const Section = ({heading}) => {
    return ( 
        <div className={style.section}>
            <div className={style.line}></div>
        <h2 className={`${style.secHeading} curveFont`}>{heading}</h2>
       </div> );
}
 
export default Section;