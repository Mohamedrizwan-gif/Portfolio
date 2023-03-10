import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Paper } from '@material-ui/core'
import Portfolio from '../../../assets/images/works/portfolio.png';
import Crud from '../../../assets/images/works/crudapp.png';
import Eatheneaum from '../../../assets/images/works/eathenaeum.png';
import Covidtracker from '../../../assets/images/works/covidtracker.png';
import Meetin from '../../../assets/images/works/meet-in.png'
import Vdgamedb from '../../../assets/images/works/videogamedb.png';

import styles from './works.module.css';

function Work({index, name, description, src_url, site_url}) {
    return (
        <Card className={styles.card} component={Paper} variant="outlined">
            {index === 0 && <CardMedia className={styles.media} image={Portfolio}/>}
            {index === 1 && <CardMedia className={styles.media} image={Crud}/>}
            {index === 2 && <CardMedia className={styles.media} image={Eatheneaum}/>}
            {index === 3 && <CardMedia className={styles.media} image={Covidtracker}/>}
            {index === 4 && <CardMedia className={styles.media} image={Meetin}/>}
            {index === 5 && <CardMedia className={styles.media} image={Vdgamedb}/>}
            <CardContent>
                <div className={styles.cardtitle}>{name}</div>
                <p className={styles.cardcontent}>{description}</p>
            </CardContent>
            <CardActions className={styles.action_btn}>
            <Button className={styles.btn} color="primary" variant="outlined">
                <a href={src_url} target="blank">Show Src Code</a>
            </Button>
            {site_url &&
            <Button className={styles.btn} color="primary" variant="outlined">
                <a href={site_url} target="blank">Show Webpage</a>
            </Button>
            } 
            </CardActions>
        </Card>
    )
}

export default Work;