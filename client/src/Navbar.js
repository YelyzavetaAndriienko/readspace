import React from 'react';
import {useNavigate} from "react-router-dom"

import './Navbar.css';

const Navbar = ({ payload }) => {

  const navigate = useNavigate()

  const handleSubmit  = async (e) => {
    console.log(payload)
    if (payload && payload.user) {
        navigate("/profile")
    }
    else{
      navigate("/login")
    }
  }
  
return (
	<>
	<div class="container">
              <div class="header_wrapper">

                <div class="header_block">
                   <a href="./">
                     <img src={require("./images/logo.png")} alt="logo" class="logo"/>
                   </a>
                </div>
{
                <nav class="nav">
                  <a href="./booklist" class="nav_link">МОЇ КНИГИ</a>
                </nav>
}
                <div class="header_block">
                  <div class="header_lng">
                   <a onClick={()=>handleSubmit() }>
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
