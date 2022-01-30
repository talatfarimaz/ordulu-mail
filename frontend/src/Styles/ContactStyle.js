import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const ContactStyle = makeStyles(theme => ({
    bodyDivStyle: {
        marginTop: "80px !important",
        backgroundColor: DefaultTheme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            marginTop: "60px !important",
        },
    },
    sectionOneBackground: {
        position: "relative"
    },
    mainImgStyle: {
        width: "100%",
        display: "block"
    },
    formGrid: {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        width: "80%",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            top: "60%",
        },
    },
    mainText: {
        fontSize: "70px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "55px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "35px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "20px !important",
        },
    },
    mainText2: {
        fontSize: "25px !important",
        color: DefaultTheme.palette.secondary.contrastText,
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
    formElement: {
        marginBlockEnd: theme.spacing(6),
        display: "block",
        [theme.breakpoints.down('sm')]: {
            marginBlockEnd: theme.spacing(2),
        },
    },
    formElemetText: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bold !important",
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px"
        },
    },
    input: {
        color: DefaultTheme.palette.secondary.contrastText,
    },
    underline: {
        '&:before': {
            borderBottom: '1px solid ' + DefaultTheme.palette.secondary.contrastText
        },
        '&:after': {
            borderBottom: `2px solid ` + DefaultTheme.palette.secondary.contrastText
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
            borderBottom: `2px solid ` + DefaultTheme.palette.secondary.contrastText
        }
    },
    sendButton: {
        marginTop: theme.spacing(-8),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(-7),
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: theme.spacing(-12),
        },
    },
    kvkk: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(-1.5),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(-0.5),
        },
    },
    subGrid: {
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(-6)
        },
    },
    displayGrid: {
        [theme.breakpoints.up('md')]: {
            display: "none"
        },
        [theme.breakpoints.only('xs')]: {
            display: "none"
        },
    },
    checkBoxText: {
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.down('md')]: {
            fontSize: "14px"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px"
        },
    },
    inputRoot: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px"
        },
    },
    mainGrid: {
        [theme.breakpoints.down('sm')]: {
            margin: "unset !important",
            width: "100% !important"
        },
    },
    buttonText: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px"
        },
    },
    checkBoxStyle: {
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.only('sm')]: {
            transform: "scale(0.8)"
        },
    },
    paddingTop: {
        [theme.breakpoints.only('xs')]: {
            paddingTop: "0px !important"
        },
    },
    sectionTwoBackground: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(6),
        backgroundColor: DefaultTheme.palette.primary.main,
        margin: "auto",
        display: "flex",
        justifyContent: "center"
    },
    sectionTwoGrid: {
        width: "70% !important",
        [theme.breakpoints.down('sm')]: {
            width: "90% !important",
        },
        [theme.breakpoints.only('xs')]: {
            width: "100% !important",
        },
    },
    locationTitle1: {
        fontSize: "30px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.down('md')]: {
            fontSize: "25px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important",
        },
    },
    locationTitle2: {
        fontSize: "30px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "25px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important",
        },
    },
    addressText1: {
        fontSize: "25px !important",
        color: DefaultTheme.palette.dark.alternative,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "13px !important",
        },
    },
    addressText2: {
        fontSize: "15px !important",
        color: DefaultTheme.palette.dark.alternative,
        [theme.breakpoints.down('md')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "9px !important",
        },
    },
    cardAction: {
        backgroundColor: DefaultTheme.palette.secondary.contrastText,
        padding: theme.spacing(6),
        borderRadius: "2px",
        height: "unset !important",
        width: "unset !important",
        [theme.breakpoints.only('sm')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.only('xs')]: {
            padding: theme.spacing(2),
        },

    },
    location: {
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.only('xs')]: {
            display: "none",
        },
    },
    mapsArea: {
        paddingBottom: theme.spacing(6),
    },
    backdrop: {
        backgroundColor: "rgb(0 0 0 / 80%) !important"
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    kvkkTitle: {
        fontSize: "70px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "55px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "35px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "20px !important",
        },
    },
    dialogTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

export default ContactStyle;