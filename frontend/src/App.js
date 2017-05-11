import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import { Link } from 'react-router';
import facade from './components/Facade'
import {observer} from "mobx-react";





@observer
class App extends Component {

    constructor() {
        super();
        // {facade.getFlights()};//fetches data
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to GuldGruppen!</h2>

        </div>
        <p className="App-intro">

        </p>







          <ul role="nav">
              <ul><Link to="/ceotest">CeoTest</Link></ul>
              <ul><Link to="/error">Error</Link></ul>
              <ul><Link to="/stest">Stest</Link></ul>
              <ul><Link to="/landingpage">Landingpage</Link></ul>
          </ul>




          {/*Displays/renders Searchresults below the page */}
          {this.props.children}


      </div>
    );
  }
}

export default App;
