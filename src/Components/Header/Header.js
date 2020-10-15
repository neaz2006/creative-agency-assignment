import React from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import  './Header.css'
import HeaderIntro from './HeaderIntro/HeaderIntro';



const Header = () => {
    return (
        <main className="top">
            <NavigationBar></NavigationBar>
            <HeaderIntro></HeaderIntro>
        </main>
    );
};

export default Header;