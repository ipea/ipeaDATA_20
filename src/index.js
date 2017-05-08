import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import App from './components/App';
import Metadados from './components/Metadados';
import Equipe from './components/Equipe';
import './css/index.css';



class Root extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path="/"  component={App} />
          <Route path="/:id" component={App} />       
          </div>
      </Router>
    )
  }
}




ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
