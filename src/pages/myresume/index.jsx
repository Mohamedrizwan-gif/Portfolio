import { useState, useEffect, Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkIcon from '@material-ui/icons/Link';
import Grid from '@material-ui/core/Grid';

import SRM from '../../assets/images/certificate/SRM.jpeg';
import DG from '../../assets/images/certificate/DG.jpeg';
import Json from '../../assets/json/resume.json';
import styles from './index.module.css';

function Index() {
    const [resume, setResume] = useState(null);

    useEffect(() => {
        setResume(Json);
    }, []);

    return (
        <div className={styles.overlay}>
            <div className={styles.header}>
                <div>
                    <h1 style={{margin:0}}>{resume?.personal_details.name}</h1>
                    <h4 style={{margin:'8px 0'}}>MERN and MEAN Stack Developer</h4>
                </div>
                <div>
                    <div>
                        <PhoneOutlinedIcon/>
                        <a href={`tel:${resume?.personal_details.contact_no}`} className={styles['icon-code']}>
                            {resume?.personal_details.contact_no}
                        </a>
                    </div>
                    <div>
                        <EmailOutlinedIcon/>
                        <a href={`mailto:${resume?.personal_details.mail}`} className={styles['icon-code']}>
                            {resume?.personal_details.mail}
                        </a>
                    </div>
                    <div>
                        <GitHubIcon/>
                        <a rel="noopener noreferrer" href={resume?.personal_details.github} target="_blank" className={styles['icon-code']}>
                            {resume?.personal_details.github}
                        </a>
                    </div>
                    <div>
                        <LinkedInIcon/>
                        <a rel="noopener noreferrer" href={resume?.personal_details.linkedin} target="_blank" className={styles['icon-code']}>
                            {resume?.personal_details.linkedin}
                        </a>
                    </div>
                </div>    
            </div>
            <div style={{padding:'0 20px 8px 20px'}}>
                <div>
                    <h4 className={styles.subheader}>Objective:</h4>
                    <div className={styles.objective}>
                        {resume?.objective}
                    </div>
                </div>
                <div>
                    <h4 className={styles.subheader}>Technical skills:</h4>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <div className={styles.list_heading}>Languages:</div>
                            <ul className={styles.list}>
                                {resume?.technical_skills.programming_languages.map((lang, index) => (
                                    <li key={index}>{lang}</li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={styles.list_heading}>Frameworks:</div>
                            <ul className={styles.list}>
                                {resume?.technical_skills.framework.map((frm, index) => (
                                    <li key={index}>{frm}</li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item xs={4}>
                            <div className={styles.list_heading}>Database:</div>
                            <ul className={styles.list}>
                                {resume?.technical_skills.database.map((db, index) => (
                                    <li key={index}>{db}</li>
                                ))}
                            </ul>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <h4 className={styles.subheader}>Certifications:</h4>
                    <div className={styles.list_style_cert}>
                        {resume?.certifications.map((cert,index) => (
                            <div style={{display:'list-item'}} key={index}>
                                <strong>{cert.name}</strong> {cert.domain && (cert.domain)} | {cert.platform} | {cert.finished}.
                                <a href={cert.url} target="blank">
                                    <LinkIcon className={styles.cert_icon}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className={styles.subheader}>Achievements:</h4>
                    {resume?.achievements.map((ach, index) => (
                        <Fragment key={index}>
                            <div className={`${styles.subheader2} ${styles.list_style_achiev}`}>
                                {ach.campus}
                                <a rel="noopener noreferrer" href={index === 0 ? SRM : DG} target="_blank">
                                    <LinkIcon className={styles.cert_icon}/>
                                </a>
                            </div>
                            <p className={styles.description}>{ach.desc}</p>
                            {(resume?.achievements.length - 1) !== index &&
                            <Divider/>
                            }
                        </Fragment>    
                    ))}
                </div>
                <div>
                    <h4 className={styles.subheader}>Education:</h4>
                    <div>
                        <div className={styles.subheader1}>Masters of Computer Applications (MCA)</div>
                        <div className={styles.subheader2}>Dwaraka Doss Goverdhan Doss Vaishnav College<small>(Madras University)</small></div>
                        <p className={styles.description}>
                            Pursuing Masters of Computer Applications in&nbsp;
                            <strong>Dwaraka Doss Goverdhan Doss Vaishnav College (Madras University)</strong>,in the year of 2021-2023,<br/>
                            <span className={styles.city}>Chennai.</span>
                        </p>
                    </div>
                    <Divider/>
                    <div>
                        <div className={styles.subheader1}>Bachelor of Computer Applications (BCA)</div>
                        <div className={styles.subheader2}>The New College<small>(Madras University)</small></div>
                        <p className={styles.description}>
                            Completed Bachelor of computer Applications with aggregate <strong>83%</strong> in&nbsp;
                            <strong>The New college (Madras University)</strong>,in the year of 2018-2021,<br/>
                            <span className={styles.city}>Chennai.</span>
                        </p>
                    </div>
                    <Divider/>
                    <div>
                        <div className={styles.subheader1}>HSC Education</div>
                        <div className={styles.subheader2}>Vidyaa Vikas matric(B) Matric Higher Secondary school</div>
                        <p className={styles.description}>
                            Completed Higher Secondary Education (12th) with <b>81.25%</b> in 
                            <strong> Vidyaa Vikas matric(B) Matric Higher Secondary school</strong>,<br/>
                            <span className={styles.city}>Pudukkottai.</span>
                        </p>
                    </div>
                    <Divider/>
                    <div>
                        <div className={styles.subheader1}>SSLC Education</div>
                        <div className={styles.subheader2}>SFS Matric Higher Secondary school</div>
                        <p className={styles.description}>
                            Completed SSLC (10th) with <b>86.8%</b> in 
                            <strong> SFS Matric Higher Secondary school</strong>,<br/>
                            <span className={styles.city}>Pudukkottai.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;