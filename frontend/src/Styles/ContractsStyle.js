import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const ContractsStyle = makeStyles(theme => ({
    bodyDivStyle: {
        marginTop: "80px !important",
        backgroundColor: DefaultTheme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            marginTop: "60px !important",
        },
    },
    menuItem: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& $primary, & $icon": {
                color: theme.palette.common.white,
            },
        },
        paddingLeft: "unset",
        paddingTop: "unset",
        paddingBottom: "unset"
    },
    primary: {
        fontWeight: "bold",
        [theme.breakpoints.down("xs")]: {
            fontSize: "14px",
        },
        [theme.breakpoints.up("sm")]: {
            fontSize: "12px",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "14px",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "14px",
        },
    },
    icon: {},
    contractTextPaper: {
        [theme.breakpoints.down("xs")]: {
            padding: "15px",
        },
        [theme.breakpoints.up("sm")]: {
            padding: "10px",
        },
        [theme.breakpoints.up("md")]: {
            padding: "15px",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "20px",
        },
    },
    emptyGrid: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    mainGrid: {
        width: "100% !important",
        paddingTop: theme.spacing(4),
            [theme.breakpoints.down("xs")]: {
            marginBlockStart: "30px",
                margin: "unset !important"
        },
        [theme.breakpoints.up("sm")]: {
            marginBlockStart: "60px",
            margin: "unset"
        },
        [theme.breakpoints.up("md")]: {
            marginBlockStart: "30px",
            margin: "unset"
        },
        [theme.breakpoints.up("lg")]: {
            margin: "unset"
        },
    },
    selectButton: {
        textTransform: "none",
        fontWeight: "bold"
    },
    listItemTex: {
        fontFamily: "Montserrat",
    }
}));

export default ContractsStyle;