import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";
import akinci1 from '../assets/images/akinci1.png';
import akinci2 from '../assets/images/akinci2.png';
import ulak from '../assets/images/ulak.png';
import arz from '../assets/images/arz.png';
import sahin from '../assets/images/sahin.png';
import kuzgun from '../assets/images/kuzgun.png';
import gam from '../assets/images/gam.png';
import section2img from '../assets/images/section2img.png';

const AppContentStyle = makeStyles(theme => ({
    imageAnimation: {
        backgroundColor: DefaultTheme.palette.primary.main
    },
    bodyDivStyle: {
        marginTop: "80px",
        [theme.breakpoints.down('md')]: {
            marginTop: "60px",
        },
    },
    mainImgStyle: {
        width: "100%",
        display: "block"
    },
    mainText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    mainText2: {
        position: "absolute",
        top: "10%",
        left: "20%",
        right: "20%",
        textAlign: "center",
        [theme.breakpoints.only('xs')]: {
            top: "5%",
        },
    },
    mainTextStyle: {
        fontSize: "100px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bold !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "80px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "50px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "25px !important",
        },
    },
    mainTextStyle2: {
        fontSize: "50px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bold !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "40px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "18px !important",
        },
    },
    mediaIcons: {
        position: "absolute",
        top: "85%",
        left: "5%",
        [theme.breakpoints.only('xs')]: {
            top: "75%",
        }
    },
    mediaIconStyle: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "40px !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important",
        },
    },
    akinci2: {
        width: "3%",
        height: "3%",
        backgroundImage: `url(${akinci2})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "25%",
        left: "50%",
    },
    akinci1: {
        width: "5%",
        height: "5%",
        backgroundImage: `url(${akinci1})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "20%",
        left: "60%",
    },
    ulak: {
        width: "13%",
        height: "13%",
        backgroundImage: `url(${ulak})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "42%",
        left: "82%",
        [theme.breakpoints.down('sm')]: {
            left: "80%",
        },
        [theme.breakpoints.only('xs')]: {
            left: "75%",
        },
    },
    gam: {
        width: "11%",
        height: "11%",
        backgroundImage: `url(${gam})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "56%",
        left: "28%",
    },
    kuzgun: {
        width: "11%",
        height: "11%",
        backgroundImage: `url(${kuzgun})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "45%",
        left: "8%",
    }
    ,
    sahin: {
        width: "14%",
        height: "14%",
        backgroundImage: `url(${sahin})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "73%",
        left: "58%",
    }
    ,
    arz: {
        width: "13%",
        height: "13%",
        backgroundImage: `url(${arz})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        top: "50%",
        left: "47%",
    },
    infoIcons: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "50px !important",
        [theme.breakpoints.down('lg')]: {
            fontSize: "40px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px !important",
        },
    },
    infoIconsActive: {
        color: DefaultTheme.palette.inherit.main,
        fontSize: "50px !important",
        [theme.breakpoints.down('lg')]: {
            fontSize: "40px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px !important",
        },
    },
    infoArea: {
        backgroundColor: DefaultTheme.palette.primary.main,
        width: "80%",
        margin: "auto",
        paddingTop: "20px",
        paddingBottom: "20px",
        display: "none",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
        },
        [theme.breakpoints.only('sm')]: {
            width: "100%",
        },
        [theme.breakpoints.only('xs')]: {
            paddingTop: "40px",
        },

    },
    infoText: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "18px !important",
        marginTop: "10px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "9px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "7px !important",
        },
    },
    infoTextActive: {
        color: DefaultTheme.palette.inherit.main,
        fontSize: "18px !important",
        marginTop: "10px",
        [theme.breakpoints.down('lg')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "9px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "7px !important",
        },
    },
    productName: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "25px !important",
        fontWeight:"bolder !important",
        [theme.breakpoints.down('lg')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "18px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "12px !important",
        },
    },
    productDef: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "15px !important",
        [theme.breakpoints.down('lg')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "11px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "8px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "6px !important",
        },
    },
    productNameDiv: {
        position: "absolute",
        top: "100%",
        left: "20%",
        right: "20%",
        textAlign: "center"
    },
    iconText: {
        textAlign: "center"
    },
    sectionTwoBackground: {
        backgroundImage: `url(${section2img})`,
        padding: "12px",
        [theme.breakpoints.only('xs')]: {
            background: DefaultTheme.palette.primary.main
        },
    },
    orduluInfo: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "60px !important",
        fontWeight: "bold !important",
        textAlign: "right",
        [theme.breakpoints.down('lg')]: {
            fontSize: "50px !important",
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "40px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px !important",
            textAlign: "center",
        },
    },
    infoMargin: {
        margin: "auto",
    },
    alignRight: {
        float: "right",
        [theme.breakpoints.down('sm')]: {
            float: "unset",
        },

    },
    sectionTwoPadding: {
        paddingTop: "80px",
        paddingBottom: "80px",
        width: "90%",
        margin: "auto",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    sectionTwoImg: {
        maxWidth: "100%"
    },
    sectionThreeBackground: {
        backgroundColor: DefaultTheme.palette.primary.main,
        height: "60vw",
        position: "relative",
        [theme.breakpoints.only('sm')]: {
            height: "60vw",
        },
        [theme.breakpoints.only('xs')]: {
            height: "110vw",
        },
    },
    aboutOneImg: {
        float: "right",
        position: "absolute",
        width: "100%",
        display: "block",
        margin: "auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    aboutOneMobileImg: {
        float: "right",
        position: "absolute",
        width: "100%",
        display: "block",
        margin: "auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    aboutOneImg2: {
        position: "absolute",
        top: "21%",
        left: "20%",
        maxWidth: "100%",
    },
    referanceArea: {
        textAlign: "center",
        backgroundColor: DefaultTheme.palette.primary.dark
    },
    referanceImg: {
        marginTop: "10px",
        height: "140px",
        [theme.breakpoints.only('sm')]: {
            height: "120px",
        },
        [theme.breakpoints.only('xs')]: {
            height: "60px",
            padding: "10px"
        },
    },
    referenceText: {
        fontSize: "50px !important",
        fontWeight: "bolder !important",
        color: DefaultTheme.palette.primary.light,
        marginTop: "10px",
        marginBottom: "10px",
        [theme.breakpoints.only('sm')]: {
            fontSize: "40px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "30px !important",
        },
    },
    referenceName: {
        fontSize: "11px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bold",
        margin: "10px",
        [theme.breakpoints.only('xs')]: {
            fontSize: "9px !important",
            fontWeight: "unset !important",
        },
    },
    referenceImgText: {
        marginTop: "10px",
        marginBottom: "10px",
        height: "200px",
        borderRadius: "4px",
        [theme.breakpoints.only('xs')]: {
            height: "80px",
        },
    },
    pageFiveImg1: {
        position: "relative"
    },
    pageFiveImg2: {
        position: "relative",
        marginTop: "20px"
    },
    pageFiveImg3: {
        position: "relative"
    },
    sectionFiveBackground: {
        backgroundColor: DefaultTheme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
/*
        background: "linear-gradient(to bottom, " + DefaultTheme.palette.primary.main + " 50%," + DefaultTheme.palette.secondary.contrastText + " 50%)",
*/
    },
    sectionFiveGrid: {
        paddingTop: "100px",
        paddingBottom: "100px",
        width: "70% !important",
        [theme.breakpoints.down('sm')]: {
            width: "100% !important",
        },
    },
    sectionFiveGrid1: {
        height: "50%",
        display: "flex"
    },
    sectionFiveGrid2: {
        height: "50%",
    },
    sectionFiveGrid3: {
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            height: "unset"
        },
    },
    careerAndLife: {
        fontSize: "30px !important",
        fontWeight: "bold !important",
        color: DefaultTheme.palette.secondary.contrastText,
        display: "inline-block",
        alignSelf: "flex-end",
        [theme.breakpoints.down('sm')]: {
            color: DefaultTheme.palette.dark.alternative,
        },
    },
    sectionFiveText1: {
        fontSize: "40px !important",
        fontWeight: "bolder !important",
        color: DefaultTheme.palette.secondary.main,
        [theme.breakpoints.down('md')]: {
            fontSize: "25px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px !important",
        },
    },
    sectionFiveText2: {
        fontSize: "40px !important",
        fontWeight: "bolder !important",
        color: DefaultTheme.palette.dark.alternative,
        [theme.breakpoints.down('md')]: {
            fontSize: "25px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px !important",
        },
    },
    sectionFiveText3: {
        fontSize: "20px !important",
        fontWeight: "bolder !important",
        color: DefaultTheme.palette.dark.alternative,
        [theme.breakpoints.down('md')]: {
            fontSize: "15px !important",
        },
    },
    sectionFiveButtons: {
        position: "absolute !important",
        top: "90% !important",
        left: "20% !important",
        right: "20% !important",
    },
    sectionFiveButtons2: {
        position: "absolute !important",
        top: "92% !important",
        left: "42% !important",
    },
    sectionFiveButtonText: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "20px !important",
        fontWeight: "bolder !important",
        [theme.breakpoints.only('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "13px !important",
        },
    },
    sectionFiveButtonText2: {
        fontSize: "20px !important",
        fontWeight: "bolder !important",
        [theme.breakpoints.only('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "13px !important",
        },
    },
    gridHeight: {
        height: "100%",
        [theme.breakpoints.down('sm')]: {
            height: "unset"
        },
        [theme.breakpoints.only('xs')]: {
            paddingLeft: "10px",
        },
    },
    animatedItem: {
        animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
    },
    animatedItemExiting: {
        animation: `$myEffectExit 3000ms ${theme.transitions.easing.easeInOut}`,
        opacity: 0,
        transform: "translateY(-200%)"
    },
    "@keyframes myEffect": {
        "0%": {
            opacity: 0,
            transform: "translateY(-200%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },
    "@keyframes myEffectExit": {
        "0%": {
            opacity: 1,
            transform: "translateY(0)"
        },
        "100%": {
            opacity: 0,
            transform: "translateY(-200%)"
        }
    },
    backdrop: {
        backgroundColor: "rgb(0 0 0 / 80%) !important"
    },
    paper: {},
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orduluText:{
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "20px !important",
        fontWeight: "bolder !important",
        [theme.breakpoints.only('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.only('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "13px !important",
        },
    }
}));

export default AppContentStyle;