import { useEffect, useState } from 'react';
import Aos from 'aos';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'aos/dist/aos.css';

import Work from './work';
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
            <Carousel className={styles.carousel} autoPlay={true} showStatus={false} showThumbs={false} showArrows={true} showIndicators={false}>
                {resume?.projects.map((data, index) => {
                    return <Work key={index} index={index} name={data.name} description={data.description} src_url={data.src_url} site_url={data.site_url}/>
                })}
                </Carousel>
            </div>
        </div>
    )
}

export default Works;