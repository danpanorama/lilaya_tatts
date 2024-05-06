import '../App.css';
import '../css/about.css';

import GalleryHome from '../components/galleryhome/GalleryHome';
import AboutSec from '../components/home/AboutSec';
import GallerySec from '../components/home/GallerySec';

import Opening from '../components/home/Opening';
import TransitionAnimation from '../components/transition/TransitionAnimation';


function AboutScreen() {
  return (
    <TransitionAnimation>
<div className="flex col center h100vh">
    <h1>about</h1>
</div>

     </TransitionAnimation>
  );
}

export default AboutScreen;
