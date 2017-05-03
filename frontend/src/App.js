import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/App.css';
import { Link } from 'react-router';
import facade from '../components/Facade';

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
          {facade.getFlights()}


          {"Using {}: " + this.props.route.someText }
          <br></br>
          {"NOT USING {}: " + this.props.route.iphone}

          <ul role="nav">
              <ul><Link to="/ceotest">CeoTest</Link></ul>
              <ul><Link to="/error">Error</Link></ul>
              <ul><Link to="/stest">Stest</Link></ul>
          </ul>





          {this.props.children}


      </div>
    );
  }
}

export default App;
