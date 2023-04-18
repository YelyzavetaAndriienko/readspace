import React from "react"
import './Profile.css'

function Profile({ payload }) {

  return(
    <div className="profile_block">
        <div className="img_block_1">
       <img src={require("./images/bookbackgr.png")} alt="userbackgr" class="userbackgr"/>
        
       <div class="user_block">
          <h4>Контактна інформація</h4>

          <div class="userinfo_block">
          <div class="user_name">
            <h5>Ім'я</h5>
            { payload && payload.user ? payload.user.email : ""}
          </div>
          <div class="user_email">
            <h5>Електронна адреса</h5>
            { payload && payload.user ? payload.user.email : "" }

          </div>
          </div>
          </div>
        </div>
         <div className="img_block_2">
               <img src={require("./images/bookbackgr.png")} alt="userbackgr" class="userbackgr"/>

               <div class="genres_block">
                  <h4>Жанри</h4>
                  <div class="genres_info_block">
                  <div class="genres">

                 <div class="genre">
              <input type="checkbox"/>
                <label class="item">Genre1</label>
                </div>
                 <div class="genre">
                 <input type="checkbox"/>
                 <label class="item">Genre2</label>
                  </div>

                     </div>
                  </div>
                    <a href="/" class="button_logout">Вийти</a>

                  </div>

                  </div>

    </div>    
  )    
}

export default Profile