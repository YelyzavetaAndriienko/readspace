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
                     <h1 className="header_main">Зустрічай свою наступну улюблену книгу</h1>
                     <div className="text_main">Вирішуєте, що читати далі? Ви в правильному місці!</div>
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
                     <div className="list_text">
                    Розкажіть нам, які назви чи жанри вам подобалися в минулому, і ми дамо вам напрочуд змістовні рекомендації
                     </div>
                    </li>
                     <li>
                     <img src="https://cdn-icons-png.flaticon.com/512/864/864685.png" alt="main" class="img2_generate"/>
                    <div className="list_text">
                    Що читають твої друзі? Швидше за все, ваші друзі обговорюють свої улюблені книги на Readspace
                    </div>
                     </li>
                      <li>
                      <img src="https://cdn-icons-png.flaticon.com/512/176/176318.png" alt="main" class="img_generate"/>
                      <div className="list_text">
                      Спочатку читайте найкращі книжки, інакше у вас може не бути можливості прочитати їх взагалі
                      </div>
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