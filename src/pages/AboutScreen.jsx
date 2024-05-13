import '../App.css';
import '../css/about.css';

// import GalleryHome from '../components/galleryhome/GalleryHome';
// import AboutSec from '../components/home/AboutSec';
// import GallerySec from '../components/home/GallerySec';
// import Opening from '../components/home/Opening';
import TransitionAnimation from '../components/transition/TransitionAnimation';
import AboutOpening from '../components/about/AboutOpening';
import AboutText from '../components/about/AboutText';
import { useEffect } from 'react';
import AboutSec from '../components/about/AboutSec';


function AboutScreen() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <TransitionAnimation>
<div className="container_home marginAuto  ">
    <AboutOpening/>
    <AboutText/>
    <AboutSec/>
</div>

     </TransitionAnimation>
  );
}

export default AboutScreen;
