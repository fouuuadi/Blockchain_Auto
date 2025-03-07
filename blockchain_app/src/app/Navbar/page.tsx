import React from 'react';
import './navbar.css';
// import Image from 'next/image';
import Wallet from '../wallet/page';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="leftSection">        
        {/* <Image   
        src="/img/LogoApp.webp"
        alt="Logo"
        width={50}
        height={100}
        /> */}  
        <h2>Logo</h2>
      </div>
      <div className="middleSection">
        <h1>Blockchain - Hetic</h1>
      </div>
      <div className="rightSection">
        <Wallet></Wallet>
      </div>
    </nav>
  );
};

export default Navbar;