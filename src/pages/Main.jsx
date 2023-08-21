import React from 'react'
import styles from '../style'

import { Home, Navbar } from '../components';
import Aboutus from './Aboutus';
import Events from './Events';
import Login from './Login';
import Signup from './Signup';

import {

    Route,
    Routes,

} from "react-router-dom";



const Main = () => {




    return (

        < div className="">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/aboutus"} element={<Aboutus />} />
                <Route path={"/events"} element={<Events />} />
               

            </Routes>



        </div>
    )
}

export default Main