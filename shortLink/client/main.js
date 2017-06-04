import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './../imports/components/App.jsx';
import Login from './../imports/components/Login.jsx';
import Signup from './../imports/components/Signup.jsx';
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>    
  </Router>
)

Meteor.startup(()=>{
  Tracker.autorun(()=>{
    render(routes, document.getElementById('app'));
  })
})