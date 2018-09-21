import React, { Component } from 'react';
import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './style.css';
import {App} from'./app';
import {Route, Switch} from 'react-router';
import {About} from './about';
import {NavBar} from './navbar';

const AppRoutes = ()=>(
  <React.Fragment>
  <NavBar/>
  <Route exact path="/" component={App}/>
  <Route exact path="/about" component={About}/>
  </React.Fragment>
);

render(<BrowserRouter>
  <AppRoutes/></BrowserRouter>, document.getElementById('root'));
