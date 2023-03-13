import React, {useEffect, useState} from "react"
import './RandomBook.css'
import axios from "./api/axios";

function RandomBook() {
  const [randomBook, setBook] = useState({
    authors: "",
    description: "",
    full_authors: [{author_name: ""}],
    full_genres: [{genre_name: ""}],
    image: "",
    title: ""
  })

  async function fetchRandomBook() {
    try{
      axios.get(
          "http://localhost:3001/book/random_book_without_param/" )
          .then((response) => {
            setBook(response.data.book)
            //console.log(response.data.book)
          })
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(()=>{
    fetchRandomBook()
    //console.log(randomBook.authors)
  },[])

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
              <h2>{randomBook.title}</h2>
              <div class="bookdescr_block">
              <div class="bookimg_block">
                <img src={randomBook.image} alt="book" class="bookimg"/>
              </div>
              <div class="book_txt">
              <div class="booktxt_author">
                <h3>АВТОР</h3>
                { randomBook.full_authors.map(i => i.author_name )}
              </div>
              <div class="booktxt_genre">
                <h3>ЖАНР</h3>
                { randomBook.full_genres.map(i => i.genre_name + " " )}
              </div>
              <div class="booktxt_descr">
                <h3>ОПИС</h3>
                {randomBook.description}
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