import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";
import paper from "../assets/images/paper.png";

const CareerAndLifeStyle = makeStyles(theme => ({
    bodyDivStyle: {
        marginTop: "80px !important",
        backgroundColor: DefaultTheme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            marginTop: "60px !important",
        },
    },
    imgGradient: {},
    imgDiv: {
        position: "relative"
    },
    mainText: {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        [theme.breakpoints.down('sm')]: {
            top: "20%",
        },
    },
    careerAndLifeText: {
        fontSize: "80px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "60px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "35px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "20px !important",
        },
    },
    imgDiv2: {},
    careerText2: {
        fontSize: "18px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "12px !important",
        },
    },
    imagesDiv: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        width: "70% !important",
        [theme.breakpoints.down('sm')]: {
            width: "80% !important",
        },
        [theme.breakpoints.only('xs')]: {
            width: "95% !important",
        },

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "10px"
    },
    paper: {},
    backdrop: {
        backgroundColor: "rgb(0 0 0 / 80%) !important"
    },
    lifeText: {
        fontSize: "60px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "45px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "25px !important",
        },
    },
    imgJob: {
        position: "absolute",
        top: "90%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "30px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "25px !important",
            top: "80%",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "18px !important",
        },
    },
    cardAction1: {
        background: DefaultTheme.palette.danger.main,
    },
    cardAction2: {
        background: DefaultTheme.palette.light.dark,
    },
    jobGradient: {
        opacity: 0.2,
    },
    internGradient: {
        opacity: 0.2,
    },
    advantages: {
        backgroundImage: `url(${paper})`,
        backgroundColor: DefaultTheme.palette.secondary.contrastText,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sentence1: {
        fontSize: "35px !important",
        color: DefaultTheme.palette.dark.alternative,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "28px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "22px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "18px !important",
        },
    },
    sentence2: {
        fontSize: "25px !important",
        color: DefaultTheme.palette.dark.alternative,
        [theme.breakpoints.down('md')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important",
        },
    },
    advantagesGrid: {
        paddingTop: theme.spacing(12),
        paddingBottom: theme.spacing(12),
        width: "70% !important",
        [theme.breakpoints.down('sm')]: {
            width: "80% !important",
        },
        [theme.breakpoints.only('xs')]: {
            width: "95% !important",
        }
    },
    sectionFive: {
        backgroundColor: DefaultTheme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButton: {
        color: DefaultTheme.palette.secondary.contrastText,
    },
    notchedOutline: {
        borderColor: DefaultTheme.palette.secondary.contrastText+ " !important",
    },
    margin: {
        margin: theme.spacing(1),
    },
    root: {
        "& label": {
            width: "100%",
            textAlign: "center",
            transformOrigin: "center",
            "&.Mui-focused": {
                transformOrigin: "center"
            }
        }
    },
    sendMessageText: {
        fontSize: "25px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important",
        },
    },
    sendMessageTex2: {
        fontSize: "15px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "10px !important",
        },
    },
    formElement: {
        display: "block",
        width: "100%"
    },
    formElemetText: {
        fontWeight: "bold !important",
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px"
        },
    },
    formElemetText2: {
        fontWeight: "bold !important",
        fontSize: "18px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "13px"
        },
    },
    dialogTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    advantageText: {
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    }
}));

export default CareerAndLifeStyle;