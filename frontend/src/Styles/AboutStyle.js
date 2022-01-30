import DefaultTheme from "../Themes/DefaultTheme";
import {makeStyles} from "@material-ui/core/styles";

const AboutStyle = makeStyles(theme => ({
    bodyDivStyle: {
        marginTop: "80px !important",
        backgroundColor: DefaultTheme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            marginTop: "60px !important",
        },
    },
    mainText: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    imgDiv: {
        position: "relative",
        paddingBottom: theme.spacing(8)
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
    sectionTwoDiv: {
        justifyContent: "center",
        display: "flex",
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    reportageGrid: {
        width: "70% !important",
        [theme.breakpoints.down('sm')]: {
            width: "90% !important",
        },
        [theme.breakpoints.only('xs')]: {
            width: "100% !important",
        },
    },
    reportageTitle: {
        fontSize: "45px !important",
        color: DefaultTheme.palette.inherit.main,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "35px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "25px !important",
        },
    },
    reportageTitle2: {
        fontSize: "45px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "35px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "25px !important",
        },
    },
    managers: {
        textAlign:"center",
        marginTop: theme.spacing(12)
    },
    questionTitle: {
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
            fontSize: "16px !important",
        },
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    podcastText: {
        textAlign: "center"
    }
    ,
    questionTitle2: {
        fontSize: "30px !important",
        color: DefaultTheme.palette.inherit.main,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "25px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "16px !important",
        },
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    question: {
        fontSize: "18px !important",
        color: DefaultTheme.palette.inherit.main,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "12px !important",
        },
    },
    answer: {
        fontSize: "18px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.down('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "12px !important",
        },

    },
    answer3: {
        fontSize: "40px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "20px !important",
        },

    },
    answer4: {
        fontSize: "25px !important",
        color: DefaultTheme.palette.inherit.main,
        fontWeight: "bolder !important",
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
    answer2: {
        fontSize: "18px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        fontWeight: "bold",
        [theme.breakpoints.down('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "12px !important",
        },

    },
    reportageGridMargin: {
        paddingTop: theme.spacing(1),
        [theme.breakpoints.only('xs')]: {
            paddingTop: theme.spacing(1),
        },
    },
    userName: {
        fontSize: "18px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.down('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important",
        },
    },
    developer: {
        fontSize: "18px !important",
        color: DefaultTheme.palette.inherit.main,
        [theme.breakpoints.down('md')]: {
            fontSize: "15px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important",
        },
    },
    userNameArea: {
        textAlign: "right",
        [theme.breakpoints.only('xs')]: {
            textAlign: "center",
        },
    },
    newsDate: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "13px !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "11px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "10px !important",
        },
    },
    newsDate2: {
        color: DefaultTheme.palette.dark.alternative,
        fontSize: "13px !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "11px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "10px !important",
        },
    },
    newsText: {
        color: DefaultTheme.palette.secondary.contrastText,
        margin: theme.spacing(2),
        fontSize: "15px !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "12px !important",
        },
    },
    newsText2: {
        color: DefaultTheme.palette.dark.alternative,
        margin: theme.spacing(2),
        fontSize: "15px !important",
        [theme.breakpoints.down('md')]: {
            fontSize: "13px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "12px !important",
        },
    },
    readMoreButton: {
        display: "flex",
        justifyContent: "flex-end"
    },
}));

export default AboutStyle;