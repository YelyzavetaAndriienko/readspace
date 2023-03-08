import React, {useState} from "react"
import axios from "./api/axios";
import './style.css'

function Registration() {

  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password,setPassword] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  }

  const handleSubmit  = async (e) => {
    console.log(firstName, email, password);
    try {
      const response = await axios.post(
        "/user/",
        {email, password}
      );

      setFirstName("");
      setEmail("");
      setPassword("");

    } catch (err) {
      console.log(err)
    }
}

    return(
        <div className="register">
          <div className="image">
            <img src="https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="book"/>
          </div>
          <div className="form"> 
            <div className="form-body">
            <h1>Реєстрація </h1>
                <div className="username">
                    <input className="form_input" type="text" id="firstName" value={firstName} onChange = {(e) => handleInputChange(e)} placeholder="Ім'я"/>
                </div>
                <div className="email">
                    <input type="email" id="email" className="form_input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="E-mail"/>
                </div>
                <div className="password">
                    <input className="form_input" type="password" id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Пароль"/>
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="register_button" onClick={()=>handleSubmit() }>ЗАРЕЄСТРУВАТИ</button>
            </div>
            <div>
                <a href="/login" class="login_link">Увійти в обліковий запис</a>
            </div>
          </div>
        </div>      
      )     
}

export default Registration