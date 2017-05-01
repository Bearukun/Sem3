import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/App.css';
import {Router, Route, hashHistory} from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to GuldGruppen!</h2>

        </div>
        <p className="App-intro">
          To get started, edit everything, and save to reload. (Test)
        </p>


          {"Using {}: " + this.props.route.someText }
          <br></br>
          {"NOT USING {}: " + this.props.route.iphone}




          {this.props.children}


      </div>
    );
  }
}

export default App;
