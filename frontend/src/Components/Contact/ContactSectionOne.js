import {useTranslation} from "react-i18next";
import React from "react";
import {
    Backdrop,
    Button,
    Checkbox,
    Dialog, DialogContent, DialogTitle, Fade,
    FormControl,
    Grid,
    Hidden,
    Input,
    Link, Snackbar,
    Typography
} from "@material-ui/core";
import ContactStyle from "../../Styles/ContactStyle";
import contact from "../../assets/images/contact.png";
import contact2 from "../../assets/images/contact2.png";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import DefaultTheme from "../../Themes/DefaultTheme";
import MaskedInput from "react-text-mask";
import axios from "axios";
import BlogStyle from "../../Styles/BlogStyle";
import ReactPlayer from "react-player";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import {Alert} from "@material-ui/lab";

function TextMaskCustom(props) {
    const {inputRef, ...other} = props;
    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null)
            }}
            guide={false} mask={["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/,]}
            placeholderChar={"\u2000"}
            showMask
        />
    );
}

function ContactSectionOne() {
    const {t} = useTranslation();
    const classes = ContactStyle();
    const [nameSurname, setNameSurname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [checked, setChecked] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [openAlert2, setOpenAlert2] = React.useState(false);
    const [alert, setAlert] = React.useState("");
    const [alert2, setAlert2] = React.useState("");
    const [severity, setSeverity] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGetModal = () => {
        return (
            <Dialog onClose={handleClose} open={open}
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        classes: {
                            timeout: 1500,
                            root: classes.backdrop
                        }
                    }}
                    maxWidth={"sm"}
            >
                <DialogTitle disableTypography className={classes.dialogTitle}>
                    <Typography style={{fontWeight: "bold"}} variant={"h5"}>{t('kvkk')}</Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography>{t('KVKKText')}</Typography>
                </DialogContent>
            </Dialog>
        )
    }
    const handleCloseAlert = () => {
        setOpenAlert(false)
    }
    const handleCloseAlert2 = () => {
        setOpenAlert2(false)
    }
    const handleSendMail = () => {
        if (nameSurname !== null && nameSurname !== "") {
            if (subject !== null && subject !== "") {
                if (email !== null && email !== "") {
                    if (phone !== null && phone !== "") {
                        if (message !== null && message !== "") {
                            if (checked) {
                                axios.post('/api/mail/sendcontactmail', {
                                    nameSurname: nameSurname,
                                    email: email,
                                    phone: phone,
                                    subject: subject,
                                    message: message
                                }).then(function (response) {
                                    setOpenAlert(false);
                                    setOpenAlert2(true);
                                    setAlert2("Başarılı!");
                                    setSeverity("success");
                                })
                                    .catch(function (response) {
                                        setOpenAlert(false);
                                        setOpenAlert2(true);
                                        setAlert2("Bir hata oluştu!!");
                                        setSeverity("error");
                                    });
                            }
                          else {
                                setOpenAlert(true);
                                setAlert(t('KVKKCheck'));
                            }
                        } else {
                            setOpenAlert(true);
                            setAlert(t('NullCheckValue', {value: t('YourMessage')}));
                        }

                    } else {
                        setOpenAlert(true);
                        setAlert(t('NullCheckValue', {value: t('Phone')}));
                    }
                } else {
                    setOpenAlert(true);
                    setAlert(t('NullCheckValue', {value: t('EMail')}));
                }
            } else {
                setOpenAlert(true);
                setAlert(t('NullCheckValue', {value: t('Subject')}));
            }

        } else {
            setOpenAlert(true);
            setAlert(t('NullCheckValue', {value: t('NameSurname')}));
        }

    }
    const handleGetAlert = () => {
        return (
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={openAlert}
                onClose={handleCloseAlert}
                autoHideDuration={4000}
            >
                <Alert onClose={() => {
                    setOpenAlert(false)
                }} severity={"error"}>
                    {alert}
                </Alert>
            </Snackbar>
        )
    }
    const handleGetAlert2 = () => {
        return (
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={openAlert2}
                onClose={handleCloseAlert2}
                autoHideDuration={4000}
            >
                <Alert onClose={() => {
                    setOpenAlert2(false)
                }} severity={severity}>
                    {alert2}
                </Alert>
            </Snackbar>
        )
    }
    return (
        <div className={classes.sectionOneBackground}>
            <Hidden smUp>
                <img src={contact2} alt="" className={classes.mainImgStyle}/>
            </Hidden>
            <Hidden only={"xs"}>
                <img src={contact} alt="" className={classes.mainImgStyle}/>
            </Hidden>
            <div className={classes.formGrid}>
                <Grid container spacing={6} direction="row"
                      justifyContent="center"
                      alignItems="flex-start"
                      className={classes.mainGrid}
                >
                    <Grid item md={4} sm={6} xs={12}>
                        <Typography className={classes.mainText}>
                            {t('Hello')}
                        </Typography>
                        <Typography className={classes.mainText2}>
                            {t('FormText')}
                        </Typography>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} className={classes.paddingTop}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('NameSurname')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        fullWidth
                                        value={nameSurname}
                                        id="1"
                                        type={"text"}
                                        name={"nameSurname"}
                                        placeholder={t('NameSurname')}
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        onChange={e => setNameSurname(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('EMail')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        value={email}
                                        placeholder={t('EMail')}
                                        fullWidth
                                        id="3"
                                        type={"email"}
                                        name={"email"}
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('Phone')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        value={phone}
                                        placeholder={t('Phone')}
                                        fullWidth
                                        type={"text"}
                                        name={"phone"}
                                        id="confirmPasswordValue"
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        inputComponent={TextMaskCustom}
                                        onChange={e => setPhone(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} sm={6} xs={12} className={classes.displayGrid}/>
                    <Grid item md={4} sm={6} xs={12} className={classes.subGrid}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('Subject')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        value={subject}
                                        placeholder={t('Subject')}
                                        fullWidth
                                        id="2"
                                        type={"text"}
                                        name={"subject"}
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        onChange={e => setSubject(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={classes.formElemetText}>
                                    {t('YourMessage')}
                                </Typography>
                                <FormControl className={classes.formElement}>
                                    <Input
                                        value={message}
                                        placeholder={t('YourMessage')}
                                        fullWidth
                                        type={"text"}
                                        name={"message"}
                                        id="passwordValue"
                                        inputProps={{
                                            className: classes.input,
                                        }}
                                        classes={{
                                            underline: classes.underline,
                                            root: classes.inputRoot
                                        }}
                                        onChange={e => setMessage(e.target.value)}
                                    />
                                </FormControl>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}/>
                    <Grid item md={4} sm={6} xs={12}>
                        <div className={classes.sendButton}>
                            <Button variant={"contained"} color={"secondary"} endIcon={<SendOutlinedIcon/>}
                                    onClick={handleSendMail}>
                                <Typography className={classes.buttonText}>
                                    {t('SenMessage')}
                                </Typography>
                            </Button>
                        </div>
                        <div className={classes.kvkk}>
                            <Link
                                underline={"none"}
                                onMouseEnter={(__Event) => {
                                    __Event.target.style.color = DefaultTheme.palette.secondary.main
                                }}
                                onMouseOut={(__Event) => {
                                    __Event.target.style.color = DefaultTheme.palette.success.contrastText
                                }}
                                onClick={handleOpen}
                            >
                                <Typography className={classes.checkBoxText}>
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => {
                                            setChecked(event.target.checked)
                                        }}
                                        style={{color: DefaultTheme.palette.secondary.contrastText}}
                                        className={classes.checkBoxStyle}/>
                                    {t('KVKK2')}{t('Acceptance')}
                                </Typography>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}/>
                </Grid>
            </div>
            {handleGetModal()}
            {handleGetAlert()}
            {handleGetAlert2()}
        </div>
    )
}

export default ContactSectionOne