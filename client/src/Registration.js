import React from "react"
import './style.css'

function Registration() {
    return(
        <div className="register">
          <div className="image">
            <img src="https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="book"/>
          </div>
          <div className="form"> 
            <div className="form-body">
            <h1>Реєстрація </h1>
                <div className="username">
                    <input className="form_input" type="text" id="firstName" placeholder="Ім'я"/>
                </div>
                <div className="email">
                    <input type="email" id="email" className="form_input" placeholder="E-mail"/>
                </div>
                <div className="password">
                    <input className="form_input" type="password"  id="password" placeholder="Пароль"/>
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="register_button">ЗАРЕЄСТРУВАТИ</button>
                <a href="/login" class="login_link">Увійти в обліковий запис</a>
            </div>
          </div>
        </div>      
      )     
}

export default Registration