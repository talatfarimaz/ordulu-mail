import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const JobsStyle = makeStyles(theme => ({
    bodyDivStyle: {
        marginTop: "80px !important",
        backgroundColor: DefaultTheme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            marginTop: "60px !important",
        }
    },
    jobTitle: {
        fontSize: "40px !important",
        color: DefaultTheme.palette.secondary.contrastText,
        marginBottom: theme.spacing(8),
            [theme.breakpoints.down('md')]: {
            fontSize: "30px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "25px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "20px !important",
            marginBottom: "unset",
        },
    },
    jobTitleGrid: {
        textAlign: "center",
        marginTop: theme.spacing(8)
    },
    jobsGrid: {
        width: "80%",
        textAlign: "center",
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
            [theme.breakpoints.down('md')]: {
            width: "100%",
        },
        [theme.breakpoints.only('xs')]: {
            marginTop: "unset",

        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backdrop: {
        backgroundColor: "rgb(0 0 0 / 80%) !important"
    },
    dialogTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    jobCard: {
        backgroundColor: DefaultTheme.palette.secondary.contrastText,
        height: "100%",
        borderRadius: "5px"
    },
    jobDefinition: {
        fontSize: "30px !important",
        fontWeight: "bold",
        padding: theme.spacing(4),
        [theme.breakpoints.down('md')]: {
            fontSize: "23px !important",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "18px !important",
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important",
        },
    },
    buttonText: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px"
        },
    },
    formElement: {
        display: "block",
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
}));

export default JobsStyle;