import {useTranslation} from "react-i18next";
import {
    Backdrop, Button,
    CardActionArea,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid, Input, Snackbar,
    Typography
} from "@material-ui/core";
import React from "react";
import CareerAndLifeStyle from "../../Styles/CareerAndLifeStyle";
import intern from "../../assets/images/intern.png";
import job from "../../assets/images/job.png";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import MaskedInput from "react-text-mask";
import axios from "axios";
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

function CareerAndLifeSectionThree() {
    const {t} = useTranslation();
    const classes = CareerAndLifeStyle();
    const fileInput = React.createRef();
    const [openForm, setOpenForm] = React.useState(false);
    const [name, setName] = React.useState(null);
    const [surname, setSurname] = React.useState(null);
    const [identity, setIdentity] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [cv, setCv] = React.useState(null);
    const [openAlert, setOpenAlert] = React.useState(false);
    const [openAlert2, setOpenAlert2] = React.useState(false);
    const [alert, setAlert] = React.useState("");
    const [alert2, setAlert2] = React.useState("");
    const [severity, setSeverity] = React.useState("");

    const handleChangeColorImage = (event) => {
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.opacity = 1;
        } else {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.opacity = 1;
        }

    }
    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };
    const handleResetColorImage = (event) => {
        if (event.target.id !== "" && event.target.id !== null) {
            var element = document.getElementById(event.target.id);
            element.style.opacity = 0.2;
        } else {
            var element = document.getElementById(event.target.parentNode.id);
            element.style.opacity = 0.2;
        }
    }
    const handleCloseAlert2 = () => {
        setOpenAlert2(false)
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

    const handleSaveApplication = () => {
        if (name !== null && name !== "") {
            if (surname !== null && surname !== "") {
                if (identity !== null && identity !== "") {
                    if (email !== null && email!== "") {
                        if (phone !== null && phone !== "") {
                            if (cv !== null) {
                                const formData = new FormData();
                                formData.append(
                                    'file',
                                    fileInput.current.files[0]
                                );
                                formData.append("name", name);
                                formData.append("surname", surname);
                                formData.append("identity", identity);
                                formData.append("email", email);
                                formData.append("phone", phone);
                                axios({
                                    method: "post",
                                    url: "/mail/sendinternappmail",
                                    data: formData,
                                    headers: { "Content-Type": "multipart/form-data" },
                                })
                                    .then(function (response) {
                                        setOpenAlert(false);
                                        setOpenAlert2(true);
                                        setAlert2("Başarılı!");
                                        setSeverity("success");
                                        setOpenForm(false);
                                    })
                                    .catch(function (response) {
                                        setOpenAlert(false);
                                        setOpenAlert2(true);
                                        setAlert2("Bir hata oluştu!!");
                                        setSeverity("error");
                                        setOpenForm(false);
                                    });

                            }
                            else {
                                setOpenAlert(true);
                                setAlert(t('AddCv'));
                            }
                        } else {
                            setOpenAlert(true);
                            setAlert(t('Phone'));
                        }
                    } else {
                        setOpenAlert(true);
                        setAlert(t('EMail'));
                    }
                } else {
                    setOpenAlert(true);
                    setAlert(t('Identity'));
                }
            } else {
                setOpenAlert(true);
                setAlert(t('Surname'));
            }
        } else {
            setOpenAlert(true);
            setAlert(t('Name'));
        }
    }
    const handleCloseAlert = () => {
        setOpenAlert(false)
    }
    const handleGetFormModal = () => {
        return (
            <Dialog onClose={handleCloseForm} open={openForm}
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
                    <Typography style={{fontWeight: "bold"}} variant={"h5"}>{t('InternApp')}</Typography>
                    <IconButton onClick={handleCloseForm}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <Typography className={classes.formElemetText}>
                                {t('Name')}
                            </Typography>
                            <FormControl className={classes.formElement}>
                                <Input
                                    fullWidth
                                    value={name}
                                    id="1"
                                    type={"text"}
                                    name={"name"}
                                    placeholder={t('Name')}
                                    onChange={e => setName(e.target.value)}
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.formElemetText}>
                                {t('Surname')}
                            </Typography>
                            <FormControl className={classes.formElement}>
                                <Input
                                    fullWidth
                                    value={surname}
                                    id="1"
                                    type={"text"}
                                    name={"surname"}
                                    placeholder={t('Surname')}
                                    onChange={e => setSurname(e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography className={classes.formElemetText}>
                                {t('Identity')}
                            </Typography>
                            <FormControl className={classes.formElement}>
                                <Input
                                    fullWidth
                                    value={identity}
                                    id="1"
                                    type={"number"}
                                    name={"identity"}
                                    placeholder={t('Identity')}
                                    onChange={e => setIdentity(e.target.value)}
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={6}>
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
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={6}>
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
                                    inputComponent={TextMaskCustom}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12}>
                            <Typography className={classes.formElemetText}>
                                {t('CV')}
                            </Typography>
                            <FormControl className={classes.formElement}>
                                <input
                                    fullWidth
                                    ref={fileInput}
                                    value={cv}
                                    id="1"
                                    type={"file"}
                                    required
                                    name={"cv"}
                                    placeholder={t('CV')}
                                    accept="application/pdf"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button variant={"contained"} color={"secondary"} endIcon={<SendOutlinedIcon/>} onClick={handleSaveApplication}>
                        <Typography className={classes.buttonText}>
                            {t('Accept')}
                        </Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        )
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
                    {alert !== t('AddCv') ? t('NullCheckValue', {value: alert}): t('AddCv')}
                </Alert>
            </Snackbar>
        )
    }


    return (
        <div style={{justifyContent: "center", display: "flex"}}>
            <Grid container spacing={2} className={classes.imagesDiv} direction="row"
                  justifyContent="center"
                  alignItems="center">
                <Grid item sm={12} xs={12}>
                    <Typography className={classes.lifeText}>
                        {t('CareerText')}
                    </Typography>
                </Grid>
                <Grid item sm={5} xs={12} style={{position: "relative"}}>
                    <CardActionArea className={classes.cardAction1}
                                    href={"/jobs"}
                    >
                        <img src={job} id="job" alt="" width={"100%"} className={classes.jobGradient}
                             onMouseEnter={(event) => {
                                 handleChangeColorImage(event)
                             }}
                             onMouseLeave={(event) => {
                                 handleResetColorImage(event)
                             }}/>
                    </CardActionArea>
                    <Typography className={classes.imgJob}>
                        {t('Job')}
                    </Typography>
                </Grid>
                <Grid item sm={2} xs={12}/>
                <Grid item sm={5} xs={12} style={{position: "relative"}}>
                    <CardActionArea className={classes.cardAction2} onClick={handleOpenForm}>
                        <img src={intern} id="intern" alt="" width={"100%"} className={classes.internGradient}
                             onMouseEnter={(event) => {
                                 handleChangeColorImage(event)
                             }}
                             onMouseLeave={(event) => {
                                 handleResetColorImage(event)
                             }}/>
                    </CardActionArea>
                    <Typography className={classes.imgJob}>
                        {t('Intern')}
                    </Typography>
                </Grid>
            </Grid>
            {handleGetFormModal()}
            {handleGetAlert()}
            {handleGetAlert2()}
        </div>
    )
}

export default CareerAndLifeSectionThree