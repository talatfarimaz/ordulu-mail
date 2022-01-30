import {useTranslation} from "react-i18next";
import {Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import CareerAndLifeStyle from "../../Styles/CareerAndLifeStyle";
import adv1 from "../../assets/images/adv1.png";
import adv2 from "../../assets/images/adv2.png";
import adv3 from "../../assets/images/adv3.png";
import adv4 from "../../assets/images/adv4.png";


function CareerAndLifeSectionFour() {
    const {t} = useTranslation();
    const classes = CareerAndLifeStyle();
    return (
            <div className={classes.advantages}>
                <Grid container spacing={4} className={classes.advantagesGrid}
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    <Grid item md={12} sm={12} xs={12} style={{textAlign: "center"}}>
                        <Typography className={classes.sentence1}>
                            {t('CareerSentence1')}
                        </Typography>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{textAlign: "center"}}>
                        <Typography className={classes.sentence2}>
                            {t('CareerSentence2')}
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={3} xs={6}>
                        <Paper elevation={3} style={{textAlign: "center"}}>
                            <img src={adv1} alt={""} width={"40%"} style={{paddingTop: "10px"}}/>
                            <Typography className={classes.advantageText}>
                                {t('adv1')}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3} sm={3} xs={6}>
                        <Paper elevation={3} style={{textAlign: "center"}}>
                            <img src={adv2} alt={""} width={"40%"} style={{paddingTop: "10px"}}/>
                            <Typography className={classes.advantageText}>
                                {t('adv2')}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3} sm={3} xs={6}>
                        <Paper elevation={3} style={{textAlign: "center"}}>
                            <img src={adv3} alt={""} width={"40%"} style={{paddingTop: "10px"}}/>
                            <Typography className={classes.advantageText}>
                                {t('adv3')}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3} sm={3} xs={6}>
                        <Paper elevation={3} style={{textAlign: "center"}}>
                            <img src={adv4} alt={""} width={"40%"} style={{paddingTop: "10px"}}/>
                            <Typography className={classes.advantageText}>
                                {t('adv4')}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
        </div>
    )
}

export default CareerAndLifeSectionFour