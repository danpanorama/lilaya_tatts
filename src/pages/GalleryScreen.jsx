import '../App.css';
import '../css/about.css';


import TransitionAnimation from '../components/transition/TransitionAnimation';
import GalleryOpen from '../components/gallery/GalleryOpen';
import GalleryPhotos from '../components/gallery/GalleryPhotos';
import { useEffect } from 'react';


function GalleryScreen() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <TransitionAnimation>
<div className="container_home marginAuto  ">
    <GalleryOpen/>
    <GalleryPhotos/>
</div>

     </TransitionAnimation>
  );
}

export default GalleryScreen;
