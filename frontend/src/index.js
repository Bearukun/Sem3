import React from 'react';
import {render} from 'react-dom';
import App from './App';
import Ceotest from './Ceotest'
import Stest from './Stest';
import Error from './Error'
import Landingpage from './Landingpage'
import Searchresults from './Searchresults'
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'




render((


    <Router history={hashHistory}>
        <Route path="/" component={Landingpage}>
            <IndexRoute component={Searchresults} />
            {/*<Route path="/searchresults" component={Searchresults}/>*/}
            <Route path="/searchresults" component={Searchresults} flightType="Return"/>
            <Route path="*" component={Error}/>
        </Route>
        <Route path="*" component={Error}/>

    </Router>




), document.getElementById('root'));