import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import HTML from '../../../assets/images/skills/html5.png';
import CSS from '../../../assets/images/skills/css.png';
import JS from '../../../assets/images/skills/javascript.png';
import TS from '../../../assets/images/skills/typescript.png';
import RJS from '../../../assets/images/skills/react.png';
import AJS from '../../../assets/images/skills/angular.png';
import NJS from '../../../assets/images/skills/nodejs.png';
import MYSQL from '../../../assets/images/skills/mysql.png';
import MDB from '../../../assets/images/skills/mongodb.png';
import PY from '../../../assets/images/skills/data-science/python.png';
import PD from '../../../assets/images/skills/data-science/pandas.png';
import BS from '../../../assets/images/skills/data-science/bs.jpg';
import styles from './skills.module.css';

function Skills() {
    useEffect(() => {
        Aos.init({duration: 1000});
    },[]);

    return (
        <div>
            <div className={'text-center section-title'}>Skills</div>
            <br/>
            <br/>
            <br/>
            <h2>Full Stack Development</h2>
            <div className={styles.skills_logo}>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="html" src={HTML} width="50px" height="50px"/>
                    <div className={styles.logo_name}>HTML</div>
                </div>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="css" src={CSS} width="50px" height="50px"/>
                    <div className={styles.logo_name}>CSS</div>
                </div>
                {/* <div className={styles.logo} data-aos="fade-up">
                    <img src={'/assets/images/skills/sass.png'} width="50px" height="50px"/>
                    <div className={styles.logo_name}>SCSS</div>
                </div> */}
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="js" src={JS} width="50px" height="50px"/>
                    <div className={styles.logo_name}>Javascript</div>
                </div>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="ts" src={TS} width="50px" height="50px"/>
                    <div className={styles.logo_name}>Typescript</div>
                </div>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="reactjs" src={RJS} width="50px" height="50px"/>
                    <div className={styles.logo_name}>React</div>
                </div>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="angular" src={AJS} width="50px" height="50px"/>
                    <div className={styles.logo_name}>Angular</div>
                </div>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="nodejs" src={NJS} width="50px" height="50px"/>
                    <div className={styles.logo_name}>Node js</div>
                </div>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="mysql" src={MYSQL} width="50px" height="50px"/>
                    <div className={styles.logo_name}>MySql</div>
                </div>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="mongodb" src={MDB} width="50px" height="50px"/>
                    <div className={styles.logo_name}>MongoDB</div>
                </div>
            </div>
            <h2>Data Science</h2>
            <div className={styles.skills_logo}>
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="python" src={PY} width="70px" height="50px"/>
                    <div className={styles.logo_name}>Python</div>
                </div>            
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="pandas" src={PD} width="70px" height="50px"/>
                    <div className={styles.logo_name}>Pandas</div>
                </div>            
                <div className={styles.logo} data-aos="fade-up">
                    <img alt="bs" src={BS} width="70px" height="50px"/>
                    <div className={styles.logo_name}>BeautifulSoup</div>
                </div>            
            </div>
        </div>
    )
}

export default Skills;