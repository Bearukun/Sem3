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

          {this.props.work}
          {this.props.foo}
          {this.props.route.foo}


          {this.props.children}
          {this.props.route.foo}

      </div>
    );
  }
}

export default App;
