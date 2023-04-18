import React, {useState, useEffect} from "react"
import axios from "./api/axios";
import './Profile.css'

function Profile({ payload }) {

  const [genres, setGenres] = useState([])
  const [user, setUser] = useState([ payload ? payload.user : null])

  async function populateGenres() {
    let route = "/book/allGenres/";
    try{
      axios.get(
          route )
          .then((response) => {
            console.log(response.data.data)
            setGenres(response.data.data)
          })
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(()=>{
    populateGenres()
    setUser(payload.user)
  },[])

  const handleChange = async (object) => {    
    console.log('The checkbox was toggled');
    if (payload && payload.user) {
      if (!user.genres.includes(object._id))
      {
        user.genres.push(object._id); 
      }
      else
      {
        user.genres = user.genres.filter(function(item) {
          return item !== object._id
      })
      }
      setUser(payload.user)

      let genreNames = user.genres.map(genre => genres.find(el => el._id == genre).genre_name)
      console.log(genreNames)
      const response = await axios.post(
        ("/user/addGenres/" + user._id),
        {genres: genreNames}
      );
    }
  };

  return(
    <div className="profile_block">
        <div className="img_block_1">
          <img src={require("./images/bookbackgr.png")} alt="userbackgr" class="userbackgr"/>
          
          <div class="user_block">
            <h4>Контактна інформація</h4>

            {/*User Name*/}
            <div class="userinfo_block">
              <div class="user_name">
                <h5>Ім'я</h5>
                { payload && payload.user ? payload.user.email : ""}
              </div>

              {/*User Email*/}
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

                <div className="booktxt_descr_scroll">
                  {genres && genres.map((object, i) => 
                  <div class="genre">
                      <input type="checkbox" onChange={()=>handleChange(object)} defaultChecked={ user ? user.genres.includes(object._id) : "False"}/>
                      <label class="item">{object.genre_name}</label>
                  </div>)}
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