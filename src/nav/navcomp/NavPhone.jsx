import { NavLink } from 'react-router-dom';
import '../../App.css';
import '../../css/nav.css';

function NavPhone() {
  return (
    <div className="displayOnPhone">
        <div className="openDiv flex col bet h100">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
       <div className="NavPhoneDiv close">
       <NavLink className={'navLinks'} to={'/home'} >home</NavLink>
        <NavLink className={'navLinks'} to={'/about'}>about</NavLink>
        <NavLink className={'navLinks'}to={'/gallery'}>gallery</NavLink>
        <NavLink className={'navLinks'}to={'/contact'}>contact</NavLink>

       </div>

    </div>
  );
}

export default NavPhone;
