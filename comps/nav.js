import style from "../styles/nav.module.css";
import { useState , useEffect } from "react";
const Navigation = () => {
    const [bgPos, setBgPos] = useState('5px');
    const [bgOpacity, setBgOpacity] = useState('0');
    function activeStateChange(e){
        document.querySelectorAll(`.${style.navLi}`).forEach(li=>{
            li.classList.remove(style.active);
        })
        e.classList.add(style.active)
    }
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <p className="curveFont">N.N. Interiors</p>
      </div>
      <div className={style.ulContainer}>
        <ul className={style.navUl}>
          <li onClick={(e)=>{activeStateChange(e.target)}} onMouseOver={()=>{setBgPos('5px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={`${style.navLi} ${style.active}`} >Home</li>
          <li onClick={(e)=>{activeStateChange(e.target)}} onMouseOver={()=>{setBgPos('135px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi}>Category</li>
          <li onClick={(e)=>{activeStateChange(e.target)}} onMouseOver={()=>{setBgPos('265px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi}>Products</li>
          <li onClick={(e)=>{activeStateChange(e.target)}} onMouseOver={()=>{setBgPos('395px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi}>Contact Us</li>
          <li onClick={(e)=>{activeStateChange(e.target)}} onMouseOver={()=>{setBgPos('525px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi}>Gallary</li>
        </ul>
        <div className={style.bg} style={{left:bgPos,opacity:bgOpacity}}></div>
      </div>
    </nav>
  );
};

export default Navigation;
