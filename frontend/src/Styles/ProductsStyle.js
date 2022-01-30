import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const ProductsStyle = makeStyles(theme => ({
    bodyDivStyle: {
        marginTop: "80px !important",
        [theme.breakpoints.down('md')]: {
            marginTop: "60px !important",
        }
    },
    videoScreen: {
        display: "flex",
        justifyContent: "center",
        paddingTop: theme.spacing(2),
    },
    imgDiv: {
        position: "relative",
        paddingBottom: theme.spacing(8)
    },
    mainDiv: {
        position: "absolute",
        top: "30%",
        left: "0%",
        right: "0%",
        [theme.breakpoints.down('sm')]: {
            top: "20%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
    },
    mainDiv2: {
        position: "absolute",
        top: "25%",
        left: "13%",
        right: "13%",
        [theme.breakpoints.down('sm')]: {
            top: "25%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
    },
    mainDiv2Mobile: {
        position: "absolute",
        top: "25%",
        left: "13%",
        right: "13%",
        [theme.breakpoints.down('sm')]: {
            top: "25%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "7%",
        },
    },
    mainDiv2Mobile2: {
        position: "absolute",
        top: "25%",
        left: "13%",
        right: "13%",
        [theme.breakpoints.down('sm')]: {
            top: "25%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "5%",
        },
    },
    mainDiv2Mobile3: {
        position: "absolute",
        top: "25%",
        left: "13%",
        right: "10%",
        [theme.breakpoints.down('sm')]: {
            top: "25%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "5%",
        },
    },
    mainDiv3: {
        position: "absolute",
        top: "38%",
        left: "14%",
        right: "14%",
        [theme.breakpoints.down('sm')]: {
            top: "38%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
        textAlign: "right"
    },
    mainDiv4: {
        position: "absolute",
        top: "35%",
        left: "13%",
        right: "13%",
        [theme.breakpoints.down('sm')]: {
            top: "38%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
    },
    mainDiv5: {
        position: "absolute",
        top: "30%",
        left: "13%",
        right: "13%",
        [theme.breakpoints.down('sm')]: {
            top: "27%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
    },
    mainDiv6: {
        position: "absolute",
        top: "35%",
        left: "13%",
        right: "13%",
        [theme.breakpoints.down('sm')]: {
            top: "32%",
        },
        [theme.breakpoints.only('xs')]: {
            top: "0%",
        },
    },
    playIcon: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "6vw",
        [theme.breakpoints.down('sm')]: {
            fontSize: "8vw",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "10vw",
        },
    },
    playText: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        fontSize: "2.5vw",
        [theme.breakpoints.down('sm')]: {
            fontSize: "3vw",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "4vw",
        },
    },
    playIconGrid: {
        textAlign: "center"
    },
    playTextGrid: {
        textAlign: "center"
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
    videoScreenArea: {
        width: "50% !importnt",
        height: "50% !important"
    },
    productGrid: {
        paddingTop: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(4),
        },
        [theme.breakpoints.only('xs')]: {
            paddingTop: theme.spacing(2),
        },

    },
    carouselStyle: {
        backgroundColor: "rgb(0 0 0 / 80%)"
    },
    carouselGrid: {
        width: "100% !important",
        margin: "unset !important"
    },
    productGridWeb: {
        width: "100% !important",
        margin: "unset !important"
    },
    imgDivProduct: {
        backgroundColor: DefaultTheme.palette.secondary.contrastText,
        position: "relative",
        paddingBottom: theme.spacing(10),
        paddingTop: theme.spacing(10),
        display: "flex",
        justifyContent: "center"
    },
    productImages: {
        width: "85%",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    },
    gamDiv: {
        paddingLeft: "6.5vw"
    },
    sahinDiv: {
        paddingLeft: "6.5vw"
    },
    iconText: {
        fontSize: "10px !important",
        fontWeight: "bold",
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.down('md')]: {
            fontSize: "9px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "7px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "7px !important",
            fontWeight: "unset  !important",
        },
    },
    iconText2: {
        fontSize: "15px !important",
        fontWeight: "bold",
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.down('md')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "10px !important",
        },
        "@media screen and (max-width: 600px) and (min-width: 450px)": {
            fontSize: "12px !important",
        },
        "@media screen and (max-width: 1600px) and (min-width: 1280px)": {
            fontSize: "14px !important",
        },
    },
    iconGrid: {
        textAlign: "center"
    },
    mainIcon: {
        [theme.breakpoints.up('lg')]: {
            width: "75%"
        },
        [theme.breakpoints.down('md')]: {
            width: "55%"
        },
        [theme.breakpoints.down('sm')]: {
            width: "40%"
        },
        [theme.breakpoints.only('xs')]: {
            width: "40%"
        },
        "@media screen and (max-width: 1600px) and (min-width: 1280px)": {
            width: "65%"
        },
    },
    mainLogoGrid: {
        textAlign: "right"
    },
    mainLogoGridMobile: {
        textAlign: "center"
    },
    mainLogoGrid2: {
        textAlign: "left"
    },
    miniIcons: {
        [theme.breakpoints.up('lg')]: {
            width: "35px",
            height: "35px"
        },
        [theme.breakpoints.down('md')]: {
            width: "27px",
            height: "27px"
        },
        [theme.breakpoints.down('sm')]: {
            width: "22px",
            height: "22px"
        },
        [theme.breakpoints.only('xs')]: {
            width: "25px",
            height: "25px"
        },
        "@media screen and (max-width: 1600px) and (min-width: 1280px)": {
            width: "30px",
            height: "30px"
        },

    },
    emptyGrid: {
        "@media screen and (max-width: 1600px)": {
            display: "none"
        },
    },
    mainTextGrid: {
        paddingTop: theme.spacing(5),
        textAlign: "right",
        "@media screen and (max-width: 1600px) and (min-width: 960px)": {
            paddingTop: theme.spacing(1),
        },
        [theme.breakpoints.only('sm')]: {
            paddingTop: "1px",
        },
    },
    mainTextGrid5: {
        paddingTop: theme.spacing(3),
        textAlign: "right",
        "@media screen and (max-width: 1600px) and (min-width: 1280px)": {
            marginTop: theme.spacing(-1),
            paddingTop: "unset"
        },
        "@media screen and (max-width: 1280px) and (min-width: 960px)": {
            marginTop: theme.spacing(-1.2),
            paddingTop: "unset"
        },
        [theme.breakpoints.only('sm')]: {
            paddingTop: "1px",
        },
        "@media screen and (max-width: 680px) and (min-width: 600px)": {
            marginTop: theme.spacing(-1.5),
            paddingTop: "unset"
        },

    },
    mainTextGrid4: {
        paddingTop: theme.spacing(5),
        textAlign: "left",
        "@media screen and (max-width: 1600px) and (min-width: 960px)": {
            paddingTop: theme.spacing(1),
        },
        [theme.breakpoints.only('sm')]: {
            paddingTop: "1px",
        },
    },
    lineStyle: {
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    iconsGrid: {
        "@media screen and (max-width: 620px) and (min-width: 600px)": {
            marginTop: "-12px"
        }
    },
    iconsGrid2: {
        paddingTop: theme.spacing(3),
        [theme.breakpoints.only('sm')]: {
            paddingTop: theme.spacing(1),
        },
    },

    mainTextGrid2: {
        marginRight: theme.spacing(-3.6),
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(-3),
        },
        [theme.breakpoints.down('sm')]: {
            marginRight: "unset",
        },
    },
    mainTextGrid3: {
        marginLeft: theme.spacing(-3.6),
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(-3),
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: "unset",
        },
    }
}));

export default ProductsStyle;