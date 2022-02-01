import {alpha, makeStyles} from "@material-ui/core/styles";
import DefaultTheme from "../Themes/DefaultTheme";

const AppNavbarStyle = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.only('xs')]: {
            marginRight: "-5px"
        },
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.primary.main, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(3),
            width: "30%",
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(3),
            width: "50%",
        },
        [theme.breakpoints.only('xs')]: {
            marginRight: "0px",
            width: "100%",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolBarMain: {
        height: "80px",
        [theme.breakpoints.only('xs')]: {
            paddingRight: "0px"
        },
        [theme.breakpoints.down('md')]: {
            height: "60px",
        },
    },
    languageSelection: {
        padding: "5px",
        color: DefaultTheme.palette.success.contrastText,
        backgroundColor: DefaultTheme.palette.secondary.main,
        marginLeft: "20px",
        width: "30px",
        height: "30px",
    },
    languageSelectionArea: {
        margin: "auto",
    },
    appBarMain: {
        boxShadow: "unset",
        backgroundColor: DefaultTheme.palette.primary.main
    },
    languageButton: {
        width: "59px",
        height: "59px",
        marginLeft: theme.spacing(-4),
            [theme.breakpoints.only('xs')]: {
                marginLeft: "unset",
},
    },
    languageText: {
        fontSize: "1rem",
        color: DefaultTheme.palette.success.contrastText,
    },
    mainLogo: {
        height: "58px !important",
        width: "55px !important",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        [theme.breakpoints.down('md')]: {
            height: "40px !important",
            width: "38px !important",
        },
    },
    tabStyle: {
        color: DefaultTheme.palette.success.contrastText,
        textDecoration: "none",
        textAlign: "center"
    },
    tabStyle2: {
        color: DefaultTheme.palette.secondary.main,
        textDecoration: "none",
        textAlign: "center"
    },
    tabGrid: {
        margin: "auto !important",
        display: "flex",
        justifyContent: "end"
    },
    tabButtons: {
        marginLeft: "100px",
        "@media screen and (max-width: 1500px) and (min-width: 1300px)": {
            marginLeft: "unset",
        },
        "@media screen and (max-width: 1300px) and (min-width: 1280px)": {
            marginLeft: "-10px",
        },
    },
    dividerColor: {
        backgroundColor: DefaultTheme.palette.secondary.contrastText + " !important"
    },
    dividerVertical: {
        height: "50% !important",
        marginTop: "15px !important"
    },
    tabFont: {
        color: DefaultTheme.palette.success.contrastText,
        [theme.breakpoints.only('xl')]: {
            fontSize: "15px !important"
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: "13px !important"
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "11px !important"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px !important"

        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important"

        },
    },
    tabFont2: {
        color: DefaultTheme.palette.secondary.main,
        [theme.breakpoints.only('xl')]: {
            fontSize: "15px !important"
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: "13px !important"
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "11px !important"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "10px !important"

        },
        [theme.breakpoints.only('xs')]: {
            fontSize: "15px !important"

        },
    },
    menuItem: {
        color: DefaultTheme.palette.dark.alternative,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('sm')]: {
            fontSize: "11px !important"
        },

    },
    menuItem2: {
        color: DefaultTheme.palette.secondary.main,
        fontWeight: "bolder !important",
        [theme.breakpoints.down('sm')]: {
            fontSize: "12px !important"
        },

    },
    emptyGrid: {
        [theme.breakpoints.only('sm')]: {
            display: "none"
        },
    },
    emptyGrid2: {
        [theme.breakpoints.only('xs')]: {
            display: "none"
        },
    },
    emptyGrid3: {
        [theme.breakpoints.only('md')]: {
            display: "none"
        },
    },
    shortLink: {
        marginLeft: theme.spacing(-2),
        [theme.breakpoints.only('xs')]: {
            marginLeft: "unset"}
    },
    logoMargin: {
        marginLeft: theme.spacing(12),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(4),
        },
        [theme.breakpoints.only('xs')]: {
            marginLeft: "unset"}
    }
}));

export default AppNavbarStyle;