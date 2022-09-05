import style from "../styles/category.module.css";
import Image from "next/image";
import k1 from "../assests/kitchen/k1.webp";
import k2 from "../assests/kitchen/k2.webp";
import k3 from "../assests/kitchen/k3.webp";
import k4 from "../assests/kitchen/k4.webp";
import InfoCard4Images from "../comps/infoCard4Images";
import wp1 from "../assests/wall-panels/w1.webp";
import wp2 from "../assests/wall-panels/w2.webp";
import wp3 from "../assests/wall-panels/w3.webp";
import wp4 from "../assests/wall-panels/w4.webp";
const Category = () => {
  return (
    <div className={style.wrap}>
      
        <InfoCard4Images text="We provide best quality wall panels with all modern designs. 3D wall
            panels, stickers wall panels all are available with installation
            included and at most affordable pricing in whole Delhi NCR."
            heading="Wall Panels"
            img1={wp1}
            img2={wp2}
            img3={wp3}
            img4={wp4}
            alt1="wall panel design 1 by nn interiors"
            alt2="wall panel design 2 by nn interiors"
            alt3="wall panel design 3 by nn interiors"
            alt4="wall panel design 4 by nn interiors" >
        </InfoCard4Images>

        <InfoCard4Images text="We provide best quality wall panels with all modern designs. 3D wall
            panels, stickers wall panels all are available with installation
            included and at most affordable pricing in whole Delhi NCR."
            heading="Wall Panels"
            img1={k1}
            img2={k2}
            img3={k3}
            img4={k4}
            alt1="wall panel design 1 by nn interiors"
            alt2="wall panel design 2 by nn interiors"
            alt3="wall panel design 3 by nn interiors"
            alt4="wall panel design 4 by nn interiors" >
        </InfoCard4Images>
      
    </div>
  );
};

export default Category;
