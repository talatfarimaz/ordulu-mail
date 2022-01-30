import {useTranslation} from "react-i18next";
import {Grid, Typography} from "@material-ui/core";
import React from "react";
import aboutImg from "../../assets/images/about11.png";
import BlogStyle from "../../Styles/BlogStyle";
import AboutStyle from "../../Styles/AboutStyle";
import about22 from "../../assets/images/about22.png";
import about33 from "../../assets/images/about33.png";


function AboutSectionTwo() {
    const {t} = useTranslation();
    const classes = AboutStyle();

    return (
        <div className={classes.sectionTwoDiv}>
            <Grid container className={classes.reportageGrid} spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item sm={12} xs={12} id="reportage1">
                    <Typography className={classes.reportageTitle}>
                        {t('WhoAreWe')}
                    </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography className={classes.answer}>
                                {t('WhoAreWe2')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.reportageGridMargin}>
                            <Typography className={classes.answer2}>
                                {t('WhoAreWe3')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={about22} alt={""} width={"100%"}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} xs={12} className={classes.managers}>
                    <Typography className={classes.reportageTitle2}>
                        {t('Owners')}
                    </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={about33} alt={""} width={"100%"}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography className={classes.answer3}>
                                {t('Podcast3')}
                            </Typography>
                            <Typography className={classes.answer4}>
                                {t('Manager')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.reportageGridMargin}>
                            <Typography className={classes.answer2}>
                                {t('ManagerText')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default AboutSectionTwo