import {withTranslation} from "react-i18next";
import React from "react";
import MainPageSectionOne from "./MainPage/MainPageSectionOne";
import AppContentStyle from "../Styles/AppContentStyle";
import MainPageSectionTwo from "./MainPage/MainPageSectionTwo";
import MainPageSectionThree from "./MainPage/MainPageSectionThree";
import MainPageSectionFour from "./MainPage/MainPageSectionFour";
import MainPageSectionFive from "./MainPage/MainPageSectionFive";


function AppContent(props) {
    const classes = AppContentStyle();
    return (
        <div className={classes.bodyDivStyle}>
            <MainPageSectionOne/>
            <MainPageSectionTwo/>
            <MainPageSectionThree/>
            <MainPageSectionFour/>
            <MainPageSectionFive/>
        </div>
    );
}

export default withTranslation()(AppContent)
