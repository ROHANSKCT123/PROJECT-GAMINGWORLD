import React, { useState } from 'react';
import './signin.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password,
   
    };
      const response = await axios.post(`http://localhost:8080/login/${username}/${password}`, data).then((response)=>
      {if(response.data===true)
        {
          navigate("/button")
        }
        else{
          alert("Please Enter the correct details")
        }
        
      }
        )

  }


  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSubmit} action="" className="form-login">
          <ul className="login-nav">
            <li className="login-nav__item active">
              <a href="#">Sign In</a>
            </li>
            <li className="login-nav__item">
             
              <Link to={"/signup"}>Sign Up</Link>
            </li>
          </ul>
          <label htmlFor="login-input-username" className="login__label">
            Username
          </label>
          <input
            value={username}
            onChange={handleUsernameChange}
            id="login-input-username"
            className="login__input"
            type="text"
            required
          />

          <label htmlFor="login-input-password" className="login__label">
            Password
          </label>
          <input
          
            value={password}
            onChange={handlePasswordChange}
            id="login-input-password"
            className="login__input"
            type="password"
            required
          />
        

          <label htmlFor="login-sign-up" className="login__label--checkbox">
           

          </label>
         <button className="login__submit" >
            Sign in
          </button>
        </form>
        <a href="#" className="login__forgot">
        
        </a>
      </div>
    </div>
  );
}

export default Signin;
