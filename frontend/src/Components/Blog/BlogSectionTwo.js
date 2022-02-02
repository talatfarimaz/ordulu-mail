import {useTranslation} from "react-i18next";
import {Backdrop, CardActionArea, Dialog, Fade, Grid, Link, Typography} from "@material-ui/core";
import React from "react";
import BlogStyle from "../../Styles/BlogStyle";
import kazim2 from "../../assets/images/kazım2.png"
import nizamReportage from "../../assets/images/nizamReportage.png"
import ReactPlayer from "react-player";
import classNames from "classnames";

function BlogSectionTwo() {
    const {t} = useTranslation();
    const [open, setOpen] = React.useState(false);
    const classes = BlogStyle();

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
                {/*    <div
                    className="embed-responsive embed-responsive-16by9"
                    style={{ borderRadius: "4px" }}
                >
                    <iframe
                        className="embed-responsive-item"
                        src={  "https://www.youtube.com/embed/" +
                            "YUsSLDgFsQQ" +
                            "?rel=0"}
                        allowFullScreen={true}
                    />
                </div>*/}
                <Fade in={open}>
                    <ReactPlayer
                        classname={classNames('react-player fixed-bottom')}
                        url={"https://www.youtube.com/watch?v=YUsSLDgFsQQ"}
                        playing
                        width="100%"
                        height="100%"
                        controls={true}
                        style={{backgroundColor: "rgb(0 0 0 / 80%)"}}
                    />
                </Fade>
            </Dialog>
        )
    }

    return (
        <div className={classes.sectionTwoDiv}>
            <Grid container className={classes.reportageGrid} spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item sm={12} xs={12} id="reportage1">
                    <Typography className={classes.reportageTitle}>
                        {t('Reportage')}
                    </Typography>
                </Grid>
                <Grid item xs={12} id="reportage2">
                    <Grid container className={classes.podcastGrid}>
                        <Grid item md={2} sm={3} xs={12}/>
                        <Grid item md={8} sm={6} xs={12} className={classes.podcastText}>
                            <Link href={"https://www.youtube.com/watch?v=YUsSLDgFsQQ"} target={"blank"}>
                                <Typography className={classes.questionTitle}>
                                    {t('Podcast1')}
                                </Typography>
                                <Typography className={classes.questionTitle2}>
                                    {t('Podcast2')}
                                </Typography>
                                <Typography className={classes.questionTitle}>
                                    {t('Podcast3')}
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item md={2} sm={3} xs={12}/>
                        <Grid item md={3} sm={3} xs={12}/>
                        <Grid item md={6} sm={6} xs={12}>
                            <CardActionArea href={"https://www.youtube.com/watch?v=YUsSLDgFsQQ"} target={"blank"}>
                                <img src={nizamReportage} width={"100%"} alt={""}/>
                            </CardActionArea>
                        </Grid>
                        <Grid item md={3} sm={3} xs={12}/>
                    </Grid>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Grid item xs={12} className={classNames(classes.userNameArea, classes.developerPadding)}>
                        <Typography className={classes.questionTitle}>
                            {t('User')}
                        </Typography>
                        <Typography className={classes.questionTitle2}>
                            {t('Developer')}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={7} xs={12}>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <Typography className={classes.questionTitle}>
                                {t('QuestionTitle')}
                            </Typography>
                            <Typography className={classes.question}>
                                {t('Question1')}
                            </Typography>
                            <Typography className={classes.answer}>
                                {t('Answer1')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.reportageGridMargin}>
                            <Typography className={classes.questionTitle}>
                                {t('QuestionTitle')}
                            </Typography>
                            <Typography className={classes.question}>
                                {t('Question2')}
                            </Typography>
                            <Typography className={classes.answer}>
                                {t('Answer2')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={5} xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src={kazim2} alt={""} width={"100%"}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {handleGetModal()}
        </div>
    )
}

export default BlogSectionTwo