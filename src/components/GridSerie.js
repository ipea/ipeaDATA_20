import React, { Component } from "react";


import "../../node_modules/syncfusion-javascript/Scripts/ej/web/ej.web.all.min"

import {moduleGrid} from "../../script/modulesSync.js"

class GridSerie extends Component {

    constructor() {
        super();
    this.menu = this.menu.bind(this);
        
       
    }
    
   menu(){
              

          
            var data = [
            {Name: 'Hanari Carnes', City: 'Brazil'},
            {Name: 'Split Rail Beer & Ale', City: 'USA'},
            {Name: 'Ricardo Adocicados', City: 'Brazil'}
        ];
        moduleGrid(data);
       
       
    }
      
    render() {

        return(
                <div>
        
                <div id="Grid"></div>
               {this.menu()}
                
                   
                </div>

                );
    }
}
export default GridSerie;