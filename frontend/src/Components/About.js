import BlogSectionOne from "./Blog/BlogSectionOne";
import AboutStyle from "../Styles/AboutStyle";
import AboutPageSectionOne from "./About/AboutPageSectionOne";
import AboutPageSectionTwo from "./About/AboutPageSectionTwo";


function About() {
    const classes = AboutStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <AboutPageSectionOne/>
            <AboutPageSectionTwo/>
        </div>
    );
}

export default About;