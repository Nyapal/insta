import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: ''
    }
  }
  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
  }
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {email, username, password} = this.state;
    axios
    .post("http://localhost:3001/api/users/signup", {
      email: email,
      username: username,
      password: password
    })
    .then(res => {
      this.props.user(res.data);
      //this.props.active();
      this.setState({
        email: "",
        username: "",
        password: "",
        message: "Sign Up Successful"
      })
    })
    .catch(err => {
      this.setState({
        email: "",
        username: "",
        password: "",
        message: err
      })
    })
  }
  render() {
    return (
      <div className="SignUp">
        <h1> Sign Up </h1>
        <input type="text" value={this.email} onChange={this.handleEmailChange}  placeholder="email" /> <br/>
        <input type="text" value={this.username} onChange={this.handleUsernameChange} placeholder="username" /> <br/>
        <input type="text" value={this.password} onChange={this.handlePasswordChange}  placeholder="password" /> <br/>

        <button onClick={this.handleSubmit}> Sign Up </button> <br/>

        <p>{"Already have an account?"}</p>
        <Link to="/login"> Log In </Link>
      </div>
    );
  }
}

export default SignUp;
