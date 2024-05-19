import { useEffect } from 'react';
import '../../App.css';
import '../../css/about.css';
import '../../css/gallery.css';

import Image from '../../images/luluimage/tatts/tatt4.jpeg'
import Image1 from '../../images/luluimage/tatts/tatt1.jpeg'
import Image2 from '../../images/luluimage/tatts/tatt2.jpeg'
import Image3 from '../../images/luluimage/tatts/tatt3.jpeg'
import Image4 from '../../images/luluimage/tatts/tatt4.jpeg'
import Image5 from '../../images/luluimage/tatts/tatt5.jpeg'
import Image6 from '../../images/luluimage/tatts/tatt6.jpeg'
import Image7 from '../../images/luluimage/tatts/tatt7.jpeg'
import Image8 from '../../images/luluimage/tatts/tatt8.jpeg'
import Image9 from '../../images/luluimage/tatts/tatt9.jpeg'
import Image10 from '../../images/luluimage/tatts/tatt10.jpeg'
import Image11 from '../../images/luluimage/tatts/tatt11.jpeg'
import Image12 from '../../images/luluimage/tatts/tatt12.jpeg'
import Image13 from '../../images/luluimage/tatts/tatt13.jpeg'
import Image14 from '../../images/luluimage/tatts/tatt14.jpeg'
import Image15 from '../../images/luluimage/tatts/tatt15.jpeg'

import { motion } from "framer-motion";


function GalleryPhotos() {
const images = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image,Image11,Image12,Image13,Image14,Image15]
   
  return (

<div className="flex col center marginBottomPage">
<div className="grid">
{images.map((e)=>{
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
