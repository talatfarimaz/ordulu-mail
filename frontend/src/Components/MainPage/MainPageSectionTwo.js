import {useTranslation} from "react-i18next";
import AppContentStyle from "../../Styles/AppContentStyle";
import React from "react";
import kazim from '../../assets/images/kazım.png';
import nizam from '../../assets/images/nizam.png';

import {Backdrop, Button, CardActionArea, Dialog, Fade, Grid, Link, Typography} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ReactPlayer from "react-player";
import classNames from "classnames";
import teaser from "../../assets/video/teaser.mp4";

function MainPageSectionTwo() {
    const {t} = useTranslation();
    const classes = AppContentStyle();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleGetModal = () => {
        return (
            <Dialog onClose={handleClose} open={open}
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        classes: {
                            timeout: 1500,
                            root: classes.backdrop
                        }
                    }}
                    maxWidth={"lg"}
            >
                <Fade in={open}>
                    <div
                        className="embed-responsive embed-responsive-16by9"
                        style={{borderRadius: "4px"}}
                    >
                        <iframe
                            className="embed-responsive-item"
                            src={"https://www.youtube.com/embed/" + "YUsSLDgFsQQ" + "?rel=0"} allowFullScreen={true}
                        />
                    </div>
                    {/*              <iframe className="embed-responsive-item"
                            src={"https://www.youtube.com/embed/" + "YUsSLDgFsQQ" + "?rel=0"}
                            allowFullScreen></iframe>*/}
                    {/*<ReactPlayer
                        classname={classNames('react-player fixed-bottom')}
                        url={"https://www.youtube.com/watch?v=YUsSLDgFsQQ"}
                        playing
                        width="100%"
                        height="100%"
                        controls={true}
                        style={{backgroundColor: "rgb(0 0 0 / 80%)"}}
                    />*/}
                </Fade>
            </Dialog>
        )
    }
    return (
        <div className={classes.sectionTwoBackground}>
            <Grid container className={classes.sectionTwoPadding}
                  spacing={3}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item md={4} sm={4} xs={12} className={classes.infoMargin}>
                    <Typography className={classes.orduluInfo}>
                        {t('OrduluInfo')}
                    </Typography>
                    <Button color={"secondary"} variant={"contained"} className={classes.alignRight} href={"/careerandlife"}
                            endIcon={<ArrowForwardIosIcon/>}>
                        <Typography>
                            {t('InspectALl')}
                        </Typography>
                    </Button>
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                    <Link href="/blog#reportage1">
                        <CardActionArea>
                            <img src={kazim} alt="" className={classes.sectionTwoImg}/>
                        </CardActionArea>
                    </Link>
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                    <Link href="/blog#reportage2">
                        <CardActionArea>
                            <img src={nizam} alt="" className={classes.sectionTwoImg}/>
                        </CardActionArea>
                    </Link>
                </Grid>
            </Grid>
            {handleGetModal()}
        </div>
    )
}

export default MainPageSectionTwo