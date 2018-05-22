import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
