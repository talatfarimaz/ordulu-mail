import {useTranslation} from "react-i18next";
import AppContentStyle from "../../Styles/AppContentStyle";
import React from "react";
import {Grid, Hidden, Typography} from "@material-ui/core";
import cumhur from '../../assets/images/cumhur.png';
import fors from '../../assets/images/fors.png';
import katar from '../../assets/images/katar.png';
import jandarma from '../../assets/images/jandarma.png';
import kara from '../../assets/images/kara.png';
import deniz from '../../assets/images/deniz.png';
import baykar from '../../assets/images/baykar.png';
import azer from '../../assets/images/azer.png';
import orman from '../../assets/images/orman.png';
import DefaultTheme from "../../Themes/DefaultTheme";


function MainPageSectionFour() {
    const {t} = useTranslation();
    const classes = AppContentStyle();
    const [changeText, setChangeText] = React.useState(false);
    const [selectedDiv, setSelectedDiv] = React.useState("")
    const handleChangeTextDisplayTrue = (event) => {
        setChangeText(true);
        if (event.target.id !== "" && event.target.id !== null) {
            setSelectedDiv(event.target.id);
            var element = document.getElementById(event.target.id);
            element.style.backgroundColor = DefaultTheme.palette.primary.lightAlternative
        } else {
            setSelectedDiv(event.target.parentNode.id);
            var element = document.getElementById(event.target.parentNode.id);
            element.style.backgroundColor = DefaultTheme.palette.primary.lightAlternative
        }
    }

    const handleChangeTextDisplayFalse = (event) => {
        setChangeText(false);
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.backgroundColor = DefaultTheme.palette.primary.dark
        } else {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.backgroundColor = DefaultTheme.palette.primary.dark
        }
    }

    const handleGetText = (event) => {
      if (event.target.parentNode.id === selectedDiv) {
          return true
      }
      else {
          return false;
      }
    }
    return (
        <div className={classes.referanceArea}>
            <Hidden only={"xs"}>
                <Grid container direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item md={12} sm={12} xs={12}>
                    <Typography className={classes.referenceText}>
                        {t('References')}
                    </Typography>
                </Grid>
                <Grid id={"cumhur"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={cumhur} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "cumhur" &&
                    <Typography className={classes.referenceName}>
                        {t('Cumhur')}
                    </Typography>}
                </Grid>
                <Grid id={"fors"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={fors} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "fors" &&
                    <Typography className={classes.referenceName}>
                        {t('Fors')}
                    </Typography>}
                </Grid>
                <Grid id={"katar"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={katar} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "katar" &&
                    <Typography className={classes.referenceName}>
                        {t('Katar')}
                    </Typography>}
                </Grid>
                <Grid id={"jandarma"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={jandarma} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "jandarma" &&
                    <Typography className={classes.referenceName}>
                        {t('Jandarma')}
                    </Typography>}
                </Grid>
                <Grid id={"kara"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={kara} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "kara" &&
                    <Typography className={classes.referenceName}>
                        {t('Kara')}
                    </Typography>}
                </Grid>
                <Grid id={"deniz"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={deniz} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "deniz" &&
                    <Typography className={classes.referenceName}>
                        {t('Deniz')}
                    </Typography>}
                </Grid>
                <Grid id={"baykar"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={baykar} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "baykar" &&
                    <Typography className={classes.referenceName}>
                        {t('Baykar')}
                    </Typography>}
                </Grid>
                <Grid id={"azer"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={azer} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "azer" &&
                    <Typography className={classes.referenceName}>
                        {t('Azer')}
                    </Typography>}
                </Grid>
                <Grid id={"ogm"} item md={2} sm={3} className={classes.referenceImgText}
                      onMouseEnter={(event) => {
                          handleChangeTextDisplayTrue(event)
                      }}
                      onMouseLeave={(event) => {
                          handleChangeTextDisplayFalse(event)
                      }}>
                    <img src={orman} alt="" className={classes.referanceImg}/>
                    {changeText && selectedDiv === "ogm" &&
                    <Typography className={classes.referenceName}>
                        {t('OGM')}
                    </Typography>}
                </Grid>
            </Grid>
            </Hidden>
            <Hidden smUp>
                <Grid container direction="row"
                      justifyContent="center"
                      alignItems="center">
                    <Grid item md={12} sm={12} xs={12}>
                        <Typography className={classes.referenceText}>
                            {t('References')}
                        </Typography>
                    </Grid>
                    <Grid id={"cumhur"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={cumhur} alt="" className={classes.referanceImg}/>
                    </Grid>
                    <Grid id={"fors"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={fors} alt="" className={classes.referanceImg}/>
                    </Grid>
                    <Grid id={"katar"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={katar} alt="" className={classes.referanceImg}/>
                    </Grid>
                    <Grid id={"jandarma"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={jandarma} alt="" className={classes.referanceImg}/>
                    </Grid>
                    <Grid id={"kara"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={kara} alt="" className={classes.referanceImg}/>
                    </Grid>
                    <Grid id={"deniz"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={deniz} alt="" className={classes.referanceImg}/>
                    </Grid>
                    <Grid id={"baykar"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={baykar} alt="" className={classes.referanceImg}/>
                    </Grid>
                    <Grid id={"azer"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={azer} alt="" className={classes.referanceImg}/>
                    </Grid>
                    <Grid id={"ogm"} item md={2} sm={3} className={classes.referenceImgText}>
                        <img src={orman} alt="" className={classes.referanceImg}/>
                    </Grid>
                </Grid>
            </Hidden>
        </div>
    )
}

export default MainPageSectionFour