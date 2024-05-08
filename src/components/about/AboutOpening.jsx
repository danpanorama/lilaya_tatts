import '../../App.css';
import '../../css/about.css';
import Image from '../../images/luluimage/lulu3.jpeg'
import { motion } from "framer-motion";


function AboutOpening() {
  return (

<div className="flex col center marginBottomPage">

 <motion.div 
  transition={{ duration: 0.90, ease: "easeInOut" }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity:0 }}
 
 className="imageDiv_about position_relative">
    <motion.p 
     transition={{ duration: 0.90, ease: "easeInOut",delay:1.2 }}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity:0 }} 
    className="aboutTextHeader">
        LIL AYA TATTOO
    </motion.p>
    <img src={Image} alt="" className="img bwImage" />
    <motion.p 
     transition={{ duration: 0.90, ease: "easeInOut",delay:1 }}
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity:0 }}
     
    className="aboutTextHeader VerticalText textPositionAbout">
        LIL AYA TATTOO
    </motion.p>
 </motion.div>
   
</div>

  );
}

export default AboutOpening;
