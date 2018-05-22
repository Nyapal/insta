import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
  }
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;
    axios
    .post("http://localhost:3001/api/users/signup", {
      username: username,
      password: password
    })
    .then(res => {
      this.props.user(res.data);
      //this.props.active();
      this.setState({
        username: "",
        password: ""
      })
    })
    .catch(err => {
      this.setState({
        username: "",
        password: ""
      })
    })
  }
  render() {
    return (
      <div className="LogIn">
        <h1> Instagram </h1>
        <div>
          <h1> Log In </h1>
          <input type="text" value={this.username} onChange={this.handleUsernameChange} placeholder="username" /> <br/>
          <input type="text" value={this.password} onChange={this.handlePasswordChange} placeholder="password" /> <br/>
          <button> Log In </button> <br/>

          <p>{"Don't have an account?"}</p>
          <Link to="/signup"> Sign Up </Link>
        </div>
      </div>
    );
  }
}

export default LogIn;
