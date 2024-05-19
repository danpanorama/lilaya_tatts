import { NavLink } from 'react-router-dom';
import '../../App.css';
import '../../css/nav.css';
import { useState } from 'react';
import SocialLinks from '../../components/buttons/SocialLinks';

function NavPhone() {
  const [navActive,setNavActive] = useState(false)

  function openAndCloseNav(){
    setNavActive(!navActive)
  }
  return (
    <div className="displayOnPhone">
        <div onClick={openAndCloseNav} className="openDiv flex col bet h100">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
       <div className={navActive?"openNav ":"NavPhoneDiv close"}>
       <div onClick={openAndCloseNav} className="openDiv flex col bet ">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    <div  onClick={openAndCloseNav} className="flex col center h100">
    <NavLink className={'navLinksPhone cw'} to={'/home'} >home</NavLink>
        <NavLink className={'navLinksPhone cw'} to={'/about'}>about</NavLink>
        <NavLink className={'navLinksPhone cw'}to={'/gallery'}>gallery</NavLink>
        <NavLink className={'navLinksPhone cw'}to={'/contact'}>contact</NavLink>
        <br />
        <SocialLinks/>

    </div>
       </div>

    </div>
  );
}

export default NavPhone;
