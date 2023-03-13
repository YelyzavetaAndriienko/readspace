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
          "/book/random_book_without_param/" )
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
                <div className="booktxt_descr_scroll">
                    {randomBook.description}
                    </div>
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