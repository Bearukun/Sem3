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
import {Router, Route, hashHistory} from 'react-router'




render((


    <Router history={hashHistory}>
        <Route path="/" component={App} someText={"YES!!!! IT WORKS!"} iphone="Hell yeah! This is awwwwsome!"
               iphone2={"yep yep!"}>
            <Route path="/ceotest" component={Ceotest}  />
            <Route path="/stest" component={Stest}/>
            <Route path="/landingpage" component={Landingpage}>
            <Route path="/landingpage/searchresults" component={Searchresults}/>
        </Route>
            <Route path="*" component={Error}/>

        </Route>
        <Route path="*" component={Error}/>

    </Router>




), document.getElementById('root'));