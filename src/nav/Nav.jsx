import '../App.css';
import SocialLinks from '../components/buttons/SocialLinks';
import Logo from '../components/logo/Logo';
import '../css/nav.css';
import NavLinks from './navcomp/NavLinks';

function Nav() {
  return (
    <div className="container  marginAuto flex row bet navbar aCenter">
   
  <div className="flex row aCenter h100">
      <Logo/>
    <SocialLinks/>
  
  </div>
        <NavLinks/>
    
    </div>
  );
}

export default Nav;
