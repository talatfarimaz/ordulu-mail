import {makeStyles} from "@material-ui/core/styles";

const ScrollButtonStyles = makeStyles(theme => ({
    fabStyle : {
        position: "fixed",
        left: "93%",
        bottom: "40px",
        fontSize: "3rem",
        zIndex: 1,
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            left: "90%",
        },
        [theme.breakpoints.only('xs')]: {
            left: "80%",
        }
    }
}))

export default ScrollButtonStyles;