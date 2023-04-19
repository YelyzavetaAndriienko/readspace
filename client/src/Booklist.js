import React, {useState, useEffect} from "react"
import axios from "./api/axios";
import './RandomBook.css'

function RandomBook(payload) {

  const [books, setBooks] = useState([])

  async function fetchRandomBook() {
    try{
      console.log(payload.payload.user._id)
      await axios.get(
          "/user/getBooks/" +  payload.payload.user._id)
          .then((response) => {
            setBooks(response.data.books)
            console.log(response.data.books)
          })
    } catch (er) {
      console.log(er)
    }
  }

  async function onDelete(book) {
    try{
      console.log(book._id);
          let booksClean = books.filter(function(item) {
              return item._id !== book._id
          });
          setBooks(booksClean);
          let delete_book_id = book._id;
      await axios.post(
          ("/user/deleteBook/" +  payload.payload.user._id),
          {delete_book_id});
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(()=>{
    fetchRandomBook()
  },[])

  return(
    <div className="booktlist_scroll">
    <div className="randombook">

      {books && books.map(randomBook => 
      <div class="book_block_main">
      <div class="book_block_list">
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

      <div class="footer_button">
       {/* <button class="next_button">НАСТУПНА</button>
        <button class="save_button">ЗБЕРЕГТИ</button> */}
        <button class="delete_button" onClick={() => onDelete(randomBook)}>x</button>
      </div>
      </div>
      )}
      </div>   
      
    </div>    
  )    
}

export default RandomBook
