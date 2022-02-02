import {makeStyles} from "@material-ui/core/styles";

const ScrollButtonStyles = makeStyles(theme => ({
    fabStyle : {
        position: "fixed",
        left: "93%",
        bottom: "10%",
        fontSize: "3rem",
        zIndex: 1,
        cursor: "pointer",
        [theme.breakpoints.down('sm')]: {
            left: "92%",
        },
        [theme.breakpoints.only('xs')]: {
            left: "85%",
        }
    }
}))

export default ScrollButtonStyles;