import { NavLink } from 'react-router-dom';
import '../../App.css';
import '../../css/nav.css';

function NavLinks() {
  return (
    <div className="allLinks rowReverse flex center displayNone">
        <NavLink className={'navLinks'} to={'/home'} >home</NavLink>
        <NavLink className={'navLinks'} to={'/about'}>about</NavLink>
        <NavLink className={'navLinks'}to={'/gallery'}>gallery</NavLink>
        <NavLink className={'navLinks'}to={'/contact'}>contact</NavLink>


    </div>
  );
}

export default NavLinks;
