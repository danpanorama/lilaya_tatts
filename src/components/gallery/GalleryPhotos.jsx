import '../../App.css';
import '../../css/about.css';
import Image from '../../images/luluimage/tatts/tatt4.jpeg'
import { motion } from "framer-motion";


function GalleryPhotos() {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const imagesFromFolder = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));
      
  return (

<div className="flex col center marginBottomPage">
<div className="grid">
{imagesFromFolder.map((e)=>{
  return(
    <div className="oneSquareGrid">
      <img src={e} alt="" className="img" />
      
    </div>
  )
})}
</div>
 
   
</div>

  );
}

export default GalleryPhotos;
