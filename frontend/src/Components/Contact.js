import ContactStyle from "../Styles/ContactStyle";
import ContactSectionOne from "./Contact/ContactSectionOne";
import ContactSectionTwo from "./Contact/ContactSectionTwo";
import ContactSectionThree from "./Contact/ContactSectionThree";


function Contact() {
    const classes = ContactStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <ContactSectionOne/>
            <ContactSectionTwo/>
            <ContactSectionThree/>
        </div>
    );
}

export default Contact;