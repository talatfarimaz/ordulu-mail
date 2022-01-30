import {useTranslation} from "react-i18next";
import {Button, CardActionArea, Grid, Typography} from "@material-ui/core";
import React from "react";
import BlogStyle from "../../Styles/BlogStyle";
import haber1 from "../../assets/images/haber1.png"
import haber2 from "../../assets/images/haber2.png"
import haber3 from "../../assets/images/haber3.png"
import DefaultTheme from "../../Themes/DefaultTheme";

function BlogSectionThree() {
    const {t} = useTranslation();
    const classes = BlogStyle();
    const [isHover, setIsHover] = React.useState(false);
    const [news1, setNews1] = React.useState(false);
    const [news2, setNews2] = React.useState(false);
    const [news3, setNews3] = React.useState(false);


    const handleSetHover = (event) => {
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.backgroundColor = DefaultTheme.palette.secondary.contrastText
            element.style.borderRadius = "3px"
        } else if (event.target.parentNode.id !== "" && event.target.parentNode.id !== null) {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.backgroundColor = DefaultTheme.palette.secondary.contrastText;
            element.style.borderRadius = "3px"
        } else {
            var element = document.getElementById(event.target.parentElement.parentNode.id);
            element.style.backgroundColor = DefaultTheme.palette.secondary.contrastText;
            element.style.borderRadius = "3px"
        }
    }
    const handleResetHover = (event) => {
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.backgroundColor = DefaultTheme.palette.primary.main
        } else if (event.target.parentNode.id !== "" && event.target.parentNode.id !== null) {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.backgroundColor = DefaultTheme.palette.primary.main
        } else {
            var element = document.getElementById(event.target.parentElement.parentNode.id);
            element.style.backgroundColor = DefaultTheme.palette.primary.main
        }
    }
    return (
        <div className={classes.sectionTwoDiv} id={"news"}>
            <Grid container className={classes.reportageGrid} spacing={2} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item xs={12} style={{textAlign: "right"}}>
                    <Typography className={classes.reportageTitle}>
                        {t('NewsTitle')}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={8}>
                        <Grid item md={4} sm={6} xs={12} id={"news1"}
                              onMouseEnter={(event) => {
                                  handleSetHover(event);
                                  setNews1(true)
                              }}
                              onMouseLeave={(event) => {
                                  handleResetHover(event)
                                  setNews1(false)
                              }}>
                            <CardActionArea classes={{
                                root: classes.root, focusHighlight: classes.focusHighlight
                            }} href={"https://www.cnnturk.com/turkiye/bakan-soylu-oyle-bir-yazilim-yaptik-ki-teroristler-kafalarini-bile-cikaramayacak"} target={"blank"}>
                                <img src={haber1} alt={""} width={"100%"}/>
                                <Typography className={!news1 ? classes.newsDate : classes.newsDate2}>
                                    {t('Date1')}
                                </Typography>
                                <Typography className={!news1 ? classes.newsText : classes.newsText2}>
                                    {t('News1')}
                                </Typography>
                            </CardActionArea>
                            {news1 ?
                                <div className={classes.readMoreButton}>
                                    <Button style={{backgroundColor: DefaultTheme.palette.inherit.main}}
                                            variant={"contained"}
                                            href={"https://www.cnnturk.com/turkiye/bakan-soylu-oyle-bir-yazilim-yaptik-ki-teroristler-kafalarini-bile-cikaramayacak"} target={"blank"}
                                    ><Typography
                                        style={{color: DefaultTheme.palette.primary.contrastText}}>{t('ReadMore')}</Typography></Button>
                                </div> : <div style={{height: "36px"}}/>}
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} id={"news2"}
                              onMouseEnter={(event) => {
                                  handleSetHover(event);
                                  setNews2(true)
                              }}
                              onMouseLeave={(event) => {
                                  handleResetHover(event)
                                  setNews2(false)
                              }}>
                            <CardActionArea classes={{
                                root: classes.root, focusHighlight: classes.focusHighlight
                            }} href={"https://forumusa.com/teknoloji/abddeki-insansiz-hava-teknolojileri-yarismasinda-yildiz-teknik-universitesi-3-oldu/"} target={"blank"}> <img src={haber2} alt={""} width={"100%"}/>
                                <Typography className={!news2 ? classes.newsDate : classes.newsDate2}>
                                    {t('Date2')}
                                </Typography>
                                <Typography className={!news2 ? classes.newsText : classes.newsText2}>
                                    {t('News2')}
                                </Typography>
                            </CardActionArea>
                            {news2 ?
                                <div className={classes.readMoreButton}>
                                    <Button style={{backgroundColor: DefaultTheme.palette.inherit.main}}
                                            variant={"contained"}
                                            href={"https://forumusa.com/teknoloji/abddeki-insansiz-hava-teknolojileri-yarismasinda-yildiz-teknik-universitesi-3-oldu/"} target={"blank"}
                                    ><Typography
                                        style={{color: DefaultTheme.palette.primary.contrastText}}>{t('ReadMore')}</Typography></Button>
                                </div> : <div style={{height: "36px"}}/>}
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} id={"news3"}
                              onMouseEnter={(event) => {
                                  handleSetHover(event);
                                  setNews3(true)
                              }}
                              onMouseLeave={(event) => {
                                  handleResetHover(event)
                                  setNews3(false)
                              }}>
                            <CardActionArea classes={{
                                root: classes.root, focusHighlight: classes.focusHighlight
                            }} href={"https://www.haberler.com/yerli-ve-milli-savunma-firmalari-saha-ya-cikiyor-12825723-haberi/"} target={"blank"}> <img src={haber3} alt={""} width={"100%"}/>
                                <Typography className={!news3 ? classes.newsDate : classes.newsDate2}>
                                    {t('Date3')}
                                </Typography>
                                <Typography className={!news3 ? classes.newsText : classes.newsText2}>
                                    {t('News3')}
                                </Typography>
                            </CardActionArea>
                            {news3 ?
                                <div className={classes.readMoreButton}>
                                    <Button style={{backgroundColor: DefaultTheme.palette.inherit.main}}
                                            variant={"contained"}
                                            href={"https://www.haberler.com/yerli-ve-milli-savunma-firmalari-saha-ya-cikiyor-12825723-haberi/"} target={"blank"}
                                    ><Typography
                                        style={{color: DefaultTheme.palette.primary.contrastText}}>{t('ReadMore')}</Typography></Button>
                                </div> : <div style={{height: "36px"}}/>}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default BlogSectionThree