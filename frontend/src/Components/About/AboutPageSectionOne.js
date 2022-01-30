import {useTranslation} from "react-i18next";
import {Typography} from "@material-ui/core";
import React from "react";
import aboutImg from "../../assets/images/about11.png";
import BlogStyle from "../../Styles/BlogStyle";
import AboutStyle from "../../Styles/AboutStyle";

function AboutSectionOne() {
    const {t} = useTranslation();
    const classes = AboutStyle();

    return (
        <div className={classes.imgDiv}>
            <img src={aboutImg} width={"100%"} alt={""}/>
            <div className={classes.mainText}>
                <Typography className={classes.careerAndLifeText}>{t('About2')}</Typography>
            </div>
        </div>
    )
}

export default AboutSectionOne