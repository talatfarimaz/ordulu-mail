import {useTranslation} from "react-i18next";
import AppContentStyle from "../../Styles/AppContentStyle";
import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import saha from '../../assets/images/saha.png';
import yildiz from '../../assets/images/yildiz.png';
import kariyer from '../../assets/images/kariyer.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function MainPageSectionFive() {
    const {t} = useTranslation();
    const classes = AppContentStyle();

    return (
        <div className={classes.sectionFiveBackground}>
            <Grid className={classes.sectionFiveGrid}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="flex-end"
                  spacing={2}>
                <Grid item md={4} sm={6} xs={12}>
                    <div className={classes.pageFiveImg1}>
                        <img src={saha} alt="" width={"100%"}/>
                        <Button className={classes.sectionFiveButtons} href={"/blog"}>
                            <Typography className={classes.sectionFiveButtonText}>{t('Blog')}</Typography>
                        </Button>
                    </div>
                    <div className={classes.pageFiveImg2}>
                        <img src={yildiz} alt="" width={"100%"}/>
                        <Button className={classes.sectionFiveButtons} href={"/blog#news"}>
                            <Typography className={classes.sectionFiveButtonText}>{t('News')}</Typography>
                        </Button>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <div className={classes.pageFiveImg3}>
                        <img src={kariyer} alt="" width={"100%"}/>
                        <Button className={classes.sectionFiveButtons2} href={"/careerandlife"}>
                            <Typography className={classes.sectionFiveButtonText}>{t('Career')}</Typography>
                        </Button>
                    </div>
                </Grid>
                <Grid item md={4} sm={6} xs={12} className={classes.sectionFiveGrid3}>
                    <Grid container className={classes.gridHeight}>
                        <Grid item xs={12} className={classes.sectionFiveGrid1}>
                            <Typography className={classes.careerAndLife}>{t('CareerAndLife')}</Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.sectionFiveGrid2}>
                            <Typography className={classes.sectionFiveText1}>{t('Starts')}</Typography>
                            <Typography className={classes.sectionFiveText2}>{t('Important')}</Typography>
                            <Typography className={classes.sectionFiveText3}>{t('CareerTech')}</Typography>
                            <Button color={"secondary"} variant={"contained"} className={classes.alignRight}
                                    endIcon={<ArrowForwardIosIcon/>} href={"/careerandlife"}>
                                <Typography>
                                    {t('InspectALl')}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MainPageSectionFive