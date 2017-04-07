/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import { render} from 'react-dom';
//import {Clearfix,MenuItem} from 'react-bootstrap';




class StorePicker extends React.Component {

    render() {
        return(
                <form className="store-selector" >
                    <h2>funciona</h2>
                    <input type="text" required placeholder="Loja" />
                    <button type="submit"> Visite nossa loja </button>
                </form>


                )
    }
}

export default StorePicker;