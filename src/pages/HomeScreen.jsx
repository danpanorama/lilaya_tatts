import '../App.css';
import BorderImage from '../components/home/BorderImage';
import GalleryHome from '../components/galleryhome/GalleryHome';
import HomeHeader from '../components/home/HomeHeader';
import BigHeader from '../components/headers/BigHeader';
import Slogen from '../components/logo/Slogen';


function HomeScreen() {
  return (
    <div className=" flex col end position_relative  ">
      <div className="container_home flex row  marginAuto homeHieght flexEnd ">
        

      <HomeHeader/>
      <BigHeader class={''} header={`AYA`} header2={'TATTOOS'} />

      
<Slogen/>
      </div>

    </div>
  );
}

export default HomeScreen;
