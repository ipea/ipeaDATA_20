// let's go!

import React from 'react';
import { render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();


render ( <MuiThemeProvider><App/></MuiThemeProvider>, document.querySelector('#main'));
       
       