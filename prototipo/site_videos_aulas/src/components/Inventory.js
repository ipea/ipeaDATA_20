/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { render} from 'react-dom';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

    render() {
        return(
                
                <div>
                <p>Inventario</p>
                <AddFishForm addFishes={this.props.addFishes}/>
                </div>
                )
    }
}

export default Inventory;