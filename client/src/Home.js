import React from "react"
import './Home.css'

function Home() {
    return(
            <div className="home">
                  <header class="header">
                    <div class="container">
                      <div class="header_wrapper">

                        <div class="header_block">
                           <img src={require("./images/logo.png")} alt="logo" class="logo"/>
                        </div>

                        <nav class="nav">
                          <a href="#" class="nav_link">ГОЛОВНА</a>
                          <a href="#" class="nav_link">КАТЕГОРІЇ</a>
                          <a href="#" class="nav_link">КОНТАКТИ</a>
                          <a href="#" class="nav_link">ПРО НАС</a>
                        </nav>

                        <div class="header_block">
                          <div class="header_lng">
                           <img src={require("./images/profile.png")} alt="profile" class="profile"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                  <div className="main_info">
                    <div className="image_main">
                    <div className="info_main">
                     <h1 className="header_main">Fill your house with lots of books and experience</h1>
                     <div className="text_main">Fill your house with lots of books and experience</div>
                     <button class="button">ПІДІБРАТИ КНИГУ</button>
                       </div>
                        <img src={require("./images/main.jpg")} alt="main" class="main"/>
                           </div>
                            </div>
                    <div className="generate">
                    <div className="backgr_pic">
                    <ul className="list">
                    <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="main" class="img_generate"/>
                     <div className="list_text">Fill your house with lots of books and experience</div>
                    </li>
                     <li>
                     <img src="https://cdn-icons-png.flaticon.com/512/864/864685.png" alt="main" class="img2_generate"/>
                    <div className="list_text">Fill your house with lots of books and experience</div>
                     </li>
                      <li>
                      <img src="https://cdn-icons-png.flaticon.com/512/176/176318.png" alt="main" class="img_generate"/>
                      <div className="list_text">Fill your house with lots of books and experience</div>
                      </li>
                    </ul>
                       </div>
                         <div>
                         <button className="generate_button">ЗГЕНЕРУВАТИ</button>
                         </div>
                    </div>

                  </div>

      )    
}

export default Home