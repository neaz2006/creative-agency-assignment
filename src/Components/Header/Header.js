import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import  './Header.css'
import HeaderIntro from './HeaderIntro/HeaderIntro';



const Header = () => {
    return (
        <div className="top">
            <NavigationBar></NavigationBar>
            <HeaderIntro></HeaderIntro>
        </div>
    );
};

export default Header;