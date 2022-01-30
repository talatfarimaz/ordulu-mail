import {useTranslation} from "react-i18next";
import React, {forwardRef, useImperativeHandle} from "react";
import ProductsStyle from "../../Styles/ProductsStyle";
import {Grid, Hidden, Paper, Typography} from "@material-ui/core";
import kuzgun from "../../assets/images/products/kuzgunBack.png";
import gam from "../../assets/images/products/gamBack.png";
import sahin from "../../assets/images/products/sahinBack.png";
import arz from "../../assets/images/products/arzBack.png";
import ulak from "../../assets/images/products/ulakBack.png";
import kuzgunMain from "../../assets/images/products/kuzgun1.png";
import kuzgun1 from "../../assets/images/products/icons1/1.png";
import kuzgun2 from "../../assets/images/products/icons1/2.png";
import kuzgun3 from "../../assets/images/products/icons1/3.png";
import kuzgun4 from "../../assets/images/products/icons1/4.png";
import kuzgun5 from "../../assets/images/products/icons1/5.png";
import kuzgun6 from "../../assets/images/products/icons1/6.png";
import line from "../../assets/images/products/Line.png";
import sahin1 from "../../assets/images/products/icons2/1.png";
import sahin2 from "../../assets/images/products/icons2/2.png";
import sahin3 from "../../assets/images/products/icons2/3.png";
import sahin4 from "../../assets/images/products/icons2/4.png";
import sahin5 from "../../assets/images/products/icons2/5.png";
import sahin6 from "../../assets/images/products/icons2/6.png";
import sahinMain from "../../assets/images/products/sahin1.png";
import arz1 from "../../assets/images/products/icons3/1.png";
import arz2 from "../../assets/images/products/icons3/2.png";
import arz3 from "../../assets/images/products/icons3/3.png";
import arz4 from "../../assets/images/products/icons3/4.png";
import arz5 from "../../assets/images/products/icons3/5.png";
import arz6 from "../../assets/images/products/icons3/6.png";
import arzMain from "../../assets/images/products/arz1.png";
import gam1 from "../../assets/images/products/icons4/1.png";
import gam2 from "../../assets/images/products/icons4/2.png";
import gam3 from "../../assets/images/products/icons4/3.png";
import gam4 from "../../assets/images/products/icons4/4.png";
import gam5 from "../../assets/images/products/icons4/6.png";
import gam6 from "../../assets/images/products/icons4/6.png";
import gamMain from "../../assets/images/products/gam1.png";
import ulak1 from "../../assets/images/products/icons5/1.png";
import ulak2 from "../../assets/images/products/icons5/2.png";
import ulak3 from "../../assets/images/products/icons5/3.png";
import ulak4 from "../../assets/images/products/icons5/4.png";
import ulak5 from "../../assets/images/products/icons5/6.png";
import ulak6 from "../../assets/images/products/icons5/6.png";
import ulakMain from "../../assets/images/products/ulak1.png";
import kuzgunMobile from "../../assets/images/products/kuzgunMobil.png";
import arzMobile from "../../assets/images/products/arzMobil.png";
import ulakMobile from "../../assets/images/products/ulakMobil.png";
import gamMobile from "../../assets/images/products/gamMobil.png";
import sahinMobile from "../../assets/images/products/sahinMobil.png";
import Carousel from "react-material-ui-carousel";


const ProductsSectionTwo = forwardRef((props, ref) => {
    const {t} = useTranslation();
    const classes = ProductsStyle();
    const kuzgunIconAndText = [{icon: kuzgun1, text: t('KuzgunText1')}, {icon: kuzgun2, text: t('KuzgunText2')},
        {icon: kuzgun3, text: t('KuzgunText3')}, {icon: kuzgun4, text: t('KuzgunText4')}, {
            icon: kuzgun5,
            text: t('KuzgunText5')
        }, {icon: kuzgun6, text: t('KuzgunText6')}]

    const sahinIconAndText = [{icon: sahin1, text: t('SahinText1')}, {icon: sahin2, text: t('SahinText2')},
        {icon: sahin3, text: t('SahinText3')}, {icon: sahin4, text: t('SahinText4')}, {
            icon: sahin5,
            text: t('SahinText5')
        }, {icon: sahin6, text: t('SahinText6')}]

    const arzIconAndText = [{icon: arz1, text: t('ArzText1')}, {icon: arz2, text: t('ArzText2')},
        {icon: arz3, text: t('ArzText3')}, {icon: arz4, text: t('ArzText4')}, {
            icon: arz5,
            text: t('ArzText5')
        }, {icon: arz6, text: t('ArzText6')}]

    const gamIconAndText = [{icon: gam1, text: t('GamText1')}, {icon: gam2, text: t('GamText2')},
        {icon: gam3, text: t('GamText3')}, {icon: gam4, text: t('GamText4')}, {
            icon: gam5,
            text: t('GamText5')
        }, {icon: gam6, text: t('GamText6')}]

    const ulakIconAndText = [{icon: ulak1, text: t('UlakText1')}, {icon: ulak2, text: t('UlakText2')},
        {icon: ulak3, text: t('UlakText3')}, {icon: ulak4, text: t('UlakText4')}, {
            icon: ulak5,
            text: t('UlakText5')
        }, {icon: ulak6, text: t('UlakText6')}]

    useImperativeHandle(ref, () => ({
        handleGoSelectedProduct(selectedProduct) {
            document.getElementById(selectedProduct).scrollIntoView({behavior: 'smooth'});
        }
    }));

    const handleGetKuzgunWeb = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}} id="kuzgunproduct">
                <img src={kuzgun} width={"100%"} alt={""}/>
{/*
                <div className={classes.mainDiv2}>
                    <Grid container direction="column"
                          justifyContent="flex-end"
                          alignItems="flex-end"
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGrid}>
                            <img src={kuzgunMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                            <Grid container spacing={1}>
                                {kuzgunIconAndText.map((kuzgun) => {
                                    return (
                                        <Grid item xs={2} className={classes.iconGrid}>
                                            <img src={kuzgun.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {kuzgun.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Grid container
                                  direction="row"
                                  justifyContent="flex-end"
                                  alignItems="center">
                                <Grid item md={5} sm={2} xs={2} className={classes.emptyGrid}>
                                </Grid>
                                <Grid item md={7} sm={12} xs={12} className={classes.mainTextGrid}>
                                    <Grid container direction="row"
                                          justifyContent="flex-end"
                                          alignItems="center">
                                        <Grid item md={11} sm={11} xs={12} className={classes.mainTextGrid2}>
                                            <Typography className={classes.iconText2}>
                                                {t('KuzgunMainText')}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={1} sm={1} xs={12} className={classes.lineStyle}>
                                            <img src={line} alt={""} width={"3px"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
*/}
            </Grid>
        )
    }

    const handleGetKuzgunMobile = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}}>
                <img src={kuzgunMobile} width={"100%"} alt={""}/>
                <div className={classes.mainDiv2Mobile2}>
                    <Grid container direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGridMobile}>
                            <img src={kuzgunMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                            <Grid container spacing={1}>
                                {kuzgunIconAndText.map((kuzgun) => {
                                    return (
                                        <Grid item xs={2} className={classes.iconGrid} key={kuzgun.text}>
                                            <img src={kuzgun.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {kuzgun.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} style={{textAlign: "center"}}>
                            <Typography className={classes.iconText2}>
                                {t('KuzgunMainText')}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }

    const handleGetSahinWeb = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}} id="sahinproduct">
                <img src={sahin} width={"100%"} alt={""}/>
{/*
                <div className={classes.mainDiv3}>
                    <Grid container direction="column"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGrid2}>
                            <img src={sahinMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid2}>
                            <Grid container spacing={1}>
                                {sahinIconAndText.map((sahin) => {
                                    return (
                                        <Grid item xs={2} className={classes.iconGrid}>
                                            <img src={sahin.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {sahin.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Grid container
                                  direction="row"
                                  justifyContent="flex-start"
                                  alignItems="center">
                                <Grid item md={7} sm={12} xs={12} className={classes.mainTextGrid4}>
                                    <Grid container direction="row"
                                          justifyContent="flex-start"
                                          alignItems="center">
                                        <Grid item md={1} sm={1} xs={12} className={classes.lineStyle}>
                                            <img src={line} alt={""} width={"3px"}/>
                                        </Grid>
                                        <Grid item md={11} sm={11} xs={12} className={classes.mainTextGrid3}>
                                            <Typography className={classes.iconText2}>
                                                {t('SahinMainText')}
                                            </Typography>
                                        </Grid>
                                    </Grid>


                                </Grid>
                                <Grid item md={5} sm={2} xs={2} className={classes.emptyGrid}>
                                </Grid>
                                     <Grid item md={1} sm={1} xs={1} >
                                        <img src={line} alt={""}/>
                                    </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
*/}
            </Grid>
        )
    }

    const handleGetSahinMobile = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}}>
                <img src={sahinMobile} width={"100%"} alt={""}/>
                <div className={classes.mainDiv2Mobile2}>
                    <Grid container direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGridMobile}>
                            <img src={sahinMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                            <Grid container spacing={1}>
                                {sahinIconAndText.map((sahin) => {
                                    return (
                                        <Grid item xs={2} key={sahin.text} className={classes.iconGrid}>
                                            <img src={sahin.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {sahin.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} style={{textAlign: "center"}}>
                            <Typography className={classes.iconText2}>
                                {t('SahinMainText')}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }

    const handleGetGamWeb = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}} id="gamproduct">
                <img src={gam} width={"100%"} alt={""}/>
{/*
                <div className={classes.mainDiv5}>
                    <Grid container direction="column"
                          justifyContent="flex-start"
                          alignItems="flex-start"
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGrid2}>
                            <img src={gamMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid2}>
                            <Grid container spacing={1}>
                                {gamIconAndText.map((gam) => {
                                    return (
                                        <Grid item xs={2} className={classes.iconGrid}>
                                            <img src={gam.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {gam.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Grid container
                                  direction="row"
                                  justifyContent="flex-start"
                                  alignItems="center">
                                <Grid item md={7} sm={12} xs={12} className={classes.mainTextGrid4}>
                                    <Grid container direction="row"
                                          justifyContent="flex-start"
                                          alignItems="center">
                                        <Grid item md={1} sm={1} xs={12} className={classes.lineStyle}>
                                            <img src={line} alt={""} width={"3px"}/>
                                        </Grid>
                                        <Grid item md={11} sm={11} xs={12} className={classes.mainTextGrid3}>
                                            <Typography className={classes.iconText2}>
                                                {t('GamMainText')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={5} sm={2} xs={2} className={classes.emptyGrid}>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
*/}
            </Grid>

        )
    }

    const handleGetGamMobile = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}}>
                <img src={gamMobile} width={"100%"} alt={""}/>
                <div className={classes.mainDiv2Mobile2}>
                    <Grid container direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGridMobile}>
                            <img src={sahinMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                            <Grid container spacing={1}>
                                {gamIconAndText.map((gam) => {
                                    return (
                                        <Grid item xs={2} key={gam.text} className={classes.iconGrid}>
                                            <img src={gam.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {gam.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} style={{textAlign: "center"}}>
                            <Typography className={classes.iconText2}>
                                {t('GamMainText')}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }

    const handleGetArzWeb = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}} id="arzproduct">
                <img src={arz} width={"100%"} alt={""}/>
{/*
                <div className={classes.mainDiv4}>
                    <Grid container direction="column"
                          justifyContent="flex-end"
                          alignItems="flex-end"
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGrid}>
                            <img src={arzMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                            <Grid container spacing={1}>
                                {arzIconAndText.map((arz) => {
                                    return (
                                        <Grid item xs={2} className={classes.iconGrid}>
                                            <img src={arz.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {arz.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Grid container
                                  direction="row"
                                  justifyContent="flex-end"
                                  alignItems="center">
                                <Grid item md={5} sm={2} xs={2} className={classes.emptyGrid}>
                                </Grid>
                                <Grid item md={7} sm={12} xs={12} className={classes.mainTextGrid}>
                                    <Grid container direction="row"
                                          justifyContent="flex-end"
                                          alignItems="center">
                                        <Grid item md={11} sm={11} xs={12} className={classes.mainTextGrid2}>
                                            <Typography className={classes.iconText2}>
                                                {t('ArzMainText')}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={1} sm={1} xs={12} className={classes.lineStyle}>
                                            <img src={line} alt={""} width={"3px"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
*/}
            </Grid>
        )
    }

    const handleGetArzMobile = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}}>
                <img src={arzMobile} width={"100%"} alt={""}/>
                <div className={classes.mainDiv2Mobile2}>
                    <Grid container direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGridMobile}>
                            <img src={arzMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                            <Grid container spacing={1}>
                                {arzIconAndText.map((arz) => {
                                    return (
                                        <Grid item xs={2} key={arz.text} className={classes.iconGrid}>
                                            <img src={arz.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {arz.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} style={{textAlign: "center"}}>
                            <Typography className={classes.iconText2}>
                                {t('ArzMainText')}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }

    const handleGetUlakWeb = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}} id="ulakproduct">
                <img src={ulak} width={"100%"} alt={""}/>
{/*
                <div className={classes.mainDiv6}>
                    <Grid container direction="column"
                          justifyContent="flex-end"
                          alignItems="flex-end"
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGrid}>
                            <img src={ulakMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                            <Grid container spacing={1}>
                                {ulakIconAndText.map((ulak) => {
                                    return (
                                        <Grid item xs={2} className={classes.iconGrid}>
                                            <img src={ulak.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {ulak.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Grid container
                                  direction="row"
                                  justifyContent="flex-end"
                                  alignItems="center">
                                <Grid item md={5} sm={2} xs={2} className={classes.emptyGrid}>
                                </Grid>
                                <Grid item md={7} sm={12} xs={12} className={classes.mainTextGrid5}>
                                    <Grid container direction="row"
                                          justifyContent="flex-end"
                                          alignItems="center">
                                        <Grid item md={11} sm={11} xs={12} className={classes.mainTextGrid2}>
                                            <Typography className={classes.iconText2}>
                                                {t('UlakMainText')}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={1} sm={1} xs={12} className={classes.lineStyle}>
                                            <img src={line} alt={""} width={"3px"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
*/}
            </Grid>
        )
    }

    const handleGetUlakMobile = () => {
        return (
            <Grid item xs={12} style={{position: "relative"}}>
                <img src={ulakMobile} width={"100%"} alt={""}/>
                <div className={classes.mainDiv2Mobile3}>
                    <Grid container direction="column"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                    >
                        <Grid item md={12} sm={12} xs={12} className={classes.mainLogoGridMobile}>
                            <img src={ulakMain} className={classes.mainIcon} alt={""}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} className={classes.iconsGrid}>
                            <Grid container spacing={1}>
                                {ulakIconAndText.map((ulak) => {
                                    return (
                                        <Grid item xs={2} key={ulak.text} className={classes.iconGrid}>
                                            <img src={ulak.icon} alt={""} className={classes.miniIcons}/>
                                            <Typography className={classes.iconText}>
                                                {ulak.text}
                                            </Typography>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} style={{textAlign: "center"}}>
                            <Typography className={classes.iconText2}>
                                {t('UlakMainText')}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        )
    }

    return (
        <div className={classes.imgDivProduct}>
            <Grid container spacing={8} className={classes.productImages}>
                <Hidden smUp>
                    <Carousel timeout={400} navButtonsAlwaysVisible={false} autoPlay={false} indicators={false}>
                        <Paper>
                            {handleGetKuzgunMobile()}
                        </Paper>
                        <Paper>
                            {handleGetGamMobile()}
                        </Paper>
                        <Paper>
                            {handleGetSahinMobile()}
                        </Paper>
                        <Paper>
                            {handleGetArzMobile()}
                        </Paper>
                        <Paper>
                            {handleGetUlakMobile()}
                        </Paper>
                    </Carousel>

                    {/* {handleGetKuzgunMobile()}
                    {handleGetSahinMobile()}
                    {handleGetArzMobile()}
                    {handleGetGamMobile()}
                    {handleGetUlakMobile()}*/}
                </Hidden>
                <Hidden only={"xs"}>
                    {handleGetKuzgunWeb()}
                    {handleGetGamWeb()}
                    {handleGetSahinWeb()}
                    {handleGetArzWeb()}
                    {handleGetUlakWeb()}
                </Hidden>
            </Grid>

        </div>
    )
})

export default ProductsSectionTwo