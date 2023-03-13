import React from "react"
import './Home.css'
import {useNavigate} from "react-router-dom"

function Home() {

    const navigate = useNavigate()

    function recomendBook(event){
        navigate('/randombook')
    }

    return(
            <div className="home">
                  
                  <div className="main_info">
                    <div className="image_main">
                    <div className="info_main">
                     <h1 className="header_main">Fill your house with lots of books and experience</h1>
                     <div className="text_main">Fill your house with lots of books and experience</div>
                     <button onClick={recomendBook} class="button"> ПІДІБРАТИ КНИГУ</button>
                       </div>
                        <img src={require("./images/main.jpg")} alt="main" class="main"/>
                           </div>
                            </div>
                    <div className="generate">
                    <div className="backgr_pic">
                    <ul className="list">
                    <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="main" class="img_generate"/>
                     <div className="list_text">Fill your house with lots of books and experience</div>
                    </li>
                     <li>
                     <img src="https://cdn-icons-png.flaticon.com/512/864/864685.png" alt="main" class="img2_generate"/>
                    <div className="list_text">Fill your house with lots of books and experience</div>
                     </li>
                      <li>
                      <img src="https://cdn-icons-png.flaticon.com/512/176/176318.png" alt="main" class="img_generate"/>
                      <div className="list_text">Fill your house with lots of books and experience</div>
                      </li>
                    </ul>
                       </div>
                         <div className="generate_button">
                         <a href="/randombook" className="generate_link" >ЗГЕНЕРУВАТИ</a>
                         </div>
                    </div>

                  </div>

      )    
}

export default Home