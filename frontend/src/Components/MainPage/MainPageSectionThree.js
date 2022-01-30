import {useTranslation} from "react-i18next";
import AppContentStyle from "../../Styles/AppContentStyle";
import React from "react";
import mainpageThreeImg from '../../assets/images/mainpageThreeImg.png';
import aboutMobile from '../../assets/images/aboutMobile.png';
import {Hidden} from "@material-ui/core";


function MainPageSectionThree() {
    const {t} = useTranslation();
    const classes = AppContentStyle();

    return (
        <div className={classes.sectionThreeBackground}>
            <Hidden xsDown>
                <img src={mainpageThreeImg} alt="" className={classes.aboutOneImg}/>
            </Hidden>
            <Hidden smUp>
                <img src={aboutMobile} alt="" className={classes.aboutOneImg}/>
            </Hidden>
        </div>
    )
}

export default MainPageSectionThree