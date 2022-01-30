import {makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const AppFooterStyle = makeStyles(theme => ({
    footerBackground: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        backgroundColor: DefaultTheme.palette.primary.main
    }
    ,
    groupCompany: {
        fontWeight: "bolder",
        fontSize: "18px",
        paddingBottom: "20px",
        color: DefaultTheme.palette.secondary.contrastText,
        [theme.breakpoints.only('xs')]: {
            paddingBottom: "10px",
        },
    },
    subGrids: {
        textAlign: "center"
    },
    footerIcons: {
        padding: "10px"
    },
    copyRight: {
        paddingTop: "10px",
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "10px"
    },
    dividerGrid: {
        paddingTop: "20px",
        paddingBottom: "20px",
        [theme.breakpoints.only('xs')]: {
            order: 4
        },
    },
    dividerColor: {
        backgroundColor: DefaultTheme.palette.primary.light + " !important"
    },
    mailTo: {
        color: DefaultTheme.palette.secondary.contrastText,
        fontSize: "11px"
    },
    footerDivider: {
        height: "15px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center"
    },
    grid1: {
        [theme.breakpoints.only('xs')]: {
            order: 2,
            marginTop: "10px",
            marginBottom: "10px"
        },
    },
    grid2: {
        [theme.breakpoints.only('xs')]: {
            order: 3,
            marginTop: "10px",
            marginBottom: "10px"
        },
    },
    grid3: {
        [theme.breakpoints.only('xs')]: {
            order: 1,
            marginTop: "10px",
            marginBottom: "10px"
        },
    },
    grid4: {
        order: 5,
    },
    grid5: {
        order: 6,
    },
    grid6: {
        order: 7,
    }

}));

export default AppFooterStyle;