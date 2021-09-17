import { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Me from '../../../assets/images/about/me.jpeg'
import styles from './about.module.css';

function About() {
    useEffect(() => {
        Aos.init({duration: 1000});
    },[]);

    return (
        <div>
            <div className={'text-center section-title'}>About Me</div>
            <br/>
            <br/>
            <br/>
            <div className={styles.about}>
                <div className={styles.avatar_container} data-aos="zoom-in">
                    <Avatar src={Me} className={styles.avatar}/>
                </div>
                <p className={styles.about_me}>
                    Hi! I'm from chennai.
                    I did my UG at The New College (Autonomous) in royapettah.  
                    I completed my SSLC with 86.8% at SFS Matric Hr Sec School in Pudukkottai and 
                    HSC with 81.25% at Vidyaa Vikas Hr Sec School in Gandarvakkottai.
                    I'm a MEAN & MERN stack developer.I create successful websites that are fast, easy to use, and built with best practices.
                    I work to make a better web; one that is fast, easy to use, beautiful and accessible to all.  
                </p>
            </div>
            <Paper style={{padding:'10px'}} variant="outlined">
                <h1 className={styles.about_dev_header}>Why i chose web development?</h1>
                <p className={styles.about_dev}>
                    Web development is an exciting career because it's always evolving and constantly changing.
                    so, the need of application nowadays is huge in which web application play major role due to its
                    growth of development like CSR, SSR and also along with native android & ios app the PWA application has the capability of
                    to work on any platform that uses a standards-compliant browser, including both desktop and mobile devices.   
                </p>
            </Paper>
        </div>
    )
}

export default About;