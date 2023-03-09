import React, {useState, useEffect} from "react"
import axios from "./api/axios";
import './RandomBook.css'

function RandomBook() {

  const [randomBook, setBook] = useState({
    authors: "",
    description: "",
    full_authors: [{author_name: ""}],
    full_genres: [{genre_name: ""}],
    image: "",
    title: ""
  })
  const [change, setChange] = useState(false);

  async function fetchRandomBook() {
    try{
      axios.get(
          "http://localhost:3001/book/random_book_without_param/" )
          .then((response) => {
            setBook(response.data.book)
          })
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(()=>{
    fetchRandomBook()
    setChange(false);
  },[change])

    return(
        <div className="randombook">
          <header className="header">
            <div className="container">
              <div className="header_wrapper">

                <div className="header_block">
                  <img src={require("./images/logo.png")} alt="logo" className="logo"/>
                </div>

                <nav className="nav">
                  <a href="#" className="nav_link">ГОЛОВНА</a>
                  <a href="#" className="nav_link">КАТЕГОРІЇ</a>
                  <a href="#" className="nav_link">КОНТАКТИ</a>
                  <a href="#" className="nav_link">ПРО НАС</a>
                </nav>

                <div className="header_block">
                  <div className="header_lng">
                    <img src={require("./images/profile.png")} alt="profile" className="profile"/>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="book_block">
            <img src={require("./images/bookbackgr.png")} alt="bookbackgr" className="bookbackgr"/>
            <div className="bookbackgr_block">
              <h2>{randomBook.title}</h2>
              <div className="bookdescr_block">
                <div className="bookimg_block">
                  <img src={randomBook.image} width="200" height="300" alt="book" className="bookimg"/>
                </div>
                <div className="book_txt">
                  <div className="booktxt_author">
                    <h3>АВТОР</h3>
                    {randomBook.full_authors.map(i => i.author_name)}
                  </div>
                  <div className="booktxt_genre">
                    <h3>ЖАНР</h3>
                    {randomBook.full_genres.map(i => i.genre_name + " ")}
                  </div>
                  <div className="booktxt_descr">
                    <h3>ОПИС</h3>
                    {randomBook.description}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <button onClick={()=>window.location.reload(false)} className="recomend_button">ПОРЕКОМЕНДУВАТИ</button>
          </div>
        </div>
      )
}

export default RandomBook