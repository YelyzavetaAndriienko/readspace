import React, {useState} from "react"
import axios from "./api/axios";
import { useNavigate } from "react-router-dom";
import './style.css'

function Login({ payload }) {

  const [email, setEmail] = useState();
  const [password,setPassword] = useState(1);

  

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  }

  const handleSubmit  = async (e) => {
    try {
      const response = await axios.post(
        "/user/login",
        {email, password}
      );

      payload.user = response.data.user
      navigate("/", {payload: response.data.user})

    } catch (err) {
      alert("Incorrect credentials");
      console.log(err)
    }
  }

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
                    <input type="email" id="email" className="form_input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="E-mail"/>
                </div>
                <div className="password">
                    <input className="form_input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Пароль"/>
                </div>
            </div>
           <div class="footer">
                <button type="submit" class="login_button">УВІЙТИ</button>
                 </div>
                <div>
                <a href="/registration" class="register_link">Створити обліковий запис</a>
                 </div>
          </div>
        </div>      
      )    
}

export default Login
