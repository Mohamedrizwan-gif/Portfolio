import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Aos from 'aos';
import 'aos/dist/aos.css';

import styles from './navbar.module.css';

function Navbar() {
    const [state, setState] = React.useState(false);
    const [responsive, setResponsive] = React.useState(false);
    const history = useHistory();

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    const onNav = (route) => {
        setState(false);
        history.push(route);
    }

    React.useEffect(() => {
        Aos.init({duration: 1000});
        const mediaQuery = (x) => {
            if(x.matches) {   
                setResponsive(true);
            }
            else {
                setResponsive(false);
            }
        }
        const x = window.matchMedia("(max-width: 670px)");
        mediaQuery(x);
        x.addEventListener('change',mediaQuery);
    },[]);

    return(
        <div>
            <AppBar className={styles.app_bar}>
                <ToolBar>
                    <code data-aos="slide-right" className={styles.code}>&lt;devmohamed&gt;</code>
                    {responsive ?
                    <Button className={styles.menu} onClick={() => setState(true)}>
                        <MenuIcon className={styles.menu_icon}/>
                    </Button>
                    :
                    <div data-aos="slide-left" className={styles.navigate}>
                        <Button variant="outlined">
                            <a href="#home">Home</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="#about">About</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="#skills">Skills</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="#works">Works</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="#contact">Contact</a>
                        </Button>
                        <Button variant="outlined">
                            <Link to="/myresume">My Resume</Link>
                        </Button>
                    </div>
                    }
                </ToolBar>
            </AppBar>
            <SwipeableDrawer
                className={styles.swipe_navigate}
                anchor={'top'}            
                open={state} 
                onClose={toggleDrawer(false)} 
                onOpen={toggleDrawer(true)}
            >
                <Button onClick={() => onNav('#home')} className={styles.bar_btn}>Home</Button>
                <Button onClick={() => onNav('#about')} className={styles.bar_btn}>About</Button>
                <Button onClick={() => onNav('#skills')} className={styles.bar_btn}>Skills</Button>
                <Button onClick={() => onNav('#works')} className={styles.bar_btn}>Works</Button>
                <Button onClick={() => onNav('#contact')} className={styles.bar_btn}>Contact</Button>
                <Button className={styles.bar_btn}>
                    <Link to="/myresume">My Resume</Link>
                </Button>
            </SwipeableDrawer>
        </div>
    )
}

export default Navbar;