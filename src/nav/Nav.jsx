import { NavLink } from 'react-router-dom';
import '../App.css';
import SocialLinks from '../components/buttons/SocialLinks';
import Logo from '../components/logo/Logo';
import '../css/nav.css';
import NavLinks from './navcomp/NavLinks';

function Nav() {
  return (
  <div className="bgcolorf7 nav_position">
      <div className="container   marginAuto flex row bet navbar aCenter">
   
   <div className="flex row aCenter h100">
      <Logo/>
     <SocialLinks class={'marginLeft50'}/>
   
   </div>
         <NavLinks/>
     
     </div>
  </div>
  );
}

export default Nav;
