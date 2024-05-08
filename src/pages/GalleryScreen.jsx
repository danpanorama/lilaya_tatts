import '../App.css';
import '../css/about.css';


import TransitionAnimation from '../components/transition/TransitionAnimation';
import GalleryOpen from '../components/gallery/GalleryOpen';
import GalleryPhotos from '../components/gallery/GalleryPhotos';


function GalleryScreen() {
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
