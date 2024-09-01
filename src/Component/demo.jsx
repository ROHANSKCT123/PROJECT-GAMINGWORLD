import React,{Component} from "react";
import './login.css'
import axios from 'axios'
class  login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
        };
    }
    handleUsernameChange = (event) => {
        this.setState({ username: event.target.value});
    };
    handleEmailChange = (event) => {
        this.setState({ email: event.target.value});
    };

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
       axios.post('http://127.0.0.1:8080/postSignIn', data)
       
    };
    
    render() { 
        return (

            <div className="box">
            <form onSubmit={this.handleSubmit} >
              <h2>Log in</h2>
              <div className="inputBox">
                <input value={this.state.username} onChange={this.handleUsernameChange}type="text" required />
                <span>Username</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input value={this.state.email} onChange={this.handleEmailChange}type="email" required />
                <span>Email</span>
                <i></i>
              </div>
              <div className="inputBox">
                <input value={this.state.password} onChange={this.handlePasswordChange}type="password" required />
                <span>Password</span>
                <i></i>
              </div>
              <div className="links">
                {/* <a href="#">Forgot Password ?</a>
                <a href="#">Signup</a> */}
                <br />
              </div>
              <button className="submit">Login</button>
            </form>
          </div>
        );
    }
}
 
export default login;