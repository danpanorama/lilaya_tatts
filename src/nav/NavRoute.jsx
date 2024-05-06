import HomeScreen from '../pages/HomeScreen';
import Nav from './Nav';
import { Routes, useLocation, Route, Router } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import AboutScreen from '../pages/AboutScreen';


function NavRoute() {
  const location =useLocation()

  return (
    <div className="navBarRoute ">
      
      <Nav/>
      <AnimatePresence mode="wait">

<Routes location={location} key={location.pathname} >
      <Route path="*" element={<HomeScreen />} exact />
      <Route path="/" element={<HomeScreen />} exact />
 
      <Route path="/about" element={<AboutScreen />} exact />


        {/* <Routes path="/404" element={<Nofuondpage/>} exact/> */}
      </Routes> 
       </AnimatePresence>
    </div>
  );
}

export default NavRoute;
