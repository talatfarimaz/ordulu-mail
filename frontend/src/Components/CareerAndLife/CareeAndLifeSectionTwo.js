import {useTranslation} from "react-i18next";
import {Backdrop, CardActionArea, Fade, Grid, Modal, Typography} from "@material-ui/core";
import React from "react";
import CareerAndLifeStyle from "../../Styles/CareerAndLifeStyle";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";
import six from "../../assets/images/6.png";


function CareerAndLifeSectionTwo() {
    const {t} = useTranslation();
    const classes = CareerAndLifeStyle();
    const imageList = [one, two, three, four, five, six]
    const [open, setOpen] = React.useState(false);
    const [selectedImg, setSelectedImg] = React.useState(null);


    const handleOpen = (img) => {
        setSelectedImg(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGetModal = () => {
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    classes: {
                        timeout: 1500,
                        root: classes.backdrop
                    }

                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <img src={selectedImg} alt={""} width={"100%"}/>
                    </div>
                </Fade>
            </Modal>
        )
    }

    return (
        <div style={{justifyContent: "center", display: "flex"}}>
            <Grid container spacing={2} className={classes.imagesDiv} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item md={12} sm={12} xs={12}>
                    <Typography className={classes.lifeText}>
                        {t('Life')}
                    </Typography>
                </Grid>
                <Grid item md={4} sm={6} xs={6}>
                    <CardActionArea onClick={() => {
                        handleOpen(one)
                    }}>
                        <img src={one} alt="" width={"100%"}/>
                    </CardActionArea>
                </Grid>
                <Grid item md={8} sm={6} xs={6}>
                    <Grid container spacing={2}>
                        <Grid item md={12} sm={12} xs={12}>
                            <CardActionArea onClick={() => {
                                handleOpen(two)
                            }}>
                                <img src={two} alt="" width={"100%"}/>
                            </CardActionArea>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <CardActionArea onClick={() => {
                                handleOpen(three)
                            }}>

                                <img src={three} alt="" width={"100%"}/>
                            </CardActionArea>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12}>
                            <CardActionArea onClick={() => {
                                handleOpen(four)
                            }}>

                                <img src={four} alt="" width={"100%"}/>
                            </CardActionArea>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={8} sm={12} xs={12}>
                    <CardActionArea onClick={() => {
                        handleOpen(five)
                    }}>

                        <img src={five} alt="" width={"100%"}/>
                    </CardActionArea>
                </Grid>
                <Grid item md={4} sm={12} xs={6}>
                    <CardActionArea onClick={() => {
                        handleOpen(six)
                    }}>

                        <img src={six} alt="" width={"100%"}/>
                    </CardActionArea>
                </Grid>
            </Grid>
            {handleGetModal()}
        </div>
    )
}

export default CareerAndLifeSectionTwo