import {useTranslation} from "react-i18next";
import {Typography} from "@material-ui/core";
import React from "react";
import blogImg from "../../assets/images/blogImg.png";
import BlogStyle from "../../Styles/BlogStyle";

function BlogSectionOne() {
    const {t} = useTranslation();
    const classes = BlogStyle();

    return (
        <div className={classes.imgDiv}>
            <img src={blogImg} width={"100%"} alt={""}/>
            <div className={classes.mainText}>
                <Typography className={classes.careerAndLifeText}>{t('BlogLower')}</Typography>
            </div>
        </div>
    )
}

export default BlogSectionOne