import {useTranslation} from "react-i18next";
import CareerAndLifeStyle from "../../Styles/CareerAndLifeStyle";
import careerImg from "../../assets/images/careerImg.png";
import {Dialog, Grid, Typography} from "@material-ui/core";
import React from "react";

function ImageModal() {
    const {t} = useTranslation();
    const classes = CareerAndLifeStyle();

    return (
      <Dialog open={false}>

      </Dialog>
    )
}

export default ImageModal