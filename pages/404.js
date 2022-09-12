import style from "../styles/404.module.css"
const Page404 = () => {
    return ( 
        <div className={style.wrap}>
        <p>Sorry the page you are looking for is either removed or not available right now.</p>
        <button>Contact Us</button>
        </div>
     );
}
 
export default Page404;