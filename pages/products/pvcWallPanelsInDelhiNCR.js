import style from "../../styles/productPage.module.css";
import one from "../../assests/wall-panels/w1.webp";
import two from "../../assests/wall-panels/w3.webp";
import three from "../../assests/wall-panels/w2.webp";
import four from "../../assests/wall-panels/w4.webp";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import OneIconCard from "../../comps/oneIconCard";
import Section from "../../comps/section";
import Script from "next/script";
const PVCWallPanels = () => {
  const [src, setSrc] = useState(one);
  return (
    <div className={style.wrap}>
      <Script type="application/ld+json" id="gypsum-schema">{`
      {
        "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "Polished PVC Wall Panels in Delhi NCR",
  "image": "https://nninterior.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fw1.40541080.webp&w=1920&q=75",
  "description": "Polished PVC Wall Panels in Delhi NCR Home / Office Wall Decoration Elegant look, Available in sizes, Easy to clean, non-flammable Polished / Matt All top brands available",
  "brand": {
    "@type": "Brand",
    "name": "NN Interiors"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://nninterior.com/products/pvcWallPanelsInDelhiNCR",
    "priceCurrency": "INR",
    "price": "450",
    "priceValidUntil": "2022-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
      }
      `}</Script>
      <Head>
        <link
          rel="canonical"
          href="https://nninterior.com/products/pvcWallPanelsInDelhiNCR"
        />
        <link
          rel="alternate"
          href="https://nninterior.com/products/pvcWallPanelsInDelhiNCR"
          hrefLang="en-us"
        />

        <title>
        Polished PVC Wall Panels in Delhi NCR for home and office
        </title>
        <meta
          property="og:url"
          content="https://nninterior.com/products/pvcWallPanelsInDelhiNCR"
          key="ogurl"
        />
        <meta property="og:image" content={one} key="ogimage" />
        <meta
          property="og:site_name"
          content="NN Interiors Best Interior Designer and Construction Services in Delhi NCR"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Polished PVC Wall Panels in Delhi NCR at most affordabele Pricing"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Get the best quality polished PVC wall panels for home or office in Delhi NCR installed at your space at most affordable pricing by NN Interiors the best Interior Designers and construction work service providers in Delhi NCR. Visit our store in Noida for more information or call us now."
          key="ogdesc"
        />

        <meta
          name="description"
          content="Get the best quality polished PVC wall panels for home or office in Delhi NCR installed at your space at most affordable pricing by NN Interiors the best Interior Designers and construction work service providers in Delhi NCR. Visit our store in Noida for more information or call us now."
        ></meta>
      </Head>
      <div className={style.hero}>
        <div className={style.left}>
          <div className={style.imgContainer}>
            <Image
              layout="fill"
              src={src}
              alt="polished pvc wall panels in work Delhi NCR"
            ></Image>
          </div>
          <div className={`${style.gallary} ${style.mobileGallary}`}>
            <div
              className={style.gallaryImg}
              onClick={() => {
                setSrc(one);
              }}
            >
              <Image
                layout="fill"
                src={one}
                alt="polished pvc wall panels in office Delhi NCR"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSrc(two);
              }}
              className={style.gallaryImg}
            >
              <Image
                layout="fill"
                src={two}
                alt="polished pvc wall panels on wall Delhi NCR"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSrc(three);
              }}
              className={style.gallaryImg}
            >
              <Image
                layout="fill"
                src={three}
                alt="polished pvc wall panels work in porgress Delhi NCR"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSrc(four);
              }}
              className={style.gallaryImg}
            >
              <Image layout="fill" src={four} alt="two"></Image>
            </div>
          </div>
          <br></br>
          <div className={`${style.top} ${style.desktop}`}>
            <h2 className={style.subHeading}>
              About NN Interiors work in Delhi NCR
            </h2>
            <p className={style.text}>
              We provide best quality{" "}
              <strong>interior designing in Delhi NCR. </strong>After
              successfully completing several{" "}
              <strong>
                interior design and construction projects in Delhi NCR
              </strong>
              . And having spent an amazing 15 years in{" "}
              <strong>interior designing and construction</strong> field with
              more than 100 happy clients. We can proudly claim that{" "}
              <storng>NN Interiors</storng> are among leading{" "}
              <strong>
                interior design and construction service providers in Delhi NCR.
              </strong>{" "}
              Call us now or visit or store in <strong>Noida</strong> for more
              information. We will be very happy to get in touch with you.
            </p>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.top}>
            <h1 className={style.heading}>
              Polished PVC Wall Panels in Delhi NCR
            </h1>
            <p className={style.price}>
              Rs. 250 / <span className={style.unit}>Square Feet</span>
            </p>
            <div className={style.btnContainer}>
              <a href="tel: +91 9810884704"><button className={style.callNow}>Call Us Now</button></a>
              {/* <button className={style.form}>Request a Call Back</button> */}
            </div>
          </div>
          <div className={`${style.gallary} ${style.desktopGallary}`}>
            <div
              className={style.gallaryImg}
              onClick={() => {
                setSrc(one);
              }}
            >
              <Image
                layout="fill"
                src={one}
                alt="polished pvc wall panels in office Delhi NCR"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSrc(two);
              }}
              className={style.gallaryImg}
            >
              <Image
                layout="fill"
                src={two}
                alt="polished pvc wall panels on wall Delhi NCR"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSrc(three);
              }}
              className={style.gallaryImg}
            >
              <Image
                layout="fill"
                src={three}
                alt="polished pvc wall panels work in porgress Delhi NCR"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSrc(four);
              }}
              className={style.gallaryImg}
            >
              <Image layout="fill" src={four} alt="two"></Image>
            </div>
          </div>
          <div className={style.top}>
            <h2 className={style.subHeading}>Product Details:</h2>
            <table className={style.table}>
              <tbody>
                <tr className={style.tr}>
                  <th>Product Name</th>
                  <td>
                    <strong>Polished PVC Wall Panels in Delhi NCR</strong>
                  </td>
                </tr>
                <tr>
                  <th>Usage / Application</th>
                  <td>Home / Office Wall Decoration</td>
                </tr>
                <tr>
                  <th>Properties</th>
                  <td>Elegant look, Available in sizes, Easy to clean, non-flammable</td>
                </tr>
                <tr>
                  <th>Finish</th>
                  <td>Polished / Matt</td>
                </tr>
                <tr>
                  <th>Brands</th>
                  <td>All top brands available</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`${style.top} ${style.mobile}`}>
            <h2 className={style.subHeading}>
              About NN Interiors work in Delhi NCR
            </h2>
            <p className={style.text}>
              We provide best quality{" "}
              <strong>interior designing in Delhi NCR. </strong>After
              successfully completing several{" "}
              <strong>
                interior design and construction projects in Delhi NCR
              </strong>
              . And having spent an amazing 15 years in{" "}
              <strong>interior designing and construction</strong> field with
              more than 100 happy clients. We can proudly claim that{" "}
              <storng>NN Interiors</storng> are among leading{" "}
              <strong>
                interior design and construction service providers in Delhi NCR.
              </strong>{" "}
              Call us now or visit or store in <strong>Noida</strong> for more
              information. We will be very happy to get in touch with you.
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <Section heading="Benefits You Get when using our services"></Section>
      <div className={style.oneItemCardSection}>
        <OneIconCard
          icon="ribbon-outline"
          heading="Best Quality"
          text="All of our products uses the best materials and choices for our customers"
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

      <div className={style.oneItemCardSection}>
        <OneIconCard
          icon="people-outline"
          heading="Skilled Team"
          text="All of your team members are highly skilled and exprienced in there work."
        ></OneIconCard>
        <OneIconCard
          icon="school-outline"
          heading="Expert Guidance"
          text="All of the work will be done under the guidence of our exprienced experts."
        ></OneIconCard>
        <OneIconCard
          icon="shield-checkmark-outline"
          heading="Clean Finish"
          text="The finished product will have the best finish with most attractive look and feel."
        ></OneIconCard>
        
      </div>
       <article>
        <h3 className={style.h3Heading}>Application of PVC Wall Panels?</h3>
        <br></br>
        <p className={style.text2}>
          <strong>PVC wall panels</strong> are the best type of <storng>interior wall decorating</storng> product. They are excellent options for covering any undesirable, troublesome wall, ceiling, or other surface. As an example, the living room, bedroom, kitchen, TV backdrop, accent walls, and ceiling in a home; the corporate logo wall, meeting room, lobby backdrop, and reception desk front function area in an office; and the decor of restaurants, cafés, movie theatres, and nightclubs. In addition to giving the wall a great aesthetic impression.
        </p>
        <p className={style.text2}>
          The walls and ceilings are made more appealing by these panels. Customers come in a variety of styles, materials, and hues. These items are created in accordance with the unique requirements of our customers, which further enables us to maximise their happiness. Additionally, to guarantee that wall panelings are immaculate, we test them against a set of predetermined criteria. Wall panels are used in homes, businesses, and a variety of other spaces to decorate the interior. Our panels have a high tensile strength and negligible moisture content. Our <strong> PVC wal panels</strong>are available in various sizes and are easy to clean. Customers may very simply get these natural teak goods from us.
        </p>
   <br></br><br></br>
        <h3 className={style.h3Heading}>Properties of PVC Wall Panels</h3>
        <ul className={style.text2}>
          <li>Elegant look</li>
          <li>Available in sizes</li>
          <li>Easy to clean</li>
          <li>Fine Finishing</li>
          <li>Accurate dimensions</li>
          <li>Termite resistance</li>
          <li>Easy to install and maintain</li>
          <li>High temperature resistance</li>
          <li>Self-fire extinguishing, non-flammable.</li>
          <li>Quick maintenance and no need of painting.</li>
          <li>It is Inpenetrable by insects and termites, and wont rot or rust.</li>
          <li>Resistance to weather/ special chemicals, waterproof/washable.</li>
          <li>Easy to be cut, drilled, nailed, sawet, and riveted. DIY is all right.</li>
          <li>Authentic beaded look adds charm and a custom look to any room</li>
          <li>The excellent rigid and superior impacted surface is without any peeling.</li>
          <li>Natural wood grain: showing authentic wood structure and artistic sense.</li>
          <li>The simple and fast installation can save a lot of time and manpower cost.</li>
          <li>100% water resistant (including; moisture and damp proof), washable and easy to clean.</li>
          <li>Prefinished surface allows the panel to be installed as is, or it may be painted to match decor.</li>
        </ul>
        <br></br><br></br>
        <h3 className={style.h3Heading}>THE PRIMARY AREAS FOR PVC WALL PANELS APPLICATION:</h3>
      
        <ul className={style.text2}>
          <li>Reception desk front function room in office</li>
          <li>Ceiling in house decoration</li>
          <li>Night clubs decoration</li>
          <li>Company logo wall</li>
          <li>Lobby backdrop</li>
          <li>TV background</li>
          <li>Meeting room</li>
          <li>Kitchen room</li>
          <li>Feature walls</li>
          <li>Living room</li>
          <li>Restaurant</li>
          <li>Bedroom</li>
          <li>Cinema</li>
          <li>Cafes</li>
        </ul>
        <br></br><br></br>
        <h3 className={style.h3Heading}>PVC Wall Panel Advatages:</h3>
      
         <p className={style.text2}>
          <strong>PVC wall panels</strong> and ceiling panels are long-lasting and require little upkeep. They do not absorb liquids and are resistant to fading and colour changes. Additionally, they are mould and termite resistant.
        </p>
       <p className={style.text2}>
          Your rooms are more insulated with <storng>PVC panels</storng>, which helps you maintain the correct temperature while improving the effectiveness of your air conditioners and space heaters.
        </p>
        <p className={style.text2}>
        <strong>PVC wall panels</strong> and ceiling panels are available in a wide range of hues and designs.
        </p>
       
        <p className={style.text2}>
         
         <strong>PVC wall panels</strong> are extremely consumer-friendly goods. The panels are the perfect DIY option because they are simple to trim to size. They install more quickly than tiles since there is no grouting involved. Any DIY customer can fit them since they are so simple to install. This also reduces the cost of a fitter.
        </p>

        <p className={style.text2}>
         
         <strong>PVC wall panels</strong> may be used throughout the house and are extremely popular in bathrooms and kitchens since they are water- and mildew-resistant , basements, attics, garages, bedrooms, living rooms, etc.
        </p>

        
        <p className={style.text2}>
         
        Our panels are perfect for wrapping the walls and ceilings of homes, businesses, hotels, hospitals, labs, food processing facilities, etc.
        </p>

        <p className={style.text2}>
         
        There are countless options, including attractive wall panels, useful shower panels, sanitary ceiling panels, etc.
         </p>

         <p className={style.text2}>
         
         For wall and ceiling décor, Dumaplast panels offer a highly sanitary and clean alternative. No grout remains after installation to accumulate dirt. PVC resists mildew and stops bacterial development.
         </p>

         <p className={style.text2}>
         
         <strong>PVC wall panels</strong> simply need minimal maintenance. It doesnt take long to clean. The panels seamless surface prevents dirt from gathering in pores or fractures. To clean the surface, use a simple cloth. Use only non-chlorinated, non-abrasive products.
         </p>

         <p className={style.text2}>
         
         100% of PVC may be recycled. Any centre for recycling plastic can accept our panels.
         </p>

         <p className={style.text2}>
         
         When <strong>PVC wall panels</strong> are utilised in garages, basements, or other similar situations, Dumaplast panels have the benefit of being additionally insulating.
         </p>

         <p className={style.text2}>
         
         After installation, no additional finishing is necessary, such as painting, lacquering, varnishing, etc.
         </p>
          
      </article> 
    </div>
  );
};

export default PVCWallPanels;
