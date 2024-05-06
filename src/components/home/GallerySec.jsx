import '../../App.css';
import '../../css/home.css';
import '../../css/galleryhome.css';

import Logo from '../logo/Logo';
import ArtText from '../../images/Arttext_black.png';
import GalleryHome from '../galleryhome/GalleryHome';


function GallerySec() {
  return (
    <div className="gallerySec flex col center w100 ">
        <Logo/>
 
<GalleryHome/>
    

    </div>
  );
}

export default GallerySec;
