import React from 'react'
import styles from './style'


import {
  Home, Navbar
} from './components'
import { Aboutus, Events, Login, Signup, Dashboard} from './pages';

import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Main from './pages/main';

const App = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/signup"];

  const shouldShowNavbar = () => {
    return !hideNavbarRoutes.includes(location.pathname);
  };

  return (
    <div className="">
      {shouldShowNavbar() && (
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      )}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/aboutus"} element={<Aboutus />} />
        <Route path={"/events"} element={<Events />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
    
      </Routes>
    </div>
  )
}

export default App
