import {useTranslation} from "react-i18next";
import React from "react";
import ContactStyle from "../../Styles/ContactStyle";
import {CardActionArea, Grid, Typography} from "@material-ui/core";
import location from "../../assets/images/location.png";
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';

function ContactSectionTwo() {
    const {t} = useTranslation();
    const classes = ContactStyle();
    return (
        <div className={classes.sectionTwoBackground}>
            <Grid container className={classes.sectionTwoGrid} spacing={4}
            >
                <Grid item sm={12} xs={12}>
                    <Typography className={classes.locationTitle1}>
                        {t('Ordulu')}
                    </Typography>
                    <Typography className={classes.locationTitle2}>
                        {t('Locations')}
                    </Typography>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <CardActionArea className={classes.cardAction} href={"https://goo.gl/maps/bPvYJAQAcNKrETg29"} target={"blank"}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography className={classes.addressText1}>
                                    {t('Addres1')}
                                </Typography>
                            </Grid>
                            <Grid item md={2} sm={3} xs={12} className={classes.location}>
                                <PinDropOutlinedIcon fontSize={"large"}/>
                            </Grid>
                            <Grid item md={10} sm={9} xs={12} style={{margin: "auto"}}>
                                <Typography className={classes.addressText2}>
                                    {t('Addres1Detail')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <CardActionArea className={classes.cardAction} href={"https://g.page/Ordulu?share"} target={"blank"}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography className={classes.addressText1}>
                                    {t('Addres2')}
                                </Typography>
                            </Grid>
                            <Grid item md={2} sm={3} xs={12} className={classes.location}>
                                <PinDropOutlinedIcon fontSize={"large"}/>
                            </Grid>
                            <Grid item md={10} sm={9} xs={12} style={{margin: "auto"}}>
                                <Typography className={classes.addressText2}>
                                    {t('Addres2Detail')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <CardActionArea className={classes.cardAction} href={"https://goo.gl/maps/WKj1DsVM4kw9XyV46"} target={"blank"}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography className={classes.addressText1}>
                                    {t('Addres2')}
                                </Typography>
                            </Grid>
                            <Grid item md={2} sm={3} xs={12} className={classes.location}>
                                <PinDropOutlinedIcon fontSize={"large"}/>
                            </Grid>
                            <Grid item md={10} sm={9} xs={12} style={{margin: "auto"}}>
                                <Typography className={classes.addressText2}>
                                    {t('Addres3Detail')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <CardActionArea className={classes.cardAction} href={"https://goo.gl/maps/kKUNFAS2E4HcS6jx9"} target={"blank"}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography className={classes.addressText1}>
                                    {t('Addres2')}
                                </Typography>
                            </Grid>
                            <Grid item md={2} sm={3} xs={12} className={classes.location}>
                                <PinDropOutlinedIcon fontSize={"large"}/>
                            </Grid>
                            <Grid item md={10} sm={9} xs={12} style={{margin: "auto"}}>
                                <Typography className={classes.addressText2}>
                                    {t('Addres4Detail')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactSectionTwo