import HomeScreen from '../pages/HomeScreen';
import Nav from './Nav';
import { Routes, useLocation, Route, Router } from "react-router-dom";


function NavRoute() {
  const location =useLocation()

  return (
    <div className="navBarRoute">
      <Nav/>
<Routes location={location} key={location.pathname} >
      <Route path="*" element={<HomeScreen />} exact />
      <Route path="/" element={<HomeScreen />} exact />
 


        {/* <Routes path="/404" element={<Nofuondpage/>} exact/> */}
      </Routes>  
    </div>
  );
}

export default NavRoute;
