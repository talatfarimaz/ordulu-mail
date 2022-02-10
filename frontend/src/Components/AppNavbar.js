import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useTranslation, withTranslation} from 'react-i18next';
import i18n from '../i18n/i18n';
import AppNavbarStyle from "../Styles/AppNavbarStyle";
import {Avatar, Button, Divider, Grid, Hidden, Link, Typography} from "@material-ui/core";
import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.png';
import DefaultTheme from "../Themes/DefaultTheme";
import LanguagesEnum from "../i18n/LanguagesEnum";
import MenuIcon from '@material-ui/icons/Menu';
import classNames from "classnames";


function AppNavbar(props) {
    const {t} = useTranslation();
    const classes = AppNavbarStyle();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);
    const [activeLanguage, setActiveLanguage] = React.useState(i18n.language);
    const [anchorElMobile, setAnchorElMobile] = React.useState(null);
    const [activeTab, setActiveTab] = React.useState(window.location.pathname);
    const changeLanguageSelection = (lng) => {
        i18n.changeLanguage(lng);
        setActiveLanguage(lng);
    };

    const handleClickLanguage = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElMenu(null);
    };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    const handleGetMobileMenu = () => {
        return (
            <div>
                <IconButton onClick={handleClickMobile}>
                    <MenuIcon fontSize={"large"} style={{color: DefaultTheme.palette.secondary.contrastText}}/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorElMobile}
                    keepMounted
                    open={Boolean(anchorElMobile)}
                    onClose={handleCloseMobile}
                >
                    <MenuItem onClick={handleCloseMobile}>
                        <Link
                            underline={"none"}
                            className={classes.tabStyle3}
                            href={'/'}
                        >
                            <Typography className={classes.menuItem}>
                                {t('MainPage')}
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMobile}>
                        <Link
                            underline={"none"}
                            className={classes.tabStyle3}
                            href={'/careerandlife'}
                        >
                            <Typography className={classes.menuItem}>
                                {t('CareerLife')}
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMobile}>
                        <Link
                            underline={"none"}
                            className={classes.tabStyle3}
                            href={'/about'}
                        >
                            <Typography className={classes.menuItem}>
                                {t('About')}
                            </Typography>
                        </Link>
                    </MenuItem>
                    {/*  <MenuItem onClick={handleCloseMobile}>
                        <Link
                            underline={"none"}
                            className={classes.tabStyle}
                            href={'/products'}
                        >
                            <Typography className={classes.menuItem}>
                                {t('Products')}
                            </Typography>
                        </Link>
                    </MenuItem>*/}
                    <MenuItem onClick={handleCloseMobile}>
                        <Link
                            underline={"none"}
                            className={classes.tabStyle3}
                            href={'/blog'}
                        >
                            <Typography className={classes.menuItem}>
                                {t('Blog')}
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseMobile}>
                        <Link
                            underline={"none"}
                            className={classes.tabStyle3}
                            href={'/contact'}
                        >
                            <Typography className={classes.menuItem}>
                                {t('Contact')}
                            </Typography>
                        </Link>
                    </MenuItem>
                    {/*
                    <MenuItem onClick={handleCloseMobile}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Divider orientation={"horizontal"} variant={"fullWidth"}/>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={() => {
                                    changeLanguageSelection(LanguagesEnum.English);
                                }}>
                                    <Typography className={classes.menuItem2}>
                                        {LanguagesEnum.English}
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={() => {
                                    changeLanguageSelection(LanguagesEnum.Turkish);
                                }}>
                                    <Typography className={classes.menuItem2}>
                                        {LanguagesEnum.Turkish}
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider orientation={"horizontal"} variant={"fullWidth"}/>
                            </Grid>
                        </Grid>
                    </MenuItem>
*/}
                </Menu>
            </div>
        )
    }
    const handleClickMobile = (event) => {
        setAnchorElMobile(event.currentTarget);
    };

    const handleCloseMobile = () => {
        setAnchorElMobile(null);
    };
    return (
        <div className={classes.grow}>
            <AppBar position="fixed" color={"default"} className={classes.appBarMain}>
                <Toolbar className={classes.toolBarMain}>
                    <Grid container>
                        <Grid item lg={2} md={1} sm={2} xs={2} style={{margin: "auto"}}>
                            <Link
                                underline={"none"}
                                href={'/'}
                            >
                                <Hidden only={"xs"}>
                                    <img src={logo} alt={""} width={"160px"} height={"45px"}
                                         className={classes.logoMargin}/>
                                </Hidden>
                                <Hidden smUp>
                                    <Avatar className={classes.mainLogo} src={logo2}/>
                                </Hidden>
                            </Link>
                        </Grid>
                        <Grid item lg={1} md={12} sm={1} xs={2} className={classes.emptyGrid3}/>
                        <Grid item lg={7} md={9} sm={8} xs={6} className={classes.tabGrid}>
                            <Hidden smDown>
                                <Grid container className={classes.tabButtons}>
                                    <Grid item xs={4}/>
                                    <Grid item xs={2} style={{margin: "auto"}}>
                                        <Link
                                            underline={"none"}
                                            className={classes.tabStyle}
                                            onMouseEnter={(__Event) => {
                                                __Event.target.style.color = DefaultTheme.palette.secondary.main
                                            }}
                                            onMouseOut={(__Event) => {
                                                if (activeTab !== "/") {
                                                    __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                                }
                                            }}
                                            href={'/'}
                                        >
                                            <Typography
                                                className={activeTab === "/" ? classes.tabFont2 : classes.tabFont}>
                                                {t('MainPage')}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={2} style={{margin: "auto"}}>
                                        <Link
                                            underline={"none"}
                                            className={classes.tabStyle}
                                            onMouseEnter={(__Event) => {
                                                __Event.target.style.color = DefaultTheme.palette.secondary.main
                                            }}
                                            onMouseOut={(__Event) => {
                                                if (activeTab !== "/careerandlife") {
                                                    __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                                }
                                            }}
                                            href={'/careerandlife'}
                                        >
                                            <Typography
                                                className={activeTab === "/careerandlife" ? classes.tabFont2 : classes.tabFont}>
                                                {t('CareerLife')}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={2} style={{margin: "auto"}}>
                                        <Link
                                            underline={"none"}
                                            className={classes.tabStyle}
                                            onMouseEnter={(__Event) => {
                                                __Event.target.style.color = DefaultTheme.palette.secondary.main
                                            }}
                                            onMouseOut={(__Event) => {
                                                if (activeTab !== "/about") {
                                                    __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                                }
                                            }}
                                            href={'/about'}
                                        >
                                            <Typography
                                                className={activeTab === "/about" ? classes.tabFont2 : classes.tabFont}>
                                                {t('About')}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                    {/* <Grid item xs={2} style={{margin: "auto"}}>
                                        <Link
                                            underline={"none"}
                                            className={classes.tabStyle}
                                            onMouseEnter={(__Event) => {
                                                __Event.target.style.color = DefaultTheme.palette.secondary.main
                                            }}
                                            onMouseOut={(__Event) => {
                                                if (activeTab !== "/products") {
                                                    __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                                }
                                            }}
                                            href={'/products'}
                                        >
                                            <Typography
                                                className={activeTab === "/products" ? classes.tabFont2 : classes.tabFont}>
                                                {t('Products')}
                                            </Typography>
                                        </Link>
                                    </Grid>*/}
                                    <Grid item xs={1} style={{margin: "auto"}} className={classes.shortLink}>
                                        <Link
                                            underline={"none"}
                                            className={classes.tabStyle}
                                            onMouseEnter={(__Event) => {
                                                __Event.target.style.color = DefaultTheme.palette.secondary.main
                                            }}
                                            onMouseOut={(__Event) => {
                                                if (activeTab !== "/blog") {
                                                    __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                                }
                                            }}
                                            href={'/blog'}
                                        >
                                            <Typography
                                                className={activeTab === "/blog" ? classNames(classes.tabFont2, classes.shortLink) : classNames(classes.tabFont, classes.shortLink)}>
                                                {t('Blog')}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={1} style={{margin: "auto"}} className={classes.shortLink}>
                                        <Link
                                            underline={"none"}
                                            className={classes.tabStyle}
                                            onMouseEnter={(__Event) => {
                                                __Event.target.style.color = DefaultTheme.palette.secondary.main
                                            }}
                                            onMouseOut={(__Event) => {
                                                if (activeTab !== "/contact") {
                                                    __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                                }
                                            }}
                                            href={'/contact'}
                                        >
                                            <Typography
                                                className={activeTab === "/contact" ? classNames(classes.tabFont2, classes.shortLink) : classNames(classes.tabFont, classes.shortLink)}>
                                                {t('Contact')}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Hidden>
                            <Hidden mdUp>
                                {handleGetMobileMenu()}
                            </Hidden>
                        </Grid>
                        <Grid item lg={1} md={1} sm={12} xs={1} className={classes.emptyGrid}>
                            {/*
                            <Hidden smDown>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Divider orientation={"vertical"} classes={{
                                            vertical: classes.dividerVertical,
                                            root: classes.dividerColor
                                        }}/>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <IconButton color="primary" onClick={handleClickLanguage}
                                                    className={classes.languageButton}>
                                            <Typography className={classes.tabFont}>{activeLanguage}</Typography>
                                        </IconButton>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorElMenu}
                                            keepMounted
                                            open={Boolean(anchorElMenu)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={() => {
                                                changeLanguageSelection(LanguagesEnum.English);
                                                handleClose()
                                            }}>
                                                <Typography style={{fontWeight: "bolder",fontSize: "11px"}}>
                                                    {LanguagesEnum.English}
                                                </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => {
                                                changeLanguageSelection(LanguagesEnum.Turkish);
                                                handleClose()
                                            }}>
                                                <Typography style={{fontWeight: "bolder",fontSize: "11px"}}>
                                                    {LanguagesEnum.Turkish}
                                                </Typography>
                                            </MenuItem>
                                        </Menu>
                                    </Grid>
                                </Grid>
                            </Hidden>
*/}
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={12} className={classes.emptyGrid2}/>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withTranslation()(AppNavbar)