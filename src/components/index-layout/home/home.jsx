import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Me from '../../../assets/images/home/avatar.png';
import styles from './home.module.css';

function Home() {
    React.useEffect(() => {
        Aos.init({duration: 1000});
    },[]);

    return (
        <div className={styles.profile}>
            <div data-aos="zoom-in">
                <Avatar className={styles.avatar} src={Me}/>
            </div>
            <br/>
            <div>
                <div data-aos="flip-left">
                    <h1 className={styles.profile_header}>LOOKING FOR A WEB DEVELOPER?</h1>
                    <br/>
                    <div className={styles.profile_desc}>
                        Hi, I'm Mohamed Rizwan.
                        <br/>I am&nbsp;
                        {/* <code> */}
                            {/* &lt;MEAN&gt;</code> and <code>&lt;MERN&gt; */}
                            Full
                        {/* </code>  */}
                        &nbsp;stack developer. 
                        If you're looking for a web developer to build websites for your business or startups, 
                        you can get in touch with me here.
                    </div>  
                    <br/>
                    <br/>
                    <Button className={styles.profile_btn} color="primary" variant="outlined">
                        <a href="#contact">Get in touch</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home;