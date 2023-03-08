import React from "react"
import './RandomBook.css'

function RandomBook() {
    return(
        <div className="randombook">
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

          <div class="book_block">
            <img src={require("./images/bookbackgr.png")} alt="bookbackgr" class="bookbackgr"/>
            <div class="bookbackgr_block">
              <h2>"Маленький принц"</h2>
              <div class="bookdescr_block">
              <div class="bookimg_block">
                <img src="https://cdn.eksmo.ru/v2/ITD000000000840510/COVER/cover1__w820.jpg" alt="book" class="bookimg"/>
              </div>
              <div class="book_txt">
              <div class="booktxt_author">
                <h3>АВТОР</h3>
                Антуан
              </div>
              <div class="booktxt_genre">
                <h3>ЖАНР</h3>
                фантастика
              </div>
              <div class="booktxt_descr">
                <h3>ОПИС</h3>
                Ця книжка — справжній шедевр видатного французького письменника, поета й мислителя, пілота і вченого, конструктора й винахідника, людини-легенди Антуана де Сент-Екзюпері
              </div>
              </div>
              </div>
            </div>
          </div>

          <div class="footer">
            <button class="next_button">НАСТУПНА</button>
            <button class="save_button">ЗБЕРЕГТИ</button>
          </div>
        </div>    
      )    
}

export default RandomBook