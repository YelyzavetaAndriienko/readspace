import React from "react"
import './RandomBook.css'

function RandomBook() {
    return(
        <div className="randombook">
          <header class="header">
            <div class="container">
              <div class="header_wrapper">

                <div class="header_block">
                  <a href="#" class="navl">ЛОГО</a>
                   {/* додати картинку лого */} 
                </div>

                <nav class="nav">
                  <a href="#" class="nav_link">ГОЛОВНА</a>
                  <a href="#" class="nav_link">КАТЕГОРІЇ</a>
                  <a href="#" class="nav_link">КОНТАКТИ</a>
                  <a href="#" class="nav_link">ПРО НАС</a>
                </nav>

                <div class="header_block">
                  <div class="header_lng">
                    <a href="#" class="navl">МІЙ КАБІНЕТ</a>
                    {/* додати картинку мій кабінет */}
                  </div>
                </div>

              </div>
            </div>
          </header>



        </div>    
      )    
}

export default RandomBook