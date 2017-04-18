/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import { render} from 'react-dom';
import Header from './Header';
import ListarSeries from './ListarSeries';

//import Inventory from './Inventory';
//import Order from './Order';
import MenuDropdow from './MenuDropdow';

import MenuLateral from './MenuLateral';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {

    render() {
        return(
                <div>
                    <Header/>
                    <MenuDropdow/>
                    <MenuLateral/>
                    <ListarSeries/>
                
                </div>

                );
    }
}

export default App;


    