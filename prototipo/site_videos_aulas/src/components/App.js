/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import { render} from 'react-dom';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
//import Notfound from './Notfound';



class App extends React.Component {

    render() {
        return(
                <div className="catch-of-the-day">
                    <div className="menu">
                    <Header age="500" coll={true} tagline="Gente passou parametro fina"/>
                    </div>
                    <Order />
                    <Inventory />
                </div>

                )
    }
}

export default App;
    
    
    