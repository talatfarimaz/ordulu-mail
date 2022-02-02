import React, {useState} from 'react';
import {Fab, Hidden} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ScrollButtonStyles from "../Styles/ScrollButtonStyles";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
    const classes = ScrollButtonStyles();
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250) {
            setVisible(true)
        } else if (scrolled <= 250) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
        <Hidden smDown>
        <Fab className={classes.fabStyle} onClick={scrollToTop} color={"primary"} size={"large"} style={{display: visible ? 'flex' : 'none'}}>
            <ArrowUpwardIcon fontSize={"large"} />
        </Fab>
        </Hidden>
            <Hidden mdUp>
                <Fab className={classes.fabStyle} onClick={scrollToTop} color={"primary"} size={"small"} style={{display: visible ? 'flex' : 'none'}}>
                    <ArrowUpwardIcon fontSize={"small"} />
                </Fab>
            </Hidden>
        </div>
    );
}

export default ScrollButton;
