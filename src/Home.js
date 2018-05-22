import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>{"This is the home page."}</p>
        <Link to="/signup"> Sign Up </Link>
        <Link to="/login"> Log In </Link>

      </div>
    );
  }
}

export default Home;
