// let's go!

import React from 'react';
import { render} from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import './css/style.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
//qimport NotFound from './NotFound';

const Root = () => {
    return(
            <BrowserRouter>
                <div>
                <Match exactly pattern="/" component={StorePicker}/>
                <Match  pattern="/store/:storeId" component={App}/>
                
            </div>
            </BrowserRouter>
            )

}



render(<Root/>, document.querySelector('#main'));

       