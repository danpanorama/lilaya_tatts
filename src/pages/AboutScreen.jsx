import '../App.css';
import '../css/about.css';

// import GalleryHome from '../components/galleryhome/GalleryHome';
// import AboutSec from '../components/home/AboutSec';
// import GallerySec from '../components/home/GallerySec';
// import Opening from '../components/home/Opening';
import TransitionAnimation from '../components/transition/TransitionAnimation';
import AboutOpening from '../components/about/AboutOpening';
import AboutText from '../components/about/AboutText';


function AboutScreen() {
  return (
    <TransitionAnimation>
<div className="container_home marginAuto  ">
    <AboutOpening/>
    <AboutText/>
</div>

     </TransitionAnimation>
  );
}

export default AboutScreen;
