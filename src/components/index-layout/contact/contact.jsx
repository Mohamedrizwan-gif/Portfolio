import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Modal from '@material-ui/core/Modal';

import cx from 'classnames';
import styles from './contact.module.css';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
      position: 'absolute',
      width: 'auto',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
  

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };
  
    const body = (
        <div className={classes.paper}>
          <p id="simple-modal-description">
          Thank you for your response
          </p>
        </div>
    );

    const onPost = () => {
        if(name.trim().length === 0) {
            setNameError('Please fill out these field');
            return;
        }
        else {
            setNameError(''); 
        }
        // eslint-disable-next-line no-useless-escape
        if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email) === false) {
            setEmailError('Please enter valid email');
            return;
        }
        else {
            setEmailError('');
        } 
        if(message.trim().length === 0) {
            setMessageError('Please fill out these field');
            return;
        }
        else {
            setMessageError('');
        }
        setOpen(true);
        fetch('https://portfolio-30cca-default-rtdb.firebaseio.com/message.json',{
            method: 'post',
            body: JSON.stringify({name, email, message})
        })
        .then(response => {
            if(response.status === 200) {
                setName('');
                setEmail('');
                setMessage('');
                setOpen(false);
            }
        })
        .catch(err => {
            setOpen(false);
        });
    }

    return (
        <div className={styles.contact}>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <Paper elevation={3} className={styles.card}>
                <div style={{textAlign:'center'}}>
                    <br/>
                    <h1>Get in touch</h1>
                    <form>
                        <div>
                            <label className={styles.label} htmlFor="name">Name</label>
                            <br/>
                            <input 
                                id="name" 
                                type="text" 
                                className={cx(styles.input,styles.input_email)} 
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            {nameError.length > 0 && <div>{nameError}</div>}
                        </div>
                        <br/>
                        <div>
                            <label className={styles.label} htmlFor="email">EMAIL</label>
                            <br/>
                            <input 
                                id="email" 
                                type="email" 
                                className={cx(styles.input,styles.input_email)}
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            {emailError.length > 0 && <div>{emailError}</div>}
                        </div>
                        <br/>
                        <div>
                            <label className={styles.label} htmlFor="message">MESSAGE</label>
                            <br/>
                            <textarea
                                id="message" 
                                className={cx(styles.input, styles.input_textarea)} 
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                            />
                            {messageError.length > 0 && <div>{messageError}</div>}
                        </div>
                        <br/>
                        <Button 
                            color="primary" 
                            variant="contained"
                            className={styles.send_btn} 
                            onClick={onPost}
                        >
                            Send
                        </Button>
                    </form>
                    <div style={{marginTop:'15px'}}>
                        <Button className={styles.contact_logo}>
                            <a href="mailto:mmohamedrijwan@gmail.com" target="blank">
                                <EmailIcon color="primary"/>   
                            </a>
                        </Button>
                        <Button className={styles.contact_logo}>
                            <a href="https://www.linkedin.com/in/mohamed-rizwan-188594b3/" target="blank">
                                <LinkedInIcon color="primary"/>  
                            </a> 
                        </Button>
                        <Button className={styles.contact_logo}>
                            <a href="https://github.com/Mohamedrizwan-gif" target="blank">
                                <GitHubIcon color="primary"/>   
                            </a>
                        </Button>
                        <Button className={styles.contact_logo}>
                            <a href="https://api.whatsapp.com/send?phone=918825801986" target="blank">
                                <WhatsAppIcon color="primary"/>
                            </a>
                        </Button>
                    </div>
                    <br/>
                </div>
            </Paper>
        </div>
    )
}

export default Contact;