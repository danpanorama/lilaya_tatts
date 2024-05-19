import '../../App.css';
import '../../css/home.css';
import '../../css/aboutsec.css';
import LuLuVideo from '../../images/luluimage/videos/luluvideo.mp4'
import BigHeader from '../headers/BigHeader';
import Logo from '../logo/Logo';
import Studio from '../../images/luluimage/studiolulu.jpeg'
import { NavLink } from 'react-router-dom';
import React, {useRef, useEffect} from "react"

function AboutSec() {
  const videoRef = useRef(undefined);
  useEffect(() => {
      videoRef.current.defaultMuted = true;
  },[])
  return (
    <div className="aboutSec flex rowToCol bet ">
        <div className="sideA">
        <div className="wordsSideA">
        <p className="smallHeader">
            TATTOS ART GALLERY
            </p>
            <h1 className="headerAboutSec hcolor">
               ART TATTOS GALLERY IN TEL-AVIV
            </h1>
            <p className="textLong">
                lil aya tattoos its a art gallery in tel aviv from 1997 until now, we make tattoos and nails done in the salon nice fineline art involv with pure mide set idea that make any tattoo come great 
                lil aya tattoos its a art gallery in tel aviv from 1997 until now, we make tattoos and nails done in the salon nice fineline art involv with pure mide set idea that make any tattoo come great 

            </p>
            <div className="buttonReadMore">
                <button className='btn readMore'>
                  <NavLink className={'linkAll'} to={'/about'}>
                  Read More</NavLink></button>
            </div>
           <div className="flex  center logoDiv">
           {/* <Logo/> */}
           </div>
           <div className="imageDiv">
            <img src={Studio} alt="" className="img imgStudi" />
           </div>
           <div className="Info flex row acenter evenly paddingTopBottom">
            <p className="phone infoText">+972-534273529</p>
            <p className="instegram infoText">instagram</p>
            <p className="tiktok infoText">TikTok</p>
            <p className="location infoText">location</p>
           </div>
        </div>
        </div>

{/* space between side a and side b  */}


        <div className="sideB ">

        <video ref={videoRef} className='videoLulu'  type="video/mp4" autoPlay muted loop webkit-playsinline playsinline >
        <source className='video' src={LuLuVideo} type="video/mp4" />
      </video>
        </div>


    </div>
  );
}

export default AboutSec;
