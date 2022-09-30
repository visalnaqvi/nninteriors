import ContactUsCard from "../comps/contactUsCard";
import style from "../styles/contactUs.module.css";
import Map from "../comps/map"
const ContactUs = () => {
    return ( 
        <div className={style.wrap}>
            <p className={style.title}>Contact Us</p>
            <p className={style.sub}>Have any questions? We&apos;d love to hear from you.</p>
            <div className={style.wrapper}>
                <ContactUsCard heading="Visit Us" text="We would love to have to at your office.You can visit us on address:A-301 Sector 44, Noida, Uttar Pradesh 201301.On any working day between 9 A.M. to 8 P.M."></ContactUsCard>
                <ContactUsCard heading="Help & Support" text="Please don't hesitate to contact us by phone or any other means . We are ready to address any questions or concerns you may have about our process, partners, or any issues you may be experiencing." l1="09810884704" l2="09911390398" styleds={true}></ContactUsCard>
                <ContactUsCard heading="Write us via Email" text="Please provide us with your query on email address nninteriors.delhi@gmail.com so that we constantly update you, do not miss out on important notifications."></ContactUsCard>
            </div>
            <Map></Map>
        </div>
     );
}
 
export default ContactUs;