import JobsStyle from "../Styles/JobsStyle";
import {
    Backdrop,
    Button,
    CardActionArea,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, FormControl,
    Grid, Input, Snackbar,
    Typography
} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import MaskedInput from "react-text-mask";
import {Alert} from "@material-ui/lab";
import axios from "axios";


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

function Jobs() {
    const classes = JobsStyle();
    const {t} = useTranslation();
    const fileInput = React.createRef();
    const [open, setOpen] = React.useState(false);
    const [openForm, setOpenForm] = React.useState(false);
    const [name, setName] = React.useState(null);
    const [surname, setSurname] = React.useState(null);
    const [identity, setIdentity] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [cv, setCv] = React.useState();
    const [openAlert, setOpenAlert] = React.useState(false);
    const [openAlert2, setOpenAlert2] = React.useState(false);
    const [alert, setAlert] = React.useState("");
    const [alert2, setAlert2] = React.useState("");
    const [severity, setSeverity] = React.useState("");


    const [job, setJob] = React.useState(null);
    const jobList = [{
        job: t('Job1'),
        definition: t('Job1CommonQualification'),
        application: t('Job1Application'),
        choice: null
    },
        {
            job: t('Job2'),
            definition: t('Job2CommonQualification'),
            application: t('Job2Application'),
            choice: null
        },
        {job: t('Job3'), definition: t('Job3CommonQualification'), application: t('Job3Application'), choice: null},
        {job: t('Job4'), definition: t('Job4CommonQualification'), application: t('Job4Application'), choice: null},
        {
            job: t('Job5'),
            definition: t('Job5CommonQualification'),
            application: t('Job5Application'),
            choice: null
        },
        {
            job: t('Job6'),
            definition: t('Job6CommonQualification'),
            application: t('Job6Application'),
            choice: null
        },
        {job: t('Job7'), definition: t('Job7CommonQualification'), application: t('Job7Application'), choice: null},
        {
            job: t('Job8'),
            definition: t('Job8CommonQualification'),
            application: t('Job8Application'),
            choice: null
        },
        {
            job: t('Job9'),
            definition: t('Job9CommonQualification'),
            application: t('Job9Application'),
            choice: null
        },
        {
            job: t('Job10'),
            definition: t('Job10CommonQualification'),
            application: t('Job10Application'),
            choice: null
        },
        {
            job: t('Job11'),
            definition: t('Job11CommonQualification'),
            application: t('Job11Application'),
            choice: null
        },

    ]

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    const handleGetContent = () => {
        if (job !== null) {
            if (job.choice !== null) {
                return (
                    <div>
                        <Typography style={{fontWeight: "bold"}}>
                            {t('JobDefinition')}
                        </Typography>
                        <Typography>
                            <div dangerouslySetInnerHTML={{__html: job.definition}}/>
                        </Typography>
                        <Typography style={{fontWeight: "bold", marginTop: "5px"}}>
                            {t('ApplicationConditions')}
                        </Typography>
                        <Typography>
                            <div dangerouslySetInnerHTML={{__html: job.application}}/>
                        </Typography>
                        <Typography style={{fontWeight: "bold", marginTop: "5px"}}>
                            {t('ChoiceQualification')}
                        </Typography>
                        <Typography>
                            <div dangerouslySetInnerHTML={{__html: job.choice}}/>
                        </Typography>
                    </div>

                )
            } else {
                return (
                    <div>
                        <Typography style={{fontWeight: "bold"}}>
                            {t('JobDefinition')}
                        </Typography>
                        <Typography>
                            <div dangerouslySetInnerHTML={{__html: job.definition}}/>
                        </Typography>
                        <Typography style={{fontWeight: "bold", marginTop: "5px"}}>
                            {t('ApplicationConditions')}
                        </Typography>
                        <Typography>
                            <div dangerouslySetInnerHTML={{__html: job.application}}/>
                        </Typography>
                    </div>
                )
            }
        } else {
            return null;
        }

    }
    const handleGetModal = () => {
        if (job !== null) {
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
                        <Typography style={{fontWeight: "bold"}} variant={"h6"}>{t(job.job)}</Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        {handleGetContent()}
                    </DialogContent>
                    <DialogActions>
                        <Button variant={"contained"} color={"secondary"} endIcon={<SendOutlinedIcon/>}
                                onClick={() => {
                                    handleClose();
                                    handleOpenForm();
                                }}
                        >
                            <Typography className={classes.buttonText}>
                                {t('Accept')}
                            </Typography>
                        </Button>
                    </DialogActions>
                </Dialog>
            )
        } else {
            return null;
        }
    }

    const handleCloseAlert = () => {
        setOpenAlert(false)
    }
    const handleCloseAlert2 = () => {
        setOpenAlert2(false)
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
                                formData.append("job",job.job)
                                axios({
                                    method: "post",
                                    url: "/api/mail/sendjobappmail",
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
                    <Typography style={{fontWeight: "bold"}} variant={"h5"}>{t('JobApp')}</Typography>
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
                        <Grid item xs={12}>
                            <Typography className={classes.formElemetText2}>
                                {job && t('JobApplication', {value: job.job})}
                            </Typography>
                        </Grid>
                    </Grid>

                </DialogContent>
                <DialogActions>
                    <Button variant={"contained"} color={"secondary"} endIcon={<SendOutlinedIcon/>}
                            onClick={handleSaveApplication}>
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
        <div className={classes.bodyDivStyle}>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                  className={classes.jobsGrid}
            >
                <Grid item xs={12} className={classes.jobTitleGrid}>
                    <Typography className={classes.jobTitle}>
                        {t('jobTitle')}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="stretch"
                          spacing={4}
                          style={{
                              display: "flex"
                          }}
                    >
                        {jobList.map((job) => {
                            return (
                                <Grid item md={3} sm={6} xs={12}>
                                    <CardActionArea className={classes.jobCard} onClick={() => {
                                        setJob(job);
                                        handleOpen();
                                    }}>
                                        <Typography className={classes.jobDefinition}>
                                            <div dangerouslySetInnerHTML={{__html: t(job.job)}}/>
                                        </Typography>
                                    </CardActionArea>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            {handleGetModal()}
            {handleGetFormModal()}
            {handleGetAlert()}
            {handleGetAlert2()}
        </div>
    );
}

export default Jobs;