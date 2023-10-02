import { NavLink } from 'react-router-dom';
import '../../App.css';
import '../../css/logo.css';
import LogoImage from '../../images/logosmallsvg.svg'

function Logo() {
  return (
    <div className="logo">
      <img src={LogoImage} className='img logoImage' alt="" />

    </div>
  );
}

export default Logo;
