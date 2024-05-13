import "../../App.css";
import "../../css/about.css";
import Image from "../../images/luluimage/lulu3.jpeg";
import Image2 from "../../images/luluimage/lulu6.jpeg";
import Image3 from "../../images/luluimage/studiolulu.jpeg";
import { motion } from "framer-motion";

function AboutText() {
  return (
    <div className="">
      <motion.h1
        transition={{ duration: 0.9, ease: "easeInOut", delay: 1.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 ,transition: { ease: 'easeIn', duration: 0.9 }}}
        className="aboutHeaderPage cg"
      >
        LIL AYA TATTOO
      </motion.h1>
      <motion.p
        transition={{ duration: 0.9, ease: "easeInOut", delay: 1.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 ,transition: { ease: 'easeIn', duration: 0.9 }}}
        className="aboutTextHeader cr"
      >
        TEL AVIV
      </motion.p>

      <div className="flex rowToCol bet">
        <div className="flex col bet  w50">
          <motion.p
            transition={{ duration: 0.9, ease: "easeInOut", delay: 2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 ,transition: { ease: 'easeIn', duration: 0.9 }}}
            className="textLong "
          >
            lil aya tattoos its a art gallery in tel aviv from 1997 until now,
            we make tattoos and nails done in the salon nice fineline art involv
            with pure mide set idea that make any tattoo come great lil aya
            tattoos its a art gallery in tel aviv from 1997 until now, we make
            tattoos and nails done in the salon nice fineline art involv with
            pure mide set idea that make any tattoo come great
          </motion.p>
          <motion.div
            transition={{ duration: 0.9, ease: "easeInOut", delay: 2.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 ,transition: { ease: 'easeIn', duration: 0.9 }}}
            className="About_Image_Page_studio bwImage w50 "
          >
            <img src={Image3} alt="" className="img " />
          </motion.div>
        </div>
        <motion.div
          transition={{ duration: 0.9, ease: "easeInOut", delay: 2.3 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 ,transition: { ease: 'easeIn', duration: 0.9 }}}
          className="About_Image_Page w50"
        >
          <img src={Image2} alt="" className="img " />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutText;
