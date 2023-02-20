import React from "react"
import './style.css'

function Login() {
    return(
        <div className="login">
          <div className="image">
            <img src="https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="book"/>
          </div>
          <div className="form"> 
            <div className="form-body">
            <h1>Вхід </h1>
            <div className="login_p">
              <p>Авторизуйтесь для можливість отримувати  рекомендації книг відповідно до Ваших уподобань!</p>
            </div>
                <div className="email">
                    <input type="email" id="email" className="form_input" placeholder="E-mail"/>
                </div>
                <div className="password">
                    <input className="form_input" type="password"  id="password" placeholder="Пароль"/>
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="login_button">УВІЙТИ</button>
                <a href="/registration" class="register_link">Створити обліковий запис</a>
            </div>
          </div>
        </div>      
      )    
}

export default Login