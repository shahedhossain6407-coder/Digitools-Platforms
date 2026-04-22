import React from 'react';
import Navber from '../navbar/Navber';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const RootFile = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootFile;