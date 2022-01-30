import {useTranslation} from "react-i18next";
import React from "react";
import ContactStyle from "../../Styles/ContactStyle";
import {Grid, Typography} from "@material-ui/core";
import ExampleDirections from "./GoogleMaps";
import GoogleMaps from "./GoogleMaps";


function ContactSectionThree() {
    const {t} = useTranslation();
    const classes = ContactStyle();
    return (
        <div className={classes.mapsArea}>
        <div className={classes.sectionTwoBackground}>
            <Grid container className={classes.sectionTwoGrid} spacing={4}
            >
                <Grid item sm={12} xs={12}>
                    <Typography className={classes.locationTitle1}>
                        {t('Ordulu')}
                    </Typography>
                    <Typography className={classes.locationTitle2}>
                        {t('CenterLocation')}
                    </Typography>
                </Grid>
            </Grid>
        </div>
        <div>
            <GoogleMaps/>

        </div>
        </div>
    )
}

export default ContactSectionThree