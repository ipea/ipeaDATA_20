/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import { render} from 'react-dom';
import {getFunName} from '../helpers';




class StorePicker extends React.Component {
    
    goToStore(event){
        event.preventDefault();
        console.log('mudança de url');
        console.log(this.storeInput);
        
    }
    
    
    

    render() {
        return(
                <form className="store-selector" onSubmit={(e)=>this.goToStore(e)}>
                    <h2>Bem vindo</h2>
                    <input type="text" required placeholder="Loja" defaultValue={getFunName()}
                    ref={(input) => {this.storeInput=input}}/>
                    <button type="submit"> Visite nossa loja </button>
                </form>


                )
    }
}

export default StorePicker;