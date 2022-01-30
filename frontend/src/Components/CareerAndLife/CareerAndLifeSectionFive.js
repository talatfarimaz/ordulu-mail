import {useTranslation} from "react-i18next";
import {Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import React from "react";
import CareerAndLifeStyle from "../../Styles/CareerAndLifeStyle";
import adv1 from "../../assets/images/adv1.png";
import adv2 from "../../assets/images/adv2.png";
import adv3 from "../../assets/images/adv3.png";
import adv4 from "../../assets/images/adv4.png";
import DefaultTheme from "../../Themes/DefaultTheme";


function CareerAndLifeSectionFive() {
    const {t} = useTranslation();
    const classes = CareerAndLifeStyle();
    return (
        <div className={classes.sectionFive}>
            <Grid container spacing={4} className={classes.advantagesGrid}
                  direction="row"
                  alignItems="center">
                <Grid item md={6} sm={12} xs={12}>
                    <Typography className={classes.sendMessageText}>
                        {t('SendMessage')}
                    </Typography>
                    <Typography className={classes.sendMessageTex2}>
                        {t('SendMessage2')}
                    </Typography>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <Grid container>
                        <Grid item sm={6} xs={6}>
                            <TextField id="outlined-basic" label={t('Message')} variant="outlined" fullWidth
                                       InputProps={{
                                           inputProps: {
                                               style: {color: DefaultTheme.palette.secondary.contrastText},
                                           },
                                           classes: {
                                               notchedOutline: classes.notchedOutline
                                           }
                                       }}
                                       InputLabelProps={{
                                           style: {
                                               textAlign: "center",
                                               color: DefaultTheme.palette.secondary.contrastText
                                           },
                                       }}
                            />
                        </Grid>
                        <Grid item sm={6} xs={6}>
                            <Button style={{
                                backgroundColor: DefaultTheme.palette.secondary.alternativeLight,
                                height: "100%"
                            }} variant={"contained"} fullWidth>
                                <Typography className={classes.sendButton}>
                                    {t('Send')}
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CareerAndLifeSectionFive