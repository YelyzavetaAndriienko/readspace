import React, {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "./api/axios";
import './RandomBook.css'
import {Alert, Button} from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css';

function RandomBook({ payload }) {

  const [randomBook, setBook] = useState({
    authors: "",
    description: "",
    full_authors: [{author_name: ""}],
    full_genres: [{genre_name: ""}],
    image: "",
    title: ""
  });

  const [show, setShow] = useState(false);
  
  const navigate = useNavigate()

  async function fetchRandomBook() {
    console.log((payload && payload.user) ? payload.user : payload)
    let route = (payload && payload.user) ? "/book/randombook/" + payload.user._id : "/book/random_book_without_param/";
    console.log(route)
    try{
      axios.get(
          route )
          .then((response) => {
            setBook(response.data.book)
          })
    } catch (er) {
      console.log(er)
    }
  }

  async function saveBook(){
    try{
      axios.post(
          "/user/addBook/" + payload.user._id, {book_id:randomBook._id} )
          .then((response) => {
            console.log(response.data)
            setShow(true)
            payload.user = response.data.user
          })
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(()=>{
    fetchRandomBook()
  },[])

  return(
    <div className="randombook">
        <>
            <Alert show={show} variant="success" onClose={() => {setShow(false); fetchRandomBook();}} dismissible>
                <Alert.Heading>Книга збережена!</Alert.Heading>
            </Alert>
        </>

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

      {(payload && payload.user) &&
      <div class="footer">
        <button class="next_button" onClick={
          () => fetchRandomBook()
        } >НАСТУПНА</button>
        <button class="save_button" onClick={
          () => saveBook()
        }>ЗБЕРЕГТИ</button>
      </div>
      }

      {(!payload || !payload.user) &&
        <div class="footer">
          <button class="generate_button" onClick={
            () => fetchRandomBook()
          }>ПОРЕКОМЕНДУВАТИ
          </button>
        </div>
      }



    </div>    
  )    
}

export default RandomBook