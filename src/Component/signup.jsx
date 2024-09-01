import React, { useState } from 'react';
import './signin.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

  const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailidChange = (event) => {
    setEmailid(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

   const handleConfirm_passwordChange = (event) => {
    setConfirm_password(event.target.value);
  };

  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: username,
      emailid: emailid,
      password: password,
      confirm_password: confirm_password,
      phonenumber:phonenumber,
    };
    axios.post('http://localhost:8080/postsignup', data);
    navigate("/");
  };

  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSubmit} action="" className="form-login">
          <ul className="login-nav">
            <li className="login-nav__item active">
              <a href="#">Sign Up</a>
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
          <label htmlFor="login-input-emailid" className="login__label">
            Emailid
          </label>
          <input
            value={emailid}
            onChange={handleEmailidChange}
            id="login-input-emailid"
            className="login__input"
            type="email"
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

        <label htmlFor="login-input-confirm_password" className="login__label">
           Confirm_password
          </label>
          <input
            value={confirm_password}
            onChange={handleConfirm_passwordChange}
            id="login-input-confirm_password"
            className="login__input"
            type="confirm_password"
            required
          />

            <label htmlFor="login-input-phonenumber" className="login__label">
           Phonenumber
          </label>
          <input
            value={phonenumber}
            onChange={handlePhonenumberChange}
            id="login-input-phonenumber"
            className="login__input"
            type="phonenumber"
            required
          />

          <label htmlFor="login-sign-up" className="login__label--checkbox">
            
         
          </label>
          <button className="login__submit" type="submit" >
            Sign Up
          </button>
        </form>
       
      </div>
    </div>
  );
}

export default Signup;
