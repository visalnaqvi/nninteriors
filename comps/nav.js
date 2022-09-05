import style from "../styles/nav.module.css";
import { useState , useEffect } from "react";
import Link from "next/link";
const Navigation = () => {
    const [bgPos, setBgPos] = useState('5px');
    const [bgOpacity, setBgOpacity] = useState('0');
    const [toggle, setToggle] = useState(false);
    function activeStateChange(e){
        document.querySelectorAll(`.${style.linktext}`).forEach(li=>{
            li.classList.remove(style.active);
        })
        e.classList.add(style.active)
    }
    function Toggle(){
      setToggle(!toggle);
    }
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <span className={style.icon} onClick={()=>{Toggle()}}><ion-icon name="menu"></ion-icon></span>
        <p className="curveFont">N.N. Interiors</p>
      </div>
      <div className={style.ulContainer}>
        <ul className={style.navUl}>
          <li onMouseOver={()=>{setBgPos('5px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi} ><Link className={style.active} href='/'><p onClick={(e)=>{activeStateChange(e.target)}} className={`${style.linktext} ${style.active}`}> Home</p></Link></li>
          <li onMouseOver={()=>{setBgPos('135px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi}><Link href="/category"><p onClick={(e)=>{activeStateChange(e.target)}} className={style.linktext}>Category</p></Link></li>
          <li onMouseOver={()=>{setBgPos('265px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi}><Link href="/category"><p onClick={(e)=>{activeStateChange(e.target)}} className={style.linktext}> Products</p></Link></li>
          <li onMouseOver={()=>{setBgPos('395px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi}><Link href="/category"><p onClick={(e)=>{activeStateChange(e.target)}} className={style.linktext}> Contact Us</p></Link></li>
          <li onMouseOver={()=>{setBgPos('525px'); setBgOpacity('100')}} onMouseLeave={()=>{setBgOpacity('0')}} className={style.navLi}><Link href="/category"><p onClick={(e)=>{activeStateChange(e.target)}} className={style.linktext}> Gallary</p></Link></li>
        </ul>
        <div className={style.bg} style={{left:bgPos,opacity:bgOpacity}}></div>
      </div>

      <div className={`${style.ulContainerMobile} ${toggle?style.open:null}`}>
        <ul className={style.navUlMobile}>
          <li className={style.navLi}><p className={` ${style.mobileLogo} curveFont`}>N.N. Interiors</p></li>
          <li onClick={()=>{Toggle()}} className={style.navLi} ><Link className={style.active} href='/'><p onClick={(e)=>{activeStateChange(e.target)}} className={`${style.linktext} ${style.active}`}> Home</p></Link></li>
          <li onClick={()=>{Toggle()}} className={style.navLi}><Link href="/category"><p onClick={(e)=>{activeStateChange(e.target)}} className={style.linktext}>Category</p></Link></li>
          <li onClick={()=>{Toggle()}} className={style.navLi}><Link href="/category"><p onClick={(e)=>{activeStateChange(e.target)}} className={style.linktext}> Products</p></Link></li>
          <li onClick={()=>{Toggle()}} className={style.navLi}><Link href="/category"><p onClick={(e)=>{activeStateChange(e.target)}} className={style.linktext}> Contact Us</p></Link></li>
          <li onClick={()=>{Toggle()}} className={style.navLi}><Link href="/category"><p onClick={(e)=>{activeStateChange(e.target)}} className={style.linktext}> Gallary</p></Link></li>
        </ul>
        <div className={style.toggle} onClick={()=>{Toggle()}}></div>
      </div>

    </nav>
  );
};

export default Navigation;
