import React from 'react';
import './Navbar.css';

const Navbar = () => {
return (
	<>
	<div class="container">
              <div class="header_wrapper">

                <div class="header_block">
                   <a href="./">
                     <img src={require("./images/logo.png")} alt="logo" class="logo"/>
                   </a>
                </div>
{/*
                <nav class="nav">
                  <a href="./" class="nav_link">ГОЛОВНА</a>
                </nav>
*/}
                <div class="header_block">
                  <div class="header_lng">
                   <a href="/profile">
                    <img src={require("./images/profile.png")} alt="profile" class="profile"/>
                   </a>
                  </div>
                </div>
              </div>
            </div>
	</>
);
};

export default Navbar;
