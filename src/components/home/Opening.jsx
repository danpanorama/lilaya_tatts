import '../../App.css';
import '../../css/home.css';

import BorderImage from './BorderImage';
import GalleryHome from '../galleryhome/GalleryHome';
import HomeHeader from './HomeHeader';
import BigHeader from '../headers/BigHeader';
import Slogen from '../logo/Slogen';
import Lulu1 from '../../images/luluimage/lulu1.jpeg'

function Opening() {
  return (
    <div className="flex col end position_relative  h84  ">
    <div className=" flex col    homeColor homeHieght flexEnd ">
        

        {/* <HomeHeader/> */}
        {/* <GalleryHome/> */}
        <div className='flex col center w100 div_image_front'>
        <div className="imageFront  position_relative">
          <p className="textSide">LuLu Tattos</p>
          <img src={Lulu1}alt="" className='img' />
          <p className="VerticalText sideText">LuLu Tattos</p>
        </div>
        </div>
    <div className="flex  rowToCol bet aend w100 headersOpening">
    <BigHeader class={'bigHeaderLogo'} header={`AYA`} header2={'TATTOOS'} />
  
        
  <Slogen/>
    </div>
        </div>
  

    </div>
  );
}

export default Opening;
