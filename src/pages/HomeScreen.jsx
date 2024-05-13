import { useEffect } from 'react';
import '../App.css';
import GalleryHome from '../components/galleryhome/GalleryHome';
import AboutSec from '../components/home/AboutSec';
import GallerySec from '../components/home/GallerySec';

import Opening from '../components/home/Opening';
import TransitionAnimation from '../components/transition/TransitionAnimation';


function HomeScreen() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <TransitionAnimation>

   
    <div className="container_home marginAuto ">
   <Opening/>
   <div className="spaceSec">

   </div>
   <AboutSec/>
   <GallerySec/>
    </div>
     </TransitionAnimation>
  );
}

export default HomeScreen;
