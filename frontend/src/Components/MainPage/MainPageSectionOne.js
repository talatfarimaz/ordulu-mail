import React from "react";
import {useTranslation} from "react-i18next";
import AppContentStyle from "../../Styles/AppContentStyle";
import {Grid, Link, Typography} from "@material-ui/core";
import mainImg from '../../assets/images/mainImg.png';
import mainImg2 from '../../assets/images/mainImg2.png';
import akinci1 from '../../assets/images/akinci1.png';
import akinci2 from '../../assets/images/akinci2.png';
import akinciBackground from '../../assets/images/akıncıBackground.png';
import kuzgunBackground from '../../assets/images/kuzgunBackground.png';
import sahinBackground from '../../assets/images/sahinBackground.png';
import ulak from '../../assets/images/ulak.png';
import arz from '../../assets/images/arz.png';
import sahin from '../../assets/images/sahin.png';
import kuzgun from '../../assets/images/kuzgun.png';
import gam from '../../assets/images/gam.png';
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import SettingsInputAntennaOutlinedIcon from '@material-ui/icons/SettingsInputAntennaOutlined';
import QueuePlayNextOutlinedIcon from '@material-ui/icons/QueuePlayNextOutlined';
import SettingsInputComponentOutlinedIcon from '@material-ui/icons/SettingsInputComponentOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import twitter from "../../assets/images/twitter.png";
import linkedin from "../../assets/images/linkedin.png";
import youtube from "../../assets/images/youtube.png";

function MainPageSectionOne() {
    const {t} = useTranslation();
    const classes = AppContentStyle();
    const [changeImg, setChangeImg] = React.useState(false); //TODO false yap
    const [kuzgun, setKuzgun] = React.useState(false);
    const [sahin, setSahin] = React.useState(false);
    const [arz, setArz] = React.useState(false);
    const [ulak, setUlak] = React.useState(false);
    const [gam, setGam] = React.useState(false);
    const [backgroundImg, setBackgroundImg] = React.useState(akinciBackground);

    const handleChangeWidthAndHeight = (event) => {
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.padding = "20px"
            element.style.marginTop = "-20px"
        } else if (event.target.parentNode.id !== "" && event.target.parentNode.id !== null) {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.padding = "20px"
            element.style.marginTop = "-20px"
        }
    }

    const handleResetWidthAndHeight = (event) => {
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.padding = "0px"
            element.style.marginTop = "0px"
        } else if (event.target.parentNode.id !== "" && event.target.parentNode.id !== null) {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.padding = "0px"
            element.style.marginTop = "0px"
        }

    }
    const handleGetImg = () => {
        if (changeImg) {
            return (
                <div style={{position: "relative"}}>
                    <img src={backgroundImg} alt="" className={classes.mainImgStyle}/>
                    {/* <div id={"akinci2"} className={classes.akinci2}/>
                    <div id={"akinci1"} className={classes.akinci1}/>*/}
                   {/* <div className={classes.mainText2}>
                        <Typography className={classes.mainTextStyle2}>
                            O R D U L U
                        </Typography>
                    </div>*/}
                    <Link href="/products#kuzgunproduct">
                        <div id={"kuzgun"} onMouseEnter={(event) => {
                            handleChangeWidthAndHeight(event)
                            setKuzgun(true)
                            setBackgroundImg(kuzgunBackground)
                        }}
                             onMouseLeave={(event) => {
                                 handleResetWidthAndHeight(event)
                                 setKuzgun(false)
                                 setBackgroundImg(akinciBackground)
                             }} className={classes.kuzgun}>
                            {kuzgun &&
                                <div className={classes.productNameDiv}>
                                    <Typography className={classes.productName}>
                                        KUZGUN
                                    </Typography>
                                    <Typography className={classes.productDef}>
                                        {t('Kuzgun')}
                                    </Typography>
                                </div>}
                        </div>
                    </Link>
                    <Link href="/products#gamproduct">
                        <div id={"gam"} onMouseEnter={(event) => {
                            handleChangeWidthAndHeight(event)
                            setGam(true)
                        }}
                             onMouseLeave={(event) => {
                                 handleResetWidthAndHeight(event)
                                 setGam(false)
                             }} className={classes.gam}>
                            {gam &&
                                <div className={classes.productNameDiv}>
                                    <Typography className={classes.productName}>
                                        GAM
                                    </Typography>
                                    <Typography className={classes.productDef}>
                                        {t('Gam')}
                                    </Typography>
                                </div>}
                        </div>
                    </Link>
                    <Link href="/products#arzproduct">
                        <div id={"arz"} onMouseEnter={(event) => {
                            handleChangeWidthAndHeight(event)
                            setArz(true)
                        }}
                             onMouseLeave={(event) => {
                                 handleResetWidthAndHeight(event)
                                 setArz(false)
                             }} className={classes.arz}>
                            {arz &&
                                <div className={classes.productNameDiv}>
                                    <Typography className={classes.productName}>
                                        ARZ
                                    </Typography>
                                    <Typography className={classes.productDef}>
                                        {t('Arz')}
                                    </Typography>
                                </div>}
                        </div>
                    </Link>
                    <Link href="/products#sahinproduct">
                        <div id={"sahin"} onMouseEnter={(event) => {
                            handleChangeWidthAndHeight(event)
                            setSahin(true)
                            setBackgroundImg(sahinBackground)
                        }}
                             onMouseLeave={(event) => {
                                 handleResetWidthAndHeight(event)
                                 setSahin(false)
                                 setBackgroundImg(akinciBackground)
                             }} className={classes.sahin}>
                            {sahin &&
                                <div className={classes.productNameDiv}>
                                    <Typography className={classes.productName}>
                                        ŞAHİN
                                    </Typography>
                                    <Typography className={classes.productDef}>
                                        {t('Şahin')}
                                    </Typography>
                                </div>}
                        </div>
                    </Link>
                    <Link href="/products#ulakproduct">
                        <div id={"ulak"} onMouseEnter={(event) => {
                            handleChangeWidthAndHeight(event)
                            setUlak(true)
                        }}
                             onMouseLeave={(event) => {
                                 handleResetWidthAndHeight(event)
                                 setUlak(false)
                             }} className={classes.ulak}>
                            {ulak &&
                                <div className={classes.productNameDiv}>
                                    <Typography className={classes.productName}>
                                        ULAK
                                    </Typography>
                                    <Typography className={classes.productDef}>
                                        {t('Ulak')}
                                    </Typography>
                                </div>}
                        </div>
                    </Link>
                    <div className={classes.mediaIcons}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <IconButton href={"https://www.linkedin.com/company/ordulu-bilgi/?originalSubdomain=tr"}
                                            target={"blank"}>
                                    <LinkedInIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton href={"https://www.youtube.com/channel/UCxmWID88tzpiAUCBv7A29NQ"}
                                            target={"blank"}>
                                    <YouTubeIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton href={"https://twitter.com/ordulutech"} target={"blank"}>
                                    <TwitterIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{position: "relative"}}>
                    <img src={mainImg} alt="" className={classes.mainImgStyle}/>
                  {/*  <div className={classes.mainText}>
                        <Typography className={classes.mainTextStyle}>
                            O R D U L U
                        </Typography>
                    </div>*/}
                    <div className={classes.mediaIcons}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <IconButton>
                                    <LinkedInIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton>
                                    <YouTubeIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton>
                                    <TwitterIcon className={classes.mediaIconStyle}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </div>

                </div>
            )
        }
    };
    return (
        <div className={classes.imageAnimation}>
            <div onMouseEnter={(event) => {
                setChangeImg(true)
            }}
                 onMouseLeave={(event) => {
                     setChangeImg(false)
                 }}>
                {handleGetImg()}
            </div>
            <div className={classes.infoArea}>
                <Grid container spacing={1}>
                    <Grid item xs={1}/>
                    <Grid item xs={2} className={classes.iconText}>
                        <SettingsInputAntennaOutlinedIcon
                            className={!kuzgun ? classes.infoIcons : classes.infoIconsActive}/>
                        <Typography className={classes.infoText}>
                            {t('Info1')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.iconText}>
                        <QueuePlayNextOutlinedIcon className={!gam ? classes.infoIcons : classes.infoIconsActive}/>
                        <Typography className={classes.infoText}>
                            {t('Info2')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.iconText}>
                        <SettingsInputComponentOutlinedIcon
                            className={!sahin ? classes.infoIcons : classes.infoIconsActive}/>
                        <Typography className={classes.infoText}>
                            {t('Info3')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.iconText}>
                        <ForumOutlinedIcon className={!ulak ? classes.infoIcons : classes.infoIconsActive}/>
                        <Typography className={classes.infoText}>
                            {t('Info4')}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} className={classes.iconText}>
                        <FormatShapesIcon className={!arz ? classes.infoIcons : classes.infoIconsActive}/>
                        <Typography className={classes.infoText}>
                            {t('Info5')}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </div>
        </div>
    )
}

export default MainPageSectionOne