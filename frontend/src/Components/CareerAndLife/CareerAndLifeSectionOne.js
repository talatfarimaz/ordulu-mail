import {useTranslation} from "react-i18next";
import AppContentStyle from "../../Styles/AppContentStyle";
import {Grid, Hidden, Typography} from "@material-ui/core";
import careerImg from "../../assets/images/careerImg.png";
import React from "react";
import CareerAndLifeStyle from "../../Styles/CareerAndLifeStyle";
import careerImg2 from "../../assets/images/careerImg2.png";
import {Grade} from "@material-ui/icons";


function CareerAndLifeSectionOne() {
    const {t} = useTranslation();
    const classes = CareerAndLifeStyle();

    return (
        <div className={classes.imgDiv}>
            <img src={careerImg} width={"100%"} className={classes.imgGradient} alt={""}/>
            <div className={classes.mainText}>
                <Typography className={classes.careerAndLifeText}>{t('CareerAndLife')}</Typography>
            </div>
           {/* <div className={classes.imgDiv2}>
                <Grid container>
                    <Grid item md={3} sm={2} xs={12}/>
                    <Grid item md={6} sm={8} xs={12} style={{textAlign: "center"}}>
                        <Typography className={classes.careerText2}>
                            {t('DefenceText')}
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={2} xs={12}/>
                </Grid>
            </div>*/}
        </div>
    )
}

export default CareerAndLifeSectionOne