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
import gp1 from "../assests/gypsum-partition/gp1.webp";
import gp2 from "../assests/gypsum-partition/gp2.webp";
import gp3 from "../assests/gypsum-partition/gp3.webp";
import gp4 from "../assests/gypsum-partition/gp4.webp";
import tv1 from "../assests/living-room/8.webp";
import tv2 from "../assests/living-room/9.webp";
import tv3 from "../assests/living-room/10.webp";
import tv4 from "../assests/living-room/11.webp";
import wr1 from "../assests/bedroomracks/1.webp";
import wr2 from "../assests/bedroomracks/2.webp";
import wr3 from "../assests/bedroomracks/8.webp";
import wr4 from "../assests/bedroomracks/9.webp";

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
            alt4="wall panel design 4 by nn interiors" 
            link="/products/pvcWallPanelsInDelhiNCR">
        </InfoCard4Images>

<div className={style.greenBox}>
        <InfoCard4Images text="With highly skilled team we provide the best gypsum wall partition serives.
        We are well know for the quality of our gypsum wall and for our affordable pricing.
        All the work will be done under the supervion of highly skilled and experienced supervisor.
        "
        heading="Gypsum Wall Partition"
            img1={gp1}
            img2={gp2}
            img3={gp3}
            img4={gp4}
            alt1="Gypsum Wall Partition design 1 by nn interiors"
            alt2="Gypsum Wall Partition design 2 by nn interiors"
            alt3="Gypsum Wall Partition design 3 by nn interiors"
            alt4="Gypsum Wall Partition design 4 by nn interiors"
            link="/products/gypsumPartitionInDelhiNCR" >
        </InfoCard4Images>
        </div>
        <InfoCard4Images text="
        We have the best quallty and modern design TV Units and furniture.
        Get furniture delivered at your location with most affordable pricing included labour and installation."
        heading="TV Units and Furtiture"
            img1={tv1}
            img2={tv2}
            img3={tv3}
            img4={tv4}
            alt1="TV Units and Furtiture Partition design 1 by nn interiors"
            alt2="TV Units and Furtiture Partition design 2 by nn interiors"
            alt3="TV Units and Furtiture Partition design 3 by nn interiors"
            alt4="TV Units and Furtiture Partition design 4 by nn interiors" >
        </InfoCard4Images>
        <div className={style.greenBox}>
        <InfoCard4Images text="
        Get the best quallty and modern design wardrobes and racks for storage.
        Get them delivered at your location with most affordable pricing included labour and installation."
        heading="Wardrobs and Racks"
            img1={wr1}
            img2={wr2}
            img3={wr3}
            img4={wr4}
            alt1="Wardrobs and Racks design 1 by nn interiors"
            alt2="Wardrobs and Racks design 2 by nn interiors"
            alt3="Wardrobs and Racks design 3 by nn interiors"
            alt4="Wardrobs and Racks design 4 by nn interiors" >
        </InfoCard4Images>
        </div>
        <InfoCard4Images text="
        Decorate your kitchen with latest modular deign and storage units.
        We have the best quality and quick installation service at your door step"
        heading="Modular Kitchen"
            img1={k1}
            img2={k2}
            img3={k3}
            img4={k4}
            alt1="Wardrobs and Racks design 1 by nn interiors"
            alt2="Wardrobs and Racks design 2 by nn interiors"
            alt3="Wardrobs and Racks design 3 by nn interiors"
            alt4="Wardrobs and Racks design 4 by nn interiors" >
        </InfoCard4Images>
        <br></br>
        <br></br>
        <br></br>
    </div>
  );
};

export default Category;
