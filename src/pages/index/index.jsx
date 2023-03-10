import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Navbar from '../../components/index-layout/navbar/navbar';
import Home from '../../components/index-layout/home/home';
import About from '../../components/index-layout/about/about';
import Contact from '../../components/index-layout/contact/contact';
import Skills from '../../components/index-layout/skills/skills';
import Works from '../../components/index-layout/works/works';
import './index.css';

function Index() {
  useEffect(() => {
    Aos.init({});
  }, []); 

  return(
    <div>
      <header className="header">
        <Navbar/>
      </header>
      <main>
        <br/><br/><br/><br/>
        <section id="home">
          <Home/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="skills">
          <Skills/>
        </section>
        <section id="works">
          <Works/>
        </section>
      </main>
      <footer id="contact">
        <div className={'text-center section-title'}>Contact</div>
        <br/><br/><br/>
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-easing="ease-in-sine">
          <Contact/>
        </div>
        <br/>
      </footer>
    </div>
  )
}

export default Index;