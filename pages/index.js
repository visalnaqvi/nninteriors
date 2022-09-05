import styles from "../styles/Home.module.css";
import Navigation from "../comps/nav";
import style from "../styles/Home.module.css";
import Image from "next/image";
import o1 from "../assests/office/1.jpg";
import o2 from "../assests/living-room/8.jpg";
import o3 from "../assests/dinning-room/1.jpg";
import o4 from "../assests/bedroomracks/1.jpg";
import cardstyle from "../styles/infoCard.module.css";
import Script from "next/script";
import { useState, useEffect } from "react";
import Section from "../comps/section";
import InfoCard from "../comps/infoCard";
import OneIconCard from "../comps/oneIconCard";
import ImageCard from "../comps/imageCard";
import modularKitchen from "../assests/services/kitchen.webp";
import wardrode from "../assests/services/wardrobe.webp";
import sofa from "../assests/services/sofa.webp";
import stydytable from "../assests/services/studytable.jpg";
import fallceling from "../assests/services/fallceling.jpg";
import lights from "../assests/services/lights.jpg";
import wallpapers from "../assests/services/wall papers.jpg";
import wallpaint from "../assests/services/wallpaint.jpg";
import bathroom from "../assests/services/bathroom.jpg";
import ImageCardnoBorder from "../comps/imageCardNoBroder";
import date from "../assests/steps/booking.svg";
import meeting from "../assests/steps/meeting.svg";
import quote from "../assests/steps/quote.svg";
import payment from "../assests/steps/payment.svg";
import deliverly from "../assests/steps/delever.svg";
import Footer from "../comps/footer";
export default function Home() {
  // const [imgVal, setImg] = useState(o1);
  const [bgVal, setbg] = useState("../background/3.png");
  const [count, setCount] = useState(1);
  // const [countImage, setCountimg] = useState(1);
  // const imgArray = [o1, o2, o3, o4];
  const bgArray = [
    "../background/3.png",
    "../background/4.png",
    "../background/5.png",
    "../background/2.jpg",
    "../background/6.png",
    "../background/7.png",
    "../background/9.png",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      count == bgArray.length - 1 ? setCount(0) : setCount(count + 1);

      setbg(bgArray[count]);
      // countImage == imgArray.length - 1
      //   ? setCountimg(0)
      //   : setCountimg(countImage + 1);

      // setImg(imgArray[countImage]);
    }, 3500);

    return () => clearInterval(interval);
  }, [count, bgArray]);

  return (
    <div>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>
      <Navigation></Navigation>
      <div className={style.hero}>
        
        <div className={style.left}>
          <p className={`${style.topLogo} curveFont`}>N.N. Interiors</p>
          <h1 className="curveFont">Best Interior Designer in Delhi NCR</h1>
          <h2>Get house/office interior done with most affordable price.</h2>
          <button>Contact Us Now</button>
        </div>
        <div
          className={style.right}
          style={{ backgroundImage: `url(${bgVal})` }}
        >
          {/* <div className={style.imgContainer}>
                <Image layout={"fill"} src={imgVal} alt="interior"></Image>
              </div> */}
        </div>
        <div className={style.overlaycontainer}>
        <div className={style.overlay} style={{
          backgroundImage:"url(../background/3.png)",
        }}></div>
          <div className={style.overlay} style={{
          backgroundImage:"url(../background/4.png)",
        }}></div>
          <div className={style.overlay} style={{
          backgroundImage:"url(../background/5.png)",
        }}></div>
          <div className={style.overlay} style={{
          backgroundImage:"url(../background/2.jpg)",
        }}></div>
          <div className={style.overlay} style={{
          backgroundImage:"url(../background/6.png)",
        }}></div><div className={style.overlay} style={{
          backgroundImage:"url(../background/7.png)",
        }}></div><div className={style.overlay} style={{
          backgroundImage:"url(../background/9.png)",
        }}>
        </div>
        </div>
        

        </div>
      
      <br></br>
      {/* <div className={style.gridWrapYellow}>
       <div className={style.grid}>
              <ImageCard alt="Modular Kitchen" src={modularKitchen}></ImageCard>
              <ImageCard alt="Storage and wardrobe" src={wardrode}></ImageCard>
              <ImageCard alt="Furniture" src={sofa}></ImageCard>
              </div>
              </div> */}
      <Section heading="Benefits You Get when using our services"></Section>
      <div className={style.oneItemCardSection}>
        <OneIconCard
          icon="ribbon-outline"
          heading="Best Quality"
          text="All of your furniture uses the best materials and choices for our customers"
        ></OneIconCard>
        <OneIconCard
          icon="alarm-outline"
          heading="Timely Completion"
          text="We ensure time completion of all our projects without any delay."
        ></OneIconCard>
        <OneIconCard
          icon="cash-outline"
          heading="Best Price"
          text="We give you the most affordable pricing with most value for money ratings."
        ></OneIconCard>
      </div>

      <div className={style.grid}>
        <div className={style.showImgBox}>
          <Image layout="fill" src={o1} alt="office interior"></Image>
        </div>
        <div className={style.showImgBox}>
          <Image layout="fill" src={o2} alt="living room interior"></Image>
        </div>
        <div className={style.showImgBox}>
          <Image layout="fill" src={o3} alt="dinning room interior"></Image>
        </div>
        <div className={style.showImgBox}>
          <Image layout="fill" src={o4} alt="bed room interior"></Image>
        </div>
      </div>

      <Section heading="Our Services"></Section>
      <div className={style.gridWrap}>
        <div className={style.grid}>
          <ImageCard
            heading="Modular Kitchen"
            alt="Modular Kitchen"
            src={modularKitchen}
          ></ImageCard>
          <ImageCard
            heading="Storage and wardrobe"
            alt="Storage and wardrobe"
            src={wardrode}
          ></ImageCard>
          <ImageCard heading="Furniture" alt="Furniture" src={sofa}></ImageCard>
          <ImageCard heading="TV Units" alt="TV Units" src={o2}></ImageCard>
          <ImageCard
            heading="Study Tables"
            alt="Study Tables"
            src={stydytable}
          ></ImageCard>
          <ImageCard
            heading="False Ceiling"
            alt="False Ceiling"
            src={fallceling}
          ></ImageCard>
          <ImageCard heading="Lights" alt="Lights" src={lights}></ImageCard>
          <ImageCard
            heading="Wallpapers"
            alt="Wallpapers"
            src={wallpapers}
          ></ImageCard>
          <ImageCard
            heading="Wallpaint"
            alt="wallpaint"
            src={wallpaint}
          ></ImageCard>
          <ImageCard
            heading="Bathrooms"
            alt="Bathrooms"
            src={bathroom}
          ></ImageCard>
        </div>
      </div>

      <div className={cardstyle.card}>
        <div className={cardstyle.cardLeft}>
          <h3 className={`${cardstyle.cardHeading} curveFont`}>
            Construction + Inetrior
          </h3>
          <p className={cardstyle.cardText}>
            We provide full construction plus interior facility. We will build
            your place up from ground we have perfect team for your build. We
            provide all materials with labour and installation. Contact us for
            more information.
          </p>
          <button className={cardstyle.cardButton}>Contact us now</button>
        </div>
        <div className={cardstyle.cardRight}>
          <div className={cardstyle.cardImgContainer}>
            <Image
              layout="fill"
              src={o2}
              alt="interior designs by nn interiors"
            ></Image>
          </div>
        </div>
      </div>
      <div className={style.gridGreenWrap}>
        <Section heading="Complete Interiors in 5 easy steps"></Section>
        <div className={style.grid}>
          <ImageCardnoBorder
            number="1"
            src={date}
            alt="date picker"
            text="Book a session with our design expert to discuss the details of project."
          ></ImageCardnoBorder>
          <ImageCardnoBorder
            number="2"
            src={meeting}
            alt="meeting"
            text="Meet with our expert on site and make a line out of the design."
          ></ImageCardnoBorder>
          <ImageCardnoBorder
            number="3"
            src={quote}
            alt="quote document"
            text="Get a free personalised quote from us for your project without any charge."
          ></ImageCardnoBorder>
          <ImageCardnoBorder
            number="4"
            src={payment}
            alt="payment"
            text="Do a initial payment to book the design and expert and to initiate the project."
          ></ImageCardnoBorder>
          <ImageCardnoBorder
            number="5"
            src={deliverly}
            alt="payment"
            text="Make the rest of the payment after the completion of the project."
          ></ImageCardnoBorder>
        </div>
      </div>
      <div className={style.gridWrapYellow}>
        <div className={style.grid}>
          <ImageCard alt="TV Units" src={o2}></ImageCard>
          <ImageCard alt="Study Tables" src={stydytable}></ImageCard>
          <ImageCard alt="False Ceiling" src={fallceling}></ImageCard>
        </div>
      </div>
      <InfoCard
        cardHeading="We provide you the best experience and quality"
        cardText="You dont have to worry about the results because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials. "
        cardImage={o4}
      ></InfoCard>

      <Footer></Footer>
    </div>
  );
}
