import React, {useState, useEffect} from "react"
/*import axios from "./api/axios";*/
import './Profile.css'

function Profile() {

  return(
    <div className="profile_block">
        <div className="img_block">
       <img src={require("./images/bookbackgr.png")} alt="userbackgr" class="userbackgr"/>
        
       <div class="user_block">
          <h4>Контактна інформація</h4>

          <div class="userinfo_block">
          <div class="user_name">
            <h5>Ім'я</h5>
            name
            { /*randomBook.full_authors.map(i => i.author_name )*/}
          </div>
          <div class="user_email">
            <h5>Електронна адреса</h5>
            email
            { /*randomBook.full_genres.map(i => i.genre_name + " " )*/}
          </div>
          </div>
          </div>
        
        </div>
    </div>    
  )    
}

export default Profile