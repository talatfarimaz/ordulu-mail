import {useTranslation} from "react-i18next";
import React from "react";
import ProductsStyle from "../../Styles/ProductsStyle";
import ReactPlayer from "react-player";
import classNames from "classnames";
import teaser from "../../assets/video/teaser.mp4";
import productsImg from "../../assets/images/productsImg.png";
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import {Avatar, Backdrop, Dialog, Fade, Grid, Hidden, Paper, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import arzlogo from "../../assets/images/products/renkliarz.png";
import kuzgunlogo from "../../assets/images/products/renklikuzgun.png";
import sahinlogo from "../../assets/images/products/renklişahin.png";
import gamlogo from "../../assets/images/products/renkligam.png";
import ulaklogo from "../../assets/images/products/renkliulak.png";
import greyarz from "../../assets/images/products/arz.png";
import greygam from "../../assets/images/products/gam.png";
import greykuzgun from "../../assets/images/products/kuzgun.png";
import greysahin from "../../assets/images/products/şahin.png";
import greyulak from "../../assets/images/products/ulak.png";
import Carousel from "react-material-ui-carousel";
import logo from "../../assets/images/logo.png";
import orduluLogo from "../../assets/images/orduluLogo.png";


function ProductsSectionOne(props) {
    const {t} = useTranslation();
    const classes = ProductsStyle();
    const [open, setOpen] = React.useState(false);
    const [screenWidth, setScreenWidth] = React.useState(window.screen.availWidth);
    window.addEventListener("resize", function () {
        setScreenWidth(window.screen.availWidth);
    });
    const [kuzgun, setKuzgun] = React.useState(greykuzgun);
    const [gam, setGam] = React.useState(greygam);
    const [sahin, setSahin] = React.useState(greysahin);
    const [arz, setArz] = React.useState(greyarz);
    const [ulak, setUlak] = React.useState(greyulak);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGoSelectedProduct = (selectedProduct) => {
        props.handleGoSelectedProduct(selectedProduct)
    }

    const handleGoSelectedProductMobile = (selectedIndex) => {
        props.handleGoSelectedProductMobile( selectedIndex)
    }

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
                    <ReactPlayer
                        classname={classNames('react-player fixed-bottom')}
                        url={teaser}
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
        <div className={classes.imgDiv}>
            <img src={productsImg} width={"100%"} alt={""}/>
            <div className={classes.mainDiv}>
                <Grid container>
                    <Grid item xs={12} className={classes.playIconGrid}>
                        <IconButton onClick={handleOpen}>
                            <PlayCircleOutlineOutlinedIcon className={classes.playIcon}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} className={classes.playTextGrid}>
{/*
                        <Avatar className={classes.mainLogo} src={orduluLogo}/>
*/}
                      {/*  <Typography className={classes.playText}>
                            {t('OrduluBt')}
                        </Typography>*/}
                        <img src={orduluLogo} alt={""} width={"30%"} className={classes.logoStyle}/>
                    </Grid>
                    <Grid item xs={12} className={classes.productGrid}>
                        <Hidden only={"xs"}>
                            <Grid container spacing={4} className={classes.productGridWeb}>
                                <Grid item sm={1}/>
                                <Grid item sm={2}>
                                    <img src={kuzgun} alt={""} width={"100%"} onMouseEnter={(event) => {
                                        setKuzgun(kuzgunlogo)
                                    }}
                                         onMouseLeave={(event) => {
                                             setKuzgun(greykuzgun)
                                         }}
                                         onClick={() =>
                                             handleGoSelectedProduct("kuzgunproduct")}
                                    />
                                </Grid>
                                <Grid item sm={2}>
                                    <img src={gam} alt={""} width={"100%"}
                                         onMouseEnter={(event) => {
                                             setGam(gamlogo)
                                         }}
                                         onMouseLeave={(event) => {
                                             setGam(greygam)
                                         }}
                                         onClick={() =>
                                             handleGoSelectedProduct("gamproduct")}
                                    />
                                </Grid>
                                <Grid item sm={2}>
                                    <img src={sahin} alt={""} width={"100%"}
                                         onMouseEnter={(event) => {
                                             setSahin(sahinlogo)
                                         }}
                                         onMouseLeave={(event) => {
                                             setSahin(greysahin)
                                         }}
                                         onClick={() =>
                                             handleGoSelectedProduct("sahinproduct")}
                                    />
                                </Grid>
                                <Grid item sm={2}>
                                    <img src={arz} alt={""} width={"100%"}
                                         onMouseEnter={(event) => {
                                             setArz(arzlogo)
                                         }}
                                         onMouseLeave={(event) => {
                                             setArz(greyarz)
                                         }}
                                         onClick={() =>
                                             handleGoSelectedProduct("arzproduct")}
                                    />
                                </Grid>
                                <Grid item sm={2}>
                                    <img src={ulak} alt={""} width={"100%"}
                                         onMouseEnter={(event) => {
                                             setUlak(ulaklogo)
                                         }}
                                         onMouseLeave={(event) => {
                                             setUlak(greyulak)
                                         }}
                                         onClick={() =>
                                             handleGoSelectedProduct("ulakproduct")}
                                    />
                                </Grid>
                                <Grid item sm={1}/>
                            </Grid>

                        </Hidden>
                        <Hidden smUp>
                            <Carousel timeout={500} navButtonsAlwaysVisible={true} autoPlay={false} indicators={true}>
                                <Paper className={classes.carouselStyle}>
                                    <Grid container spacing={2} className={classes.carouselGrid}>
                                        <Grid item xs={4}>
                                            <img src={kuzgunlogo} alt={""} width={"100%"}
                                                 onClick={() =>
                                                     handleGoSelectedProductMobile(0)}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <img src={gamlogo} alt={""} width={"100%"}
                                                 onClick={() =>
                                                     handleGoSelectedProductMobile(1)}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <img src={sahinlogo} alt={""} width={"100%"} onClick={() =>
                                                handleGoSelectedProductMobile(2)}/>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                <Paper className={classes.carouselStyle}>
                                    <Grid container spacing={2} className={classes.carouselGrid}>
                                        <Grid item xs={4}>
                                            <img src={arzlogo} alt={""} width={"100%"}
                                                 onClick={() =>
                                                     handleGoSelectedProductMobile(3)}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <img src={ulaklogo} alt={""} width={"100%"}
                                                 onClick={() =>
                                                     handleGoSelectedProductMobile(4)}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <img src={kuzgunlogo} alt={""} width={"100%"}
                                                 onClick={() =>
                                                     handleGoSelectedProductMobile(0)}
                                            />
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Carousel>
                        </Hidden>
                    </Grid>
                </Grid>
            </div>
            {handleGetModal()}
        </div>
    )
}

export default ProductsSectionOne