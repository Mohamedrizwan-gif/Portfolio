import { useEffect, useState } from 'react';
import Aos from 'aos';
import { Card, CardMedia, CardContent, CardActions, Button, Paper } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'aos/dist/aos.css';

import Portfolio from '../../../assets/images/works/portfolio.png';
import Casesheet from '../../../assets/images/works/casesheet.png';
import Covidtracker from '../../../assets/images/works/covidtracker.png';
import Meetin from '../../../assets/images/works/meet-in.png'
import Vdgamedb from '../../../assets/images/works/videogamedb.png';
import Json from '../../../assets/json/resume.json';
import styles from './works.module.css';

function Works() {
    const [resume, setResume] = useState(null);

    useEffect(() => {
        Aos.init({duration: 1000});
        setResume(Json);
    }, []);

    return (
        <div>
            <div className={'text-center section-title'}>Works</div>
            <br/><br/><br/>
            <div data-aos="flip-right">
            <Carousel 
                className={styles.carousel} 
                autoPlay={true} 
                showStatus={false} 
                showThumbs={false} 
                showArrows={true}
                showIndicators={false}
            >
                <Card className={styles.card} component={Paper} variant="outlined">
                    {resume?.projects[0].images[0] &&
                    <CardMedia className={styles.media} image={Portfolio}/>
                    }
                    <CardContent>
                        <div className={styles.cardtitle}>{resume?.projects[0].name}</div>
                        <p className={styles.cardcontent}>
                        This portfolio website which you have seen now is build by using React.js and 
                        also used the Aos library to provide animate on scroll in these site. If you want to 
                        contact me, you can contact me through the page located on the bottom of these site.
                        </p>
                    </CardContent>
                    <CardActions className={styles.action_btn}>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[0].src_url} target="blank">Show Src Code</a>
                        </Button>
                    </CardActions>
                </Card>
                <Card className={styles.card} component={Paper} variant="outlined">
                    {resume?.projects[1].images[0] &&
                    <CardMedia className={styles.media} image={Casesheet}/>
                    }
                    <CardContent>
                        <div className={styles.cardtitle}>{resume?.projects[1].name}</div>
                        <p className={styles.cardcontent}>
                        It is casesheet website that used to store the entry details of the patient's.
                        It was build by using the React framework(Material-UI,Redux) in frontend, Expressjs framework in
                        backend thus using the mongodb atlas cloud to store the data by using mongoose package and also implement the 
                        forgot password by using sendgrid
                        </p>
                    </CardContent>
                    <CardActions className={styles.action_btn}>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[1].src_url} target="blank">
                                Show Src Code
                            </a>
                        </Button>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[1].site_url} target="blank">
                                Show Webpage
                            </a>
                        </Button> 
                    </CardActions>
                </Card>
                <Card className={styles.card} component={Paper} variant="outlined">
                    {resume?.projects[2].images[0] &&
                    <CardMedia className={styles.media} image={Covidtracker}/>
                    }
                    <CardContent>
                        <div className={styles.cardtitle}>{resume?.projects[2].name}</div>
                        <p className={styles.cardcontent}>
                        Covid tracker website is build by using angular framework to show the cases of 
                        covid in detail summary and also with mapbox api to show the location on map
                        </p>
                    </CardContent>
                    <CardActions className={styles.action_btn}>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[2].src_url} target="blank">
                                Show Src Code
                            </a>
                        </Button>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[2].site_url} target="blank">
                                Show Webpage
                            </a>
                        </Button> 
                    </CardActions>
                </Card>
                {/* WebRTC App */}
                <Card className={styles.card} component={Paper} variant="outlined">
                    {resume?.projects[3].images[0] &&
                    <CardMedia className={styles.media} image={Meetin}/>
                    }
                    <CardContent>
                        <div className={styles.cardtitle}>{resume?.projects[3].name}</div>
                        <p className={styles.cardcontent}>
                        Meet-in site is a WebRTC application which is free and provides realtime communication
                        via simple API. <a className={styles.peerlink} href="https://peerjs.com/">PeerJS</a> wraps the browser's WebRTC implementation
                        to provide a peer-to-peer connection API which is used in these application and moreover react.js 
                        library gives a flexibility to manage these API and performance to this application with some unit testing. 
                        </p>
                    </CardContent>
                    <CardActions className={styles.action_btn}>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[3].src_url} target="blank">
                                Show Src Code
                            </a>
                        </Button>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[3].site_url} target="blank">
                                Show Webpage
                            </a>
                        </Button> 
                    </CardActions>
                </Card>
                {/* Videogamedb */}
                <Card className={styles.card} component={Paper} variant="outlined">
                    {resume?.projects[4]?.images[0] &&
                    <CardMedia className={styles.media} image={Vdgamedb}/>
                    }
                    <CardContent>
                        <div className={styles.cardtitle}>{resume?.projects[4].name}</div>
                        <p className={styles.cardcontent}>
                            Vdgamedb website is build by using angular framework which gives the 
                            detailed overview of video games information is fetch by using rawg api.
                        </p>
                    </CardContent>
                    <CardActions className={styles.action_btn}>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[4].src_url} target="blank">
                                Show Src Code
                            </a>
                        </Button>
                        <Button className={styles.btn} color="primary" variant="outlined">
                            <a href={resume?.projects[4].site_url} target="blank">
                                Show Webpage
                            </a>
                        </Button> 
                    </CardActions>
                </Card>
                </Carousel>
            </div>
        </div>
    )
}

export default Works;