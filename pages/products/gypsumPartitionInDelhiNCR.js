import style from "../../styles/productPage.module.css";
import one from "../../assests/gypsum-partition/gp4.webp";
import two from "../../assests/gypsum-partition/gp3.webp";
import three from "../../assests/gypsum-partition/gp2.webp";
import four from "../../assests/gypsum-partition/gp1.webp";
import { useState } from "react";
import Image from "next/image";
const GypsumPartition = () => {
  const [src, setSrc] = useState(one);
  return (
    <div className={style.wrap}>
      <div className={style.hero}>
        <div className={style.left}>
          <div className={style.imgContainer}>
            <Image layout="fill" src={src} alt="gypsum board wall partition in work Delhi NCR"></Image>
          </div>
          <br></br>
          <div className={style.top}>
            <h2 className={style.subHeading}>About NN Interiors work in Delhi NCR</h2>
            <p className={style.text}>We provide best quality <strong>interior designing in Delhi NCR. </strong>After successfully completing several <strong>interior design and construction projects in Delhi NCR</strong>.
            And having spent an amazing 15 years in <strong>interior designing and construction</strong> field with more than 100 happy clients. We can proudly claim that <storng>NN Interiors</storng> are among leading <strong>interior design and construction service providers in Delhi NCR.</strong> Call us now or visit or store in <strong>Noida</strong> for more information. We will be very happy to get in touch with you.

             </p>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.top}>
            <h1 className={style.heading}>
              Gypsum Board Wall Partition in Delhi NCR
            </h1>
            <p className={style.price}>
              Rs. 45 / <span className={style.unit}>Square Feet</span>
            </p>
            <div className={style.btnContainer}>
              <button className={style.callNow}>Call Us Now</button>
              <button className={style.form}>Request a Call Back</button>
            </div>
          </div>
          <div className={style.gallary}>
            <div
              className={style.gallaryImg}
              onClick={() => {
                setSrc(one);
              }}
            >
              <Image layout="fill" src={one} alt="gypsum board wall partition in office Delhi NCR"></Image>
            </div>
            <div
              onClick={() => {
                setSrc(two);
              }}
              className={style.gallaryImg}
            >
              <Image layout="fill" src={two} alt="gypsum board wall partition on wall Delhi NCR"></Image>
            </div>
            <div
              onClick={() => {
                setSrc(three);
              }}
              className={style.gallaryImg}
            >
              <Image layout="fill" src={three} alt="gypsum board wall partition work in porgress Delhi NCR"></Image>
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
                    <strong>Gypsum Board Wall Partition in Delhi NCR</strong>
                  </td>
                </tr>
                <tr>
                  <th>Usage/Application</th>
                  <td>Used on walls, cellings, partiting walls etc</td>
                </tr>
                <tr>
                  <th>Properties</th>
                  <td>Fire resistance, Sound Resistance, Water Proof</td>
                </tr>
                <tr>
                  <th>Finish</th>
                  <td>Matt</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>Gyproc, Armstrong, SHERA, USG Boral</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br></br>
      <article>
        <h3 className={style.h3Heading}>What is Gypsum Board?</h3>
        <br></br>
        <p className={style.text2}>One of the most often utilised construction materials, particularly in interior design projects, is gypsum board. Gypsum has several uses in the construction industry because of its characteristics and varity of its products. <strong>Gypsum board</strong> is a common <strong>construction and interior design material</strong> used in the building of walls and ceilings. Gypsum can also be used in the form of plaster on the field.</p>
        <p className={style.text2}><strong>Gypsum board</strong> is made out of a core of set gypsum that is covered with specially made paper that is securely adhered to the core. It is made to be applied to partitions, walls, or ceilings without the addition of plaster, and it creates a surface suited for either painting or writing on.</p>
        <p className={style.text2}>In drywall construction, where the plaster is removed, <strong>gypsum board</strong> is often utilised. In order to eliminate the need for further ornamentation, it is also available on the market with one side coated in aluminium and another covered in foil that reflects heat, imitation wood grain, or another design on the outer surface.</p>
        <p className={style.text2}>Gypsum board comes in a variety of forms, including gypsum form board, backing board, core board, fire-resistant <strong>gypsum board</strong>, and water-resistant gypsum board.</p>
        <p className={style.text2}>Gypsum plaster is squeezed between two thick sheets of paper to create panels, which are known as drywall, plasterboard, or wallboard. Gypsum board has numerous qualities that make it a desirable building material.</p>
        <br></br>
        <h3 className={style.h3Heading}>Properties of Gymsum Board</h3>
        <br></br>
        <h4 className={style.h4Heading}>1. Fire Resistant of Gypsum</h4>
        <p className={style.text2}>It has a natural resistance to fire. They prevent the possibility of a fire spreading, ensuring life safety. Now, the water that is contained in gypsum goods is what gives it its resistance to fire. A sheet of gypsum plasterboard that is 15 mm thick would contain approximately a litre of clear water.</p>      
        <p className={style.text2}>A protective layer forms over the gypsum product when a fire approaches the water due to evaporation. It would aid in preventing the spread of the fire to more components.</p>
        <br></br><br></br>
        <h4 className={style.h4Heading}>2. Non-Combustible Property of Gypsum</h4>
        <p className={style.text2}> Gypsum products are heated, which causes the water crystals to heat up as well. Calculations refer to the process of heat-induced gypsum dehydration. A covering over the components that prevents combustion and permits the materials around to retain a lower, safer temperature is the outcome of the calculations.</p>
        <br></br><br></br>
        <h4 className={style.h4Heading}>3. Acoustic Property of Gypsum</h4>
        <p className={style.text2}>Gypsum products are made with a greater emphasis on acoustic and sound-insulating qualities. Other projects like masonry, which is often utilised in a higher thickness and is recently shown to be less labor-intensive than gypsum, might work well. For instance, we can build 75mm thick drywall to provide the same acoustic performance as a 110mm thick masonry wall.</p>
        <br></br><br></br>
        <h4 className={style.h4Heading}>4. Thermal properties of gypsum</h4>
        <p className={style.text2}>Gypsum construction&apos;s thermal capabilities would make it possible to maintain a comfortable balance between indoor temperature and humidity. Gypsum is used in the building of formwork and plasterboard cavities to add further insulating characteristics. Plasterboards serve as a vapour barrier during interior construction, reducing indoor humidity.</p>
        <br></br>
        <h3 className={style.h3Heading}>Gypsum Board Uses</h3>
        <p className={style.text2}>The Following are the application of gypsum board,</p>
        <ul>
          <li className={style.text2}>1. Gypsum is in greater demand because it can provide an aesthetically pleasing and pleasant atmosphere when used in building.</li>
          <li className={style.text2}>2. It is a typically accessible natural substance. It has no smell.</li>
          <li className={style.text2}>3. Nowadays, gypsum construction or gypsum materials are used to prepare the majority of interior and external construction elements.</li>
          <li className={style.text2}>4. Gypsum construction has advanced in a continual process as a result of how expensive and time-consuming it is to build.</li>
          <li className={style.text2}>5. Gypsum products improve throughout time in terms of their fire resistance, acoustic qualities for noise insulation, etc.</li>

        </ul>
        <br></br>
        <h3 className={style.h3Heading}>Types of Gypsum Board</h3>
        <br></br><br></br>
        <h4 className={style.h4Heading}>1. Drywall White Board</h4>
        <p className={style.text2}>Typically, drywall has a brown side and a white side. It is available in several sizes and thicknesses ranging from 3/8 inches to one inch, making it perhaps the most affordable drywall variety. This is the most popular form and often comes in four by eight-foot panels on the market.</p>
        <br></br><br></br>
        <h4 className={style.h4Heading}>2. Backing Gypsum Board</h4>
        <p className={style.text2}>In building projects, where numerous layers of gypsum board are sought for excellent fire resistance, sound control, and wall strength, it contains a base in several layers. It is offered on a backing board with aluminium foil glued to the rear face and features grey liner paper on the front and back sides. The boards are 14 to 1 inch thick, 4 to 16 feet long, and 16 to 48 inches broad.</p>
        <br></br><br></br>
        <h4 className={style.h4Heading}>3. Water-Resistant Gypsum Board</h4>
        <p className={style.text2}>This kind has a gypsum core that is water-resistant and face paper that is water-repellent. In bathrooms, showers, and other moist spaces, it can serve as the foundation for wall tile.</p>
        <br></br><br></br>
        <h4 className={style.h4Heading}>4. Fire-Resisting Gypsum Board</h4>
        <p className={style.text2}>Due to the peculiar behaviour of the gypsum core when exposed to fire, a fire-resisting gypsum board offers effective fire protection in structures. When a building element protected by a fire-resistant gypsum board is exposed to flames, the chemically mixed water is gradually liberated as water vapour. When a board or gypsum finish is continually exposed to a temperature exceeding 49°C, this situation develops.</p>

        <br></br>
        <h3 className={style.h3Heading}>Advantages of Gypsum Board</h3>

        <p className={style.text2}>1. Provides smooth surface: If correctly executed, it is utilised in plaster material to give us a smooth white finish that is devoid of cracks, bumps, and scars. When it comes to indoor finishing, this is the key characteristic.</p>
        <p className={style.text2}>2. They naturally possess the ability to balance the interior climate, including humidity and temperature.
<ul>
  <li>
It respects the environment.</li>
<li>It provides excellent acoustic and thermal insulation.</li></ul></p>

<p className={style.text2}>3. It has good aesthetic and practical qualities: The use of gypsum goods, while staying within budget, encourages architects&apos; inventiveness. It offers many beautiful design possibilities.</p>

<p className={style.text2}>4. Installation is simple when using gypsum materials, such as when building interior walls. All that is required is to secure the frame and fill in the seams. Installation does not require expert personnel and the entire procedure is quick, simple, and clean. Gypsum plaster is a finishing finish that requires the least amount of painting. By itself, the white finish creates a tidy impression.</p>

<p className={style.text2}>5. A wide range of gypsum products are offered on the market to satisfy various functional and aesthetically pleasing needs. With the aid of distinctive packaging provided by the makers with sufficient technical expertise, the proper product may be chosen.</p>
      
      
      
      </article>
    </div>
  );
};

export default GypsumPartition;
