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

          <div className="book_block">
            <img src={require("./images/bookbackgr.png")} alt="bookbackgr" className="bookbackgr"/>
            <div className="bookbackgr_block">
              <h2>{randomBook.title}</h2>
              <div className="bookdescr_block">
                <div className="bookimg_block">
                  <img src={randomBook.image} alt="book" className="bookimg"/>
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
                    <div className="booktxt_descr_scroll">
                    <h3>ОПИС</h3>
                    {randomBook.description}
                    </div>
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